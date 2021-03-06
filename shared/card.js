import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function card(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardContent}>
                {props.children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#fff",
        shadowOffset: {width:1,height:1},
        shadowColor:"#333",
        shadowOpacity: 0.3,
        marginHorizontal: 4,
        marginVertical: 6
    }, 
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    }
})
