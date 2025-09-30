import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, typography, spacing, shadows } from "../../../theme";
import { icons, type IconName } from "../../../utils";

/**
 * Header component props
 */
export interface HeaderProps {
  /** Header title */
  title: string;
  /** Whether to show back button */
  showBackButton?: boolean;
  /** Back button press handler */
  onBackPress?: () => void;
  /** Right side icon */
  rightIcon?: IconName;
  /** Right icon press handler */
  onRightIconPress?: () => void;
  /** Custom background color */
  backgroundColor?: string;
  /** Whether header should have shadow */
  showShadow?: boolean;
  /** Custom test ID for testing */
  testID?: string;
}

/**
 * Reusable Header component with back button and actions
 * Automatically handles safe area and platform differences
 */
export const Header: React.FC<HeaderProps> = React.memo(
  ({
    title,
    showBackButton = false,
    onBackPress,
    rightIcon,
    onRightIconPress,
    backgroundColor = colors.SURFACE,
    showShadow = true,
    testID,
  }) => {
    const insets = useSafeAreaInsets();

    // Icons
    const BackIcon = icons.back;
    const RightIcon = rightIcon ? icons[rightIcon] : null;

    // Get header container styles
    const getHeaderStyles = () => ({
      backgroundColor,
      paddingTop: insets.top,
      paddingHorizontal: spacing[4], // 16px
      paddingBottom: spacing[3], // 12px
      ...(showShadow && shadows.sm),
    });

    // Get content container styles
    const getContentStyles = () => ({
      flexDirection: "row" as const,
      alignItems: "center" as const,
      justifyContent: "space-between" as const,
      minHeight: 56, // Standard header height
    });

    // Get left section styles
    const getLeftSectionStyles = () => ({
      flexDirection: "row" as const,
      alignItems: "center" as const,
      flex: 1,
    });

    // Get title styles
    const getTitleStyles = () => {
      const textAlign = showBackButton
        ? ("left" as const)
        : ("center" as const);

      return {
        ...typography.titleMedium,
        color: colors.TEXT_PRIMARY,
        flex: 1,
        textAlign,
        marginLeft: showBackButton ? spacing[3] : 0, // 12px
      };
    };

    // Get icon button styles
    const getIconButtonStyles = () => ({
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center" as const,
      justifyContent: "center" as const,
    });

    // Get right section styles
    const getRightSectionStyles = () => ({
      width: 40, // Reserve space for consistency
      alignItems: "flex-end" as const,
    });

    return (
      <>
        {/* Status Bar */}
        <StatusBar
          barStyle="dark-content"
          backgroundColor={backgroundColor}
          translucent={Platform.OS === "android"}
        />

        {/* Header Container */}
        <View style={getHeaderStyles()} testID={testID}>
          <View style={getContentStyles()}>
            {/* Left Section */}
            <View style={getLeftSectionStyles()}>
              {/* Back Button */}
              {showBackButton && (
                <TouchableOpacity
                  style={getIconButtonStyles()}
                  onPress={onBackPress}
                  activeOpacity={0.7}
                  testID={`${testID}-back-button`}
                >
                  <BackIcon size={24} color={colors.TEXT_PRIMARY} />
                </TouchableOpacity>
              )}

              {/* Title */}
              <Text
                style={getTitleStyles()}
                numberOfLines={1}
                ellipsizeMode="tail"
                testID={`${testID}-title`}
              >
                {title}
              </Text>
            </View>

            {/* Right Section */}
            <View style={getRightSectionStyles()}>
              {RightIcon && onRightIconPress && (
                <TouchableOpacity
                  style={getIconButtonStyles()}
                  onPress={onRightIconPress}
                  activeOpacity={0.7}
                  testID={`${testID}-right-button`}
                >
                  <RightIcon size={24} color={colors.TEXT_PRIMARY} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </>
    );
  }
);

Header.displayName = "Header";
