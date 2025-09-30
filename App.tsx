import React, { useState } from "react";
import { ScrollView, View, Text, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import * as Yup from "yup";
import { colors, typography, spacing } from "./src/theme";
import {
  Button,
  Input,
  Avatar,
  Card,
  Header,
  EmptyState,
} from "./src/components/ui";

// Validation schema for form example
const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido"),
  email: Yup.string().email("Email inválido").required("El email es requerido"),
  password: Yup.string()
    .min(6, "Mínimo 6 caracteres")
    .required("La contraseña es requerida"),
});

export default function App() {
  const [showEmptyState, setShowEmptyState] = useState<
    "none" | "icon" | "emoji"
  >("none");

  const handleFormSubmit = (values: any) => {
    Alert.alert(
      "Formulario Enviado",
      `Datos: ${JSON.stringify(values, null, 2)}`
    );
  };

  const handleHeaderBack = () => {
    Alert.alert("Navegación", "Botón atrás presionado");
  };

  const handleHeaderAction = () => {
    Alert.alert("Acción", "Acción del header ejecutada");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.BACKGROUND }}>
        <StatusBar style="dark" />

        {/* Header Component */}
        <Header
          title="🎄 Componentes UI"
          showBackButton
          onBackPress={handleHeaderBack}
          rightIcon="settings"
          onRightIconPress={handleHeaderAction}
          testID="app-header"
        />

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: spacing[4] }}
        >
          {/* Buttons Section */}
          <Card style={{ marginBottom: spacing[6] }}>
            <Text
              style={[
                typography.h3,
                { color: colors.TEXT_PRIMARY, marginBottom: spacing[4] },
              ]}
            >
              Botones
            </Text>
            <View style={{ gap: spacing[3] }}>
              <Button
                label="Primary Button"
                variant="primary"
                onPress={() =>
                  Alert.alert("Primary", "Botón primary presionado")
                }
              />
              <Button
                label="Secondary Button"
                variant="secondary"
                iconLeft="gift"
                onPress={() =>
                  Alert.alert("Secondary", "Botón secondary presionado")
                }
              />
              <Button
                label="Outline Button"
                variant="outline"
                size="sm"
                onPress={() =>
                  Alert.alert("Outline", "Botón outline presionado")
                }
              />
              <Button
                label="Danger Button"
                variant="danger"
                size="lg"
                onPress={() => Alert.alert("Danger", "Botón danger presionado")}
              />
              <Button
                label="Loading Button"
                variant="primary"
                loading
                onPress={() => {}}
              />
            </View>
          </Card>

          {/* Avatars Section */}
          <Card style={{ marginBottom: spacing[6] }}>
            <Text
              style={[
                typography.h3,
                { color: colors.TEXT_PRIMARY, marginBottom: spacing[4] },
              ]}
            >
              Avatares
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: spacing[4],
                alignItems: "center",
              }}
            >
              <Avatar fallbackText="MG" size="sm" testID="avatar-small" />
              <Avatar
                fallbackText="JP"
                size="md"
                backgroundColor={colors.ACCENT}
                testID="avatar-medium"
              />
              <Avatar
                fallbackText="AL"
                size="lg"
                backgroundColor={colors.SECONDARY}
                textColor={colors.TEXT_INVERSE}
                testID="avatar-large"
              />
            </View>
          </Card>

          {/* Form Section */}
          <Card style={{ marginBottom: spacing[6] }}>
            <Text
              style={[
                typography.h3,
                { color: colors.TEXT_PRIMARY, marginBottom: spacing[4] },
              ]}
            >
              Formulario con Validación
            </Text>
            <Formik
              initialValues={{ name: "", email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
            >
              {({ handleSubmit, isValid }) => (
                <View style={{ gap: spacing[4] }}>
                  <Input
                    name="name"
                    label="Nombre Completo"
                    placeholder="Ingresa tu nombre"
                  />
                  <Input
                    name="email"
                    label="Email"
                    placeholder="tu@email.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                  <Input
                    name="password"
                    label="Contraseña"
                    placeholder="Mínimo 6 caracteres"
                    secureTextEntry
                  />
                  <Button
                    label="Registrarse"
                    variant="primary"
                    onPress={handleSubmit}
                    disabled={!isValid}
                    fullWidth
                  />
                </View>
              )}
            </Formik>
          </Card>

          {/* Empty State Section */}
          <Card style={{ marginBottom: spacing[6] }}>
            <Text
              style={[
                typography.h3,
                { color: colors.TEXT_PRIMARY, marginBottom: spacing[4] },
              ]}
            >
              Estados Vacíos
            </Text>
            <View style={{ flexDirection: "row", gap: spacing[3] }}>
              <Button
                label={showEmptyState !== "none" ? "Ocultar" : "Mostrar"}
                variant="outline"
                size="sm"
                onPress={() =>
                  setShowEmptyState(showEmptyState === "none" ? "icon" : "none")
                }
              />
              <Button
                label="Con Emoji"
                variant="secondary"
                size="sm"
                onPress={() => setShowEmptyState("emoji")}
              />
            </View>
          </Card>

          {/* Conditional Empty State */}
          {showEmptyState === "icon" && (
            <Card style={{ marginBottom: spacing[6] }}>
              <EmptyState
                icon="gift"
                title="No hay regalos"
                description="Aún no has agregado ningún regalo a tu lista. ¡Comienza creando tu primera lista de deseos!"
                actionButton={{
                  label: "Agregar Regalo",
                  variant: "primary",
                  onPress: () =>
                    Alert.alert("Acción", "Agregar regalo presionado"),
                }}
                testID="empty-gifts"
              />
            </Card>
          )}

          {showEmptyState === "emoji" && (
            <Card style={{ marginBottom: spacing[6] }}>
              <EmptyState
                emoji="🎅"
                title="Santa está en camino"
                description="Tu lista está siendo revisada por Santa. ¡Pronto tendrás noticias sobre tu amigo invisible!"
                testID="empty-santa"
              />
            </Card>
          )}

          {/* Design System Preview */}
          <Card>
            <Text
              style={[
                typography.h3,
                { color: colors.TEXT_PRIMARY, marginBottom: spacing[4] },
              ]}
            >
              Design System
            </Text>
            <Text
              style={[
                typography.body,
                { color: colors.TEXT_SECONDARY, marginBottom: spacing[3] },
              ]}
            >
              🎨 Colores navideños: Rojo, Verde, Dorado
            </Text>
            <Text
              style={[
                typography.body,
                { color: colors.TEXT_SECONDARY, marginBottom: spacing[3] },
              ]}
            >
              📝 Tipografía escalable y consistente
            </Text>
            <Text
              style={[
                typography.body,
                { color: colors.TEXT_SECONDARY, marginBottom: spacing[3] },
              ]}
            >
              🔘 Componentes reutilizables con TypeScript
            </Text>
            <Text style={[typography.body, { color: colors.TEXT_SECONDARY }]}>
              ✅ Integración con Formik y validación Yup
            </Text>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
