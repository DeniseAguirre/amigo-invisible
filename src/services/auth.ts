import { supabase } from "./supabase";
import { LoginFormValues, RegisterFormValues } from "../utils/validations";

/**
 * Authentication service for Amigo Invisible app
 */
export class AuthService {
  /**
   * Sign in with email and password
   */
  static async signIn({ email, password }: LoginFormValues) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      return {
        success: true,
        user: data.user,
        session: data.session,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || "Error al iniciar sesión",
      };
    }
  }

  /**
   * Sign up with email and password
   */
  static async signUp({ email, password, name }: RegisterFormValues) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });

      if (error) {
        throw error;
      }

      // If user was created successfully, create profile
      if (data.user) {
        const { error: profileError } = await supabase.from("profiles").insert({
          id: data.user.id,
          email,
          name,
        });

        if (profileError) {
          console.warn("Error creating profile:", profileError);
        }
      }

      return {
        success: true,
        user: data.user,
        session: data.session,
        needsConfirmation: !data.session,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || "Error al registrarse",
      };
    }
  }

  /**
   * Sign out current user
   */
  static async signOut() {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      }

      return {
        success: true,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || "Error al cerrar sesión",
      };
    }
  }

  /**
   * Get current user session
   */
  static async getSession() {
    try {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        throw error;
      }

      return {
        success: true,
        session: data.session,
        user: data.session?.user || null,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || "Error al obtener sesión",
      };
    }
  }

  /**
   * Get current user
   */
  static async getUser() {
    try {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        throw error;
      }

      return {
        success: true,
        user: data.user,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || "Error al obtener usuario",
      };
    }
  }

  /**
   * Reset password
   */
  static async resetPassword(email: string) {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "your-app://reset-password",
      });

      if (error) {
        throw error;
      }

      return {
        success: true,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || "Error al enviar email de recuperación",
      };
    }
  }

  /**
   * Listen to auth state changes
   */
  static onAuthStateChange(callback: (session: any) => void) {
    return supabase.auth.onAuthStateChange((event, session) => {
      callback(session);
    });
  }
}

/**
 * Auth response types
 */
export interface AuthResponse {
  success: boolean;
  user?: any;
  session?: any;
  error?: string;
  needsConfirmation?: boolean;
}
