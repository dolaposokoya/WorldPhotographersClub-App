import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, StatusBar, Alert } from 'react-native'
import { INTEREST_COLOR } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'
import { connect } from 'react-redux';
import { GetCookieAction, DeleteCookieAction } from '../../../Actions/CookieAction'
import Loader from '../../Shared/Loader/Loader'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated from 'react-native-reanimated'
import ArrayList from '../../Shared/ArrayList/ArrayList'


const { width, height } = Dimensions.get('screen')

function Index(props) {
    const { navigation } = props
    const interestOptions = [
        {
            id: "1",
            name: "FAQ",
        },
        {
            id: "2",
            name: "Contact Support",
        },
        {
            id: "3",
            name: "Rate us on App Store",
        },
    ]
    const [data, setdata] = useState(interestOptions)


    const goToScreen = (screen) => {
        navigation.navigate(screen)
    }

    const interest = ({ item }) => {
        return (
            <TouchableOpacity style={Styles.interestContainer} onPress={() => goToScreen(item.name)}>
                <View style={Styles.textView}>
                    <Text style={Styles.interest}>{item.name}</Text>
                </View>
                <TouchableOpacity style={Styles.imageView} onPress={() => goToScreen(item.name)}>
                    <Image source={require('../../../Assets/Images/uparrow.png')} style={Styles.image} />
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <StatusBar
                animated={true}
                barStyle='light-content'
                showHideTransition="slide"
                backgroundColor={INTEREST_COLOR}
            />
            <SharedHeader navigation={navigation} name="Help & Feedback" />
            <Animated.ScrollView style={Styles.scrollView}>
                <View style={Styles.body}>
                    <ArrayList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={interest}
                    />
                </View>
            </Animated.ScrollView>
        </>
    )
}


const mapStateToProps = state => {
    const { cookie } = state.CookieReducer;
    return {
        cookie
    };
};

const AccountSettings = connect(
    mapStateToProps,
    { GetCookieAction, DeleteCookieAction },
)(Index);
export default AccountSettings;