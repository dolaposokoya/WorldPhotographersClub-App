import { StyleSheet, Dimensions, StatusBar } from 'react-native'
import { THEME_COLOR, LIGHT_GRAY, BLACK, OFF_WHITE, BACKGROUND, NAVY_BLUE, WHITE, SUCCESS, GRAY } from '../../../Config/Config'

const { width, height } = Dimensions.get('window');

const Styles = StyleSheet.create({

    touch: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    editImage: {
        width: 20,
        height: 20,
    },
    logout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuText: {
        margin: 10,
        fontSize: 19
    },
    menus: {
        margin: 5,
        height: 20,
        width: 20,
    },
    bottomtext: {
        padding: 4,
        margin: 7,
        fontWeight: '900',
        color: BLACK
    }
})

export default Styles