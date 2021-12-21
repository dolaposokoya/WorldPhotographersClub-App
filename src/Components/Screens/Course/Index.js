import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView, Image, Dimensions, TouchableOpacity, Pressable } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { THEME_COLOR, video_url, video_url1, WHITE } from '../../../Config/Config'
import CourseHeader from '../../Shared/CourseHeader/CourseHeader'
import Styles from './Style'
import Loader from '../../Shared/Loader/Loader'
import VideoPlayer from 'react-native-video-player';
import Video from 'react-native-video'


const { height, width } = Dimensions.get('window')
export default function Index(props) {

    const [loading, setloading] = useState(false)
    const { navigation, route } = props
    const { item } = route.params;

    const goToCourseDetails = (screen) => {
        navigation.navigate(screen, {
            item: item,
            navigation
        })
    }

    return (
        <>
            {loading ? <Loader /> :
                <>
                    <CourseHeader navigation={navigation} name={item.name} />
                    <ScrollView style={Styles.scrollView} contentContainerStyle={Styles.contentContainerStyle}>
                        <View style={Styles.scrollView1}>
                            <View style={Styles.introView}>
                                <Image source={item.image} style={Styles.introImage} resizeMode="cover" />
                                <View style={Styles.introGradient}>
                                    <Text style={Styles.introGradientText}>Pro-Competition</Text>
                                    <Text style={Styles.introGradientText1}>Storytelling in Wildlife Photography</Text>
                                </View>
                            </View>
                            <View style={Styles.profileView}>
                                <Image source={require('../../../Assets/Images/people.png')} style={Styles.profileImage} resizeMode="cover" />
                                <View style={Styles.profileIntro}>
                                    <Text style={[Styles.introGradientText1, { fontSize: moderateScale(16) }]}>Norbert Von Niman</Text>
                                    <Text style={[Styles.introGradientText, { color: WHITE, opacity: 0.57 }]}>Travel & Landscape Photographer, Sweden</Text>
                                    <View style={Styles.social}>
                                        <Image source={require('../../../Assets/Images/facebook.png')} style={Styles.socialApp} resizeMode="cover" />
                                        <Image source={require('../../../Assets/Images/twitter.png')} style={Styles.socialApp1} resizeMode="cover" />
                                        <Image source={require('../../../Assets/Images/linkedin.png')} style={Styles.socialApp2} resizeMode="cover" />
                                        <Image source={require('../../../Assets/Images/instagram.png')} style={Styles.socialApp2} resizeMode="cover" />
                                    </View>
                                </View>
                            </View>
                            <View style={Styles.register}>
                                <TouchableOpacity style={Styles.registerNow} onPress={() => goToCourseDetails('RegisterNow')}>
                                    <Text style={Styles.registerNowText}>Register Now</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.videoView}>
                                <VideoPlayer
                                    video={require('../../../Assets/Video/vid.mp4')}
                                    // video={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1' }}
                                    videoWidth={1600}
                                    videoHeight={900}
                                    thumbnail={require('../../../Assets/Images/slideintro.png')}
                                    autoplay={true}
                                    hideControlsOnStart={true}
                                    pauseOnPress={true}
                                    // showDuration={true}
                                    customStyles={{
                                        videoWrapper: {
                                            width: width,
                                            left: 0,
                                            right: 0
                                        }
                                    }}
                                    style={Styles.videoDisplay}
                                />
                                <View style={Styles.videoGradient}>
                                    <TouchableOpacity>
                                        <Image source={require('../../../Assets/Images/zoom.png')} style={Styles.enVideo} resizeMode="cover" />
                                    </TouchableOpacity>
                                    <View style={Styles.videoInfo}>
                                        <Text style={Styles.videoInfoText}>WITH <Text style={Styles.videoInfoText1}>JAYAPRAKASH BOJAN</Text> NATIONAL GEOGRAPHIC NATURE PHOTOGRAPHER OF THE YEAR 2017</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={Styles.moreInfo}>
                                <View style={Styles.moreView}>
                                    <Text style={Styles.moreViewText}>For more information or any other questions </Text>
                                    <View style={Styles.line} />
                                    <Text style={Styles.moreViewText1}>Email: support@worldphotographersclub.com</Text>
                                    <Text style={Styles.moreViewText1}>Mobile: +91 8527 577 500</Text>
                                    <Text style={Styles.moreViewText1}>whatsapp: +91 8527 577 500</Text>
                                </View>
                            </View>
                            <View style={Styles.register}>
                                <TouchableOpacity style={[Styles.registerNow, { backgroundColor: THEME_COLOR }]} onPress={() => goToCourseDetails('CourseDetails')}>
                                    <Text style={Styles.registerNowText}>What You'll Learn</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </>
            }
        </>
    )
}
