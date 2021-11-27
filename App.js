import React,{ useState,useEffect } from 'react';
import { StyleSheet, Text, Alert ,View  } from 'react-native';
import Home from './screens/home'
import * as Font from "expo-font"
import Navigator from "./routes/homeStack"
import AppLoading from 'expo-app-loading';
const getFonts = () => Font.loadAsync({
   'nunito-regular':require("./assets/fonts/Nunito-Regular.ttf"),
   'nunito-bold':require("./assets/fonts/Nunito-Bold.ttf")
})

export default function App() {
  const [fontsLoaded,setFontsLoaded] = useState(false);
    if(fontsLoaded) {
      return (
      <Navigator />
      )
    }  else {
      return (
        <AppLoading 
          startAsync={getFonts} onFinish={()=>setFontsLoaded(true)} onError={(err) => console.log(err)}/>
      )
    }
}

