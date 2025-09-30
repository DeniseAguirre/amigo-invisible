/**
 * Spacing system for Amigo Invisible app
 * Based on 4px grid system for consistent spacing
 */

export const SPACING = {
  // Base unit: 4px
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  18: 72,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
  36: 144,
  40: 160,
  44: 176,
  48: 192,
  52: 208,
  56: 224,
  60: 240,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
} as const;

/**
 * Semantic spacing aliases for better readability
 */
export const SPACE = {
  // None
  none: SPACING[0],

  // Extra small
  xs: SPACING[1], // 4px

  // Small
  sm: SPACING[2], // 8px

  // Medium
  md: SPACING[4], // 16px

  // Large
  lg: SPACING[6], // 24px

  // Extra large
  xl: SPACING[8], // 32px

  // 2x Extra large
  "2xl": SPACING[12], // 48px

  // 3x Extra large
  "3xl": SPACING[16], // 64px

  // 4x Extra large
  "4xl": SPACING[24], // 96px

  // 5x Extra large
  "5xl": SPACING[32], // 128px

  // 6x Extra large
  "6xl": SPACING[40], // 160px
} as const;

/**
 * Component-specific spacing
 */
export const COMPONENT_SPACING = {
  // Button spacing
  buttonPadding: {
    horizontal: SPACE.md, // 16px
    vertical: SPACE.sm, // 8px
  },
  buttonPaddingSmall: {
    horizontal: SPACE.sm, // 8px
    vertical: SPACE.xs, // 4px
  },
  buttonPaddingLarge: {
    horizontal: SPACE.lg, // 24px
    vertical: SPACE.md, // 16px
  },

  // Card spacing
  cardPadding: SPACE.lg, // 24px
  cardMargin: SPACE.md, // 16px
  cardGap: SPACE.md, // 16px

  // Input spacing
  inputPadding: {
    horizontal: SPACE.md, // 16px
    vertical: SPACE.sm, // 8px
  },

  // Screen spacing
  screenPadding: SPACE.lg, // 24px
  screenMargin: SPACE.md, // 16px

  // List spacing
  listItemPadding: SPACE.md, // 16px
  listItemGap: SPACE.sm, // 8px

  // Section spacing
  sectionGap: SPACE.lg, // 24px
  sectionPadding: SPACE.lg, // 24px

  // Header spacing
  headerHeight: SPACING[14], // 56px
  headerPadding: SPACE.md, // 16px

  // Bottom tab spacing
  tabBarHeight: SPACING[16], // 64px
  tabBarPadding: SPACE.sm, // 8px

  // Modal spacing
  modalPadding: SPACE.lg, // 24px
  modalMargin: SPACE.lg, // 24px
} as const;

/**
 * Type definitions for spacing system
 */
export type SpacingKey = keyof typeof SPACING;
export type SpaceKey = keyof typeof SPACE;
