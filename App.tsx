import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, typography, spacing, radius, shadows } from './src/theme';
import { showSuccess, showError, showConfirmation, icons } from './src/utils';

export default function App() {
  // Import some icons for testing
  const GiftIcon = icons.gift;
  const UsersIcon = icons.users;
  const SettingsIcon = icons.settings;
  const HeartIcon = icons.heart;

  const handleShowSuccess = () => {
    showSuccess('¡Design System funcionando correctamente!', '🎉 Éxito');
  };

  const handleShowError = () => {
    showError('Ejemplo de mensaje de error', '❌ Error');
  };

  const handleShowConfirmation = () => {
    showConfirmation(
      '¿Te gusta el nuevo Design System?',
      () => showSuccess('¡Genial! 🎨'),
      () => showError('No te preocupes, podemos mejorarlo'),
      'Confirmar',
      'Sí, me gusta',
      'No me gusta'
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
        {/* Header */}
        <View style={[styles.header, { backgroundColor: colors.PRIMARY }]}>
          <Text style={[typography.h2, { color: colors.TEXT_INVERSE, textAlign: 'center' }]}>
            🎁 Amigo Invisible
          </Text>
          <Text style={[typography.subtitle, { color: colors.TEXT_INVERSE, textAlign: 'center', marginTop: spacing[2] }]}>
            Design System Demo
          </Text>
        </View>

        {/* Typography Section */}
        <View style={styles.section}>
          <Text style={[typography.h3, { color: colors.PRIMARY }]}>
            📝 Tipografía
          </Text>
          <Text style={[typography.h4, { color: colors.TEXT_PRIMARY, marginTop: spacing[2] }]}>
            Título H4
          </Text>
          <Text style={[typography.body, { color: colors.TEXT_SECONDARY, marginTop: spacing[2] }]}>
            Este es un texto de cuerpo que demuestra la tipografía del sistema.
          </Text>
          <Text style={[typography.caption, { color: colors.TEXT_TERTIARY, marginTop: spacing[1] }]}>
            Texto de caption pequeño
          </Text>
        </View>

        {/* Colors Section */}
        <View style={styles.section}>
          <Text style={[typography.h3, { color: colors.PRIMARY }]}>
            🎨 Colores
          </Text>
          <View style={styles.colorRow}>
            <View style={[styles.colorBox, { backgroundColor: colors.PRIMARY }]} />
            <View style={[styles.colorBox, { backgroundColor: colors.SECONDARY }]} />
            <View style={[styles.colorBox, { backgroundColor: colors.ACCENT }]} />
            <View style={[styles.colorBox, { backgroundColor: colors.SUCCESS }]} />
            <View style={[styles.colorBox, { backgroundColor: colors.ERROR }]} />
          </View>
        </View>

        {/* Cards Section */}
        <View style={styles.section}>
          <Text style={[typography.h3, { color: colors.PRIMARY }]}>
            📄 Cards
          </Text>
          
          <View style={[styles.card, shadows.md]}>
            <View style={styles.cardHeader}>
              <GiftIcon size={24} />
              <Text style={[typography.titleMedium, { color: colors.PRIMARY, marginLeft: spacing[2] }]}>
                Tarjeta Principal
              </Text>
            </View>
            <Text style={[typography.body, { color: colors.TEXT_SECONDARY, marginTop: spacing[2] }]}>
              Esta tarjeta demuestra el uso de sombras, espaciado y tipografía del Design System.
            </Text>
          </View>

          <View style={[styles.cardSecondary, shadows.sm]}>
            <View style={styles.cardHeader}>
              <UsersIcon size={20} />
              <Text style={[typography.titleSmall, { color: colors.SECONDARY, marginLeft: spacing[2] }]}>
                Tarjeta Secundaria
              </Text>
            </View>
            <Text style={[typography.bodySmall, { color: colors.TEXT_SECONDARY, marginTop: spacing[1] }]}>
              Ejemplo de tarjeta con menor elevación.
            </Text>
          </View>
        </View>

        {/* Buttons Section */}
        <View style={styles.section}>
          <Text style={[typography.h3, { color: colors.PRIMARY }]}>
            🔘 Botones
          </Text>
          
          <TouchableOpacity 
            style={[styles.primaryButton, shadows.sm]}
            onPress={handleShowSuccess}
          >
            <HeartIcon size={20} />
            <Text style={[typography.button, { color: colors.TEXT_INVERSE, marginLeft: spacing[2] }]}>
              Botón Principal
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={handleShowError}
          >
            <Text style={[typography.button, { color: colors.PRIMARY }]}>
              Botón Secundario
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.outlineButton}
            onPress={handleShowConfirmation}
          >
            <SettingsIcon size={18} />
            <Text style={[typography.buttonSmall, { color: colors.TEXT_PRIMARY, marginLeft: spacing[1] }]}>
              Botón Outline
            </Text>
          </TouchableOpacity>
        </View>

        {/* Alerts Section */}
        <View style={styles.section}>
          <Text style={[typography.h3, { color: colors.PRIMARY }]}>
            🚨 Alertas
          </Text>
          
          <View style={styles.alertSuccess}>
            <Text style={[typography.body, { color: colors.SUCCESS_DARK }]}>
              ✅ Mensaje de éxito
            </Text>
          </View>

          <View style={styles.alertWarning}>
            <Text style={[typography.body, { color: colors.WARNING_DARK }]}>
              ⚠️ Mensaje de advertencia
            </Text>
          </View>

          <View style={styles.alertError}>
            <Text style={[typography.body, { color: colors.ERROR_DARK }]}>
              ❌ Mensaje de error
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={[typography.caption, { color: colors.TEXT_TERTIARY, textAlign: 'center' }]}>
            Design System v1.0 - Amigo Invisible App
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  header: {
    paddingVertical: spacing[8], // 32px
    paddingHorizontal: spacing[6], // 24px
    borderBottomLeftRadius: radius.xl,
    borderBottomRightRadius: radius.xl,
  },
  section: {
    padding: spacing[6], // 24px
    borderBottomWidth: 1,
    borderBottomColor: colors.BORDER_LIGHT,
  },
  colorRow: {
    flexDirection: 'row',
    marginTop: spacing[4], // 16px
    gap: spacing[2], // 8px
  },
  colorBox: {
    width: 40,
    height: 40,
    borderRadius: radius.md, // 8px
    flex: 1,
    maxWidth: 60,
  },
  card: {
    backgroundColor: colors.SURFACE,
    padding: spacing[5], // 20px
    borderRadius: radius.lg, // 12px
    marginTop: spacing[4], // 16px
    borderWidth: 1,
    borderColor: colors.BORDER,
  },
  cardSecondary: {
    backgroundColor: colors.SURFACE_ELEVATED,
    padding: spacing[4], // 16px
    borderRadius: radius.md, // 8px
    marginTop: spacing[3], // 12px
    borderWidth: 1,
    borderColor: colors.BORDER_LIGHT,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: colors.PRIMARY,
    paddingVertical: spacing[3], // 12px
    paddingHorizontal: spacing[6], // 24px
    borderRadius: radius.md, // 8px
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing[4], // 16px
  },
  secondaryButton: {
    backgroundColor: colors.SURFACE,
    borderWidth: 2,
    borderColor: colors.PRIMARY,
    paddingVertical: spacing[3], // 12px
    paddingHorizontal: spacing[6], // 24px
    borderRadius: radius.md, // 8px
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing[3], // 12px
  },
  outlineButton: {
    backgroundColor: colors.BACKGROUND,
    borderWidth: 1,
    borderColor: colors.BORDER,
    paddingVertical: spacing[2], // 8px
    paddingHorizontal: spacing[4], // 16px
    borderRadius: radius.sm, // 4px
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing[3], // 12px
  },
  alertSuccess: {
    backgroundColor: colors.SUCCESS_LIGHT,
    borderLeftWidth: 4,
    borderLeftColor: colors.SUCCESS,
    padding: spacing[3], // 12px
    borderRadius: radius.sm, // 4px
    marginTop: spacing[2], // 8px
  },
  alertWarning: {
    backgroundColor: colors.WARNING_LIGHT,
    borderLeftWidth: 4,
    borderLeftColor: colors.WARNING,
    padding: spacing[3], // 12px
    borderRadius: radius.sm, // 4px
    marginTop: spacing[2], // 8px
  },
  alertError: {
    backgroundColor: colors.ERROR_LIGHT,
    borderLeftWidth: 4,
    borderLeftColor: colors.ERROR,
    padding: spacing[3], // 12px
    borderRadius: radius.sm, // 4px
    marginTop: spacing[2], // 8px
  },
  footer: {
    padding: spacing[6], // 24px
    backgroundColor: colors.BACKGROUND_SECONDARY,
  },
});
