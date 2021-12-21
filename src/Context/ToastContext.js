import React from 'react'
import { View, Text } from 'react-native'
import { Center, NativeBaseProvider, useToast } from "native-base"


export default function ToastContext(props) {
    const toast = useToast()
    const { children } = props
    return (
        <NativeBaseProvider>
            <Center flex={1}>
                {children}
            </Center>
        </NativeBaseProvider>
    )
}
