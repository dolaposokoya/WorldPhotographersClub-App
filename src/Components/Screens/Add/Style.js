import React from 'react'
import { StyleSheet, Dimensions, StatusBar } from 'react-native'
import { THEME_COLOR, LIGHT_GRAY, WHITE, OFF_WHITE, BACKGROUND, NAVY_BLUE, BLACK } from '../../../Config/Config'

const { width, height } = Dimensions.get('screen')
const overlayHeight = height * 0.45
const Styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        marginBottom: 15
    },
    scrollViewOld: {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 33,
        borderTopLeftRadius: 37,
        borderTopRightRadius: 37,
        backgroundColor: BACKGROUND,
    },
    scrollView: {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: -(height * 0.05),
        borderTopLeftRadius: 37,
        borderTopRightRadius: 37,
        backgroundColor: WHITE,
    },
    container: {
        marginTop: height * 0.09,
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
        marginTop: height * 0.04,
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
        borderRadius: 10,
        width: width * 0.92,
        minHeight: overlayHeight,
        // height: overlayHeight,
        position: 'relative'
    },
    top: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    top1: {
        top: 10,
        right: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: WHITE,
        borderRadius: 19
    },
    down: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        bottom: overlayHeight * -0.40,
        // bottom: overlayHeight * -0.45,
        width: width * 0.92,
    },
    down1: {
        left: width * 0.05,
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
        fontSize: 25,
        fontWeight: 'bold',
        width: width * 0.7,
    },
    trophyImage: {
        width: 20,
        height: 20,
    },
    down3Text: {
        flexDirection: 'row',
        paddingLeft: 10,
        width: width * 0.7,
        color: WHITE,
        fontWeight: '800'
    },
})

export default Styles