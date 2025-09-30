/**
 * Utilities index for Amigo Invisible app
 * Central export for all utility functions
 */

// Export all utility modules
export * from "./alert";
export * from "./icons";
export * from "./helpers";

// Re-export with cleaner names
export {
  showSuccess,
  showError,
  showWarning,
  showInfo,
  showConfirmation,
  showDestructiveConfirmation,
  showCustomAlert,
  showLoadingAlert,
  showNetworkError,
  showAuthError,
} from "./alert";

export {
  icons,
  iconSizes,
  defaultIconProps,
  type IconName,
  type IconSize,
  type IconComponent,
} from "./icons";

export {
  formatDate,
  formatDateShort,
  formatTime,
  formatRelativeTime,
  truncateText,
  capitalize,
  capitalizeWords,
  getInitials,
  isValidEmail,
  isValidPhone,
  generateRandomString,
  generateId,
  debounce,
  throttle,
  formatCurrency,
  formatNumber,
  shuffleArray,
  getRandomItem,
  isEmpty,
  deepClone,
  sleep,
  slugify,
} from "./helpers";
