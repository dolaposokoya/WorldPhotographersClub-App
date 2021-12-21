import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import {
    Center,
    NativeBaseProvider,
} from "native-base"

const Navigations = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    );
};


export default Navigations;