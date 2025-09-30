/**
 * Border radius system for Amigo Invisible app
 * Provides consistent rounded corners throughout the app
 */

export const RADIUS = {
  // No radius
  none: 0,

  // Small radius
  sm: 4,

  // Default radius
  md: 8,

  // Large radius
  lg: 12,

  // Extra large radius
  xl: 16,

  // 2x Extra large radius
  "2xl": 20,

  // 3x Extra large radius
  "3xl": 24,

  // Full radius (circular)
  full: 9999,
} as const;

/**
 * Component-specific radius values
 */
export const COMPONENT_RADIUS = {
  // Button radius
  button: RADIUS.md, // 8px
  buttonSmall: RADIUS.sm, // 4px
  buttonLarge: RADIUS.lg, // 12px
  buttonRound: RADIUS.full, // Circular

  // Card radius
  card: RADIUS.lg, // 12px
  cardSmall: RADIUS.md, // 8px
  cardLarge: RADIUS.xl, // 16px

  // Input radius
  input: RADIUS.md, // 8px
  inputRound: RADIUS.full, // Circular

  // Modal radius
  modal: RADIUS.xl, // 16px
  modalLarge: RADIUS["2xl"], // 20px

  // Image radius
  avatar: RADIUS.full, // Circular
  imageSmall: RADIUS.sm, // 4px
  imageMedium: RADIUS.md, // 8px
  imageLarge: RADIUS.lg, // 12px

  // Badge radius
  badge: RADIUS.full, // Circular
  badgeSquare: RADIUS.sm, // 4px

  // Tab radius
  tab: RADIUS.md, // 8px
  tabRound: RADIUS.full, // Circular

  // Alert radius
  alert: RADIUS.md, // 8px

  // Dropdown radius
  dropdown: RADIUS.md, // 8px

  // Overlay radius
  overlay: RADIUS.lg, // 12px
} as const;

/**
 * Type definitions for radius system
 */
export type RadiusKey = keyof typeof RADIUS;
export type ComponentRadiusKey = keyof typeof COMPONENT_RADIUS;
