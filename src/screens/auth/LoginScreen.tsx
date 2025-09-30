import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { colors, typography, spacing } from "../../theme";
import { Button, Input, Logo, Card } from "../../components/ui";
import { AuthService } from "../../services";
import {
  loginSchema,
  forgotPasswordSchema,
  type LoginFormValues,
  type ForgotPasswordFormValues,
  showError,
  showSuccess,
} from "../../utils";

/**
 * Navigation types
 */
type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "Login"
>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

/**
 * Login Screen Component
 */
export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);

  // Handle login form submission
  const handleLogin = async (values: LoginFormValues) => {
    try {
      setIsLoading(true);

      const response = await AuthService.signIn(values);

      if (response.success) {
        showSuccess("¡Bienvenido!", "Has iniciado sesión correctamente");
        // La navegación se maneja automáticamente por el estado de autenticación
      } else {
        showError(
          "Error de autenticación",
          response.error || "Credenciales incorrectas"
        );
      }
    } catch (error: any) {
      showError("Error", error.message || "Ocurrió un error inesperado");
    } finally {
      setIsLoading(false);
    }
  };

  // Navigate to register screen
  const handleNavigateToRegister = () => {
    navigation.navigate("Register");
  };

  // Handle forgot password
  const handleForgotPassword = async (values: ForgotPasswordFormValues) => {
    try {
      setIsResettingPassword(true);

      const response = await AuthService.resetPassword(values.email);

      if (response.success) {
        showSuccess(
          "Email enviado",
          "Te hemos enviado un email con instrucciones para restablecer tu contraseña"
        );
        setShowForgotPassword(false);
      } else {
        showError(
          "Error",
          response.error || "No se pudo enviar el email de recuperación"
        );
      }
    } catch (error: any) {
      showError("Error", error.message || "Ocurrió un error inesperado");
    } finally {
      setIsResettingPassword(false);
    }
  };

  // Toggle forgot password modal
  const handleToggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  // Get container styles
  const getContainerStyles = () => ({
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  });

  // Get content styles
  const getContentStyles = () => ({
    flexGrow: 1,
    justifyContent: "center" as const,
    paddingHorizontal: spacing[6], // 24px
    paddingVertical: spacing[8], // 32px
  });

  // Get logo container styles
  const getLogoContainerStyles = () => ({
    alignItems: "center" as const,
    marginBottom: spacing[10], // 40px
  });

  // Get form container styles
  const getFormContainerStyles = () => ({
    marginBottom: spacing[6], // 24px
  });

  // Get input spacing styles
  const getInputSpacingStyles = () => ({
    marginBottom: spacing[6], // 24px
  });

  // Get button spacing styles
  const getButtonSpacingStyles = () => ({
    marginBottom: spacing[4], // 16px
  });

  // Get footer styles
  const getFooterStyles = () => ({
    alignItems: "center" as const,
    marginTop: spacing[8], // 32px
  });

  // Get footer text styles
  const getFooterTextStyles = () => ({
    ...typography.body,
    color: colors.TEXT_SECONDARY,
    textAlign: "center" as const,
    marginBottom: spacing[4], // 16px
  });

  return (
    <SafeAreaView style={getContainerStyles()} testID="login-screen">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={getContentStyles()}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo */}
          <View style={getLogoContainerStyles()}>
            <Logo size="lg" testID="login-logo" />
          </View>

          {/* Login Form */}
          <Card elevation="sm" testID="login-form-card">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={handleLogin}
            >
              {({
                handleSubmit,
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
              }) => (
                <View style={getFormContainerStyles()}>
                  {/* Title */}
                  <Text
                    style={{
                      ...typography.h2,
                      color: colors.TEXT_PRIMARY,
                      textAlign: "center",
                      marginBottom: spacing[8], // 32px
                    }}
                    testID="login-title"
                  >
                    Iniciar Sesión
                  </Text>

                  {/* Email Input */}
                  <View style={getInputSpacingStyles()}>
                    <Input
                      name="email"
                      label="Email"
                      placeholder="Ingresa tu email"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoComplete="email"
                      testID="login-email-input"
                    />
                  </View>

                  {/* Password Input */}
                  <View style={getInputSpacingStyles()}>
                    <Input
                      name="password"
                      label="Contraseña"
                      placeholder="Ingresa tu contraseña"
                      secureTextEntry
                      autoComplete="password"
                      testID="login-password-input"
                    />
                  </View>

                  {/* Login Button */}
                  <View style={getButtonSpacingStyles()}>
                    <Button
                      label="Iniciar Sesión"
                      onPress={handleSubmit}
                      loading={isLoading}
                      variant="primary"
                      size="lg"
                      fullWidth
                      testID="login-submit-button"
                    />
                  </View>

                  {/* Forgot Password Button */}
                  <View style={{ alignItems: "center", marginTop: spacing[4] }}>
                    <Button
                      label="¿Olvidaste tu contraseña?"
                      onPress={handleToggleForgotPassword}
                      variant="outline"
                      size="sm"
                      testID="forgot-password-button"
                    />
                  </View>
                </View>
              )}
            </Formik>
          </Card>

          {/* Forgot Password Modal */}
          {showForgotPassword && (
            <Card
              elevation="md"
              style={{ marginTop: spacing[6] }}
              testID="forgot-password-card"
            >
              <Formik
                initialValues={{ email: "" }}
                validationSchema={forgotPasswordSchema}
                onSubmit={handleForgotPassword}
              >
                {({ handleSubmit }) => (
                  <View>
                    {/* Title */}
                    <Text
                      style={{
                        ...typography.h3,
                        color: colors.TEXT_PRIMARY,
                        textAlign: "center",
                        marginBottom: spacing[6], // 24px
                      }}
                      testID="forgot-password-title"
                    >
                      Recuperar Contraseña
                    </Text>

                    {/* Description */}
                    <Text
                      style={{
                        ...typography.body,
                        color: colors.TEXT_SECONDARY,
                        textAlign: "center",
                        marginBottom: spacing[6], // 24px
                        lineHeight: 22,
                      }}
                      testID="forgot-password-description"
                    >
                      Ingresa tu email y te enviaremos instrucciones para
                      restablecer tu contraseña.
                    </Text>

                    {/* Email Input */}
                    <View style={{ marginBottom: spacing[6] }}>
                      <Input
                        name="email"
                        label="Email"
                        placeholder="Ingresa tu email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoComplete="email"
                        testID="forgot-password-email-input"
                      />
                    </View>

                    {/* Buttons */}
                    <View style={{ gap: spacing[3] }}>
                      <Button
                        label="Enviar Instrucciones"
                        onPress={handleSubmit}
                        loading={isResettingPassword}
                        variant="primary"
                        size="md"
                        fullWidth
                        testID="forgot-password-submit-button"
                      />
                      <Button
                        label="Cancelar"
                        onPress={handleToggleForgotPassword}
                        variant="outline"
                        size="md"
                        fullWidth
                        testID="forgot-password-cancel-button"
                      />
                    </View>
                  </View>
                )}
              </Formik>
            </Card>
          )}

          {/* Footer */}
          <View style={getFooterStyles()}>
            <Text style={getFooterTextStyles()}>¿No tienes una cuenta?</Text>
            <Button
              label="Crear cuenta"
              onPress={handleNavigateToRegister}
              variant="outline"
              size="md"
              testID="login-register-button"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
