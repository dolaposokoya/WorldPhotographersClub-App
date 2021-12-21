import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, ScrollView, StatusBar } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { fonts, INTEREST_COLOR, THEME_COLOR } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'
import ArrayList from '../../Shared/ArrayList/ArrayList'


const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props;

    const Quota = [
        {
            id: "1",
            feature: "Multiplication Factor",
            limit: "-",
            used: '1.0X'
        },
        {
            id: "2",
            feature: "Photos",
            limit: "1000",
            used: 0
        },
        {
            id: "3",
            feature: "Blogs",
            limit: "Unlimited",
            used: 0
        },
        {
            id: "4",
            feature: "Groups",
            limit: "1",
            used: 0
        },
        {
            id: "5",
            feature: "Videos",
            limit: "Unlimited",
            used: 0
        },
        {
            id: "6",
            feature: "Portfolios",
            limit: "3",
            used: 0
        },
        {
            id: "7",
            feature: "Clubs",
            limit: "1",
            used: 0
        },
        {
            id: "8",
            feature: "Free Entry to Competitions",
            limit: "0",
            used: 0
        },
        {
            id: "9",
            feature: "Free Portfolio Reviews",
            limit: "0",
            used: 0
        },
        {
            id: "10",
            feature: "Free Projects Quota",
            limit: "0",
            used: 0
        },
        {
            id: "11",
            feature: "Free Courses Quota",
            limit: "0",
            used: 0
        },
    ];



    return (
        <>
            <StatusBar
                hidden={false}
                animated={true}
                barStyle='light-content'
                showHideTransition="slide"
                backgroundColor={INTEREST_COLOR}
            />
            <SharedHeader navigation={navigation} name={`Quota Details`} />
            <ScrollView style={Styles.scrollView}
                contentContainerStyle={Styles.contentContainerStyle}
            >
                <View style={Styles.userStatView1}>
                    <Text style={[Styles.userStatViewText, { fontFamily: fonts.bold, color: THEME_COLOR }]}>FEATURE</Text>
                    <Text style={[Styles.userStatViewText, { fontFamily: fonts.bold, color: THEME_COLOR }]}>LIMIT</Text>
                    <Text style={[Styles.userStatViewText, { fontFamily: fonts.bold, color: THEME_COLOR }]}>USED</Text>
                </View>
                <ArrayList
                    style={{
                        paddingBottom: moderateScale(30),
                    }}
                    data={Quota}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[Styles.userStatView]}>
                            <View style={Styles.quotaData}>
                                <Text style={Styles.userStatViewText}>{item.feature}</Text>
                            </View>
                            <View style={Styles.quotaData1}>
                                <Text style={Styles.userStatViewText}>{item.limit}</Text>
                            </View>
                            <View style={Styles.quotaData2}>
                                <Text style={Styles.userStatViewText}>{item.used}</Text>
                            </View>
                        </View>
                    )}
                />
            </ScrollView>
        </>
    )
}
