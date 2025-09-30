import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, typography, spacing } from "../theme";
import { Button, Header } from "../components/ui";
import { AuthService } from "../services";
import { showSuccess } from "../utils";

interface HomeScreenProps {
  navigation: any;
}

/**
 * Home Screen Component (Temporal para testing)
 */
export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleLogout = async () => {
    const response = await AuthService.signOut();
    if (response.success) {
      showSuccess("Sesión cerrada", "Has cerrado sesión correctamente");
      navigation.replace("Login");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.BACKGROUND }}>
      <Header title="Amigo Invisible" testID="home-header" />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: spacing[6],
        }}
      >
        <Text
          style={{
            ...typography.h1,
            color: colors.TEXT_PRIMARY,
            textAlign: "center",
            marginBottom: spacing[4],
          }}
        >
          ¡Bienvenido! 🎄
        </Text>

        <Text
          style={{
            ...typography.body,
            color: colors.TEXT_SECONDARY,
            textAlign: "center",
            marginBottom: spacing[8],
          }}
        >
          Has iniciado sesión correctamente
        </Text>

        <Button
          label="Cerrar Sesión"
          onPress={handleLogout}
          variant="outline"
          testID="logout-button"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
