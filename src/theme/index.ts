/**
 * Theme system for Amigo Invisible app
 * Central export for all design tokens
 */

// Export all theme modules
export * from "./colors";
export * from "./typography";
export * from "./spacing";
export * from "./radius";
export * from "./shadows";

// Re-export with cleaner names for easier imports
export { COLORS as colors } from "./colors";
export { DARK_COLORS as darkColors } from "./colors";
export { TYPOGRAPHY as typography } from "./typography";
export { FONT_SIZES as fontSizes } from "./typography";
export { FONT_WEIGHTS as fontWeights } from "./typography";
export { SPACING as spacing } from "./spacing";
export { SPACE as space } from "./spacing";
export { COMPONENT_SPACING as componentSpacing } from "./spacing";
export { RADIUS as radius } from "./radius";
export { COMPONENT_RADIUS as componentRadius } from "./radius";
export { SHADOWS as shadows } from "./shadows";
export { COMPONENT_SHADOWS as componentShadows } from "./shadows";
export { COLORED_SHADOWS as coloredShadows } from "./shadows";

/**
 * Complete theme object for easy access
 */
export const theme = {
  colors: require("./colors").COLORS,
  darkColors: require("./colors").DARK_COLORS,
  typography: require("./typography").TYPOGRAPHY,
  fontSizes: require("./typography").FONT_SIZES,
  fontWeights: require("./typography").FONT_WEIGHTS,
  spacing: require("./spacing").SPACING,
  space: require("./spacing").SPACE,
  componentSpacing: require("./spacing").COMPONENT_SPACING,
  radius: require("./radius").RADIUS,
  componentRadius: require("./radius").COMPONENT_RADIUS,
  shadows: require("./shadows").SHADOWS,
  componentShadows: require("./shadows").COMPONENT_SHADOWS,
  coloredShadows: require("./shadows").COLORED_SHADOWS,
} as const;
