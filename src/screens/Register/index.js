import React from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    viewChild: {
        margin: 20,
    },
    txtKey: {
        color: COLORS.txtKey,
        fontWeight: '400',
        fontSize: 20
    },
    txtValue: {
        color: COLORS.txtKey,
        fontWeight: '400',
        fontSize: 16,
        opacity: 0.7,
        marginTop: 10,
    },
    viewProfileImg: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    viewEditPhoto: {
        marginTop: -15,
        backgroundColor: COLORS.background,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 20,
    },
    imgCamera: {
        resizeMode: 'contain', height: 20, width: 20
    },
    txtEdit: {
        color: COLORS.txtKey,
        fontWeight: '400',
        fontSize: 16,
        marginStart: 10,
    },
    profileImg: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
        borderRadius: 140
    },
    viewTextInput: {
        marginTop: 20,

    },
    txtKeyInput: {
        color: COLORS.txtKey,
        fontWeight: '400',
        fontSize: 16,
        opacity: 0.7,
        marginTop: 10,
    },
    txtInput: {
        width: '100%',
        height: 50,
        backgroundColor: COLORS.background,
        borderColor: 'lightgrey',
        paddingStart: 10,
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 14,
        fontWeight: '400',
        marginTop: 10,
        color: COLORS.black,
    },

    bottomView: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        padding: 10,
        paddingStart: 20,
        paddingEnd: 20,

    },

    touchBtn: {
        width: '100%',
    },
    txtBtn: {
        backgroundColor: COLORS.btnBG,
        padding: 15,
        color: COLORS.white,
        textAlign: 'center',
        borderRadius: 8,
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Lato-Bold',
        overflow: 'hidden',
    },



});

export default styles;
