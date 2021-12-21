import React from 'react'
import { StyleSheet, Dimensions, StatusBar } from 'react-native'
import { THEME_COLOR, LIGHT_GRAY, WHITE, OFF_WHITE, BACKGROUND, NAVY_BLUE, BLACK, fonts, THEME_COLOR_BACKGROUND, fontSize } from '../../../Config/Config'
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const overlayHeight = height * 0.45
const Styles = ScaledSheet.create({
    SafeAreaView: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: NAVY_BLUE,
        marginBottom: 15
    },
    scrollView: {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 33,
        borderTopLeftRadius: 37,
        borderTopRightRadius: 37,
        backgroundColor: BACKGROUND,
    },
    container: {
        marginTop: height * 0.04,
        justifyContent: 'space-around'
    },
    host: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: WHITE,
        shadowOffset: {
            width: 0,
            height: 5
        },
        elevation: 10,
        shadowRadius: 60.27,
        shadowOpacity: 0.34,
        padding: 10,
        borderRadius: 10,
        backgroundColor: THEME_COLOR
    },
    addImage: {
        marginRight: 15,
        width: 20,
        height: 20,
    },
    text: {
        color: WHITE,
        fontSize: 15,
        fontWeight: 'bold'
    },
    textInputcontainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    textInput: {
        backgroundColor: LIGHT_GRAY,
        borderRadius: 10,
        width: width * 0.92,
        paddingLeft: 15,
    },
    imageCompetition: {
        width: '340@msr',
        height: '260@msr',
        position: 'relative'
    },
    overlay: {
        borderRadius: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 99999
    },
    down: {
        display: 'flex',
        position: 'absolute',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        bottom: 0,
        marginBottom: '20@msr'
    },
    pro: {
        backgroundColor: THEME_COLOR_BACKGROUND,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 5
    },
    down1: {
        // left: width * 0.05,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 7,
        marginBottom: 5
    },
    down2: {
        left: width * 0.03,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 19,
        marginBottom: 5
    },
    down1Text: {
        color: WHITE,
        fontSize: 18,
        // fontWeight: 'bold'
    },
    down2Text: {
        color: WHITE,
        fontSize: fontSize.eigthteen,
        fontFamily: fonts.bold
    },
    proText: {
        flexDirection: 'row',
        textAlign: 'center',
        color: WHITE,
        fontFamily: fonts.regular,
        fontSize: fontSize.twelve,
    },
})

export default Styles