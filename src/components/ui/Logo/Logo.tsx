import React from "react";
import { View, Text } from "react-native";
import { colors, typography, spacing } from "../../../theme";
import { Gift } from "lucide-react-native";

/**
 * Logo component props
 */
export interface LogoProps {
  /** Logo size variant */
  size?: "sm" | "md" | "lg";
  /** Whether to show the app name */
  showName?: boolean;
  /** Custom test ID for testing */
  testID?: string;
}

/**
 * Logo component for the Amigo Invisible app
 */
export const Logo: React.FC<LogoProps> = React.memo(
  ({ size = "md", showName = true, testID }) => {
    // Get size configurations
    const getSizeConfig = () => {
      const configs = {
        sm: {
          iconSize: 32,
          containerSize: 64,
          titleStyle: typography.h4,
          subtitleStyle: typography.caption,
        },
        md: {
          iconSize: 48,
          containerSize: 96,
          titleStyle: typography.h2,
          subtitleStyle: typography.body,
        },
        lg: {
          iconSize: 64,
          containerSize: 128,
          titleStyle: typography.h1,
          subtitleStyle: typography.h4,
        },
      };
      return configs[size];
    };

    const config = getSizeConfig();

    // Get container styles
    const getContainerStyles = () => ({
      alignItems: "center" as const,
      justifyContent: "center" as const,
    });

    // Get icon container styles
    const getIconContainerStyles = () => ({
      width: config.containerSize,
      height: config.containerSize,
      borderRadius: config.containerSize / 2,
      backgroundColor: colors.PRIMARY,
      alignItems: "center" as const,
      justifyContent: "center" as const,
      marginBottom: showName ? spacing[4] : 0, // 16px
      // Shadow for iOS and Android
      shadowColor: colors.PRIMARY,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    });

    // Get title styles
    const getTitleStyles = () => ({
      ...config.titleStyle,
      color: colors.TEXT_PRIMARY,
      fontWeight: "bold" as const,
      textAlign: "center" as const,
      marginBottom: spacing[1], // 4px
    });

    // Get subtitle styles
    const getSubtitleStyles = () => ({
      ...config.subtitleStyle,
      color: colors.SECONDARY,
      textAlign: "center" as const,
      fontWeight: "600" as const,
    });

    return (
      <View style={getContainerStyles()} testID={testID}>
        {/* Icon Container */}
        <View
          style={getIconContainerStyles()}
          testID={`${testID}-icon-container`}
        >
          <Gift
            size={config.iconSize}
            color={colors.TEXT_INVERSE}
            testID={`${testID}-icon`}
          />
        </View>

        {/* App Name */}
        {showName && (
          <View testID={`${testID}-text-container`}>
            <Text style={getTitleStyles()} testID={`${testID}-title`}>
              Amigo Invisible
            </Text>
            <Text style={getSubtitleStyles()} testID={`${testID}-subtitle`}>
              🎄 Intercambio Navideño 🎄
            </Text>
          </View>
        )}
      </View>
    );
  }
);

Logo.displayName = "Logo";
