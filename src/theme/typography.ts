import { TextStyle } from "react-native";

/**
 * Typography system for Amigo Invisible app
 * Includes font sizes, weights, and predefined text styles
 */

// Font sizes based on scale
export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
  "6xl": 60,
} as const;

// Font weights
export const FONT_WEIGHTS = {
  light: "300" as const,
  regular: "400" as const,
  medium: "500" as const,
  semibold: "600" as const,
  bold: "700" as const,
  extrabold: "800" as const,
} as const;

// Line heights based on font sizes
export const LINE_HEIGHTS = {
  xs: 16,
  sm: 20,
  base: 24,
  lg: 28,
  xl: 28,
  "2xl": 32,
  "3xl": 36,
  "4xl": 40,
  "5xl": 56,
  "6xl": 72,
} as const;

// Letter spacing
export const LETTER_SPACING = {
  tighter: -0.5,
  tight: -0.25,
  normal: 0,
  wide: 0.25,
  wider: 0.5,
  widest: 1,
} as const;

/**
 * Predefined text styles for common use cases
 */
export const TYPOGRAPHY = {
  // Display styles - for hero text and large headings
  display: {
    fontSize: FONT_SIZES["6xl"],
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS["6xl"],
    letterSpacing: LETTER_SPACING.tight,
  } as TextStyle,

  // Heading styles
  h1: {
    fontSize: FONT_SIZES["5xl"],
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS["5xl"],
    letterSpacing: LETTER_SPACING.tight,
  } as TextStyle,

  h2: {
    fontSize: FONT_SIZES["4xl"],
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS["4xl"],
    letterSpacing: LETTER_SPACING.tight,
  } as TextStyle,

  h3: {
    fontSize: FONT_SIZES["3xl"],
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS["3xl"],
    letterSpacing: LETTER_SPACING.normal,
  } as TextStyle,

  h4: {
    fontSize: FONT_SIZES["2xl"],
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS["2xl"],
    letterSpacing: LETTER_SPACING.normal,
  } as TextStyle,

  h5: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.xl,
    letterSpacing: LETTER_SPACING.normal,
  } as TextStyle,

  h6: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.lg,
    letterSpacing: LETTER_SPACING.normal,
  } as TextStyle,

  // Title styles
  title: {
    fontSize: FONT_SIZES["2xl"],
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS["2xl"],
    letterSpacing: LETTER_SPACING.normal,
  } as TextStyle,

  titleMedium: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.xl,
    letterSpacing: LETTER_SPACING.normal,
  } as TextStyle,

  titleSmall: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.lg,
    letterSpacing: LETTER_SPACING.normal,
  } as TextStyle,

  // Subtitle styles
  subtitle: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.base,
    letterSpacing: LETTER_SPACING.normal,
  } as TextStyle,

  subtitleSmall: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.sm,
    letterSpacing: LETTER_SPACING.normal,
  } as TextStyle,

  // Body text styles
  body: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: LINE_HEIGHTS.base,
    letterSpacing: LETTER_SPACING.normal,
  } as TextStyle,

  bodyMedium: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.base,
    letterSpacing: LETTER_SPACING.normal,
  } as TextStyle,

  bodySmall: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: LINE_HEIGHTS.sm,
    letterSpacing: LETTER_SPACING.normal,
  } as TextStyle,

  // Caption and small text
  caption: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: LINE_HEIGHTS.sm,
    letterSpacing: LETTER_SPACING.wide,
  } as TextStyle,

  captionBold: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.sm,
    letterSpacing: LETTER_SPACING.wide,
  } as TextStyle,

  overline: {
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.xs,
    letterSpacing: LETTER_SPACING.widest,
    textTransform: "uppercase",
  } as TextStyle,

  // Button text styles
  button: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.base,
    letterSpacing: LETTER_SPACING.normal,
  } as TextStyle,

  buttonSmall: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.sm,
    letterSpacing: LETTER_SPACING.normal,
  } as TextStyle,

  buttonLarge: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.lg,
    letterSpacing: LETTER_SPACING.normal,
  } as TextStyle,

  // Label styles
  label: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.sm,
    letterSpacing: LETTER_SPACING.normal,
  } as TextStyle,

  labelSmall: {
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.xs,
    letterSpacing: LETTER_SPACING.wide,
  } as TextStyle,
} as const;

/**
 * Type definitions for typography system
 */
export type FontSizeKey = keyof typeof FONT_SIZES;
export type FontWeightKey = keyof typeof FONT_WEIGHTS;
export type TypographyKey = keyof typeof TYPOGRAPHY;
