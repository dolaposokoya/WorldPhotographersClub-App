import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PhotographerDetails from '../Components/Screens/PhotographerDetails/Index'
import Award from '../Components/Screens/Award/Index'
import HireMe from '../Components/Screens/HireMe/Index'
import OtherStats from '../Components/Screens/OtherStats/Index'


const Stack = createStackNavigator();

function UserDetailsStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerTransparent: true
            }}
        >
            <Stack.Screen name="PhotographerDetails" component={PhotographerDetails} />
            <Stack.Screen name="Award" component={Award} />
            <Stack.Screen name="HireMe" component={HireMe} />
            <Stack.Screen name="OtherStats" component={OtherStats} />
        </Stack.Navigator>
    );
}

export default UserDetailsStack;