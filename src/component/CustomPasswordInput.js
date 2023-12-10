import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { ICONS } from '../constants/icon';
import { COLORS } from '../constants';
import Feather from 'react-native-vector-icons/Feather';

const CustomPasswordInput = ({
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  style,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={toggleSecureTextEntry}>
        {secureTextEntry ? <Feather name="eye-off" size={20} color={COLORS.french_gray} />
          : <Feather name="eye" size={25} color={COLORS.french_gray} />
        }
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  input: {
    flex: 1,
    color: COLORS.text,
  },
  iconContainer: {
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default CustomPasswordInput;
