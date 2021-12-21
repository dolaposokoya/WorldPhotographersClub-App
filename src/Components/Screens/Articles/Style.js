import React from 'react'
import { StyleSheet, Dimensions, StatusBar } from 'react-native'
import { THEME_COLOR, LIGHT_GRAY, WHITE, OFF_WHITE, BACKGROUND, NAVY_BLUE, BLACK, THEME_COLOR_BACKGROUND, OTHER_GRAY, fonts, fontSize, BOTTOM_COLOR, CLOSED_COMP } from '../../../Config/Config'
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const overlayHeight = height * 0.45
const Styles = ScaledSheet.create({
    container: {
        marginTop: '15@msr',
        alignItems: 'center'
    },
    articles: {
        color: WHITE,
        fontSize: fontSize.sixteen,
        fontFamily: fonts.semiBold
    }
})

export default Styles