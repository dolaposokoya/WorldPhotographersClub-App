import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import Navigation from './src/Navigations/Index'
import { NavigationProvider } from './src/Context/NavigationContext';
import SplashScreen from 'react-native-splash-screen'
import {
  Center,
  NativeBaseProvider,
} from "native-base"
import { Provider } from 'react-redux';
import store from './src/Reducers/Store';

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000);
  }, [])
  return (
    <>
      <Provider store={store}>
        <NativeBaseProvider>
          <NavigationProvider>
            <Navigation />
          </NavigationProvider>
        </NativeBaseProvider>
      </Provider>
    </>
  );
};


export default App;
