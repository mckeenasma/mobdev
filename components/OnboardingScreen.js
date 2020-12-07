import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("LoginScreen")}
        onDone={() => navigation.navigate("LoginScreen")}
        pages={[
          {
            backgroundColor: '#1CA1F8',
            image: <Image source={require('../assets/logo.png')} style={styles.img}/>,
            title: 'Login or Sign Up',
            subtitle: 'Have ease on paying your commute fee.',
          },
          {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../assets/Screenshot_3.png')} style={styles.img}/>,
            title: 'A new way to commute',
            subtitle: 'Mark and know your commute fee',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../assets/sign.png')} style={styles.img} />,
            title: 'Track your destination path',
            subtitle: "",
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  img : {
      height: 200,
      width: 200,
  }
});