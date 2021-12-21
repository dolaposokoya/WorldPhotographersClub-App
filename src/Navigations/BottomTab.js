import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack'
import Projects from '../Components/Screens/Projects/Index'
import LearnStack from './LearnStack'
import Add from '../Components/Screens/Add/Index'
import CompetitionStack from './CompetitionStack'
import { Image, Dimensions, TouchableOpacity } from 'react-native'
import { HEADER_COLOR } from '../Config/Config';
import { moderateScale } from 'react-native-size-matters';


const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('screen')

function BottomTab() {

    const [state, setstate] = useState(false)
    const getTabBarVisibility = (route) => {
        const routeName = route.state ? route.state.routes[route.state.index].name : '';
        if (routeName === 'Chats') {
            return false
        }
        return true
    }
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        position: 'absolute',
                        border: 'none',
                        backgroundColor: HEADER_COLOR,
                        borderWidth: 0
                    },
                    tabBarOptions: {
                        showLabel: false,
                        labelStyle: {
                            textAlign: "center",
                            fontSize: 36,
                        },
                    }
                }}>
                <Tab.Screen name="Home" component={HomeStack}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                source={
                                    focused
                                        ? require("../Assets/Images/homeactive.png")
                                        : require("../Assets/Images/home.png")
                                }
                                style={{
                                    height: size,
                                    width: size
                                }}
                                resizeMode="contain"
                            />
                        ),
                    }}
                />
                <Tab.Screen name="Competition" component={CompetitionStack}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                source={
                                    focused
                                        ? require("../Assets/Images/trophyactive.png")
                                        : require("../Assets/Images/trophy.png")
                                }
                                style={{
                                    height: size,
                                    width: size,

                                }}
                                resizeMode="contain"
                            />
                        ),
                    }}
                />
                <Tab.Screen name="Add" component={Add}
                    initialParams={{ active: require('../Assets/Images/cross.png'), inActive: require('../Assets/Images/open.png') }}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (

                            <TouchableOpacity onPress={() => setstate(!state)}>
                                <Image
                                    source={
                                        state
                                            ? require("../Assets/Images/cross.png")
                                            : require("../Assets/Images/open.png")
                                    }
                                    style={{
                                        height: moderateScale(60),
                                        width: moderateScale(60),
                                        marginBottom: moderateScale(29)

                                    }}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        ),
                    }}
                />
                <Tab.Screen name="LearnStack" component={LearnStack}
                    initialParams={{ active: require('../Assets/Images/briefcaseactive.png'), inActive: require('../Assets/Images/briefcase.png') }}
                    options={({ route }) => ({
                        tabBarVisible: false,
                        // tabBarVisible: route.state && route.state.index === 0,
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                source={
                                    focused
                                        ? require("../Assets/Images/briefcaseactive.png")
                                        : require("../Assets/Images/briefcase.png")
                                }
                                style={{
                                    height: size,
                                    width: size,

                                }}
                                resizeMode="contain"
                            />
                        ),
                    })}
                />
                <Tab.Screen name="Projects" component={Projects}
                    initialParams={{ active: require('../Assets/Images/imageactive.png'), inActive: require('../Assets/Images/image.png') }}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                source={
                                    focused
                                        ? require("../Assets/Images/imageactive.png")
                                        : require("../Assets/Images/image.png")
                                }
                                style={{
                                    height: size,
                                    width: size,

                                }}
                                resizeMode="contain"
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    );
}
export default BottomTab