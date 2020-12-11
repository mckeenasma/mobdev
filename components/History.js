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
import parasInfo from '../assets/data/history.js'



Feather.loadFont();

export default Home = ({navigation}) => {
    const loggedInUserId = 1
    const renderParasInfoItem = ({ item }) => {
        // Comparing the LoggedInUser
        let trafficColor = ''
        if (item.traffic === 'Light Traffic') {
            trafficColor = '#FFCE0B'
        }
        if (item.traffic === 'No Traffic') {
            trafficColor = '#00FF19'
        }
        if (item.traffic === 'Heavy Traffic') {
            trafficColor = '#FF0000'
        }
        if (item.user === loggedInUserId) {
            return (
                <View style={styles.info}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.from} - {item.to}</Text>
                    <Text >Travelled for {item.travelDuration}</Text>
                    <Text style={{fontWeight: 'bold', paddingVertical: 8, fontSize: 16, color: trafficColor}}>{item.traffic}</Text>
                    <Text style={{fontSize: 12, paddingTop: 5, color: colors.gray}}>{item.date}</Text>
                    
                </View>
            )
        }
    }
    return (
        <View style={styles.container}>
        
            <ScrollView>
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
                        onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.navButtonText}>
                        Go to Home
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
                <View style={styles.header}>
                    <View style={styles.paras}><Text style={styles.parasText}>26 Paras</Text></View>
                </View>

                
                <View style={styles.infoWrapper}>
                    
                        <FlatList
                        
                            data={parasInfo}
                            renderItem={renderParasInfoItem}
                            keyExtractor={(item) => item.id}
                            
                        />
                    
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        flexWrap: 'wrap',
        margin: 0,
        flexDirection: 'column',
        justifyContent: 'space-between',
        // position: 'relative'
        
    },
    tempNavigators: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginRight: '-5%',
        // borderWidth: 2,
        width: '100%',
        zIndex: 1,
        // position: 'absolute',
        color: colors.background,
        elevation: 2, 
        // borderWidth: 1
    },
    menu: {
        color: colors.backgroundLanding,
    },
    navButtonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.backgroundLanding,
        alignSelf: 'center',
        paddingHorizontal: 15
        // fontFamily: 'Lato-Regular',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '20%',
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        width: '100%',
        paddingBottom: '20%'
    },
    parasText: {
        fontSize: 40,
        backgroundColor: colors.backgroundLanding,
        padding: 40,
        borderRadius: 20,
        color: colors.white,
        fontWeight: 'bold',
        elevation: 10
    },
    infoWrapper: {
        margin: 0,
        padding: 0,
        borderRadius: 25,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        padding: 20,
        paddingLeft: 50,

    },
    
    
})