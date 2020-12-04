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

export default Home = () => {
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
        if (item.id === loggedInUserId) {
            return (
                <View style={styles.infoEnd}>
                    <Text >{item.phone}</Text>
                    <Text >{item.firstName}</Text>
                    <Text >{item.lastName}</Text>
                    <Text >{item.email}</Text>
                    <Text >{item.gender}</Text>
                    <Text >{item.dob}</Text>
                    <Text >{item.streetaddress}</Text>
                    <Text >{item.city}</Text>
                </View>

            )
        }
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
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
            </SafeAreaView>

            {/* Hero */}
            <View style={styles.heroWrapper}>
                <View>
                    <FlatList
                        data={paras}
                        renderItem={renderHeroParasItem}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                    />
                </View>
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
                    <Text>Phone</Text>
                    <Text>First Name</Text>
                    <Text>Last Name</Text>
                    <Text>Email</Text>
                    <Text>Gender</Text>
                    <Text>Date of birth</Text>
                    <Text>Street Address</Text>
                    <Text>City</Text>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
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
        marginTop: 30,
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 20,
        height: 70,
        paddingVertical: 4,
        paddingHorizontal: 150,
        borderColor: colors.gray,
    },
    heroName: {
        fontSize: 20,
        alignItems: 'center',
        fontWeight: "bold",
    },
    heroOcc: {
        fontSize: 14,
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
        margin: 20,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderWidth: 2,
        borderRadius: 20,
    },

})