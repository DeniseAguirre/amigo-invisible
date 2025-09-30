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
import { Button, Input, Logo, Card, Header } from "../../components/ui";
import { AuthService } from "../../services";
import {
  registerSchema,
  type RegisterFormValues,
  showError,
  showSuccess,
  showInfo,
} from "../../utils";

/**
 * Navigation types
 */
type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "Register"
>;

interface RegisterScreenProps {
  navigation: RegisterScreenNavigationProp;
}

/**
 * Register Screen Component
 */
export const RegisterScreen: React.FC<RegisterScreenProps> = ({
  navigation,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  // Handle register form submission
  const handleRegister = async (values: RegisterFormValues) => {
    try {
      setIsLoading(true);

      const response = await AuthService.signUp(values);

      if (response.success) {
        if (response.needsConfirmation) {
          showInfo(
            "Confirma tu email",
            "Te hemos enviado un email de confirmación. Por favor revisa tu bandeja de entrada."
          );
          navigation.navigate("Login");
        } else {
          showSuccess("¡Bienvenido!", "Tu cuenta ha sido creada exitosamente");
          // La navegación se maneja automáticamente por el estado de autenticación
        }
      } else {
        showError(
          "Error de registro",
          response.error || "No se pudo crear la cuenta"
        );
      }
    } catch (error: any) {
      showError("Error", error.message || "Ocurrió un error inesperado");
    } finally {
      setIsLoading(false);
    }
  };

  // Navigate back to login
  const handleNavigateToLogin = () => {
    navigation.navigate("Login");
  };

  // Handle back button
  const handleGoBack = () => {
    navigation.goBack();
  };

  // Get container styles
  const getContainerStyles = () => ({
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  });

  // Get content styles
  const getContentStyles = () => ({
    flexGrow: 1,
    paddingHorizontal: spacing[6], // 24px
    paddingBottom: spacing[8], // 32px
  });

  // Get logo container styles
  const getLogoContainerStyles = () => ({
    alignItems: "center" as const,
    marginVertical: spacing[8], // 32px
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
    marginTop: spacing[6], // 24px
  });

  // Get footer text styles
  const getFooterTextStyles = () => ({
    ...typography.body,
    color: colors.TEXT_SECONDARY,
    textAlign: "center" as const,
    marginBottom: spacing[4], // 16px
  });

  return (
    <SafeAreaView style={getContainerStyles()} testID="register-screen">
      {/* Header */}
      <Header
        title="Crear Cuenta"
        showBackButton
        onBackPress={handleGoBack}
        testID="register-header"
      />

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
            <Logo size="md" testID="register-logo" />
          </View>

          {/* Register Form */}
          <Card elevation="sm" testID="register-form-card">
            <Formik
              initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
                name: "",
              }}
              validationSchema={registerSchema}
              onSubmit={handleRegister}
            >
              {({ handleSubmit }) => (
                <View style={getFormContainerStyles()}>
                  {/* Title */}
                  <Text
                    style={{
                      ...typography.h2,
                      color: colors.TEXT_PRIMARY,
                      textAlign: "center",
                      marginBottom: spacing[8], // 32px
                    }}
                    testID="register-title"
                  >
                    Crear Cuenta
                  </Text>

                  {/* Name Input */}
                  <View style={getInputSpacingStyles()}>
                    <Input
                      name="name"
                      label="Nombre completo"
                      placeholder="Ingresa tu nombre"
                      autoCapitalize="words"
                      autoComplete="name"
                      testID="register-name-input"
                    />
                  </View>

                  {/* Email Input */}
                  <View style={getInputSpacingStyles()}>
                    <Input
                      name="email"
                      label="Email"
                      placeholder="Ingresa tu email"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoComplete="email"
                      testID="register-email-input"
                    />
                  </View>

                  {/* Password Input */}
                  <View style={getInputSpacingStyles()}>
                    <Input
                      name="password"
                      label="Contraseña"
                      placeholder="Crea una contraseña"
                      secureTextEntry
                      autoComplete="new-password"
                      helperText="Mínimo 6 caracteres con mayúscula, minúscula y número"
                      testID="register-password-input"
                    />
                  </View>

                  {/* Confirm Password Input */}
                  <View style={getInputSpacingStyles()}>
                    <Input
                      name="confirmPassword"
                      label="Confirmar contraseña"
                      placeholder="Confirma tu contraseña"
                      secureTextEntry
                      autoComplete="new-password"
                      testID="register-confirm-password-input"
                    />
                  </View>

                  {/* Register Button */}
                  <View style={getButtonSpacingStyles()}>
                    <Button
                      label="Crear Cuenta"
                      onPress={handleSubmit}
                      loading={isLoading}
                      variant="primary"
                      size="lg"
                      fullWidth
                      testID="register-submit-button"
                    />
                  </View>
                </View>
              )}
            </Formik>
          </Card>

          {/* Footer */}
          <View style={getFooterStyles()}>
            <Text style={getFooterTextStyles()}>¿Ya tienes una cuenta?</Text>
            <Button
              label="Iniciar sesión"
              onPress={handleNavigateToLogin}
              variant="outline"
              size="md"
              testID="register-login-button"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
