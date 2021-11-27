import React from "react";
import {  Text, View ,Button } from 'react-native'
import  { globalStyles } from "../styles/global"
const reviewDetails = ({navigation}) => {
    const pressHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Text>Review Details Screen</Text>
            <Button title='back to home screen' onPress={pressHandler}></Button>
        </View>
    )
}

export default reviewDetails

