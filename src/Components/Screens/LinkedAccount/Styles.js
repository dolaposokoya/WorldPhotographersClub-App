import React from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import { fonts, GRAY, THEME_COLOR_BACKGROUND, WHITE, PLUS_COLOR, PLACEHOLDER_COLOR, THEME_COLOR, fontSize, BOTTOM_COLOR, LINE_COLOR, TEXT_COLOR, INPUT_TEXT } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';
import { paddingLeft } from 'styled-system';

const { width, height } = Dimensions.get('screen')
const padding = '3@msr';
const borderWidth = width * 0.91;
const Styles = ScaledSheet.create({
    scrollView: {
        width,
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    body: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: width * 0.97,
        marginBottom: padding
    },
    accountView: {
        display: 'flex',
        paddingTop: '10@msr',
        paddingBottom: '10@msr',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopColor: LINE_COLOR,
        borderTopWidth: 1,
        borderBottomColor: LINE_COLOR,
        borderBottomWidth: 1,
        width: borderWidth,
    },
    accountText: {
        fontSize: fontSize.sixteen,
        color: WHITE,
        fontFamily: fonts.regular,
        textAlign: 'left',
        paddingLeft: padding,
        paddingBottom: padding,
    },
    accountText1: {
        fontSize: fontSize.sixteen,
        color: WHITE,
        fontFamily: fonts.medium,
        textAlign: 'left',
        paddingLeft: padding,
        paddingBottom: padding,
    },
    accountImage: {
        height: '35@msr',
        width: '49@msr',
    },
})

export default Styles