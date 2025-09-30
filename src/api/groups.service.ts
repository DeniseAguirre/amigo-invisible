import { supabase } from "./supabaseClient";

interface CreateGroupPayload {
  name: string;
  description?: string;
  created_by: string;
}

interface Participant {
  id: string;
  user_id: string;
  group_id: string;
  restrictions?: string[];
}

interface Assignment {
  group_id: string;
  giver_id: string;
  receiver_id: string;
}

interface GroupForUser {
  id: string;
  name: string;
  description?: string;
  created_by: string;
  is_active: boolean;
  created_at: string;
  participant_count: number;
  is_participant: boolean;
}

/**
 * Creates a new group and adds the creator as the first participant
 */
export const createGroup = async (
  payload: CreateGroupPayload
): Promise<string> => {
  const { data: group, error: groupError } = await (supabase as any)
    .from("groups")
    .insert({
      name: payload.name,
      description: payload.description,
      created_by: payload.created_by,
      is_active: true,
    })
    .select()
    .single();

  if (groupError) {
    throw new Error(`Failed to create group: ${groupError.message}`);
  }

  const { error: participantError } = await (supabase as any)
    .from("participants")
    .insert({
      group_id: group.id,
      user_id: payload.created_by,
    });

  if (participantError) {
    throw new Error(
      `Failed to add creator as participant: ${participantError.message}`
    );
  }

  return group.id;
};

/**
 * Adds a user to a group as a participant
 */
export const joinGroup = async (
  groupId: string,
  userId: string
): Promise<void> => {
  const { error } = await (supabase as any).from("participants").insert({
    group_id: groupId,
    user_id: userId,
  });

  if (error) {
    throw new Error(`Failed to join group: ${error.message}`);
  }
};

/**
 * Confirms a user's participation in a group
 */
export const confirmParticipation = async (
  groupId: string,
  userId: string
): Promise<void> => {
  const { error } = await (supabase as any)
    .from("participants")
    .update({ confirmed_at: new Date().toISOString() })
    .eq("group_id", groupId)
    .eq("user_id", userId);

  if (error) {
    throw new Error(`Failed to confirm participation: ${error.message}`);
  }
};

/**
 * Lists all groups for a specific user
 */
export const listGroupsForUser = async (
  userId: string
): Promise<GroupForUser[]> => {
  const { data, error } = await (supabase as any)
    .from("groups")
    .select(
      `
      id,
      name,
      description,
      created_by,
      is_active,
      created_at,
      participants!inner(user_id)
    `
    )
    .eq("participants.user_id", userId);

  if (error) {
    throw new Error(`Failed to fetch user groups: ${error.message}`);
  }

  return data.map((group: any) => ({
    id: group.id,
    name: group.name,
    description: group.description,
    created_by: group.created_by,
    is_active: group.is_active,
    created_at: group.created_at,
    participant_count: group.participants.length,
    is_participant: true,
  }));
};

/**
 * Shuffles an array using Fisher-Yates algorithm
 */
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Validates if an assignment is valid based on restrictions
 */
const isValidAssignment = (
  giverId: string,
  receiverId: string,
  restrictions: Map<string, string[]>
): boolean => {
  if (giverId === receiverId) return false;

  const giverRestrictions = restrictions.get(giverId) || [];
  return !giverRestrictions.includes(receiverId);
};

/**
 * Generates valid assignments for Secret Santa draw
 */
const generateAssignments = (
  participants: Participant[],
  restrictions: Map<string, string[]>,
  maxAttempts: number = 1000
): Assignment[] => {
  const participantIds = participants.map((p) => p.user_id);

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const shuffledReceivers = shuffleArray(participantIds);
    const assignments: Assignment[] = [];
    let isValidDraw = true;

    for (let i = 0; i < participantIds.length; i++) {
      const giverId = participantIds[i];
      const receiverId = shuffledReceivers[i];

      if (!isValidAssignment(giverId, receiverId, restrictions)) {
        isValidDraw = false;
        break;
      }

      assignments.push({
        group_id: participants[0].group_id,
        giver_id: giverId,
        receiver_id: receiverId,
      });
    }

    if (isValidDraw) {
      return assignments;
    }
  }

  throw new Error(
    "Unable to generate valid assignments after maximum attempts. Please review restrictions."
  );
};

/**
 * Performs the Secret Santa draw for a group
 */
export const performDraw = async (groupId: string): Promise<void> => {
  // Get confirmed participants with restrictions
  const { data: participants, error: participantsError } = await (
    supabase as any
  )
    .from("participants")
    .select("id, user_id, group_id, restrictions")
    .eq("group_id", groupId)
    .not("confirmed_at", "is", null);

  if (participantsError) {
    throw new Error(
      `Failed to fetch participants: ${participantsError.message}`
    );
  }

  if (!participants || participants.length < 2) {
    throw new Error(
      "At least 2 confirmed participants are required for the draw"
    );
  }

  // Parse restrictions from JSONB to Map
  const restrictionsMap = new Map<string, string[]>();
  participants.forEach((participant: Participant) => {
    if (participant.restrictions && Array.isArray(participant.restrictions)) {
      restrictionsMap.set(participant.user_id, participant.restrictions);
    } else {
      restrictionsMap.set(participant.user_id, []);
    }
  });

  // Check if existing assignments exist
  const { data: existingAssignments } = await (supabase as any)
    .from("assignments")
    .select("id")
    .eq("group_id", groupId)
    .limit(1);

  if (existingAssignments && existingAssignments.length > 0) {
    throw new Error("Draw has already been performed for this group");
  }

  // Generate assignments
  const assignments = generateAssignments(participants, restrictionsMap);

  // Insert all assignments in a single operation
  const { error: insertError } = await (supabase as any)
    .from("assignments")
    .insert(assignments);

  if (insertError) {
    throw new Error(`Failed to save assignments: ${insertError.message}`);
  }
};
