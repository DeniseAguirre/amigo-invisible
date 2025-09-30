import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colors, typography } from '../../../theme';
import { getInitials } from '../../../utils';

/**
 * Avatar sizes
 */
export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Avatar component props
 */
export interface AvatarProps {
  /** Image URI */
  uri?: string;
  /** Avatar size */
  size?: AvatarSize;
  /** Fallback text (name for initials) */
  fallbackText?: string;
  /** Whether avatar is pressable */
  onPress?: () => void;
  /** Custom background color for initials */
  backgroundColor?: string;
  /** Custom text color for initials */
  textColor?: string;
  /** Custom test ID for testing */
  testID?: string;
}

/**
 * Reusable Avatar component with image support and initials fallback
 * Uses react-native-fast-image for better performance
 */
export const Avatar: React.FC<AvatarProps> = React.memo(({
  uri,
  size = 'md',
  fallbackText,
  onPress,
  backgroundColor,
  textColor,
  testID,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  // Get size dimensions
  const getSizeDimensions = () => {
    const sizes = {
      sm: 32,
      md: 48,
      lg: 64,
      xl: 96,
    };
    return sizes[size];
  };

  // Get text size for initials
  const getTextSize = () => {
    const textSizes = {
      sm: 12,
      md: 16,
      lg: 20,
      xl: 28,
    };
    return textSizes[size];
  };

  // Get container styles
  const getContainerStyles = () => {
    const dimension = getSizeDimensions();
    
    return {
      width: dimension,
      height: dimension,
      borderRadius: dimension / 2,
      backgroundColor: backgroundColor || colors.PRIMARY,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      overflow: 'hidden' as const,
    };
  };

  // Get image styles
  const getImageStyles = () => {
    const dimension = getSizeDimensions();
    
    return {
      width: dimension,
      height: dimension,
      borderRadius: dimension / 2,
    };
  };

  // Get initials text styles
  const getInitialsStyles = () => ({
    fontSize: getTextSize(),
    fontWeight: typography.buttonLarge.fontWeight,
    color: textColor || colors.TEXT_INVERSE,
    textAlign: 'center' as const,
  });

  // Handle image load error
  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  // Handle image load success
  const handleImageLoad = () => {
    setImageError(false);
    setImageLoading(false);
  };

  // Generate initials from fallback text
  const initials = fallbackText ? getInitials(fallbackText, 2) : '?';

  // Determine if we should show image or initials
  const shouldShowImage = uri && !imageError && !imageLoading;
  const shouldShowInitials = !shouldShowImage;

  // Render avatar content
  const renderAvatarContent = () => {
    if (shouldShowImage) {
      return (
        <FastImage
          source={{ uri }}
          style={getImageStyles()}
          onError={handleImageError}
          onLoad={handleImageLoad}
          resizeMode={FastImage.resizeMode.cover}
          testID={`${testID}-image`}
        />
      );
    }

    if (shouldShowInitials) {
      return (
        <Text style={getInitialsStyles()} testID={`${testID}-initials`}>
          {initials}
        </Text>
      );
    }

    return null;
  };

  // If pressable, wrap in TouchableOpacity
  if (onPress) {
    return (
      <TouchableOpacity
        style={getContainerStyles()}
        onPress={onPress}
        activeOpacity={0.8}
        testID={testID}
      >
        {renderAvatarContent()}
      </TouchableOpacity>
    );
  }

  // Otherwise, render as View
  return (
    <View style={getContainerStyles()} testID={testID}>
      {renderAvatarContent()}
    </View>
  );
});

Avatar.displayName = 'Avatar';