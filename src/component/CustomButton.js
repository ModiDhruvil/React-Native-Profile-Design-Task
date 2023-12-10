import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomButton = ({children, style}) => {
  return <Text style={style}>{children}</Text>;
};

export default CustomButton;
