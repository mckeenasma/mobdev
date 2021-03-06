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
                    <Hr lineColor="#eee" width={1}/>
                    <Text style={styles.infoEndItem}>{item.firstName}</Text>
                    <Hr lineColor="#eee" width={1}/>
                    <Text style={styles.infoEndItem}>{item.lastName}</Text>
                    <Hr lineColor="#eee" width={1}/>
                    <Text style={styles.infoEndItem}>{item.email}</Text>
                    <Hr lineColor="#eee" width={1}/>
                    <Text style={styles.infoEndItem}>{item.gender}</Text>
                    <Hr lineColor="#eee" width={1}/>
                    <Text style={styles.infoEndItem}>{item.dob}</Text>
                    <Hr lineColor="#eee" width={1}/>
                    <Text style={styles.infoEndItem}>{item.streetaddress}</Text>
                    <Hr lineColor="#eee" width={1}/>
                    <Text style={styles.infoEndItem}>{item.city}</Text>
                    <Hr lineColor="#eee" width={1}/>
                    <Text style={styles.infoEndItem}>{item.occupation}</Text>
                    {/* <Text style={styles.infoEndItem}>{role} </Text> */}
                    
                </View>

            )
        }
    }

    return (
        <View style={styles.container}>
        <ScrollView>
            {/* Header */}
                <View style={styles.headerWrapper}>
                    
                    <Image source={require('../assets/img/me.jpg')}
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
                    <Hr lineColor="#eee" width={1}/>
                    <Text style={styles.infoStartItem}>First Name</Text>
                    <Hr lineColor="#eee" width={1}/>
                    <Text style={styles.infoStartItem}>Last Name</Text>
                    <Hr lineColor="#eee" width={1}/>
                    <Text style={styles.infoStartItem}>Email</Text>
                    <Hr lineColor="#eee" width={1}/>
                    <Text style={styles.infoStartItem}>Gender</Text>
                    <Hr lineColor="#eee" width={1}/>
                    <Text style={styles.infoStartItem}>Date of birth</Text>
                    <Hr lineColor="#eee" width={1}/>
                    <Text style={styles.infoStartItem}>Street Address</Text>
                    <Hr lineColor="#eee" width={1}/>
                    <Text style={styles.infoStartItem}>City</Text>
                    <Hr lineColor="#eee" width={1}/>
                    <Text style={styles.infoStartItem}>Passenger Type</Text>
                    {/* <Text style={styles.infoStartItem}>Role</Text> */}
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
                <View style={styles.tempNavigators}>
                    {/* <View>
                        <Feather
                                name="menu"
                                size={24}
                                color={colors.textDark}
                                style={styles.menu}
                            />
                    </View> */}
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
                    <TouchableOpacity
                        style={styles.allButtons}
                        onPress={() => navigation.navigate('About')}>
                        <Text style={styles.navButtonText}>
                        Go to About
                        </Text>
                    </TouchableOpacity>
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
        position: 'relative'
    },
    tempNavigators: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        // borderWidth: 2,
        width: '100%',
        zIndex: 1,
        position: 'absolute',
        color: '#fff',
        elevation: 2,
        // marginRight: '10%'
        
        
    },
    allButtons: {
        marginVertical: 5,
    },
    navButtonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center',
        paddingHorizontal: 15
        // fontFamily: 'Lato-Regular',
    },
    headerWrapper: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
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