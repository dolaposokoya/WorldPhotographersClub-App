import React, { useEffect, useState, useRef } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView, Alert, ToastAndroid, Platform } from 'react-native'
import { base_url, BLACK, domain, GRAY, LIGHT_GRAY, WHITE } from '../../../Config/Config'
import Styles from './Style'
import { FlexRow } from '../../../Assets/Styles/Customized/Styled'
import ProfileSheet from '../../Sheets/ProfileSheet/ProfileSheet'
import Clipboard from '@react-native-community/clipboard';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { LIKE_PHOTO } from '../../../ActionType/ActionType'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Like from '../../../Assets/Images/like.png'
import LikeActive from '../../../Assets/Images/likeactive.png'
import { useToast, Toast, Button } from "native-base"
import Animated from 'react-native-reanimated'
import { moderateScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')

const SPACING = width * 0.5;
const AVATAR_SIZE = moderateScale(5);
export default function RecentPhotos(props) {

    const toast = useToast()
    const { navigation, loading, item, index, photoView, photoLikes, photoFullUrl, parents, comment, commentPhoto } = props
    const [likeImage, setlikeImage] = useState(require('../../../Assets/Images/like.png'))



    const likePhoto = async (index) => {
        try {
            const user = await AsyncStorage.getItem('@user_id')
            if (user !== null) {
                const photoKey = photoFullUrl[index];
                const likes = photoLikes[index];
                console.log('likes', likes)
                const formData = new FormData();
                formData.append("photoKey", photoKey);
                formData.append("actionType", LIKE_PHOTO);
                formData.append("user", user);
                const requestOptions = {
                    method: 'POST',
                    // headers: myHeaders,
                    body: formData,
                };
                const result = await fetch(`${base_url}`, requestOptions)
                const response = await result.json()
                if (response && response.success === 1) {
                    photoLikes[index] = response.num_like
                    setlikeImage(require('../../../Assets/Images/likeactive.png'))
                    console.log('likeImage', photoLikes[index])
                }
                else {
                    Alert.alert('Unable to like photo')
                }
            }
            else {
                Alert.alert('Something went wrong')
            }
        } catch (error) {
            Alert.alert(error.message)
        }
    }

    const getPhotoData = (index) => {
        const ownerProfile = photoFullUrl[index];
        console.log('ownerProfile', Toast)
        Toast.show({
            title: "Hello world",
        })
        toast.show({
            title: "Hi, Nice to see you ( ´ ∀ ` )ﾉ",
        })
    }

    const copyLInk = () => {
        const link = `${domain}photo/${photoFullUrl[index]}`;
        Clipboard.setString(link)
        if (Platform.OS === 'android') {
            Toast.show({
                title: 'Copy Link',
                status: "success",
                description: "Link copied.",
                duration: 4000,
            });
        }
        else {
            Toast.show({
                title: "Hello world",
            })
        }
    }

    const goToPhotoGraphersPage = async (data, index) => {
        await AsyncStorage.setItem('@userId', parents[index])
        console.log('parents', parents[index])
        navigation.setParams({
            userId: parents[index],
        });
        console.log('PhotographerDetails')
        navigation.navigate('UserDetailsStack', {
            screen: 'PhotographerDetails',
            item: data,
        })
    }


    return (
        <>
            {loading ?
                <ScrollView>
                    <SkeletonPlaceholder>
                        <View style={Styles.skeleton}>
                            <View style={Styles.skeleton1} />
                            <View style={{ marginLeft: 20 }}>
                                <View style={{ width: 182, height: 20, borderRadius: 4 }} />
                                <View
                                    style={{ marginTop: 6, width: 152, height: 20, borderRadius: 4 }}
                                />
                            </View>
                        </View>
                        <View style={{
                            alignItems: "center", width: '100%',
                            height: height * 0.3, backgroundColor: 'red'
                        }} />
                        <View style={Styles.flexRow}>
                            <View style={Styles.flexRow}>
                                <TouchableOpacity onPress={() => likePhoto(index)}>
                                    <Image source={require('../../../Assets/Images/likeactive.png')}
                                        style={[Styles.assets, { marginRight: 10 }]}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => commentPhoto(index)}>
                                    <Image source={require('../../../Assets/Images/plus.png')}
                                        style={Styles.assets}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Image source={require('../../../Assets/Images/image.png')}
                                style={Styles.assets}
                            />
                        </View>
                    </SkeletonPlaceholder>
                </ScrollView>
                :
                <Animated.View style={Styles.card} key={index}>
                    <FlexRow>
                        <FlexRow>
                            <Image
                                source={{ uri: item }}
                                style={Styles.profileImage}
                            />
                            <TouchableOpacity
                                onPress={() => goToPhotoGraphersPage(item, index)}
                                style={{
                                    marginLeft: '3%',
                                }}>
                                <Text style={Styles.text}>{parents[index] === '' ? 'Null' : parents[index]}</Text>
                                <Text style={Styles.profileText}>Professional Photographer</Text>
                            </TouchableOpacity>
                        </FlexRow>
                        <FlexRow>
                            <Text style={Styles.profileDate}>08 July, 2021</Text>
                            <ProfileSheet copyLInk={copyLInk} />
                        </FlexRow>
                    </FlexRow>
                    <View style={Styles.profileImageView}>
                        <Image
                            source={{ uri: item }}
                            style={Styles.profileImageViewImg}
                        />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <FlexRow style={Styles.flexRow1}>
                            <FlexRow>
                                <TouchableOpacity onPress={() => likePhoto(index)}>
                                    <Image source={likeImage}
                                        style={Styles.flexRow1Image}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => commentPhoto(index, item)}>
                                    <Image source={require('../../../Assets/Images/comment.png')}
                                        style={Styles.flexRow1Image}
                                    />
                                </TouchableOpacity>
                            </FlexRow>
                            <Image source={require('../../../Assets/Images/bookmark.png')}
                                style={Styles.flexRow1Image}
                            />
                        </FlexRow>
                    </View>
                    {(comment && comment[index] > 0) && <View style={Styles.commentView}>
                        <Text style={Styles.commentText}>{comment[index] > 0 ? 'Photo comment' : ''}</Text>
                    </View>}
                    <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'flex-start', marginBottom: 0 }}>
                        <FlexRow style={{
                            justifyContent: 'flex-start',
                            marginLeft: moderateScale(12),
                            marginTop: moderateScale(10)
                        }}>
                            <Text style={Styles.like}>{photoLikes[index]} likes</Text>
                            <Text style={Styles.like}>{comment && comment[index]} comments</Text>
                        </FlexRow>
                    </View>
                    <View style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{
                            borderBottomWidth: 0.9,
                            width: width * 0.95,
                            borderBottomColor: WHITE,
                            opacity: 0.57
                        }} />
                    </View>
                </Animated.View>
            }
        </>
    )
}
