import { ViewStyle } from "react-native";

/**
 * Shadow system for Amigo Invisible app
 * Provides consistent elevation and depth across platforms
 */

// iOS shadow properties
const createIOSShadow = (
  shadowOffset: { width: number; height: number },
  shadowOpacity: number,
  shadowRadius: number,
  shadowColor: string = "#000000"
): ViewStyle => ({
  shadowColor,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
});

// Android elevation properties
const createAndroidElevation = (elevation: number): ViewStyle => ({
  elevation,
});

/**
 * Cross-platform shadow styles
 */
export const SHADOWS = {
  // No shadow
  none: {
    ...createIOSShadow({ width: 0, height: 0 }, 0, 0),
    ...createAndroidElevation(0),
  } as ViewStyle,

  // Small shadow - subtle depth
  sm: {
    ...createIOSShadow({ width: 0, height: 1 }, 0.18, 1.0),
    ...createAndroidElevation(2),
  } as ViewStyle,

  // Medium shadow - moderate depth
  md: {
    ...createIOSShadow({ width: 0, height: 2 }, 0.25, 3.84),
    ...createAndroidElevation(4),
  } as ViewStyle,

  // Large shadow - strong depth
  lg: {
    ...createIOSShadow({ width: 0, height: 4 }, 0.3, 4.65),
    ...createAndroidElevation(8),
  } as ViewStyle,

  // Extra large shadow - maximum depth
  xl: {
    ...createIOSShadow({ width: 0, height: 6 }, 0.37, 7.49),
    ...createAndroidElevation(12),
  } as ViewStyle,

  // 2x Extra large shadow - floating elements
  "2xl": {
    ...createIOSShadow({ width: 0, height: 10 }, 0.51, 13.16),
    ...createAndroidElevation(16),
  } as ViewStyle,

  // Inner shadow effect (iOS only)
  inner: {
    ...createIOSShadow({ width: 0, height: 2 }, 0.25, 3.84, "#000000"),
  } as ViewStyle,
} as const;

/**
 * Component-specific shadow styles
 */
export const COMPONENT_SHADOWS = {
  // Button shadows
  button: SHADOWS.sm,
  buttonPressed: SHADOWS.none,
  buttonFloating: SHADOWS.lg,

  // Card shadows
  card: SHADOWS.md,
  cardElevated: SHADOWS.lg,
  cardFloating: SHADOWS.xl,

  // Modal shadows
  modal: SHADOWS["2xl"],
  bottomSheet: SHADOWS.xl,

  // Input shadows
  input: SHADOWS.sm,
  inputFocused: SHADOWS.md,

  // Header shadows
  header: SHADOWS.sm,

  // Tab bar shadows
  tabBar: SHADOWS.md,

  // Alert shadows
  alert: SHADOWS.lg,

  // Dropdown shadows
  dropdown: SHADOWS.lg,

  // Tooltip shadows
  tooltip: SHADOWS.md,

  // FAB (Floating Action Button) shadows
  fab: SHADOWS.lg,
  fabPressed: SHADOWS.md,
} as const;

/**
 * Colored shadows for special effects
 */
export const COLORED_SHADOWS = {
  // Primary color shadow
  primary: {
    ...createIOSShadow({ width: 0, height: 4 }, 0.3, 4.65, "#d63384"),
    ...createAndroidElevation(8),
  } as ViewStyle,

  // Secondary color shadow
  secondary: {
    ...createIOSShadow({ width: 0, height: 4 }, 0.3, 4.65, "#198754"),
    ...createAndroidElevation(8),
  } as ViewStyle,

  // Success shadow
  success: {
    ...createIOSShadow({ width: 0, height: 4 }, 0.3, 4.65, "#198754"),
    ...createAndroidElevation(8),
  } as ViewStyle,

  // Error shadow
  error: {
    ...createIOSShadow({ width: 0, height: 4 }, 0.3, 4.65, "#dc3545"),
    ...createAndroidElevation(8),
  } as ViewStyle,

  // Warning shadow
  warning: {
    ...createIOSShadow({ width: 0, height: 4 }, 0.3, 4.65, "#ffc107"),
    ...createAndroidElevation(8),
  } as ViewStyle,
} as const;

/**
 * Type definitions for shadow system
 */
export type ShadowKey = keyof typeof SHADOWS;
export type ComponentShadowKey = keyof typeof COMPONENT_SHADOWS;
export type ColoredShadowKey = keyof typeof COLORED_SHADOWS;
