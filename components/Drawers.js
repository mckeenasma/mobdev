import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import OnboardingScreen from './components/OnboardingScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import MapScreen from './components/MapScreen';

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator();

// const Screens = () => {
//     <Stack.Navigator>

//       <Stack.Screen
//         name="Onboarding"
//         component={OnboardingScreen}
//         options={{headerShown: false,}}
//       />
//       <Stack.Screen
//         name="LoginScreen"
//         component={LoginScreen}
//         options={{headerShown: false,}}
//       />
//       <Stack.Screen
//         name="SignupScreen"
//         component={SignupScreen}
//         options={{headerShown: false,}}
//       />
//       <Stack.Screen name="Home" component={Home} options={{ headerShown: false, }} />
//       <Stack.Screen
//         name="MapScreen"
//         component={MapScreen}
//         options={{headerShown: false,}}
//       />
//     </Stack.Navigator>
// }

export default function Drawers () {
  return (
    <Drawer.Navigator>
        {/* <Drawer.Screen name='Screens' component={Screens} options={{headerShown: false,}}/> */}
      <Drawer.Screen name='Home' component={Home} options={{headerShown: false,}}/>
      <Drawer.Screen name='MapScreen' component={MapScreen} options={{headerShown: false,}}/>
    </Drawer.Navigator>
  )
}

