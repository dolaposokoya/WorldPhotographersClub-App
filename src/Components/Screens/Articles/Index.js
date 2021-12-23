import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity, RefreshControl, StatusBar } from 'react-native'
import { INTEREST_COLOR, THEME_COLOR_BACKGROUND } from '../../../Config/Config';
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Style';
import { connect } from 'react-redux';
import { CompetitionAction } from '../../../Actions/CompetitionsAction'
import BottomTabs from '../../Shared/BottomTabs/BottomTabs';
import MessageModal from '../../Shared/Modal/MessageModal';
import ArrayList from '../../Shared/ArrayList/ArrayList';




const { width, height } = Dimensions.get('window');
function Index(props) {
    const { navigation } = props
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setloading] = useState(false)

    const [message, setmessage] = useState('')
    const [errorType, seterrorType] = useState('')
    const [openModal, setopenModal] = useState(false)

    const ArticleImages = [
        {
            id: "1",
            image: require('../../../Assets/Images/art.png'),
            name: "5 Best ways to earn money as a...",
            info: "Published By WPC Official Account On Jun'09,2021"
        },
        {
            id: "2",
            image: require('../../../Assets/Images/art1.png'),
            name: "top 2021 photography trends you...",
            info: "Published By WPC Official Account On Jun'09,2021"
        },
        {
            id: "3",
            image: require('../../../Assets/Images/art2.png'),
            name: "5 Best ways to earn money as a...",
            info: "Published By WPC Official Account On Jun'09,2021"
        },
    ]
    const onRefresh = async () => {
        setRefreshing(true)
        await getCompetitionData();
        setRefreshing(false);
    }


    const closeModal = (state) => {
        setmessage('')
        seterrorType('')
        setopenModal(state)
    }
    return (
        <>
            {loading && <Loader />}
            {openModal && <MessageModal closeModal={closeModal} message={message} errorType={errorType} />}
            <StatusBar
                backgroundColor={INTEREST_COLOR}
            />
            <SharedHeader navigation={navigation} name="Articles" />
            <ScrollView
                style={{
                    backgroundColor: THEME_COLOR_BACKGROUND,
                    flex: 1,
                    width
                }}
                contentContainerStyle={{
                    justifyContent: 'center',
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }>
                <View style={Styles.container}>
                    <Text style={Styles.articles}>Latest Articles</Text>

                    <View>
                        <ArrayList
                            data={ArticleImages}
                            renderItem={({ item }) => (
                                <Image
                                    source={item.image}
                                    style={Styles.artImage}
                                />
                            )}
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </View>
            </ScrollView>
            <BottomTabs focused="article" navigation={navigation} />
        </>
    )
}

const mapStateToProps = state => {
    const { competitionData } = state.CompetitionReducer;
    return {
        competitionData
    };
};

const Competition = connect(
    mapStateToProps,
    { CompetitionAction },
)(Index);
export default Competition;
