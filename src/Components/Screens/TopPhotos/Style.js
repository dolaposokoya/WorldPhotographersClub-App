import React from 'react'
import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { THEME_COLOR, LIGHT_GRAY, WHITE, OFF_WHITE, BACKGROUND, NAVY_BLUE, THEME_COLOR_BACKGROUND } from '../../../Config/Config'

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    loaderStyle: {
        alignItems: "center",
    },
    scrollView: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: THEME_COLOR_BACKGROUND,
        elevation: 10,
        marginBottom: '20@msr'
    },
    loadMore: {
        marginTop: '10@msr',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadMoreText: {
        width: '30@msr',
        height: '30@msr',
    }
})

export default Styles