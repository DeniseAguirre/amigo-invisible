/**
 * Color palette for Amigo Invisible app
 * Includes primary, secondary, neutral, and semantic colors
 * with light and dark variants for theme support
 */

export const COLORS = {
  // Primary colors - Gift/Christmas theme
  PRIMARY: "#d63384", // Christmas red/pink
  PRIMARY_LIGHT: "#f8d7da",
  PRIMARY_DARK: "#a71e2a",

  // Secondary colors - Complementary green
  SECONDARY: "#198754", // Christmas green
  SECONDARY_LIGHT: "#d4edda",
  SECONDARY_DARK: "#0f5132",

  // Accent colors - Gold for special elements
  ACCENT: "#ffc107", // Gold
  ACCENT_LIGHT: "#fff3cd",
  ACCENT_DARK: "#856404",

  // Background colors
  BACKGROUND: "#ffffff",
  BACKGROUND_SECONDARY: "#f8f9fa",
  BACKGROUND_TERTIARY: "#e9ecef",

  // Surface colors for cards and containers
  SURFACE: "#ffffff",
  SURFACE_ELEVATED: "#f8f9fa",

  // Text colors
  TEXT_PRIMARY: "#212529",
  TEXT_SECONDARY: "#6c757d",
  TEXT_TERTIARY: "#adb5bd",
  TEXT_INVERSE: "#ffffff",

  // Border colors
  BORDER: "#dee2e6",
  BORDER_LIGHT: "#e9ecef",
  BORDER_FOCUS: "#86b7fe",

  // Semantic colors
  SUCCESS: "#198754",
  SUCCESS_LIGHT: "#d4edda",
  SUCCESS_DARK: "#0f5132",

  ERROR: "#dc3545",
  ERROR_LIGHT: "#f8d7da",
  ERROR_DARK: "#721c24",

  WARNING: "#ffc107",
  WARNING_LIGHT: "#fff3cd",
  WARNING_DARK: "#856404",

  INFO: "#0dcaf0",
  INFO_LIGHT: "#d1ecf1",
  INFO_DARK: "#055160",

  // Overlay colors
  OVERLAY: "rgba(0, 0, 0, 0.5)",
  OVERLAY_LIGHT: "rgba(0, 0, 0, 0.25)",

  // Transparent
  TRANSPARENT: "transparent",
} as const;

/**
 * Dark theme colors
 */
export const DARK_COLORS = {
  ...COLORS,

  // Background colors for dark theme
  BACKGROUND: "#121212",
  BACKGROUND_SECONDARY: "#1e1e1e",
  BACKGROUND_TERTIARY: "#2d2d2d",

  // Surface colors for dark theme
  SURFACE: "#1e1e1e",
  SURFACE_ELEVATED: "#2d2d2d",

  // Text colors for dark theme
  TEXT_PRIMARY: "#ffffff",
  TEXT_SECONDARY: "#b3b3b3",
  TEXT_TERTIARY: "#666666",
  TEXT_INVERSE: "#212529",

  // Border colors for dark theme
  BORDER: "#333333",
  BORDER_LIGHT: "#444444",
} as const;

/**
 * Type definitions for color system
 */
export type ColorKey = keyof typeof COLORS;
export type ColorValue = (typeof COLORS)[ColorKey];
