import React from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import { fonts, GRAY, THEME_COLOR_BACKGROUND, WHITE, PLUS_COLOR, PLACEHOLDER_COLOR, THEME_COLOR, fontSize, TROPHY_COLOR, TROPHY_TEXT_COLOR } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';
import { justifyContent } from 'styled-system';

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
    },
    card: {
        backgroundColor: THEME_COLOR_BACKGROUND,
        marginBottom: height * 0.01,
        marginTop: height * 0.02,
        width: width,
    },
    profileImage: {
        marginTop: height * 0.02,
        borderRadius: '50@msr',
        width: '45@msr',
        height: '45@msr',
        marginLeft: '10@msr',
    },
    text: {
        color: WHITE,
        fontFamily: fonts.bold,
        fontSize: fontSize.sixteen,
    },
    profileText: {
        color: WHITE,
        opacity: 0.57,
        fontSize: fontSize.twelve,
        fontFamily: fonts.regular
    },
    profileDate: {
        color: WHITE,
        opacity: 0.57,
        fontSize: fontSize.ten,
        fontFamily: fonts.regular
    },
    profileImageView: {
        marginTop: '20@msr',
        width: width,
        height: '200@msr',
    },
    profileImageViewImg: {
        width: width,
        height: '90%',
        resizeMode: 'cover'
    },
    prevComments: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '7@msr',
        width: width * 0.9,
    },
    commentViewImg: {
        marginTop: '20@msr',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    commentImg: {
        width: '45@msr',
        height: '45@msr',
        borderRadius: '50@msr',
        // borderWidth: 2,
        // borderColor: 'red',
        resizeMode: 'cover'
    },
    pointerImg: {
        width: '18@msr',
        height: '15@msr',
        resizeMode: 'cover'
    },
    prevCommentView: {
        marginTop: '5@msr',
        marginRight: '28@msr',
        marginLeft: '30@msr',
    },
    prevCommentViewText: {
        color: WHITE,
        paddingLeft: '17@msr',
        fontSize: fontSize.fourteen,
        fontFamily: fonts.regular
    },
    flexRow1: {
        marginTop: '-20@msr',
        width: width * 0.95,
    },
    flexRow1Image: {
        marginRight: '10@msr',
        width: '20@msr',
        height: '18@msr',
    },
    commentView: {
        justifyContent: 'flex-start',
        width: width * 0.9,
        marginLeft: '10@msr',
    },
    likes: {
        marginLeft: '10@msr',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: '5@msr',
    },
    like: {
        fontSize: fontSize.ten,
        fontFamily: fonts.regular,
        color: WHITE,
        opacity: 0.57,
        paddingBottom: '5@msr',
        paddingRight: '5@msr',
    },
    commentText: {
        color: WHITE,
        marginLeft: '10@msr',
        fontSize: fontSize.fourteen,
        fontFamily: fonts.regular
    },
    commentText1: {
        color: WHITE,
        marginLeft: '10@msr',
        fontSize: fontSize.fourteen,
        fontFamily: fonts.regular,
        opacity: 0.57
    },

    inputView: {
        marginTop: '20@msr',
        marginBottom: '20@msr',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '8@msr',
        paddingBottom: '8@msr',
        paddingLeft: '10@msr',
        paddingRight: '10@msr',
        // backgroundColor: '#ADB3BC'
    },
    textInput: {
        backgroundColor: WHITE,
        width: '80%',
        borderRadius: '4@msr',
        paddingTop: '8@msr',
        paddingBottom: '8@msr',
        paddingRight: '15@msr',
        paddingLeft: '15@msr',
    },
    sendBtn: {
        backgroundColor: '#2A78D1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4@msr',
        paddingTop: '10@msr',
        paddingBottom: '10@msr',
        paddingRight: '15@msr',
        paddingLeft: '15@msr',
    },
    sendBtnText: {
        color: WHITE,
        fontFamily: fonts.regular,
        fontSize: fontSize.fourteen
    },

})

export default Styles