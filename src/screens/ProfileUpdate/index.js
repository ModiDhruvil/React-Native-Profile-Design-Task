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
        flex: 1,
    },

    closeImg: {
        resizeMode: 'contain',
        height: 40,
        width: 40,
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




    profileTxt: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'Abel-Regular',
    },
    profileDec: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'abel-regular',
    },
    selectPhotoView: {
        flexDirection: 'row',
        height: 48,
        width: '100%',
        backgroundColor: '#F1F5F9',
        borderRadius: 15,
        marginTop: 20,
        alignItems: 'center',
    },
    photoView: {
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginStart: 4,
    },
    avatarView: {
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoTxt: {
        fontFamily: 'Abel-Regular',
        color: 'white',
    },
    avatarTxt: {
        fontFamily: 'Abel-Regular',
        color: 'white',
    },
    profileImgView: {
        backgroundColor: '#F1F5F9',
        height: 300,
        width: 300,
        borderRadius: 500,
        borderWidth: 1,
        borderColor: '#020617',
    },
    bottomView: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        padding: 10,
        // borderWidth: 2,
        borderTopColor: '#f3f3f3',
    },

    touchBtn: {
        width: '100%',
    },
    txtBtn: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 15,
        // backgroundColor: '#f3f3f3',
        color: '#1898A0',
        textAlign: 'center',
        borderRadius: 8,
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'Lato-Bold',
        overflow: 'hidden',
    },
    editCameraBtn: {
        backgroundColor: 'white',
        height: 40,
        width: 110,
        borderRadius: 18,
        marginTop: 18,
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    viewBSUpload: {
        width: '100%',
        height: '30%',
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    viewButton: {
        width: '85%',
        backgroundColor: 'black',
        borderRadius: 8,
        padding: 15,
        marginTop: 15,
    },
    txtButton: {
        textAlign: 'center',
        fontFamily: 'Lato-Bold',
        color: COLORS.white,
        fontSize: 14,
    },
    viewButtonCancel: {
        width: '85%',
        backgroundColor: 'black',
        borderRadius: 8,
        padding: 15,
        marginTop: 15,
    },
    txtButtonCancel: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Lato-SemiBold',
        fontSize: 14,
    },
});

export default styles;
