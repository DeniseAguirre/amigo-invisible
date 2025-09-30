import { createClient } from "@supabase/supabase-js";

// Supabase configuration
const SUPABASE_URL =
  process.env.EXPO_PUBLIC_SUPABASE_URL || "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY =
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "YOUR_SUPABASE_ANON_KEY";

// Create Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Database types
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          created_at: string;
          email: string;
          name: string;
          avatar_url?: string;
          updated_at?: string;
        };
        Insert: {
          id: string;
          email: string;
          name: string;
          avatar_url?: string;
        };
        Update: {
          email?: string;
          name?: string;
          avatar_url?: string;
          updated_at?: string;
        };
      };
      // Add other tables as needed
    };
  };
}
