/**
 * Design System Usage Examples
 * This file demonstrates how to use the Design System components
 */

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors, typography, spacing, radius, shadows } from "../theme";

/**
 * Example component showing how to use Design System
 */
export const DesignSystemExample: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Using typography styles */}
      <Text style={[typography.h1, { color: colors.TEXT_PRIMARY }]}>
        Título Principal
      </Text>

      <Text style={[typography.subtitle, { color: colors.TEXT_SECONDARY }]}>
        Subtítulo con texto secundario
      </Text>

      <Text style={[typography.body, { color: colors.TEXT_PRIMARY }]}>
        Este es un texto de cuerpo usando el sistema de tipografía.
      </Text>

      {/* Using colors and spacing */}
      <View
        style={[
          styles.card,
          {
            backgroundColor: colors.SURFACE,
            padding: spacing[6], // 24px
            marginTop: spacing[4], // 16px
            borderRadius: radius.lg, // 12px
          },
          shadows.md,
        ]}
      >
        <Text style={[typography.titleMedium, { color: colors.PRIMARY }]}>
          Tarjeta de Ejemplo
        </Text>

        <Text
          style={[
            typography.body,
            { color: colors.TEXT_SECONDARY, marginTop: spacing[2] },
          ]}
        >
          Contenido de la tarjeta usando colores del sistema.
        </Text>
      </View>

      {/* Using buttons with Design System */}
      <TouchableOpacity
        style={[
          styles.primaryButton,
          {
            backgroundColor: colors.PRIMARY,
            padding: spacing[4], // 16px
            borderRadius: radius.md, // 8px
            marginTop: spacing[4], // 16px
          },
          shadows.sm,
        ]}
      >
        <Text
          style={[
            typography.button,
            {
              color: colors.TEXT_INVERSE,
              textAlign: "center",
            },
          ]}
        >
          🎁 Botón Principal
        </Text>
      </TouchableOpacity>

      {/* Secondary button */}
      <TouchableOpacity
        style={[
          styles.secondaryButton,
          {
            backgroundColor: colors.SURFACE,
            borderWidth: 1,
            borderColor: colors.PRIMARY,
            padding: spacing[4], // 16px
            borderRadius: radius.md, // 8px
            marginTop: spacing[3], // 12px
          },
        ]}
      >
        <Text style={[typography.button, { color: colors.PRIMARY }]}>
          Botón Secundario
        </Text>
      </TouchableOpacity>

      {/* Success message */}
      <View
        style={[
          styles.alert,
          {
            backgroundColor: colors.SUCCESS_LIGHT,
            borderColor: colors.SUCCESS,
            borderWidth: 1,
            borderRadius: radius.md,
            padding: spacing[4],
            marginTop: spacing[4],
          },
        ]}
      >
        <Text style={[typography.body, { color: colors.SUCCESS_DARK }]}>
          ✓ Mensaje de éxito usando colores semánticos
        </Text>
      </View>

      {/* Error message */}
      <View
        style={[
          styles.alert,
          {
            backgroundColor: colors.ERROR_LIGHT,
            borderColor: colors.ERROR,
            borderWidth: 1,
            borderRadius: radius.md,
            padding: spacing[4],
            marginTop: spacing[3],
          },
        ]}
      >
        <Text style={[typography.body, { color: colors.ERROR_DARK }]}>
          ✗ Mensaje de error usando colores semánticos
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    padding: spacing[6], // 24px
  },
  card: {
    // Shadows are applied inline above
  },
  primaryButton: {
    // Styles applied inline above
  },
  secondaryButton: {
    // Styles applied inline above
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  alert: {
    // Styles applied inline above
  },
});

/**
 * Quick reference for common patterns:
 *
 * 1. Import theme elements:
 *    import { colors, typography, spacing, radius, shadows } from '@/theme';
 *
 * 2. Import utilities:
 *    import { icons, showSuccess, formatDate } from '@/utils';
 *
 * 3. Use colors:
 *    style={{ color: colors.PRIMARY }}
 *    style={{ backgroundColor: colors.SURFACE }}
 *
 * 4. Use typography:
 *    style={[typography.h1, { color: colors.TEXT_PRIMARY }]}
 *
 * 5. Use spacing:
 *    style={{ padding: spacing[4], margin: spacing[2] }}
 *
 * 6. Use radius:
 *    style={{ borderRadius: radius.lg }}
 *
 * 7. Use shadows:
 *    style={[shadows.md, otherStyles]}
 *
 * 8. Use icons:
 *    import { icons } from '@/utils';
 *    const Icon = icons.gift;
 *    <Icon size={24} /> // Note: Check Lucide docs for correct props
 *
 * 9. Use alerts:
 *    showSuccess('Operación completada');
 *    showError('Algo salió mal');
 *
 * 10. Use helpers:
 *     formatDate(new Date());
 *     truncateText(longText, 50);
 *     isValidEmail(email);
 */
