import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import { fonts, PLUS_COLOR, SEARCH_COLOR, THEME_COLOR, THEME_COLOR_BACKGROUND } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'

const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props
    const [search, setsearch] = useState('')

    const sendReset = () => {
        navigation.navigate('Login')
    }
    return (
        <>
            <SharedHeader navigation={navigation} name="Search" />
            <ScrollView>
                <View style={Styles.body}>
                    <View style={Styles.uploadView}>
                        <TextInput
                            placeholder="Search"
                            value={search}
                            onChangeText={text => setsearch(text)}
                            style={Styles.formInput}
                            placeholderTextColor={SEARCH_COLOR}
                        />
                        <TouchableOpacity style={Styles.passwordView} onPress={() => setsecure(!secure)}>
                            <Image source={require('../../../Assets/Images/search.png')}
                                style={Styles.passwordHide}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
