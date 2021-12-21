import React, { useEffect, useState, useContext } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, ImageBackground, StatusBar, ScrollView } from 'react-native'
import { BLACK, THEME_COLOR, THEME_COLOR_BACKGROUND, WHITE } from '../../../Config/Config'
import Loader from '../../Shared/Loader/Loader'
import Style from './Style'
import { NavigationContext } from '../../../Context/NavigationContext';
import { connect } from 'react-redux';
import { GetCookieAction } from '../../../Actions/CookieAction'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MessageModal from '../../Shared/Modal/MessageModal'


const { height, width } = Dimensions.get('screen')
function Index(props) {
    const { navigation, GetCookieAction } = props
    const [page, setpage] = useContext(NavigationContext);
    const [checking, setchecking] = useState(false)
    const [message, setmessage] = useState('')
    const [openModal, setopenModal] = useState(false)
    const [errorType, seterrorType] = useState('');

    useEffect(() => {
        checkUser()
        const unsubscribe = navigation.addListener('focus', () => {
            checkUser()
        });
        return () => unsubscribe;
    }, [navigation])

    const checkUser = async () => {
        try {
            setchecking(true)
            const basicAuth = await AsyncStorage.getItem('@basicAuth');
            await GetCookieAction(response => {
                const { success, data } = response
                if (success === true) {
                    if (data.value === basicAuth) {
                        setpage('Home')
                        navigation.navigate('Home')
                        setTimeout(() => {
                            setchecking(false)
                        }, 2000);
                    }
                    else {
                        setpage('IntroPage')
                        setchecking(false)
                        return false
                    }
                }
                else {
                    setpage('IntroPage')
                    setchecking(false)
                    return false
                }
            })
        } catch (error) {
            console.log('Error', error)
            setchecking(false)
            seterrorType('warning')
            setmessage(error.message)
            setopenModal(true)
        }
    }

    const closeModal = (state) => {
        setmessage('')
        seterrorType('')
        setopenModal(state)
    }
    return (
        <>
            {openModal && <MessageModal closeModal={closeModal} message={message} errorType={errorType} />}
            {checking ? <Loader />
                :
                <>
                    <StatusBar
                        hidden={false}
                        barStyle={'light-content'}
                    />

                    <ScrollView style={Style.absoluteView}>
                        {/* <ScrollView style={Style.absoluteView}> */}
                        <ImageBackground
                            style={Style.absoluteViewImage}
                            source={require('../../../Assets/Images/slide.png')}>
                            <View style={Style.slideImage}>
                                <Image source={require('../../../Assets/Images/slideintro.png')}
                                    style={Style.slideImageCover}
                                />
                                <Text style={Style.slideButtonText1}>Everyone's A Photographer</Text>
                            </View>
                        </ImageBackground>
                        <View style={Style.btnView}>
                            <View style={Style.slideButton}>
                                <TouchableOpacity style={Style.btnSlideImage} onPress={() => navigation.navigate('Login')}>
                                    <Text style={Style.slideButtonText}>Sign In</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[Style.btnSlideImage, { backgroundColor: WHITE }]} onPress={() => navigation.navigate('SignUp')}>
                                    <Text style={[Style.slideButtonText, { color: BLACK }]}>Create an Account</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </>
            }
        </>
    )
}

const mapStateToProps = state => {
    const { cookie } = state.CookieReducer;
    return {
        cookie
    };
};

const IntroPage = connect(
    mapStateToProps,
    { GetCookieAction },
)(Index);
export default IntroPage;

