import { Dimensions, StatusBar } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { THEME_COLOR, LIGHT_GRAY, BLACK, OFF_WHITE, BACKGROUND, NAVY_BLUE, WHITE, THEME_COLOR_BACKGROUND, fontSize, fonts } from '../../../Config/Config'

const { width, height } = Dimensions.get('window');

const Styles = ScaledSheet.create({
    scrollView: {
        backgroundColor: WHITE,
    },
    contentContainerStyle: {
        display: 'flex',
        alignItems: 'center',
    },
    container: {
        marginTop: '25@msr',
        marginBottom: '18@msr'
    },
})

export default Styles