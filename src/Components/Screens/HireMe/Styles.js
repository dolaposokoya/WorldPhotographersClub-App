import React from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import { fonts, GRAY, THEME_COLOR_BACKGROUND, WHITE, PLUS_COLOR, PLACEHOLDER_COLOR, THEME_COLOR, fontSize, TROPHY_COLOR, TROPHY_TEXT_COLOR } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    scrollView: {
        width,
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    body: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: width * 0.99,
        marginBottom: '70@msr'
    },
    introView: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40@msr',
        marginBottom: '10@msr',
        width: width,
    },
    hireImg: {
        height: '79@msr',
        width: '75@msr',
        marginBottom: '15@msr'
    },
    introText: {
        fontFamily: fonts.semiBold,
        fontSize: fontSize.eigthteen,
        color: WHITE
    },
    introText: {
        fontFamily: fonts.semiBold,
        fontSize: fontSize.eigthteen,
        color: WHITE
    },
    inputText: {
        textAlign: 'left',
        fontFamily: fonts.medium,
        fontSize: fontSize.eigthteen,
        color: WHITE,
        paddingTop: '15@msr',
        paddingBottom: '10@msr',
        paddingLeft: '20@msr',
    },
    formInputEmail: {
        paddingTop: '12@vs',
        paddingBottom: '12@vs',
        paddingLeft: '15@msr',
        fontSize: fontSize.sixteen,
        fontFamily: fonts.regular,
        backgroundColor: WHITE,
        color: 'black',
        borderWidth: 0,
        borderRadius: '4@msr',
        width: width * 0.89,
    },
    btnView: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        paddingTop: '50@msr',
        paddingBottom: '20@msr',
        bottom: 0
    },

    nextBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: '4@msr',
        alignItems: 'center',
        backgroundColor: THEME_COLOR,
        width: width * 0.92,
        paddingTop: '14@vs',
        paddingBottom: '14@vs',
    },
    nextBtnText: {
        fontFamily: fonts.medium,
        alignSelf: 'center',
        fontSize: fontSize.sixteen,
        color: WHITE
    },
})

export default Styles