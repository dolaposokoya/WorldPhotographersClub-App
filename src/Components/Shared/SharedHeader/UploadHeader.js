import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, Alert } from 'react-native'
import Styles from './Style';
import { INTEREST_COLOR } from '../../../Config/Config';
import CustomSheet from '../../Sheets/CustomSheet/CustomSheet';
import { moderateScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
export default function UploadHeader(props) {
    const { name, navigation, saveDetails, option, page, goBack } = props
    return (
        <>
            <View style={{
                width: width,
                height: moderateScale(70),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: INTEREST_COLOR
            }}>
                {page !== 'payment' ? <View style={Styles.backBtn} /> :
                    <TouchableOpacity onPress={goBack} style={Styles.cancelBtn}>
                        <Image source={require('../../../Assets/Images/left.png')} style={Styles.backBtn1} />
                    </TouchableOpacity>
                }
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={Styles.text}>{name}</Text>
                </View>
                <TouchableOpacity onPress={saveDetails} style={page !== 'payment' ? Styles.cancelBtn : Styles.saveBtn}>
                    <Text style={Styles.cancelBtnText}>{option}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
