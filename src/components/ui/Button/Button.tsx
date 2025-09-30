import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, View } from "react-native";
import { colors, typography, spacing, radius, shadows } from "../../../theme";
import { icons, type IconName } from "../../../utils";

/**
 * Button variants
 */
export type ButtonVariant = "primary" | "secondary" | "outline" | "danger";

/**
 * Button sizes
 */
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Button component props
 */
export interface ButtonProps {
  /** Button text label */
  label: string;
  /** Press handler */
  onPress: () => void;
  /** Button variant style */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Icon to show on the left */
  iconLeft?: IconName;
  /** Icon to show on the right */
  iconRight?: IconName;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Whether button is in loading state */
  loading?: boolean;
  /** Full width button */
  fullWidth?: boolean;
  /** Custom test ID for testing */
  testID?: string;
}

/**
 * Reusable Button component with variants and icons
 * Compatible with Formik and supports loading states
 */
export const Button: React.FC<ButtonProps> = React.memo(
  ({
    label,
    onPress,
    variant = "primary",
    size = "md",
    iconLeft,
    iconRight,
    disabled = false,
    loading = false,
    fullWidth = false,
    testID,
  }) => {
    // Get icon components
    const LeftIcon = iconLeft ? icons[iconLeft] : null;
    const RightIcon = iconRight ? icons[iconRight] : null;

    // Determine if button should be disabled
    const isDisabled = disabled || loading;

    // Get button styles based on variant
    const getButtonStyles = () => {
      const baseStyles = {
        flexDirection: "row" as const,
        alignItems: "center" as const,
        justifyContent: "center" as const,
        borderRadius: radius.md,
        borderWidth: 1,
      };

      const sizeStyles = {
        sm: {
          paddingHorizontal: spacing[3], // 12px
          paddingVertical: spacing[2], // 8px
          minHeight: 36,
        },
        md: {
          paddingHorizontal: spacing[4], // 16px
          paddingVertical: spacing[3], // 12px
          minHeight: 44,
        },
        lg: {
          paddingHorizontal: spacing[6], // 24px
          paddingVertical: spacing[4], // 16px
          minHeight: 52,
        },
      };

      const variantStyles = {
        primary: {
          backgroundColor: isDisabled ? colors.TEXT_TERTIARY : colors.PRIMARY,
          borderColor: isDisabled ? colors.TEXT_TERTIARY : colors.PRIMARY,
        },
        secondary: {
          backgroundColor: isDisabled
            ? colors.BACKGROUND_SECONDARY
            : colors.SECONDARY,
          borderColor: isDisabled ? colors.TEXT_TERTIARY : colors.SECONDARY,
        },
        outline: {
          backgroundColor: colors.TRANSPARENT,
          borderColor: isDisabled ? colors.TEXT_TERTIARY : colors.PRIMARY,
          borderWidth: 2,
        },
        danger: {
          backgroundColor: isDisabled ? colors.TEXT_TERTIARY : colors.ERROR,
          borderColor: isDisabled ? colors.TEXT_TERTIARY : colors.ERROR,
        },
      };

      return {
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...(fullWidth && { width: "100%" as const }),
        ...(variant !== "outline" && !isDisabled && shadows.sm),
        opacity: isDisabled && !loading ? 0.6 : 1,
      };
    };

    // Get text styles based on variant
    const getTextStyles = () => {
      const baseTextStyles = {
        textAlign: "center" as const,
        fontWeight: typography.button.fontWeight,
      };

      const sizeTextStyles = {
        sm: {
          fontSize: typography.buttonSmall.fontSize,
          lineHeight: typography.buttonSmall.lineHeight,
        },
        md: {
          fontSize: typography.button.fontSize,
          lineHeight: typography.button.lineHeight,
        },
        lg: {
          fontSize: typography.buttonLarge.fontSize,
          lineHeight: typography.buttonLarge.lineHeight,
        },
      };

      const variantTextStyles = {
        primary: {
          color: colors.TEXT_INVERSE,
        },
        secondary: {
          color: colors.TEXT_INVERSE,
        },
        outline: {
          color: isDisabled ? colors.TEXT_TERTIARY : colors.PRIMARY,
        },
        danger: {
          color: colors.TEXT_INVERSE,
        },
      };

      return {
        ...baseTextStyles,
        ...sizeTextStyles[size],
        ...variantTextStyles[variant],
      };
    };

    // Get icon size based on button size
    const getIconSize = () => {
      const iconSizes = {
        sm: 16,
        md: 20,
        lg: 24,
      };
      return iconSizes[size];
    };

    // Get icon color based on variant
    const getIconColor = () => {
      if (variant === "outline") {
        return isDisabled ? colors.TEXT_TERTIARY : colors.PRIMARY;
      }
      return colors.TEXT_INVERSE;
    };

    return (
      <TouchableOpacity
        style={getButtonStyles()}
        onPress={onPress}
        disabled={isDisabled}
        activeOpacity={0.8}
        testID={testID}
      >
        {loading ? (
          <ActivityIndicator
            size="small"
            color={variant === "outline" ? colors.PRIMARY : colors.TEXT_INVERSE}
          />
        ) : (
          <>
            {LeftIcon && (
              <View style={{ marginRight: spacing[2] }}>
                <LeftIcon size={getIconSize()} color={getIconColor()} />
              </View>
            )}

            <Text style={getTextStyles()}>{label}</Text>

            {RightIcon && (
              <View style={{ marginLeft: spacing[2] }}>
                <RightIcon size={getIconSize()} color={getIconColor()} />
              </View>
            )}
          </>
        )}
      </TouchableOpacity>
    );
  }
);

Button.displayName = "Button";
