import { Alert, AlertButton } from "react-native";

/**
 * Alert utilities for consistent user feedback
 * Provides standardized alert dialogs for different scenarios
 */

interface AlertOptions {
  title?: string;
  message: string;
  buttons?: AlertButton[];
  cancelable?: boolean;
}

/**
 * Shows a success alert
 */
export const showSuccess = (
  message: string,
  title: string = "¡Éxito!",
  onPress?: () => void
): void => {
  Alert.alert(title, message, [{ text: "OK", onPress }], { cancelable: true });
};

/**
 * Shows an error alert
 */
export const showError = (
  message: string,
  title: string = "Error",
  onPress?: () => void
): void => {
  Alert.alert(
    title,
    message,
    [{ text: "Cerrar", style: "destructive", onPress }],
    { cancelable: false }
  );
};

/**
 * Shows a warning alert
 */
export const showWarning = (
  message: string,
  title: string = "Advertencia",
  onPress?: () => void
): void => {
  Alert.alert(title, message, [{ text: "Entendido", onPress }], {
    cancelable: true,
  });
};

/**
 * Shows an info alert
 */
export const showInfo = (
  message: string,
  title: string = "Información",
  onPress?: () => void
): void => {
  Alert.alert(title, message, [{ text: "Cerrar", onPress }], {
    cancelable: false,
  });
};

/**
 * Shows a confirmation alert with Yes/No options
 */
export const showConfirmation = (
  message: string,
  onConfirm: () => void,
  onCancel?: () => void,
  title: string = "Confirmar",
  confirmText: string = "Sí",
  cancelText: string = "No"
): void => {
  Alert.alert(
    title,
    message,
    [
      {
        text: cancelText,
        style: "cancel",
        onPress: onCancel,
      },
      {
        text: confirmText,
        style: "default",
        onPress: onConfirm,
      },
    ],
    { cancelable: true }
  );
};

/**
 * Shows a destructive confirmation alert (for delete actions)
 */
export const showDestructiveConfirmation = (
  message: string,
  onConfirm: () => void,
  onCancel?: () => void,
  title: string = "Eliminar",
  confirmText: string = "Eliminar",
  cancelText: string = "Cancelar"
): void => {
  Alert.alert(
    title,
    message,
    [
      {
        text: cancelText,
        style: "cancel",
        onPress: onCancel,
      },
      {
        text: confirmText,
        style: "destructive",
        onPress: onConfirm,
      },
    ],
    { cancelable: true }
  );
};

/**
 * Shows a custom alert with multiple options
 */
export const showCustomAlert = (options: AlertOptions): void => {
  Alert.alert(
    options.title || "Atención",
    options.message,
    options.buttons || [{ text: "OK" }],
    { cancelable: options.cancelable ?? true }
  );
};

/**
 * Shows a loading-style alert (non-dismissible)
 */
export const showLoadingAlert = (
  message: string = "Procesando...",
  title: string = "Cargando"
): void => {
  Alert.alert(
    title,
    message,
    [], // No buttons
    { cancelable: false }
  );
};

/**
 * Shows an alert for network errors
 */
export const showNetworkError = (
  onRetry?: () => void,
  customMessage?: string
): void => {
  const message =
    customMessage ||
    "No se pudo conectar al servidor. Verifica tu conexión a internet.";

  const buttons: AlertButton[] = [{ text: "Cancelar", style: "cancel" }];

  if (onRetry) {
    buttons.push({
      text: "Reintentar",
      onPress: onRetry,
    });
  }

  Alert.alert("Error de Conexión", message, buttons, { cancelable: true });
};

/**
 * Shows an alert for authentication errors
 */
export const showAuthError = (
  onLogin?: () => void,
  customMessage?: string
): void => {
  const message =
    customMessage ||
    "Tu sesión ha expirado. Por favor, inicia sesión nuevamente.";

  const buttons: AlertButton[] = [{ text: "Cancelar", style: "cancel" }];

  if (onLogin) {
    buttons.push({
      text: "Iniciar Sesión",
      onPress: onLogin,
    });
  }

  Alert.alert("Sesión Expirada", message, buttons, { cancelable: true });
};
