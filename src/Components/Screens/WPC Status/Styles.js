import React from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import { fonts, GRAY, THEME_COLOR_BACKGROUND, WHITE, PLUS_COLOR, PLACEHOLDER_COLOR, THEME_COLOR, fontSize, BOTTOM_COLOR, LINE_COLOR, TEXT_COLOR } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';
import { paddingLeft } from 'styled-system';

const { width, height } = Dimensions.get('screen')
const padding = '45@msr';
const Styles = ScaledSheet.create({
    scrollView: {
        width,
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    body: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: width * 0.95,
        marginBottom: padding
    },
    statusView: {
        display: 'flex',
        paddingTop: padding,
        paddingBottom: padding,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: LINE_COLOR,
        borderBottomWidth: 1,
        width: width * 0.95,

    },
    statusText: {
        fontSize: fontSize.twentysix,
        color: TEXT_COLOR,
        fontFamily: fonts.medium,
        paddingBottom: '7@msr',
        textAlign: 'center',
    },
    statusText1: {
        fontSize: fontSize.twenty,
        color: WHITE,
        fontFamily: fonts.bold,
        paddingBottom: '7@msr',
        textAlign: 'center',
    },
    statusText2: {
        fontSize: fontSize.sixteen,
        color: WHITE,
        fontFamily: fonts.regular,
        textAlign: 'center',
        paddingBottom: '7@msr'
    },
    statusText3: {
        fontSize: fontSize.fourteen,
        color: WHITE,
        fontFamily: fonts.regular,
        paddingBottom: '7@msr',
        textAlign: 'center',
        width: width * 0.8
    },
})

export default Styles