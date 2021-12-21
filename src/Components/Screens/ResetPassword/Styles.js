import React from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import { fonts, GRAY, THEME_COLOR_BACKGROUND, WHITE, PLUS_COLOR, PLACEHOLDER_COLOR, THEME_COLOR, BADGE_COLOR, fontSize } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    body: {
        height,
        width,
        backgroundColor: THEME_COLOR_BACKGROUND,
        alignItems: 'center'
    },
    uploadView: {
        marginTop: height * 0.05,
        marginBottom: height * 0.02,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 79,
        height: 79,
    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },
    formView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: fonts.semiBold,
        fontSize: fontSize.eigthteen,
        color: WHITE,
        textAlign: 'center',
    },
    formInput: {
        width: width * 0.89,
        fontFamily: fonts.regular,
        paddingTop: '15@msr',
        paddingBottom: '15@msr',
        paddingLeft: '15@msr',
        fontSize: fontSize.sixteen,
        backgroundColor: WHITE,
        borderWidth: 0,
        borderRadius: 4,
        marginBottom: '18@msr',
    },
    passwordView: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        top: '20@msr',
        width: '25@msr',
        height: '25@msr',
    },
    passwordHide: {
        width: 25,
        height: 25,
        right: 0,
        top: 0,
    },
    btnView: {
        width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchView: {
        width: width * 0.89,
        backgroundColor: THEME_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        paddingTop: 18,
        paddingBottom: 18,
    },
    touchViewText: {
        textDecorationLine: 'none',
        fontFamily: fonts.medium,
        fontSize: 16,
        color: WHITE
    },
})

export default Styles