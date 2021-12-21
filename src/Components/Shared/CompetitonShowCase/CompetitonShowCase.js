import React, { useEffect } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { BLACK, OFF_WHITE, THEME_COLOR, WHITE } from '../../../Config/Config'
import Styles from './Style'
import LinearGradient from 'react-native-linear-gradient';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";



const { width, height } = Dimensions.get('screen')

export default function CompetitonShowCase(props) {
    const { item, navigation, index, compName, compDate, compId, compType, loading } = props

    return (
        <>
            {loading ?
                <>
                    {index < 5 &&
                        <SkeletonPlaceholder>
                            <View style={Styles.container} key={index} />
                        </SkeletonPlaceholder>
                    }
                </>
                : <>
                    {index < 5 && <View style={Styles.container} key={index}>
                        <View style={Styles.flex1}>
                            <Image source={{ uri: item }}
                                style={Styles.cardImage}
                            />
                            <LinearGradient
                                colors={["#00000000", '#00000001', '#000000']}
                                start={{ x: 0, y: 0.3 }}
                                end={{ x: 0, y: 1 }}
                                style={Styles.overLay} >
                                {compType[index] === true &&
                                    <Text style={Styles.competition}>{'Pro Competition'}</Text>}
                                <Text style={Styles.text}>{compName[index]}</Text>
                            </LinearGradient>
                        </View>
                    </View>}
                </>
            }
        </>
    )
}
