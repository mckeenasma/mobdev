import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

export default function App() {
  const [state, setState] = useState({
    pickUpCords: {
      latitude: 7.1551,
      longitude: 125.5956,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    droplocationCors: {
      latitude: 7.1270,
      longitude: 125.6155,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  });

  const { pickUpCords, droplocationCors } = state






  return(
    <MapView
    style={StyleSheet.absoluteFill}
    initialRegion={pickUpCords}
  >
    <MapViewDirections
    origin={pickUpCords}
    destination={droplocationCors}
    apikey={'AIzaSyDoWhjzqVyz1lkwhlfykZ5fUACEcIPAuDw'}
    strokeWidth={3}
    strokeColor="hotpink"
  />
  </MapView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
