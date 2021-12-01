import {  Formik } from 'formik'
import React from 'react'
import * as yup from 'yup';
import { StyleSheet, Text, View , Button} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/global'
import FlatButton from '../shared/button';

export default function reviewForm({addReview}) {
    const reviewSchema = yup.object({
        title: yup.string()
                .required()
                .min(4),
        body: yup.string()
            .required()
            .min(8),
        rating: yup.string()
                .required()
                .test("is-num-1-5","Rating must be a number 1-5",(val)=>{
                    return parseInt(val) < 6 && parseInt(val) > 0;
                })
    })
    return (
        <View style={globalStyles.container}>
            <Formik 
            validationSchema={reviewSchema}
              initialValues={{ title:"", body: "" , rating: ""}}
              onSubmit={(values,actions)=>{
                actions.resetForm();
                addReview(values);
              }}
            >
                {(props)=>(
                    <View>
                        <TextInput  
                            style={globalStyles.input}
                            placeholder="Review title"
                            onChangeText={props.handleChange("title")}
                            value={props.values.title}
                            onBlur={props.handleBlur("title")}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.title && props.errors.title }</Text>
                        <TextInput  
                            style={globalStyles.input}
                            placeholder="Review body"
                            onChangeText={props.handleChange("body")}
                            value={props.values.body}
                            onBlur={props.handleBlur("body")}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.body && props.errors.body }</Text>
                        <TextInput  
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={props.handleChange("rating")}
                            value={props.values.rating}
                            keyboardType='numeric'
                            onBlur={props.handleBlur("rating")}
                        />
                        <Text style={globalStyles.errorText}>{  props.touched.rating &&  props.errors.rating }</Text>
                        <FlatButton text="submit" onPress={props.handleSubmit} />    
                    </View>   
                )}

            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({})
