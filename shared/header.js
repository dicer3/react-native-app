import { StyleSheet, Text, View , Image , ImageBackground} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'

const header = ({ navigation ,title }) => {

    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <ImageBackground source={require("../assets/game_bg.png")} style={styles.header}>
            <MaterialIcons name="menu" onPress={openMenu} style={styles.icon} size={28}/>
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

export default header

const styles = StyleSheet.create({
    header: {
        width:"100%",
        height:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        padding:5,
        margin:5
    },
    headerText: {
        fontWeight: "bold",
        fontSize:20,
        color:"#333",
        letterSpacing: 1,
    },
    icon: {
        position:"absolute",
        left:16
    },
    headerTitle: {
        flexDirection: "row",
    },
    headerImage:{
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
})
