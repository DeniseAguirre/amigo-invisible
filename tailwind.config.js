/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // Colors from theme/colors.ts
      colors: {
        // Primary colors
        primary: {
          DEFAULT: "#d63384",
          light: "#f8d7da",
          dark: "#a71e2a",
        },
        // Secondary colors
        secondary: {
          DEFAULT: "#198754",
          light: "#d4edda",
          dark: "#0f5132",
        },
        // Accent colors
        accent: {
          DEFAULT: "#ffc107",
          light: "#fff3cd",
          dark: "#856404",
        },
        // Background colors
        background: {
          DEFAULT: "#ffffff",
          secondary: "#f8f9fa",
          tertiary: "#e9ecef",
        },
        // Surface colors
        surface: {
          DEFAULT: "#ffffff",
          elevated: "#f8f9fa",
        },
        // Text colors
        text: {
          primary: "#212529",
          secondary: "#6c757d",
          tertiary: "#adb5bd",
          inverse: "#ffffff",
        },
        // Border colors
        border: {
          DEFAULT: "#dee2e6",
          light: "#e9ecef",
          focus: "#86b7fe",
        },
        // Semantic colors
        success: {
          DEFAULT: "#198754",
          light: "#d4edda",
          dark: "#0f5132",
        },
        error: {
          DEFAULT: "#dc3545",
          light: "#f8d7da",
          dark: "#721c24",
        },
        warning: {
          DEFAULT: "#ffc107",
          light: "#fff3cd",
          dark: "#856404",
        },
        info: {
          DEFAULT: "#0dcaf0",
          light: "#d1ecf1",
          dark: "#055160",
        },
      },

      // Font sizes from theme/typography.ts
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "28px"],
        "2xl": ["24px", "32px"],
        "3xl": ["30px", "36px"],
        "4xl": ["36px", "40px"],
        "5xl": ["48px", "56px"],
        "6xl": ["60px", "72px"],
      },

      // Font weights from theme/typography.ts
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },

      // Spacing from theme/spacing.ts
      spacing: {
        0: "0px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
        14: "56px",
        16: "64px",
        18: "72px",
        20: "80px",
        24: "96px",
        28: "112px",
        32: "128px",
        36: "144px",
        40: "160px",
        44: "176px",
        48: "192px",
        52: "208px",
        56: "224px",
        60: "240px",
        64: "256px",
        72: "288px",
        80: "320px",
        96: "384px",
      },

      // Border radius from theme/radius.ts
      borderRadius: {
        none: "0px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
        full: "9999px",
      },

      // Box shadow (mapped to elevation for React Native)
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },

      // Letter spacing
      letterSpacing: {
        tighter: "-0.5px",
        tight: "-0.25px",
        normal: "0px",
        wide: "0.25px",
        wider: "0.5px",
        widest: "1px",
      },
    },
  },
  plugins: [],
};
