import React, {useContext, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import FormInput from './FormInput';
import FormButton from './FormButton';
import SocialButton from './SocialButton';

import firebase from 'firebase'

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user != null) {
        console.log(user)
      }
    })
  }, [])

  signUpUser=(email, password) => {
      try {
        console.log(password)
        if (password.password.length < 6) {
            alert('Please enter atleast 6 characters')
            return
        }

        firebase.auth().createUserWithEmailAndPassword(email,password)
      }
      catch(error) {
        console.log(error.toString())
      }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>

      <FormInput
      value={'masma_180000002118@uic.edu.ph'}
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
      value={'123456'}
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      {/* <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      /> */}

      {/* <FormButton
        buttonTitle="Sign Up"
        // onPress={() => register(email, password)}
        onPress={() => navigation.navigate('Home')}
      /> */}

      <FormButton
        buttonTitle="Register"
        onPress={() => navigation.navigate('Home')}
        success
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <TouchableOpacity  onPress={() => alert('Privacy Clicked!')}>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Privacy Policy
          </Text>
          
        </TouchableOpacity>
      </View>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Register with Facebook"
            btnType="facebook"
            color="#fff"
            backgroundColor="#4867aa"
            onPress={() => navigation.navigate('Facebook')}
          />
    
          <SocialButton
            buttonTitle="Register with Google"
            btnType="google"
            color="#fff"
            backgroundColor="#de4d41"
            onPress={() => navigation.navigate('Google')}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    // fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    // fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});