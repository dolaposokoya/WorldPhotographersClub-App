import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import { fonts, PLUS_COLOR, THEME_COLOR, THEME_COLOR_BACKGROUND } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'

const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props
    const [email, setemail] = useState('')

    const sendRequest = () => {
        navigation.navigate('Login')
    }
    return (
        <>
            <SharedHeader navigation={navigation} name="Resend Activation Mail" />
            <>
                <View style={Styles.body}>
                    <View style={Styles.uploadView}>
                        <Image source={require('../../../Assets/Images/password.png')}
                            style={Styles.image}
                        />
                    </View>
                    <View style={Styles.textView}>
                        <Text style={Styles.text}>Enter the email id associated</Text>
                        <Text style={Styles.text}>with your account</Text>
                    </View>
                    <View style={Styles.textView}>
                        <TextInput
                            placeholder="Please enter email address"
                            value={email}
                            onChangeText={text => setemail(text)}
                            style={Styles.formInput}
                        />
                    </View>
                    <TouchableOpacity style={Styles.touchView} onPress={() => sendRequest()}>
                        <Text style={Styles.touchViewText}>Send Activation Mail</Text>
                    </TouchableOpacity>
                </View>
            </>
        </>
    )
}
