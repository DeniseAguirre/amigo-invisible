import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthService } from "../services";
import { LoginScreen, RegisterScreen, HomeScreen } from "../screens";

// Define stack param list
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Main App Navigator
 */
export const AppNavigator: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check initial auth state
    checkAuthState();

    // Listen to auth changes
    const {
      data: { subscription },
    } = AuthService.onAuthStateChange((session) => {
      setIsAuthenticated(!!session);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const checkAuthState = async () => {
    const response = await AuthService.getSession();
    setIsAuthenticated(response.success && !!response.session);
  };

  // Show loading state while checking auth
  if (isAuthenticated === null) {
    return null; // You could add a loading spinner here
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
        initialRouteName={isAuthenticated ? "Home" : "Login"}
      >
        {isAuthenticated ? (
          // Authenticated screens
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          // Auth screens
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
