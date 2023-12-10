import {TextInput} from 'react-native';
import React from 'react';

const CustomTextInput = ({
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  editable,
  keyboardType,
  maxLength,
  style,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChangeText}
      style={style}
      editable={editable}
      returnKeyType="done"
      autoCapitalize="none"
      maxLength={maxLength}
      keyboardType={keyboardType}
    />
  );
};

export default CustomTextInput;
