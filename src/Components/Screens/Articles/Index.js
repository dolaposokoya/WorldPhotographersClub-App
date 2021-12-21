import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity, RefreshControl } from 'react-native'
import { OTHER_GRAY, THEME_COLOR_BACKGROUND, WHITE } from '../../../Config/Config';
import CompetitionHeader from '../../Shared/SharedHeader/CompetitionHeader';
import Styles from './Style';
import { connect } from 'react-redux';
import { CompetitionAction } from '../../../Actions/CompetitionsAction'
import BottomTabs from '../../Shared/BottomTabs/BottomTabs';
import MessageModal from '../../Shared/Modal/MessageModal';



const { width, height } = Dimensions.get('window');
function Index(props) {
    const { navigation } = props
    const [refreshing, setRefreshing] = useState(false);

    const [message, setmessage] = useState('')
    const [errorType, seterrorType] = useState('')
    const [openModal, setopenModal] = useState(false)

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
            {/* {loading && <Loader />} */}
            {openModal && <MessageModal closeModal={closeModal} message={message} errorType={errorType} />}
            <CompetitionHeader navigation={navigation} name="Articles" />
            <ScrollView
                style={{
                    backgroundColor: THEME_COLOR_BACKGROUND,
                    flex: 1,
                    height
                }}
                contentContainerStyle={{
                    justifyContent: 'center',
                    // alignItems: 'center'
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }>
                <View style={Styles.container}>
                    <Text style={Styles.articles}>Articles</Text>
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
