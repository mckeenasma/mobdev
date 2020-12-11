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



Feather.loadFont();

export default Home = ({navigation}) => {
    const loggedInUserId = 1
    const renderHeroNameOccItem = ({ item }) => {
        // Comparing the LoggedInUser
        if (item.id === loggedInUserId) {
            return (
                <View>
                    <Text style={styles.heroName}>{item.firstName}</Text>
                    <Text style={styles.heroOcc}>{item.occupation}</Text>
                </View>
            )
        }
    }
    const renderHeroParasItem = ({ item }) => {
        // Comparing the LoggedInUser
        if (item.user === loggedInUserId) {
            return (
                <View>
                    <Text style={styles.heroPara}>{item.paras} para's</Text>
                </View>
            )
        }
    }
    const renderInfoItem = ({ item }) => {
        // Comparing the LoggedInUser
        let role = ''
        if (item.role === 1) {
            role = 'Passenger'
        }else {
            role = 'Driver'
        }

        if (item.id === loggedInUserId) {

            return (
                <View style={styles.infoEnd}>
                    
                    <Text style={styles.infoEndItem}>{item.phone}</Text>
                    <Text style={styles.infoEndItem}>{item.firstName}</Text>
                    <Text style={styles.infoEndItem}>{item.lastName}</Text>
                    <Text style={styles.infoEndItem}>{item.email}</Text>
                    <Text style={styles.infoEndItem}>{item.gender}</Text>
                    <Text style={styles.infoEndItem}>{item.dob}</Text>
                    <Text style={styles.infoEndItem}>{item.streetaddress}</Text>
                    <Text style={styles.infoEndItem}>{item.city}</Text>
                    <Text style={styles.infoEndItem}>{item.occupation}</Text>
                    <Text style={styles.infoEndItem}>{role} </Text>
                    
                </View>

            )
        }
    }

    return (
        <View style={styles.container}>
        <ScrollView>
            {/* Header */}
                <View style={styles.headerWrapper}>
                    <Feather
                        name="menu"
                        size={24}
                        color={colors.textDark}
                        style={styles.menu}
                    />
                    <Image source={require('../assets/img/user.png')}
                        style={styles.profileImage} />
                    {/* Icon */}
                    <Feather />

                </View>
            

            {/* Hero */}
            <View style={styles.heroWrapper}>
                <View style={styles.heroNameOccWrapper}>
                    <FlatList
                        data={user}
                        renderItem={renderHeroNameOccItem}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                    />
                </View>
            </View>

            {/* Information */}
            <View style={styles.infoWrapper}>
            
                <View>
                    <Text style={styles.infoStartItem}>Phone</Text>
                    <Text style={styles.infoStartItem}>First Name</Text>
                    <Text style={styles.infoStartItem}>Last Name</Text>
                    <Text style={styles.infoStartItem}>Email</Text>
                    <Text style={styles.infoStartItem}>Gender</Text>
                    <Text style={styles.infoStartItem}>Date of birth</Text>
                    <Text style={styles.infoStartItem}>Street Address</Text>
                    <Text style={styles.infoStartItem}>City</Text>
                    <Text style={styles.infoStartItem}>Occupation</Text>
                    <Text style={styles.infoStartItem}>Role</Text>
                </View>
                <View>
                    <FlatList
                        data={user}
                        renderItem={renderInfoItem}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                    />
                </View>
            </View>
        {/* Button */}
            <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.navButtonText}>Logout</Text>
            </TouchableOpacity>
            </ScrollView>

            {/* Sidebar Nav */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        flexWrap: 'wrap'
    },
    navButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2e64e5',
    alignSelf: 'center'
    // fontFamily: 'Lato-Regular',
    },
    headerWrapper: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: colors.backgroundLanding,
        height: 150
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 360,
        alignSelf: 'center',
        borderWidth: 5,
        borderColor: colors.white,
    },
    menu: {
        color: colors.white,
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
        borderRadius: 20,
    },

    infoStartItem: {
        fontSize: 11,
        paddingRight: 15,
        paddingVertical: 15,
        borderBottomWidth: 1,
        margin: 0,
    },
    infoEndItem: {
        fontSize: 11,
        paddingVertical: 15,
        paddingLeft: 15,
        borderBottomWidth: 1,
        margin: 0,
    }

})