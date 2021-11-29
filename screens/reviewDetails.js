import React from "react";
import {  Text, View ,Button } from 'react-native'
import  { globalStyles } from "../styles/global"
const reviewDetails = ({navigation}) => {
    const pressHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Text>{navigation.getParam("title")}</Text>
            <Text>{navigation.getParam("body")}</Text>
            <Text>{navigation.getParam("rating")}</Text>
        </View>
    )
}

export default reviewDetails

