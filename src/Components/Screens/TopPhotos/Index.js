import React, { useState, useEffect, useRef } from 'react'
import { View, Image, ActivityIndicator, Alert, RefreshControl, Dimensions, StatusBar } from 'react-native'
import { TOP_PHOTOS } from '../../../ActionType/ActionType'
import { base_url, INTEREST_COLOR, THEME_COLOR } from '../../../Config/Config'
import Loader from '../../Shared/Loader/Loader'
import RecentPhotos from '../../Shared/RecentPhotos/RecentPhotos'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Style'
import Animated from 'react-native-reanimated'
import { moderateScale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler'
import ArrayList from '../../Shared/ArrayList/ArrayList'


const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation, route } = props
    const [offset, setoffset] = useState(5)
    const [topPhotos, settopPhotos] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [photoView, setphotoView] = useState([])
    const [photoLikes, setphotoLikes] = useState([])
    const [photoFullUrl, setphotoFullUrl] = useState([])
    const [parents, setparents] = useState([])
    const [loading, setloading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const { topPhotosUrl, views, likes, photo_full_url, parent, comment } = route.params;

    useEffect(() => {
        setloading(true)
        loadPageData()
        setTimeout(() => {
            setloading(false)
        }, 3000);
    }, [])
    // useEffect(() => {
    //     return
    // }, [offset])

    const loadPageData = async () => {
        try {
            settopPhotos(topPhotosUrl)
            setphotoView(views)
            setphotoLikes(likes)
            setphotoFullUrl(photo_full_url)
            setparents(parent)
        } catch (error) {

        }
    }

    const onRefresh = async () => {
        setRefreshing(true)
        await loadPageData()
        setTimeout(() => {
            setRefreshing(false)
        }, 3000);
    }

    const loadMore = async () => {
        console.log('Loadmore')
        try {
            setIsLoading(true);
            setoffset((previousState) => {
                console.log('previousState', previousState)
                return previousState + 5
            })
            const fomrData = new FormData()
            fomrData.append("actionType", TOP_PHOTOS);
            fomrData.append("offset", offset)
            fomrData.append("num_photos_to_fetch", 10)
            const requestOptions = {
                method: 'POST',
                body: fomrData
            };
            const response = await fetch(`${base_url}`, requestOptions)
            const { photo_url, views, likes, success, photo_full_url, parent } = await response.json();
            if (success === 1) {
                const urlLink = [...topPhotos, ...photo_url]
                settopPhotos(urlLink);
                setphotoView([...photoView, ...views]);
                setphotoLikes([...photoLikes, ...likes])
                setphotoFullUrl([...photoFullUrl, ...photo_full_url])
                setparents([...parents, ...parent])
                setIsLoading(false);
            }
            else {
                settopPhotos(topPhotos)
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            Alert.alert(error.message)
        }
    }

    const renderLoader = () => {
        return (
            isLoading ?
                <View style={Styles.loaderStyle}>
                    <ActivityIndicator size="large" color={THEME_COLOR} />
                </View> : null
        );
    };

    const commentPhoto = (index, item) => {
        navigation.navigate('Comment', {
            index: index,
            item: item,
            topPhotos: topPhotos,
            photoView: views,
            photoLikes: photoLikes,
            photoFullUrl: photo_full_url,
            parent: parent,
            comment: comment
        })
    }
    return (
        <>
            {/* {loading && <Loader />} */}
            <StatusBar
                hidden={false}
                backgroundColor={INTEREST_COLOR}
            />
            <SharedHeader navigation={navigation} back={true} name="Top Photographer" />
            <Animated.ScrollView
                contentContainerStyle={Styles.scrollView}
                scrollEventThrottle={16}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <View
                    style={{
                        marginBottom: moderateScale(5)
                    }}>
                    <ArrayList
                        bounces={false}
                        data={topPhotos}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => {
                            return (
                                <RecentPhotos item={item} index={index}
                                    loading={loading}
                                    photoView={views} photoLikes={photoLikes} photoFullUrl={photo_full_url} parents={parent}
                                    commentPhoto={commentPhoto} navigation={navigation}
                                />
                            )
                        }}
                        ListFooterComponent={renderLoader}
                        // onEndReached={() => loadMore()}
                        // onEndReachedThreshold={0.5}
                        bounces={false}
                    />
                    {(!isLoading && !loading) && <TouchableOpacity onPress={() => loadMore()}
                        style={Styles.loadMore}
                    >
                        <Image source={require('../../../Assets/Images/down.png')} style={Styles.loadMoreText} />
                    </TouchableOpacity>}
                </View>
            </Animated.ScrollView>
        </>
    )
}
