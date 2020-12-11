import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/Home';
import History from './components/History';
import OnboardingScreen from './components/OnboardingScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import MapScreen from './components/MapScreen';
import About from './components/About';
import Facebook from './components/FacebookDummy';
import Google from './components/GoogleDummy';


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

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator>
        <Drawer.Screen name='-' component={OnboardingScreen} options={{headerShown: false,}}/>
        <Drawer.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false,}}/>
        <Drawer.Screen name='SignupScreen' component={SignupScreen} options={{headerShown: false,}}/>
        <Drawer.Screen name='Home' component={Home} options={{headerShown: false,}}/>
        <Drawer.Screen name='MapScreen' component={MapScreen} options={{headerShown: false,}}/>
    </Drawer.Navigator> */}
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
      <Stack.Screen name="History" component={History} options={{ headerShown: false, }} />
      <Stack.Screen name="About" component={About} options={{ headerShown: false, }} />
      <Stack.Screen name="Facebook" component={Facebook} options={{ headerShown: false, }} />
      <Stack.Screen name="Google" component={Google} options={{ headerShown: false, }} />
      
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{headerShown: false,}}
      />
    </Stack.Navigator>
    </NavigationContainer>

  );
}