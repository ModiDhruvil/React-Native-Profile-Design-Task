import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import BackArrow from './BackArrow';
import { COLORS } from '../constants';
import CustomText from './CustomText';

const CustomHeaderCenter = ({ navigation, title }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginStart: 15,
        padding: 10,
      }}>
      <TouchableOpacity
        style={{ position: 'absolute', left: 0 }}
        onPress={() => navigation.goBack()}>
        <BackArrow />
      </TouchableOpacity>
      <CustomText style={styles.txtTitle}>{title}</CustomText>
    </View>
  );
};

export default CustomHeaderCenter;

const styles = StyleSheet.create({
  txtTitle: {
    fontWeight: '700',
    fontFamily: 'Lato-Bold',
    fontSize: 22,
    color: COLORS.white,
  },
});
