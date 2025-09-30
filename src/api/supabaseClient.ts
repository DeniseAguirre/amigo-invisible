import { createClient, User } from "@supabase/supabase-js";

/**
 * Supabase URL from environment variables
 */
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL as string;

/**
 * Supabase anonymous key from environment variables
 */
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY as string;

/**
 * Supabase client instance
 */
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

/**
 * Type alias for Supabase Auth User
 */
export type SupabaseAuthUser = User;

/**
 * Database interface for type-safe database operations
 */
export interface Database {
  public: {
    Tables: {
      /**
       * Users table schema
       */
      users: {
        Row: {
          id: string;
          email: string;
          name: string;
          avatar_url?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name: string;
          avatar_url?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string;
          avatar_url?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      /**
       * Groups table schema
       */
      groups: {
        Row: {
          id: string;
          name: string;
          description?: string;
          created_by: string;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string;
          created_by: string;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          created_by?: string;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      /**
       * Participants table schema
       */
      participants: {
        Row: {
          id: string;
          group_id: string;
          user_id: string;
          joined_at: string;
        };
        Insert: {
          id?: string;
          group_id: string;
          user_id: string;
          joined_at?: string;
        };
        Update: {
          id?: string;
          group_id?: string;
          user_id?: string;
          joined_at?: string;
        };
      };
      /**
       * Assignments table schema
       */
      assignments: {
        Row: {
          id: string;
          group_id: string;
          giver_id: string;
          receiver_id: string;
          is_revealed: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          group_id: string;
          giver_id: string;
          receiver_id: string;
          is_revealed?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          group_id?: string;
          giver_id?: string;
          receiver_id?: string;
          is_revealed?: boolean;
          created_at?: string;
        };
      };
    };
  };
}
