import * as Yup from "yup";

/**
 * Login form validation schema
 */
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Por favor ingresa un email válido")
    .required("El email es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es requerida"),
});

/**
 * Register form validation schema
 */
export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Por favor ingresa un email válido")
    .required("El email es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "La contraseña debe contener al menos una letra minúscula, una mayúscula y un número"
    )
    .required("La contraseña es requerida"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
    .required("Confirmar contraseña es requerido"),
  name: Yup.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder 50 caracteres")
    .required("El nombre es requerido"),
});

/**
 * Forgot password validation schema
 */
export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Por favor ingresa un email válido")
    .required("El email es requerido"),
});

/**
 * Reset password validation schema
 */
export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "La contraseña debe contener al menos una letra minúscula, una mayúscula y un número"
    )
    .required("La contraseña es requerida"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
    .required("Confirmar contraseña es requerido"),
});

/**
 * Type definitions for form values
 */
export interface LoginFormValues {
  email: string;
  password: string;
}

export interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export interface ForgotPasswordFormValues {
  email: string;
}

export interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}
