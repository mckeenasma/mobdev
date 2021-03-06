import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  Button
} from 'react-native';
import FormInput from './FormInput';
import FormButton from './FormButton';
import SocialButton from './SocialButton';
import firebase from 'firebase'

export default function LoginScreen({navigation, props}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user != null) {
        console.log(user)
      }
    })
  }, [])


  loginUser = (email, password) => {
    try {

      firebase.auth().signInWithEmailAndPassword(email.email,password.password).then(function (user){console.log(user)})
    }
    catch(error) {
      console.log(error.toString())
    }
  }

  

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/applogo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Para-po!</Text>

      <FormInput
        // labelValue={email}
        value={'masma_180000002118@uic.edu.ph'}
        onChangeText={(email) => setEmail({email})}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        // labelValue={password}
        value={'123456'}
        onChangeText={(password) => setPassword({password})}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Login"
        onPress={() => navigation.navigate('Home')}
      />
      
      

      {/* <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity> */}

      {Platform.OS === 'android' ? (
        <View style={styles.otherBtn}>
          <SocialButton
            buttonTitle="Login with Facebook"
            btnType="facebook"
            color="#fff"
            backgroundColor="#4867aa"
            onPress={() => navigation.navigate('Facebook')}
          />
    
          <SocialButton
            buttonTitle="Login with Google"
            btnType="google"
            color="#fff"
            backgroundColor="#de4d41"
            onPress={() => navigation.navigate('Google')}
          />
        </View>
      ) : null}
      <FormButton
        buttonTitle="Register"
        onPress={() => navigation.navigate('SignupScreen')}
      />

      
    </View>
  );
};

// export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  otherBtn: {
    marginTop: '30%'
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    // fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  allButtons: {
    marginVertical: 5,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    // fontFamily: 'Lato-Regular',
  },
});