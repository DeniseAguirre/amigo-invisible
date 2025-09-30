import React from 'react';
import { View, Text } from 'react-native';
import { colors, typography, spacing } from '../../../theme';
import { icons, type IconName } from '../../../utils';
import { Button, type ButtonProps } from '../Button/Button';

/**
 * EmptyState component props
 */
export interface EmptyStateProps {
  /** Icon to display */
  icon?: IconName;
  /** Custom emoji or text icon */
  emoji?: string;
  /** Main title */
  title: string;
  /** Description text */
  description?: string;
  /** Action button configuration */
  actionButton?: Omit<ButtonProps, 'onPress'> & {
    onPress: () => void;
  };
  /** Custom test ID for testing */
  testID?: string;
}

/**
 * Reusable EmptyState component for showing empty screens
 * Displays icon, title, description and optional action button
 */
export const EmptyState: React.FC<EmptyStateProps> = React.memo(({
  icon,
  emoji,
  title,
  description,
  actionButton,
  testID,
}) => {
  // Get icon component
  const IconComponent = icon ? icons[icon] : null;

  // Get container styles
  const getContainerStyles = () => ({
    flex: 1,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    paddingHorizontal: spacing[6], // 24px
    paddingVertical: spacing[8], // 32px
  });

  // Get icon container styles
  const getIconContainerStyles = () => ({
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.BACKGROUND_SECONDARY,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    marginBottom: spacing[6], // 24px
  });

  // Get emoji styles
  const getEmojiStyles = () => ({
    fontSize: 48,
    textAlign: 'center' as const,
    marginBottom: spacing[6], // 24px
  });

  // Get title styles
  const getTitleStyles = () => ({
    ...typography.h3,
    color: colors.TEXT_PRIMARY,
    textAlign: 'center' as const,
    marginBottom: spacing[3], // 12px
  });

  // Get description styles
  const getDescriptionStyles = () => ({
    ...typography.body,
    color: colors.TEXT_SECONDARY,
    textAlign: 'center' as const,
    lineHeight: 24,
    marginBottom: spacing[6], // 24px
  });

  // Get button container styles
  const getButtonContainerStyles = () => ({
    width: '100%' as const,
    maxWidth: 280,
  });

  return (
    <View style={getContainerStyles()} testID={testID}>
      {/* Icon */}
      {IconComponent && (
        <View style={getIconContainerStyles()} testID={`${testID}-icon-container`}>
          <IconComponent 
            size={40} 
            color={colors.TEXT_TERTIARY} 
            testID={`${testID}-icon`}
          />
        </View>
      )}

      {/* Emoji */}
      {emoji && !IconComponent && (
        <Text style={getEmojiStyles()} testID={`${testID}-emoji`}>
          {emoji}
        </Text>
      )}

      {/* Title */}
      <Text style={getTitleStyles()} testID={`${testID}-title`}>
        {title}
      </Text>

      {/* Description */}
      {description && (
        <Text style={getDescriptionStyles()} testID={`${testID}-description`}>
          {description}
        </Text>
      )}

      {/* Action Button */}
      {actionButton && (
        <View style={getButtonContainerStyles()}>
          <Button
            {...actionButton}
            fullWidth
            testID={`${testID}-action-button`}
          />
        </View>
      )}
    </View>
  );
});

EmptyState.displayName = 'EmptyState';