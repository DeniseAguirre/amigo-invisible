import { useState, useEffect } from "react";
import { Session, AuthChangeEvent } from "@supabase/supabase-js";
import { supabase, SupabaseAuthUser } from "../api/supabaseClient";

interface UseAuthReturn {
  user: SupabaseAuthUser | null;
  loading: boolean;
  signIn: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
}

/**
 * Custom hook for authentication with Supabase
 * Manages user session state and provides auth methods
 */
const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<SupabaseAuthUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  /**
   * Creates or updates user profile in database
   */
  const upsertUserProfile = async (
    authUser: SupabaseAuthUser
  ): Promise<void> => {
    const { error } = await (supabase as any).from("users").upsert({
      id: authUser.id,
      email: authUser.email!,
      name: authUser.user_metadata?.name || authUser.email!.split("@")[0],
      avatar_url: authUser.user_metadata?.avatar_url || null,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      console.error("Error upserting user profile:", error);
      throw error;
    }
  };

  /**
   * Handles session changes and updates user state
   */
  const handleSessionChange = async (
    session: Session | null
  ): Promise<void> => {
    try {
      if (session?.user) {
        await upsertUserProfile(session.user);
        setUser(session.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error handling session change:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Signs in user with magic link
   */
  const signIn = async (email: string): Promise<void> => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: undefined, // Will use default redirect
      },
    });

    if (error) {
      setLoading(false);
      throw error;
    }
  };

  /**
   * Signs out current user
   */
  const signOut = async (): Promise<void> => {
    setLoading(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      await handleSessionChange(session);
    };

    getInitialSession();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      async (event: AuthChangeEvent, session: Session | null) => {
        await handleSessionChange(session);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    user,
    loading,
    signIn,
    signOut,
  };
};

export default useAuth;
