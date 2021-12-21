import React, { Component } from 'react'
import { View, Text, Dimensions, ImageBackground, KeyboardAvoidingView, TextInput, ScrollView, SafeAreaView, Image, StyleSheet, StatusBar } from 'react-native';
import { FormContainer, Container, Button, FormText, Link, AnchorText, Anchor, ErrorContainer, ErrorText } from '../../../Assets/Styles/Customized/Styled';
import Styles from './Styles'
import DropDownPicker from 'react-native-dropdown-picker';
import { Select } from "native-base"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { apiUrl, base_url, ERROR, HEADER_COLOR, PLACEHOLDER_COLOR, THEME_COLOR_BACKGROUND } from '../../../Config/Config';
import { SIGN_UP } from '../../../ActionType/ActionType';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackDrop from '../../Shared/BackDrop/BackDrop'
import SelectDropdown from 'react-native-select-dropdown'
import Loader from '../../Shared/Loader/Loader';
import MessageModal from '../../Shared/Modal/MessageModal';
import { moderateScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const IMAGE_HEIGHT = height * .5;
const COLOR_HEIGHT = height * .55
export default class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email_pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$",
            password_pattern: "[A-Za-z0-9](?=.*[@$!%*?&]){8,}",
            open: false,
            country: "",
            countries: [
                'India',
                'Nigeria',
                'Ghana',
                'Libya',
                'Togo',
                'Banana',
            ],
            name: '',
            email: '',
            email1: '',
            password: '',
            passwordMatch: '',
            nameError: {},
            emailError: {},
            cofirmEmailError: {},
            passwordError: {},
            passwordMatchError: {},
            countryError: {},
            errorType: '',
            open: false,
            message: '',
            sign_up: 'Sign Up',
            loading: false
        }
    }

    validateInput = async () => {
        const { name, email, email1, password, passwordMatch, email_pattern, password_pattern, country } = this.state
        const validateEmail = new RegExp(email_pattern)
        const validatePassword = new RegExp(password_pattern)
        const validEmail = validateEmail.test(email);
        const validPassword = validatePassword.test(password);
        const nameError = {}
        const emailError = {}
        const cofirmEmailError = {}
        const passwordError = {}
        const passwordMatchError = {}
        const countryError = {}
        let isValid = true;
        if (name === '' || name === null) {
            nameError.empty = 'Name is empty'
            isValid = false
        }
        if (email === '') {
            emailError.empty = 'Email is empty'
            isValid = false
        }
        if (email === null) {
            emailError.null = 'Email should contain a text'
            isValid = false
        }
        if (!validEmail) {
            emailError.valid = 'Email is invalid'
            isValid = false
        }
        if (email !== email1) {
            cofirmEmailError.match = 'Email does not match'
            isValid = false
        }
        if (password === '') {
            passwordError.empty = 'Password is empty'
            isValid = false
        }
        if (password !== '' && password.length < 8) {
            passwordError.valid = 'Password should be more than 8 characters'
            isValid = false
        }
        if (password !== '' && !validPassword) {
            passwordError.accepted = 'Password can only contain an uppercase, lowercase, numbers and special character (@$!%*?&)'
            isValid = false
        }
        if (passwordMatch === '') {
            passwordMatchError.empty = 'Confirm password is empty'
            isValid = false
        }
        if (password !== '' && (passwordMatch !== password)) {
            passwordMatchError.valid = 'Password do not match'
            isValid = false
        }
        if (country === '') {
            countryError.valid = 'Please select a country'
            isValid = false
        }
        if (country === null) {
            countryError.valid = 'Country can not be empty'
            isValid = false
        }
        this.setState({
            nameError,
            emailError,
            cofirmEmailError,
            passwordError,
            passwordMatchError,
            countryError
        })
        return isValid
    }

    registerUser = async () => {
        const { navigation } = this.props
        // navigation.navigate('Interest');
        try {
            const { name, email, email1, password, ref_by, country, loading } = this.state
            const valid = await this.validateInput()
            if (!valid) {
                return false
            }
            else {
                const formData = new FormData()
                formData.append("name", name);
                formData.append("email", email);
                formData.append("email1", email1);
                formData.append("password", password);
                formData.append("actionType", SIGN_UP);
                formData.append("country", country);
                const requestOptions = {
                    method: 'POST',
                    body: formData
                }
                this.setState({ loading: !loading })
                const result = await fetch(base_url, requestOptions)
                const response = await result.json()
                if (response) {
                    if (response.success == 1) {
                        this.setState({ sign_up: "Signing Up..." })
                        this.setState({ name: '', email: '', email1: '', password: '', ref_by: '', passwordMatch: '', country: '' })
                        setTimeout(() => {
                            this.setState({ loading: !loading, sign_up: "Sign Up" })
                            this.openModal(response.message, 'success')
                        }, 2000);
                    } else {
                        this.setState({ sign_up: "Signing Up..." })
                        setTimeout(() => {
                            this.setState({ sign_up: "Sign Up" })
                            this.setState({ loading: !loading })
                            this.openModal(response.message, 'warning')
                        }, 2000);
                    }
                }
                else {
                    this.setState({ sign_up: "Signing Up..." })
                    setTimeout(() => {
                        this.setState({ sign_up: "Sign Up", })
                        this.setState({ loading: !loading })
                        this.openModal('Something went wrong', 'warning');
                    }, 2000);
                }
            }
        } catch (error) {
            this.setState({ sign_up: "Signing Up..." })
            setTimeout(() => {
                this.setState({ sign_up: "Sign Up" })
                this.setState({ loading: false })
                this.openModal(response.message, 'error');
            }, 2000);
        }
    }

    openModal = (message, error) => {
        this.setState({
            message: message,
            errorType: error,
            open: true
        })
    }
    closeModal = (state) => {
        this.setState({
            message: '',
            errorType: '',
            open: state
        })
        this.state.open === false && this.props.navigation.navigate('Login')
    }

    render() {
        const { navigation } = this.props
        const { name, email, email1, password, passwordMatch, nameError, emailError, cofirmEmailError, passwordError, passwordMatchError, sign_up, message, countries, country, countryError, loading, errorType, open } = this.state
        return (
            <>
                {open && <MessageModal closeModal={this.closeModal} message={message} errorType={errorType} />}
                <StatusBar
                    animated={true}
                    barStyle='light-content'
                    hidden={true}
                />
                {loading && <Loader />}
                <Image source={require('../../../Assets/Images/signup.png')} style={Styles.backView} />
                {/* <BackDrop IMAGE_HEIGHT={IMAGE_HEIGHT} COLOR_HEIGHT={COLOR_HEIGHT} IMAGE={require('../../../Assets/Images/signup_image.png')} /> */}
                <KeyboardAwareScrollView
                    // behavior="padding"
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    scrollEnabled={true}
                >
                    <ScrollView
                        style={Styles.scrollView}
                        contentContainerStyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <View style={Styles.container}>
                            <View style={Styles.textContainer}>
                                <View style={Styles.textContainer1}>
                                    <Text
                                        style={Styles.registerText}
                                    >Sign Up</Text>
                                    <Text
                                        style={Styles.registerText1}
                                    >Please create a new account</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                        <Text style={Styles.registerText2}>Already have an account? <Text style={Styles.registerText3}>Sign In</Text>
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={Styles.formContainer}>
                                <FormContainer>
                                    <TextInput
                                        style={Styles.formInput}
                                        placeholder="Enter your name"
                                        placeholderTextColor={PLACEHOLDER_COLOR}
                                        value={name}
                                        onChangeText={(name) => this.setState({ name })}
                                        outlineColor="red"
                                        selectionColor="gray"
                                    />
                                    {nameError && Object.keys(nameError).map((key, index) => (
                                        <ErrorContainer key={index}>
                                            <ErrorText size={15} color={'red'}>{nameError[key]}</ErrorText>
                                        </ErrorContainer>
                                    ))}
                                </FormContainer>
                                <FormContainer>
                                    <TextInput
                                        keyboardType={"email-address"}
                                        placeholder="Enter email id"
                                        placeholderTextColor={PLACEHOLDER_COLOR}
                                        value={email}
                                        onChangeText={(email) => this.setState({ email })}
                                        selectionColor="gray"
                                        style={Styles.formInput}
                                    />
                                    {emailError && Object.keys(emailError).map((key, index) => (
                                        <ErrorContainer key={index}>
                                            <ErrorText size={15} color={'red'}>{emailError[key]}</ErrorText>
                                        </ErrorContainer>
                                    ))}
                                </FormContainer>
                                <FormContainer>
                                    <TextInput
                                        keyboardType={"email-address"}
                                        placeholder="Re-enter email id"
                                        value={email1}
                                        onChangeText={(email1) => this.setState({ email1 })}
                                        placeholderTextColor={PLACEHOLDER_COLOR}
                                        style={Styles.formInput}
                                    />
                                    {cofirmEmailError && Object.keys(cofirmEmailError).map((key, index) => (
                                        <ErrorContainer key={index}>
                                            <ErrorText size={15} color={'red'}>{cofirmEmailError[key]}</ErrorText>
                                        </ErrorContainer>
                                    ))}
                                </FormContainer>
                                <TouchableOpacity style={Styles.formPasswordContainer}>
                                    <Image
                                        source={require('../../../Assets/Images/eye.png')}
                                        style={Styles.formPassword}
                                    />
                                </TouchableOpacity>
                                <FormContainer>
                                    <TextInput
                                        placeholder="Password"
                                        placeholderTextColor={PLACEHOLDER_COLOR}
                                        value={password}
                                        onChangeText={(password) => this.setState({ password })}
                                        secureTextEntry={true}
                                        style={Styles.formInput}
                                    />
                                    <TouchableOpacity style={Styles.formPasswordContainer}>
                                        <Image
                                            source={require('../../../Assets/Images/eye.png')}
                                            style={Styles.formPassword}
                                        />
                                    </TouchableOpacity>
                                    {passwordError && Object.keys(passwordError).map((key, index) => (
                                        <ErrorContainer key={index}>
                                            <ErrorText size={15} color={'red'}>{passwordError[key]}</ErrorText>
                                        </ErrorContainer>
                                    ))}
                                    <TouchableOpacity style={Styles.formPasswordContainer}>
                                        <Image
                                            source={require('../../../Assets/Images/eye.png')}
                                            style={Styles.formPassword}
                                        />
                                    </TouchableOpacity>
                                </FormContainer>
                                <FormContainer>
                                    <TextInput
                                        placeholder="Confirm password"
                                        placeholderTextColor={PLACEHOLDER_COLOR}
                                        value={passwordMatch}
                                        onChangeText={(passwordMatch) => this.setState({ passwordMatch })}
                                        selectionColor="gray"
                                        secureTextEntry={true}
                                        style={Styles.formInput}
                                    />
                                    <TouchableOpacity style={Styles.formPasswordContainer}>
                                        <Image
                                            source={require('../../../Assets/Images/eye.png')}
                                            style={Styles.formPassword}
                                        />
                                    </TouchableOpacity>
                                    {passwordMatchError && Object.keys(passwordMatchError).map((key, index) => (
                                        <ErrorContainer key={index}>
                                            <ErrorText size={15} color={'red'}>{passwordMatchError[key]}</ErrorText>
                                        </ErrorContainer>
                                    ))}
                                    <TouchableOpacity style={Styles.formPasswordContainer}>
                                        <Image
                                            source={require('../../../Assets/Images/eye.png')}
                                            style={Styles.formPassword}
                                        />
                                    </TouchableOpacity>
                                </FormContainer>
                                <FormContainer>
                                    <SelectDropdown
                                        style={Styles.formInput}
                                        data={countries}
                                        onSelect={(country, index) => {
                                            this.setState({ country })
                                            console.log(country, index)
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return item
                                        }}
                                        buttonTextStyle={{
                                            textAlign: 'left'
                                        }}
                                        defaultButtonText={'Select Option'}
                                        buttonStyle={Styles.formInput}
                                        dropdownIconPosition="right"
                                        renderDropdownIcon={() => <TouchableOpacity><Image source={require('../../../Assets/Images/downarrow.png')} style={Styles.iconInput} /></TouchableOpacity>}
                                    />
                                    {countryError && Object.keys(countryError).map((key, index) => (
                                        <ErrorContainer key={index}>
                                            <ErrorText size={15} color={'red'}>{countryError[key]}</ErrorText>
                                        </ErrorContainer>
                                    ))}
                                </FormContainer>
                                <FormContainer>
                                    <Button primary onPress={() => this.registerUser()} style={Styles.signBtn}>
                                        <FormText primary style={Styles.signText}>{sign_up}</FormText>
                                    </Button>
                                </FormContainer>
                            </View>
                            <View style={Styles.buttonContainer}>
                                <Text
                                    style={Styles.termsCondition}
                                >By clicking sign up you agree to</Text>
                                <Text
                                    style={Styles.termsCondition1}
                                >The Terms & Conditions</Text>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAwareScrollView>
            </>
        )
    }
}
