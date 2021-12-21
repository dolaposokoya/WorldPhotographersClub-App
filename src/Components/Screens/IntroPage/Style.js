import React from 'react'
import { StyleSheet, Dimensions, StatusBar } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { BLACK, fonts, THEME_COLOR, WHITE, THEME_COLOR_BACKGROUND, fontSize } from '../../../Config/Config'


const { width, height } = Dimensions.get('window');
// Window is the right option
const imageView = height * 0.8;
const colorView = height * 0.2;
const Styles = ScaledSheet.create({
    absoluteView: {
        width,
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    absoluteViewImage: {
        width: width,
        height: imageView,
        width: '390@msr',
        // height: '693@msr',
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        // transform: [{
        //     scale: 0.1
        // }]
    },
    slideImage: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height * 0.15,
        width: width * 0.8,
    },
    btnView: {
        width: width,
        height: colorView,
        marginBottom: '10@msr',
        alignItems: 'center',
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    slideButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.005,
        width: width * 0.8,
    },
    slideImageCover: {
        width: width * 0.6,
        height: height * 0.085,
        resizeMode: 'contain',
    },
    btnSlideImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME_COLOR,
        paddingTop: '16@msr',
        paddingBottom: '16@msr',
        width: width * 0.8,
        marginBottom: '17@msr',
        borderRadius: '4@msr',
    },
    slideButtonText: {
        color: WHITE,
        fontSize: fontSize.sixteen,
        fontFamily: fonts.semiBold
    },
    slideButtonText1: {
        color: WHITE,
        fontSize: fontSize.eigthteen,
        fontFamily: fonts.avenirMedium
    },
})

export default Styles