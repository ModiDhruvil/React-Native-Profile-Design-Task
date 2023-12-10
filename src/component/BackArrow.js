import { View, Text, Image } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../constants';

const BackArrow = ({style}) => {
  return (
    <View style={style}>
      <MaterialIcons name="keyboard-backspace" size={30} color={COLORS.beaver} />
    </View>
  );
};

export default BackArrow;
