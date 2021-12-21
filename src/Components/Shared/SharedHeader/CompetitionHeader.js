import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, Alert, StatusBar } from 'react-native'
import Styles from './Style';
import CookieManager from '@react-native-cookies/cookies';
import { HEADER_COLOR, INTEREST_COLOR } from '../../../Config/Config';
import CustomSheet from '../../Sheets/CustomSheet/CustomSheet';

const { width, height } = Dimensions.get('screen')
export default function CompetitionHeader(props) {
    const { back, name, children, navigation, profile, editProfile, saveDetails, editUser, option } = props
    return (
        <>
            <StatusBar
                backgroundColor={HEADER_COLOR}
            />
            <View style={[Styles.headerView, {
                // borderBottomEndRadius: 7,
                // borderBottomLeftRadius: 7,
            }]}>
                <View style={Styles.flexItem}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('ProfileStack', { screen: 'ProfilePage' })}>
                        <Image source={require('../../../Assets/Images/user.png')} style={Styles.menus} />
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <Image source={require('../../../Assets/Images/search.png')} style={Styles.menus} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={Styles.text}>{name}</Text>
                </View>
                <View style={Styles.flexItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Image source={require('../../../Assets/Images/bell.png')} style={Styles.menus} />
                        <View style={Styles.notification} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Image source={require('../../../Assets/Images/more.png')} style={Styles.menus} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
