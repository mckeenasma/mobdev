import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import user from '../assets/data/users.js'
import paras from '../assets/data/paras.js'
import colors from '../assets/colors/colors';
import { color } from 'react-native-reanimated';
import Hr from "react-native-hr-component";



Feather.loadFont();

export default Home = ({navigation}) => {
    return (
        <View style={styles.container}>
        <ScrollView>
        <View style={styles.tempNavigators}>
                    <TouchableOpacity
                        style={styles.allButtons}
                        onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.navButtonText}>
                        Go to Home
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.allButtons}
                        onPress={() => navigation.navigate('History')}>
                        <Text style={styles.navButtonText}>
                        Go to History
                        </Text>
                    </TouchableOpacity>
                    <View>
                    <TouchableOpacity
                        style={styles.allButtons}
                        onPress={() => navigation.navigate('MapScreen')}>
                        <Text style={styles.navButtonText}>
                        Go to Map
                        </Text>
                    </TouchableOpacity>
                    </View>
                    {/* Button */}
                    <View>
                        <TouchableOpacity
                            style={styles.allButtons}
                            onPress={() => navigation.navigate('LoginScreen')}>
                            <Text style={styles.navButtonText}>
                            Logout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            {/* Header */}
                <View style={styles.headerWrapper}>
                    
                    <Image source={require('../assets/applogo.png')}
                        style={styles.profileImage} />
                    {/* Icon */}
                    <Feather />
                </View>
                <Text style={{color: colors.backgroundLanding, alignSelf: 'center', marginTop: '20%', fontSize: 40, fontWeight: 'bold', elevation: 6}}>Para-po!</Text>
                <Text style={{padding: 20, justifyContent: 'center'}}>This app is protected by copyright law and international treaties. Unauthorized reproduction or distribution of this app, or any portion of it, may result in severe criminal and civil penalties and will be prosecuted to the maximum extent possible under the law.</Text>
                <Text style={{padding: 20, justifyContent: 'center'}}>if you have any comments, suggestions or problems encountered with our application, do not hesitate to contact us at the following details:  Feedback/complaint form - feedback.parapo.me Email: rpatlonag_18000000</Text>
            

            {/* Hero */}
            <View style={styles.heroWrapper}>
                
            </View>

                
            </ScrollView>

            {/* Sidebar Nav */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        flexWrap: 'wrap',
        margin: 0,
        // position: 'relative'
    },
    tempNavigators: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        // borderWidth: 2,
        width: '100%',
        zIndex: 1,
        // position: 'absolute',
        color: '#fff',
        elevation: 2,
        
        
    },
    allButtons: {
        marginVertical: 5,
    },
    navButtonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.backgroundLanding,
        alignSelf: 'center',
        paddingHorizontal: 15
        // fontFamily: 'Lato-Regular',
    },
    headerWrapper: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
        // backgroundColor: colors.back,
        height: 150,
        color: 'black'
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 360,
        alignSelf: 'center',
        borderWidth: 5,
        borderColor: colors.white,
        elevation: 10
    },
    menu: {
        color: colors.backgroundLanding,
    },
    heroWrapper: {
        marginTop: 30,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    heroNameOccWrapper: {
        marginTop: '15%',
        padding: 0,
        alignSelf: 'center',
        borderRadius: 20,
        height: 70,
        paddingVertical: '5%',
        paddingHorizontal: '25%',
        backgroundColor: colors.backgroundLanding,
        elevation: 6,
    },
    heroName: {
        fontSize: 14,
        color: colors.white,
        alignItems: 'center',
        fontWeight: "bold",
    },
    heroOcc: {
        fontSize: 12,
        textAlign: 'center',
        color: colors.lightgreen,
        fontWeight: "bold",
    },
    heroPara: {
        // paddingTop: 25,
        marginLeft: 10,
        // height: 70,
        borderWidth: 2,
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 25,
        borderColor: colors.gray,
        borderTopStartRadius: 26,
        fontWeight: "bold",
    },

    infoWrapper: {
        margin: '5%',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderWidth: 2,
        borderRadius: 25,
    },

    infoStartItem: {
        fontSize: 11,
        paddingRight: 15,
        paddingVertical: 15,
        // borderBottomWidth: 1,
        margin: 0,
        fontWeight: 'bold'
    },
    infoEndItem: {
        fontSize: 11,
        paddingVertical: 15,
        paddingLeft: 15,
        // borderBottomWidth: 1,
        margin: 0,
    }

})