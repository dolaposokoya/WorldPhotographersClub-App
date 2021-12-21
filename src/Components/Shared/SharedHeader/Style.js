import React from 'react';
import { StyleSheet, Dimensions } from 'react-native'
import { fonts, fontSize, GRAY_TEXT, HEADER_COLOR, INTEREST_COLOR, THEME_COLOR, WHITE } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';


const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: HEADER_COLOR,
        height: height * 0.12,
        width,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 50.27,
        elevation: '90@vs',
    },
    text: {
        color: WHITE,
        fontFamily: fonts.bold,
        fontSize: fontSize.twenty
    },

    flexItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    headerViewMain: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        backgroundColor: INTEREST_COLOR
    },
    headerView: {
        width: width,
        height: '70@msr',
        // height: '106@vs',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: HEADER_COLOR,
    },
    backBtnContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    saveBtn: {
        backgroundColor: THEME_COLOR,
        borderRadius: '4@msr',
        opacity: .57,
        padding: '7@msr',
        marginRight: '10@msr'
    },
    saveBtnContainer: {
        backgroundColor: THEME_COLOR,
        borderRadius: '4@msr',
        padding: '6@msr',
        // padding: '15@msr',
        marginRight: '10@msr'
    },
    cancelBtn: {
        borderRadius: 4,
        padding: '15@msr',
        marginRight: '10@s',
    },
    cancelBtnText: {
        color: WHITE,
        fontSize: fontSize.twelve,
        fontFamily: fonts.medium
    },
    saveBtnContainerText: {
        color: WHITE,
        fontSize: fontSize.twelve,
        fontFamily: fonts.medium
    },
    profileContainer: {
        marginTop: height * 0.01
    },

    backBtn1: {
        // margin: '15@s',
        height: '16@vs',
        width: '16@vs',
    },
    backBtn: {
        marginLeft: '15@s',
        height: '16@vs',
        width: '16@vs',
    },
    menus: {
        margin: '5@msr',
        height: '17@msr',
        width: '17@msr',
    },
    notification: {
        position: 'absolute',
        backgroundColor: '#F31954',
        width: 9,
        height: 9,
        right: 2,
        top: 5,
        borderRadius: 50
    }
})
export default Styles
