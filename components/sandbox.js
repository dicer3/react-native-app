import React from 'react'
import { StyleSheet, Text , View } from 'react-native'

const sandbox = () => {
    return <View style={styles.conainer}>
     <Text style={styles.boxOne}>one</Text>
     <Text style={styles.boxTwo}>Two</Text>    
     <Text style={styles.boxThree}>Three</Text>    
     <Text style={styles.boxFour}>four</Text>        
    </View>
}

const styles = StyleSheet.create({
    conainer: {
        flex:1,
       // flexDirection:"row",
        paddingTop: 40,
        backgroundColor: "#333",
    },
    boxOne: {
        backgroundColor: "violet",
        padding: 10,
    },
    boxTwo: {
        backgroundColor: "gold",
        padding: 10,
    },
    boxThree: {
        backgroundColor: "violet",
        padding: 10,
    },
    boxFour: {
        backgroundColor: "coral",
        padding: 10,
    }
})
export default sandbox
