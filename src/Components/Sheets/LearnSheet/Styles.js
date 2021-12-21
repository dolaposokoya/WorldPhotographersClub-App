import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { THEME_COLOR_BACKGROUND, fonts, fontSize, TEXT_BLUE } from '../../../Config/Config'

const { width, height } = Dimensions.get('window');

const Styles = ScaledSheet.create({
    sheetView: {
        padding: '10@msr',
        justifyContent: 'center',
        marginBottom: -(height * 0.03)
    },
    image: {
        width: 23,
        height: 23,
        alignSelf: 'flex-end',
    },
    bottomtext: {
        textAlign: 'center',
        padding: '4@msr',
        margin: '7@msr',
        fontFamily: fonts.medium,
        fontSize: fontSize.twenty,
        color: THEME_COLOR_BACKGROUND
    },
    bottomtext1: {
        textAlign: 'center',
        fontFamily: fonts.regular,
        fontSize: fontSize.sixteen,
        lineHeight: 28,
        color: TEXT_BLUE
    },
})

export default Styles