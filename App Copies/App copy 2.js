import {View, Text} from 'react-native'
import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../components/Home';
import OnboardingScreen from '../components/OnboardingScreen';
import LoginScreen from '../components/LoginScreen';
import SignupScreen from '../components/SignupScreen';
import MapScreen from '../components/MapScreen';

import * as firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDi4YWlcgKPhDS3ILM-SJDYAtbpV9KoqV8",
  authDomain: "parapo-fcce0.firebaseapp.com",
  projectId: "parapo-fcce0",
  storageBucket: "parapo-fcce0.appspot.com",
  messagingSenderId: "31935566005",
  appId: "1:31935566005:web:f55f71754720f41dcd2efc"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

// export class App extends Component {
function App (props){
  const [loaded, setLoaded] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  // constructor(props){
  //   super(props)
  //   this.state= {
  //     loaded: false,
  //   }
  // }

  // componentDidMount(){
    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
      if (!user){
        setLoggedIn(false)
        setLoaded(true)
        // this.setState({
        //   loggedIn: false,
        //   loaded: true,
        // })
      }else {
        setLoggedIn(true)
        setLoaded(true)
        // this.setState({
        //   loggedIn: true,
        //   loaded: true,
        // })
      }
    })
    }, [])
  // }
  // render(){
    // const { loggedIn, loaded} = this.state
    if (!loaded) {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>Loading</Text>
        </View>
      )
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{headerShown: false,}}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false,}}
          />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{headerShown: false,}}
          />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false, }} />
          <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{headerShown: false,}}
          />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>User is logged In</Text>
        </View>
      )
  // }
}