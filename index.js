import 'react-native-gesture-handler';
import React from 'react'
import { AppRegistry, StatusBar } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import { THEME_COLOR_BACKGROUND } from './src/Config/Config';

export default function Main() {
    return (
        <PaperProvider>
            <StatusBar
                animated={true}
                barStyle='light-content'
                backgroundColor={THEME_COLOR_BACKGROUND}
                hidden={false}
            />
            <App />
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
// AppRegistry.registerComponent(appName, () => App);
