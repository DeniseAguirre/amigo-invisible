import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import { useField } from "formik";
import { colors, typography, spacing, radius } from "../../../theme";
import { icons } from "../../../utils";

/**
 * Input component props
 */
export interface InputProps
  extends Omit<TextInputProps, "value" | "onChangeText"> {
  /** Formik field name */
  name: string;
  /** Input label */
  label?: string;
  /** Input placeholder */
  placeholder?: string;
  /** Whether input is for password */
  secureTextEntry?: boolean;
  /** Whether input is disabled */
  disabled?: boolean;
  /** Helper text below input */
  helperText?: string;
  /** Custom test ID for testing */
  testID?: string;
}

/**
 * Reusable Input component connected to Formik
 * Automatically handles validation errors and form state
 */
export const Input: React.FC<InputProps> = React.memo(
  ({
    name,
    label,
    placeholder,
    secureTextEntry = false,
    disabled = false,
    helperText,
    testID,
    ...textInputProps
  }) => {
    const [field, meta, helpers] = useField(name);
    const [isPasswordVisible, setIsPasswordVisible] =
      useState(!secureTextEntry);
    const [isFocused, setIsFocused] = useState(false);

    // Check if field has error
    const hasError = meta.touched && meta.error;

    // Icons
    const EyeIcon = icons.show;
    const EyeOffIcon = icons.hide;

    // Get container styles
    const getContainerStyles = () => ({
      marginBottom: spacing[4], // 16px
    });

    // Get label styles
    const getLabelStyles = () => ({
      ...typography.label,
      color: hasError ? colors.ERROR : colors.TEXT_PRIMARY,
      marginBottom: spacing[1], // 4px
    });

    // Get input container styles
    const getInputContainerStyles = () => {
      let borderColor: string = colors.BORDER;

      if (hasError) {
        borderColor = colors.ERROR;
      } else if (isFocused) {
        borderColor = colors.PRIMARY;
      }

      return {
        flexDirection: "row" as const,
        alignItems: "center" as const,
        borderWidth: 1,
        borderRadius: radius.md,
        backgroundColor: disabled
          ? colors.BACKGROUND_SECONDARY
          : colors.SURFACE,
        borderColor,
        paddingHorizontal: spacing[3], // 12px
        minHeight: 48,
      };
    };

    // Get input styles
    const getInputStyles = () => ({
      flex: 1,
      ...typography.body,
      color: disabled ? colors.TEXT_TERTIARY : colors.TEXT_PRIMARY,
      paddingVertical: spacing[3], // 12px
    });

    // Get error text styles
    const getErrorStyles = () => ({
      ...typography.caption,
      color: colors.ERROR,
      marginTop: spacing[1], // 4px
    });

    // Get helper text styles
    const getHelperStyles = () => ({
      ...typography.caption,
      color: colors.TEXT_SECONDARY,
      marginTop: spacing[1], // 4px
    });

    // Handle password visibility toggle
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    // Handle focus
    const handleFocus = () => {
      setIsFocused(true);
    };

    // Handle blur
    const handleBlur = () => {
      setIsFocused(false);
      helpers.setTouched(true);
    };

    return (
      <View style={getContainerStyles()}>
        {/* Label */}
        {label && <Text style={getLabelStyles()}>{label}</Text>}

        {/* Input Container */}
        <View style={getInputContainerStyles()}>
          <TextInput
            style={getInputStyles()}
            value={field.value || ""}
            onChangeText={helpers.setValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            placeholderTextColor={colors.TEXT_TERTIARY}
            secureTextEntry={secureTextEntry && !isPasswordVisible}
            editable={!disabled}
            autoCapitalize="none"
            autoCorrect={false}
            testID={testID}
            {...textInputProps}
          />

          {/* Password visibility toggle */}
          {secureTextEntry && (
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={{
                padding: spacing[1], // 4px
                marginLeft: spacing[2], // 8px
              }}
              testID={`${testID}-password-toggle`}
            >
              {isPasswordVisible ? (
                <EyeOffIcon size={20} color={colors.TEXT_SECONDARY} />
              ) : (
                <EyeIcon size={20} color={colors.TEXT_SECONDARY} />
              )}
            </TouchableOpacity>
          )}
        </View>

        {/* Error Message */}
        {hasError && <Text style={getErrorStyles()}>{meta.error}</Text>}

        {/* Helper Text */}
        {!hasError && helperText && (
          <Text style={getHelperStyles()}>{helperText}</Text>
        )}
      </View>
    );
  }
);

Input.displayName = "Input";
