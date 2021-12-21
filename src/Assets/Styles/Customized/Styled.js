import styled from 'styled-components'
import { fonts, THEME_COLOR } from '../../../Config/Config';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const FormContainer = styled.View`
padding: 10px 20px;
justify-content: center;
align-items: center;
`;
export const Container = styled.View`
display: flex;
width: ${props => props.width}px;
justify-content: center;
`;
// height: ${props => props.height}px;

export const Button = styled.TouchableOpacity`
display: flex;
background-color: ${props => props.primary ? '#1475E4' : 'red'};
align-items: center;
padding: 12px 0px;
justify-content: center;
`;
export const Anchor = styled.View`
display: flex;
justify-content: center;
align-items: center;
`;
export const AnchorText = styled.Text`
color: black;
text-decoration: ${props => props.line ? 'underline' : 'none'};
font-size: ${props => props.size ? props.size : 15}px;
font-weight: ${props => props.weight ? props.weight : '500'};
`;
export const Link = styled.TouchableOpacity`
display: flex;
align-items: center;
padding: 12px 0px;
justify-content: center;
`;

export const FormText = styled.Text`
color: ${props => props.primary ? 'white' : '#4cae4c'};
font-size: ${props => props.size ? props.size : 40}px;
font-weight: ${props => props.weight ? props.weight : '500'};
`;
export const ErrorContainer = styled.View`
display: flex;
padding: 1px 0px;
justify-content: flex-start;
align-self: flex-start;
width: 100%;
`;
export const ErrorText = styled.Text`
color: ${props => props.color ? props.color : 'white'};
opacity: 0.5;
text-align: left;
padding-top: 7px;
font-size: ${props => props.size ? moderateScale(props.size) : moderateScale(20)}px;
font-family: ${props => props.weight ? props.weight : fonts.medium};
`;

// background-color: #7952B3;
// background-color: #4651DB;
export const PurpleButton = styled.TouchableOpacity`
background-color: #2183C8;
padding: 10px 20px;
border-radius: 20px;
margin: 10px;
`;

export const FlexRow = styled.View`
display: flex;
justifyContent: space-between;
alignItems: center;
flexDirection: row;
`;
export const FlexColumn = styled.View`
display: flex;
justifyContent: space-between;
alignItems: center;
`;

