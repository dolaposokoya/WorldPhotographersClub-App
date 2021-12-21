import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, Image, TextInput, ScrollView, StatusBar, Pressable } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { INTEREST_COLOR, Discover, WHITE } from '../../../Config/Config'
import ArrayList from '../../Shared/ArrayList/ArrayList'
import UploadHeader from '../../Shared/SharedHeader/UploadHeader'
import Styles from './Styles'

const imageObject = [];
const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation, route } = props
    const { profileImage } = route.params;
    const [images, setimages] = useState([])
    const [something, setSomething] = useState('')
    const [location, setlocation] = useState('')

    useEffect(() => {
        selectedImages()
    }, [])

    const selectedImages = () => {
        imageObject.push(profileImage)
        setimages(imageObject);
    }
    const cancelImageUpload = () => {
        navigation.goBack()
    }
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor={INTEREST_COLOR}
            />
            <UploadHeader navigation={navigation} name="Upload Photo" editProfile={true} saveDetails={cancelImageUpload} option={'Cancel'} />
            <ScrollView style={Styles.scrollView}
                contentContainerStyle={Styles.contentContainerStyle}
            >
                <View style={Styles.body}>
                    <ArrayList
                        data={images}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => (
                            <Image source={{ uri: item.uri }}
                                style={[Styles.imageList, {
                                    width: item.width ? item.width : moderateScale(100),
                                    height: item.height ? item.height : moderateScale(100),
                                }]}
                            />
                        )} />
                    <TextInput
                        placeholder="Say something about this photo"
                        style={Styles.input}
                        placeholderTextColor="#606060"
                        value={something}
                        onChangeText={(text) => setSomething(text)}
                    />
                    <Text style={Styles.phototext}>Add tags separated by commas...</Text>
                    <View style={Styles.tagsView}>
                        <View style={Styles.tagView}>
                            <Text style={Styles.tag}>Daughter</Text>
                        </View>
                        <View style={Styles.tagView}>
                            <Text style={Styles.tag}>Delhi</Text>
                        </View>
                    </View>
                    <TextInput
                        placeholder="Add location"
                        style={Styles.locationInput}
                        placeholderTextColor="#606060"
                        value={location}
                        onChangeText={(text) => setlocation(text)}
                    />
                    <View style={Styles.dicoverCont}>
                        <Text style={Styles.discover}>Increase Discoverability</Text>
                        <>
                            <View style={Styles.tagsView}>
                                {Discover.map(item => (
                                    <View style={Styles.discoverView} key={item.id}>
                                        <Text style={[Styles.tag, { color: WHITE }]}>{item.name}</Text>
                                    </View>
                                ))}
                            </View>
                        </>
                    </View>
                </View>
            </ScrollView>
            <View style={Styles.uploadView}>
                <Pressable style={Styles.upload}>
                    <Text style={Styles.uploadText}>Upload</Text>
                </Pressable>
            </View>
        </>
    )
}
