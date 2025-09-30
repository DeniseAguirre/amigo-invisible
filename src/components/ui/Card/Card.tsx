import React from 'react';
import { View, TouchableOpacity, ViewStyle } from 'react-native';
import { colors, spacing, radius, shadows } from '../../../theme';

/**
 * Card elevation levels
 */
export type CardElevation = 'none' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Card padding levels
 */
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

/**
 * Card component props
 */
export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Shadow elevation level */
  elevation?: CardElevation;
  /** Padding size inside card */
  padding?: CardPadding;
  /** Custom background color */
  backgroundColor?: string;
  /** Whether card is pressable */
  onPress?: () => void;
  /** Custom border radius */
  borderRadius?: number;
  /** Custom margin */
  margin?: number;
  /** Full width card */
  fullWidth?: boolean;
  /** Custom style */
  style?: ViewStyle;
  /** Custom test ID for testing */
  testID?: string;
}

/**
 * Reusable Card component with elevation and customizable styling
 * Provides consistent container styling across the app
 */
export const Card: React.FC<CardProps> = React.memo(({
  children,
  elevation = 'md',
  padding = 'md',
  backgroundColor = colors.SURFACE,
  onPress,
  borderRadius = radius.lg,
  margin,
  fullWidth = false,
  style,
  testID,
}) => {
  // Get elevation styles
  const getElevationStyles = () => {
    const elevationMap = {
      none: shadows.none,
      sm: shadows.sm,
      md: shadows.md,
      lg: shadows.lg,
      xl: shadows.xl,
    };
    return elevationMap[elevation];
  };

  // Get padding styles
  const getPaddingStyles = () => {
    const paddingMap = {
      none: 0,
      sm: spacing[2], // 8px
      md: spacing[4], // 16px
      lg: spacing[6], // 24px
    };
    return paddingMap[padding];
  };

  // Get container styles
  const getContainerStyles = (): ViewStyle => ({
    backgroundColor,
    borderRadius,
    padding: getPaddingStyles(),
    ...getElevationStyles(),
    ...(margin && { margin }),
    ...(fullWidth && { width: '100%' as const }),
    ...style,
  });

  // If pressable, wrap in TouchableOpacity
  if (onPress) {
    return (
      <TouchableOpacity
        style={getContainerStyles()}
        onPress={onPress}
        activeOpacity={0.95}
        testID={testID}
      >
        {children}
      </TouchableOpacity>
    );
  }

  // Otherwise, render as View
  return (
    <View style={getContainerStyles()} testID={testID}>
      {children}
    </View>
  );
});

Card.displayName = 'Card';