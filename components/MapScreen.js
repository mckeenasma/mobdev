import React, { useState, useEffect, Dimensions  } from 'react';
import { Text, View, StyleSheet,Button,Image } from 'react-native';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import Modal from 'react-native-modal';
import { set } from 'react-native-reanimated';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import Hr from "react-native-hr-component";
import SocialButton from './SocialButton';
import FormInput from './FormInput';

export default function MapScreen({navigation}) {
  // const [state, setState] = useState({
  //   pickUpCords: {
  //     latitude: 7.1551,
  //     longitude: 125.5956,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   },
  //   droplocationCors: {
  //     latitude: 7.1270,
  //     longitude: 125.6155,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   }
  // });
  const [isAccessModalVisible, setIsAccessModalVisible] = useState(false)
  const [isPinModalVisible, setIsPinModalVisible] = useState(false)
  const [isPinModalVisible2, setIsPinModalVisible2] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAccessModalVisible(!isAccessModalVisible)
      console.log('This will run after 1 second!')
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  function showHidePins(){
    setIsPinModalVisible(!isPinModalVisible)
    setIsPinModalVisible2(!isPinModalVisible2)
  }
  // const { pickUpCords, droplocationCors } = state

  return(
    <View style={styles.container}>
    <View >
    <FormInput
        // labelValue={password}
        value={'Buhangin, Davao City, Davao del Sur'}
        placeholderText="Text"
        iconType="search1"
    
      />
    </View>
  
    <Image source={require('../assets/img/w.png')}
                        style={styles.imgMapStyle} />
  
    
    {/* <MapView 
      style={styles.mapStyle}
      initialRegion={pickUpCords}
    >
      <MapViewDirections
      origin={pickUpCords}
      destination={droplocationCors}
      apikey={'AIzaSyDoWhjzqVyz1lkwhlfykZ5fUACEcIPAuDw'}
      strokeWidth={3}
      strokeColor="hotpink"
    />
    </MapView> */}
    <View>
      <View style={styles.bottomScreen}>

      </View>
      
    </View>
    <View>
    <SocialButton
        buttonTitle="Pin Location"
        
        color="#fff"
        // backgroundColor="#FF1845"
        backgroundColor={colors.backgroundLanding}
        onPress={() => {setIsPinModalVisible(!isPinModalVisible)}}
      />
      <TouchableOpacity
        style={{alignSelf: 'center', padding: 10}}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.navButtonText}>
        Go to Home
        </Text>
    </TouchableOpacity>
    
    </View>
    

    <Modal style={styles.modal} isVisible={isAccessModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Allow "Para-po" to access your location?</Text>
          <Text>This app helps to notify the users when they arrived at their destination in order for them not to pass over and tell the jeep driver to stop</Text>
          <Hr lineColor="#eee" width={1}/>
          <Text
          onPress={() => {setIsAccessModalVisible(!isAccessModalVisible)}} style={styles.selections}>
            ALWAYS ALLOW
          </Text>
          <Hr lineColor="#eee" width={1}/>
          <Text
          onPress={() => navigation.navigate('Home') } style={styles.selections}>
            DON'T ALLOW
          </Text>
        </View>
      </Modal>


      <Modal style={styles.modal} isVisible={isPinModalVisible}>
        <View style={styles.modalContainer1}>
          <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#FFCE0B', fontSize: 20, paddingBottom: 30}}>ATTENTION!</Text>
          <Text style={{color: '#fff', textAlign: 'center', paddingBottom: 60}}>3 - 5 kilometers away from your destination! ETA: 5 minutes</Text>
          <Text style={{color: '#FF0000', fontSize: 16, fontWeight: 'bold'}}>Heavy Traffic</Text>
          <SocialButton
              buttonTitle="OKAY"
              color="black"
              backgroundColor="#FFFFFF"
              textAlign='center'
              
              onPress={() => {setIsPinModalVisible2(!isPinModalVisible2)}}
            />
        </View>
      </Modal>

      <Modal style={styles.modal} isVisible={isPinModalVisible2}>
        <View style={styles.modalContainer1}>
          <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#FFCE0B', fontSize: 20, paddingBottom: 30}}>ATTENTION!</Text>
          <Text style={{color: '#fff', textAlign: 'center', paddingBottom: 60}}>Congratulations! You reached your destination! <TouchableOpacity onPress={() => {navigation.navigate('History')}}><Text style={{color: 'yellow'}}>see history.</Text></TouchableOpacity></Text>
          <SocialButton
              buttonTitle="OKAY"
              color="black"
              backgroundColor="#FFFFFF"
              textAlign='center'
              
              onPress={() => {showHidePins()}}
            />
        </View>
      </Modal>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  modal: {
  height: '50%',
  width: '75%',
  alignSelf: 'center'
  },
  modalContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 6,
    padding: 10,
  },
  modalContainer1: {
    backgroundColor: '#33AAF9',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 6,
    padding: 10,
  },
  selections: {
    color: colors.backgroundLanding,
  },
  mapStyle: {
    width: '100%',
    height: '78%',
  },
  imgMapStyle: {
    height: '75%',
    padding: 0,
    margin: 0
  },
  bottomScreen: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});
