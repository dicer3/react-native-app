import {createStackNavigator} from "react-navigation-stack";
import About from '../screens/about'
import ReviewDetails from '../screens/reviewDetails'

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: "About ",
           // headerStyle:{backgroundColor:"#333"}
        }
    },
}

const AboutStack = createStackNavigator(screens,{
    headerTintColor:"#43e",
    headerStyle:{backgroundColor:"#eee",height:100}
})

export default AboutStack