import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity } from "react-native";
import { fonts, fontSize, WARNING, THEME_COLOR_BACKGROUND, SUCCESS, ERROR, WHITE, DARK_COLOR } from "../../../Config/Config";
import { ScaledSheet } from 'react-native-size-matters';
import tick from '../../../Assets/Images/tick.png';

const { width, height } = Dimensions.get('window');
const MessageModal = (props) => {

    const { closeModal, openModal, errorType, message } = props
    if (errorType === 'error') {
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={openModal}
                    onRequestClose={() => {
                        closeModal(false);
                    }}
                >
                    <View style={styles.centeredView1}>
                        <View style={styles.modalView}>
                            <View style={styles.errorView}>
                                <Image source={require('../../../Assets/Images/error.png')} style={styles.modalImage} />
                            </View>
                            <View style={styles.modalMessage}>
                                <Text style={styles.text}>{message}</Text>
                            </View>
                            <View style={styles.buttonYes}>
                                <TouchableOpacity
                                    style={[styles.button, { backgroundColor: ERROR }]}
                                    onPress={() => closeModal(false)}
                                >
                                    <Text style={styles.textStyleClose}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
    else {
        return (
            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={openModal}
                    onRequestClose={() => {
                        closeModal(false);
                    }}
                >
                    <View style={styles.centeredView1}>
                        <View style={styles.modalView}>
                            <View style={errorType === 'warning' ? styles.warningView : styles.successView}>
                                <Image source={errorType === 'warning' ? require('../../../Assets/Images/warning.png') : require('../../../Assets/Images/checked.png')} style={styles.modalImage} />
                            </View>
                            <View style={styles.modalMessage}>
                                <Text style={styles.text}>{message}</Text>
                            </View>
                            <View style={styles.buttonYes}>
                                <TouchableOpacity
                                    style={[styles.button, { backgroundColor: errorType === 'warning' ? WARNING : SUCCESS }]}
                                    onPress={() => closeModal(false)}
                                >
                                    <Text style={styles.textStyleClose}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
};

const styles = ScaledSheet.create({
    centeredView: {
        position: 'absolute',
        height,
        justifyContent: "center",
        alignItems: "center",
    },
    centeredView1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    modalView: {
        backgroundColor: WHITE,
        borderRadius: '7@msr',
        width: width * 0.75,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: '2@msr'
        },
        shadowOpacity: '0.25@msr',
        shadowRadius: '40@msr',
        elevation: '50@msr',
        paddingTop: '40@msr',

    },
    warningView: {
        width: '50@msr',
        height: '50@msr',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WARNING,
        position: 'absolute',
        top: '-29@msr',
    },
    successView: {
        width: '50@msr',
        height: '50@msr',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: SUCCESS,
        position: 'absolute',
        top: '-29@msr',
    },
    errorView: {
        width: '50@msr',
        height: '50@msr',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ERROR,
        position: 'absolute',
        top: '-29@msr',
    },
    modalImage: {
        width: '35@msr',
        height: '35@msr',
    },
    text: {
        color: DARK_COLOR,
        fontFamily: fonts.medium,
        fontSize: fontSize.twenty,
        textAlign: "center",
        paddingLeft: '7@msr',
        paddingRight: '7@msr',
    },
    textStyleClose: {
        color: WHITE,
        fontFamily: fonts.semiBold,
        fontSize: fontSize.eigthteen,
        textAlign: "center",
    },
    modalMessage: {
        width: width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '25@msr',
        paddingBottom: '25@msr',
    },
    buttonYes: {
        width: width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '12@msr',
        marginTop: '12@msr',
        borderWidth: 0,
    },
    button: {
        backgroundColor: THEME_COLOR_BACKGROUND,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '12@msr',
        paddingBottom: '12@msr',
        width: width * 0.67,
        borderRadius: '7@msr',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: '0.25@msr',
        shadowRadius: '4@msr',
        elevation: '45@msr',
    },
});

export default MessageModal;