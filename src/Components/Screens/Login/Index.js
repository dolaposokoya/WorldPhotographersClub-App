import React, { useState, useEffect, useContext, useRef } from 'react'
import { View, Text, Dimensions, Alert, TouchableOpacity, SafeAreaView, Image, ImageBackground, TextInput, ScrollView, StatusBar } from 'react-native';
import { FormContainer, Button, AnchorText, FlexColumn } from '../../../Assets/Styles/Customized/Styled';
import { apiUrl, base_url, BLACK, cookieName, GRAY, HEADER_COLOR, ID_CODE, PLACEHOLDER_COLOR, THEME_COLOR, THEME_COLOR_BACKGROUND, WHITE } from '../../../Config/Config';
import Styles from './Styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Loader from '../../Shared/Loader/Loader';
import base64 from 'react-native-base64';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN } from '../../../ActionType/ActionType';
import { NavigationContext } from '../../../Context/NavigationContext';
import { connect } from 'react-redux';
import { GetCookieAction } from '../../../Actions/CookieAction'
import AlignItem from '../../Shared/AlignItem/AlignItem';
import BackDrop from '../../Shared/BackDrop/BackDrop'
import LinearGradient from 'react-native-linear-gradient';
import MessageModal from '../../Shared/Modal/MessageModal'


const { width, height } = Dimensions.get('screen')
// const IMAGE_HEIGHT = height;
const IMAGE_HEIGHT = height * .63;
const COLOR_HEIGHT = height * .37;
function Index(props) {
    const componentMounted = useRef(true);
    const { navigation, GetCookieAction } = props
    const [page, setpage] = useContext(NavigationContext)
    const [wpc_name, setwpc_name] = useState('')
    const [password, setpassword] = useState('')
    const [message, setmessage] = useState('')
    const [login, setlogin] = useState('Sign In')
    const [nameError, setnameError] = useState({})
    const [passwordError, setpasswordError] = useState({})
    const [loading, setloading] = useState(false)
    const [secure, setsecure] = useState(true)
    const [checking, setchecking] = useState(false)
    const [disabled, setdisabled] = useState(false)
    const [errorType, seterrorType] = useState('')
    const [openModal, setopenModal] = useState(false)

    // useEffect(() => {
    //     checkUser()
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         checkUser()
    //     });
    //     return () => unsubscribe;
    // }, [navigation])


    const validateUser = async () => {
        let valid = true;
        const wpc_nameError = {}
        const passwordError = {}
        if (wpc_name === '' || wpc_name === null) {
            wpc_nameError.empty = 'WPC Name or Email is empty'
            valid = false
        }
        if (password === '') {
            passwordError.empty = 'Password is empty'
            valid = false
        }
        setnameError(wpc_nameError)
        setpasswordError(passwordError)
        return valid
    }

    const checkUser = async () => {
        try {
            setchecking(true)
            const basicAuth = await AsyncStorage.getItem('@basicAuth')
            await GetCookieAction(response => {
                const { success, data } = response
                if (success === true) {
                    if (data.value === basicAuth) {
                        setpage('Home')
                        navigation.navigate('Home')
                        setTimeout(() => {
                            setchecking(false)
                        }, 2000);
                    }
                    else {
                        setpage('IntroPage')
                        setchecking(false)
                        return false
                    }
                }
                else {
                    setpage('IntroPage')
                    setchecking(false)
                    return false
                }
            })
        } catch (error) {
            setchecking(false)
            seterrorType('warning')
            setmessage(error.message)
            setopenModal(true)
        }
    }

    const setCookie = async (user) => {
        try {
            const { user_id, user_name } = user[0]
            const basicAuth = base64.encode(`${user_id}:${user_name}`)
            await AsyncStorage.setItem('@basicAuth', basicAuth)
            const jsonValue = JSON.stringify({
                name: `WPC_USER_SESSION`, value: basicAuth,
            })
            await AsyncStorage.setItem(`@WPC_USER_SESSION`, jsonValue)
            return true
        } catch (error) {
            seterrorType('warning')
            setmessage(error.message)
            setopenModal(true)
            return false
        }
    }

    const loginUser = async () => {
        try {
            setmessage('')
            setloading(true)
            setlogin('Signing In...')
            const valid = await validateUser()
            if (!valid) {
                setloading(false)
                setlogin('Sign In')
                setopenModal(true)
                seterrorType('warning')
                setmessage('Please fill all details')
                return false
            }
            else {
                const formData = new FormData()
                formData.append("wpc_name", wpc_name);
                formData.append("password", password);
                formData.append("actionType", LOGIN);
                const requestOptions = {
                    method: 'POST',
                    body: formData
                }
                const result = await fetch(base_url, requestOptions)
                const { message, success, user } = await result.json()
                if (success == 1 && message === "Signin Successful") {
                    console.log('User[0]', user)
                    const { user_id, user_name } = user[0]
                    const done = await setCookie(user)
                    if (done === true) {
                        await AsyncStorage.setItem('@user_id', user_id)
                        await AsyncStorage.setItem('@user_name', user_name)
                        setlogin('Sign In')
                        setloading(false)
                        navigation.navigate('Home');
                        setwpc_name('')
                        setpassword('')
                        // setTimeout(() => {
                        //     setmessage('Signin Successful')
                        //     setlogin('Sign In')
                        //     navigation.navigate('Home')
                        //     setwpc_name('')
                        //     setpassword('')
                        //     setloading(false)
                        //     setmessage('')
                        // }, 2000);
                    }
                    else {
                        setlogin('Sign In')
                        setloading(false)
                        setmessage('Something went wrong')
                        seterrorType('warning')
                        setopenModal(true)
                    }
                } else if (success == 2) {
                    setlogin('Sign In')
                    setloading(false)
                    setmessage('Invalid password or WPC Name!')
                    setopenModal(true)
                    seterrorType('warning')
                } else if (success == 3) {
                    setlogin('Sign In')
                    setloading(false)
                    setmessage("Account doesn't exist for this WPC Name!")
                    setopenModal(true)
                    seterrorType('warning')
                } else if (success == 4) {
                    setlogin('Sign In')
                    setloading(false)
                    setmessage('Enter both WPC Name and Password!')
                    setopenModal(true)
                    seterrorType('warning')
                } else if (success == 5) {
                    setlogin('Sign In')
                    setloading(false)
                    setmessage('This is not a place for a admin to login')
                    setopenModal(true)
                    seterrorType('warning')
                } else if (success == 6) {
                    setlogin('Signing In...')
                    const done = await setCookie();
                    if (done === true) {
                        setlogin('Sign In')
                        setloading(false)
                        setopenModal(true)
                        seterrorType('warning')
                        setmessage('Please check your email to verify your email address')
                        openModal === false && navigation.navigate('Home')
                    }
                    else {
                        setloading(false)
                        return false
                    }
                }
            }
        } catch (error) {
            console.log('Error', error.message)
            setlogin('Sign In')
            setloading(false)
            setopenModal(true)
            seterrorType('error')
            setmessage(error.message)
        }
    }

    const closeModal = (state) => {
        setmessage('')
        seterrorType('')
        setopenModal(state)
    }

    return (
        <>
            {loading && <Loader />}
            {openModal && <MessageModal closeModal={closeModal} message={message} errorType={errorType} />}
            {/* {checking ? <Loader />
                : */}
            <StatusBar
                animated={true}
                hidden={true}
                barStyle='light-content'
            />
            <Image source={require('../../../Assets/Images/login.png')} style={Styles.backView} />
            <>
                <View style={Styles.formContainer}>
                    <AlignItem>
                        <Text style={Styles.registerText}>Sign In</Text>
                        <Text
                            style={Styles.registerText1}
                        >Please sign in to continue</Text>
                        <Text
                            style={Styles.registerText1}
                        >using our app</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={Styles.noAcct}>
                            <Text style={Styles.registerText2}> Don't have an account? <Text style={Styles.registerText31}>Sign Up</Text>
                            </Text>
                        </TouchableOpacity>
                    </AlignItem>
                    <FormContainer>
                        <TextInput
                            style={Styles.formInputEmail}
                            label="Email ID"
                            value={wpc_name}
                            placeholderTextColor={PLACEHOLDER_COLOR}
                            onChangeText={text => setwpc_name(text)}
                            placeholder="Email ID"
                        />
                    </FormContainer>
                    <FormContainer>
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={text => setpassword(text)}
                            secureTextEntry={secure}
                            style={Styles.formInput}
                            onFocus={() => console.log('Focued')}
                            placeholderTextColor={PLACEHOLDER_COLOR}
                            onBlur={() => setsecure(true)}
                        />
                        {/* <TouchableOpacity onPress={() => setsecure(!secure)} style={Styles.formPasswordContainer}>
                                    <Image
                                        source={require('../../../Assets/Images/eye.png')}
                                        style={Styles.formPassword}
                                    />
                                </TouchableOpacity> */}
                    </FormContainer>
                    <FlexColumn style={Styles.forget}>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text style={Styles.registerText3}
                            >Forgot Password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ResendActivation')}>
                            <AnchorText size={18} line={true} style={Styles.registerText3}>Resend Activation Mail</AnchorText>
                        </TouchableOpacity>
                    </FlexColumn>
                    <View style={Styles.buttonContainer}>
                        <Button primary onPress={() => loginUser()} style={Styles.buttonContainerBtn}>
                            <Text style={Styles.font}>{login}</Text>
                        </Button>
                    </View>
                    <View style={Styles.buttonContainer}>
                        <Text
                            style={Styles.termsCondition}
                        >By clicking login you agree to</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('About')}>
                            <Text
                                style={Styles.termsCondition1}
                            >The Terms & Conditions</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        </>
    )
}

const mapStateToProps = state => {
    const { cookie } = state.CookieReducer;
    return {
        cookie
    };
};

const Login = connect(
    mapStateToProps,
    { GetCookieAction },
)(Index);
export default Login;

