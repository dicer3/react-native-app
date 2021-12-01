import React,{useState} from "react";
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity , Modal ,TouchableWithoutFeedback, Keyboard } from 'react-native'
import  { globalStyles } from "../styles/global"
import Card from "../shared/card"
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from "./reviewForm";
const home = ({navigation}) => {

    const [modalOpen,setModalOpen] = useState(false)

    const [reviews,setReviews] = useState([
        {title:"Zelda, Breath of Fresh Air",rating: 5, body: "lorem ipsum",key:'1'},
        {title:"Gotta Catch Them All(again)",rating: 4, body: "lorem ipsum",key:'2'},
        {title:"Not So 'Final' Fantasy",rating: 3, body: "lorem ipsum",key:'3'}
    ])
    const pressHandler = () => {
      // navigation.navigate("ReviewDetails")
    navigation.push("ReviewDetails")
    }

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews)=>{
            return [review,...currentReviews]
        })
        setModalOpen(false)
    }
    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType="slide" transparent={false}>  
                <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                    {/* <View style={styles.modalView}> */}
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name="close"
                            size={24}
                            onPress={()=>setModalOpen(false)}
                            style={{...styles.modalToggle,...styles.modalClose}}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                    {/* </View> */}
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={()=>setModalOpen(true)}
            />
            <FlatList 
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate("ReviewDetails",item)}>
                       <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default home

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "grey",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex:1
    },
    modalView: { // popup model for half screen  // transparent:true in modal for this
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"#94ed91",
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    }
})

