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
    Button,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import user from '../assets/data/users.js'
import paras from '../assets/data/paras.js'
import colors from '../assets/colors/colors';
import { color } from 'react-native-reanimated';
import Hr from "react-native-hr-component";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormButton from './FormButton';



Feather.loadFont();

export default Home = ({navigation}) => {
    return (
        <View style={styles.container}>
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>

            <Text style={{padding: 5, color: colors.backgroundLanding}}>Cancel</Text>
            </TouchableOpacity>
            <View style={styles.tempNavigators}>
                <View style={{padding: 20, paddingLeft: 0, alignSelf: 'center', flexDirection: "row", justifyContent: "space-between"}}>
                    <FontAwesome name={'google-plus'} style={{color: colors.white}} size={22} />
                    <Text style={{color: colors.white, paddingLeft: '10%', fontWeight: 'bold'}}>Login with Google</Text>
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
                <View style={{width: '80%', alignSelf: 'center'}}>
                <FormButton
        buttonTitle="Continue as Mckeen"
        
        onPress={() => navigation.navigate('Home')}
      />
            </View>
                <Text style={{padding: 20, justifyContent: 'center', textAlign: 'center'}}>To continue, Google will share you name, email address, language preference, and profile picture with para-po.com. Before using this app, you can review para-po.com's privacy and terms of service.</Text>
            
            
            {/* <Button title='Continue as Mckeen'  style={{width: 1}}/> */}
            <View style={{paddingTop: '30%'}}>
                <View style={{padding: 20, paddingLeft: 0, alignSelf: 'center', flexDirection: "row", justifyContent: "space-between"}}>
                    <FontAwesome name={'lock'} style={{color: colors.black}} size={22} />
                    <Text style={{color: colors.black, paddingLeft: '5%', fontWeight: 'bold'}}>This doesn’t let the app post to Google.</Text>
                </View>
            </View>
                
            

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
        width: '100%',
        height: '10%',
        backgroundColor: '#de4d41',
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