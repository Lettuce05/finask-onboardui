import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


const Welcome = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.welcomeText}>Welcome to</Text>
                <Text style={styles.companyName}>Finask</Text>
                <Text style={styles.introText}>An app that will help you to properly manage your finances</Text>
            </View>
            <View style={styles.introContainer}>
                <Image source={require('../assets/images/intro.png')}/>
                <TouchableOpacity style={styles.buttonWrapper} onPress={()=> navigation.navigate("Onboard")}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    textContainer: {
        marginTop: 50,
        alignSelf: "flex-end",
        width: 216,
        marginRight: 20
    },
    welcomeText: {
        color: "#ffffff", 
        fontFamily: "Poppins-Regular",
        fontSize: 20,
        textAlign: "center"
    },
    companyName: {
        color: "#DA6A60",
        fontFamily: "Play-Regular",
        fontSize: 30,
        textAlign: "center",
        marginBottom: 10
    },
    introText: {
        color: "#ffffff",
        fontFamily: "Poppins-Regular",
        fontSize: 15,
        textAlign: "right"
    },
    buttonWrapper: {
        width: 125,
        height: 31,
        backgroundColor: "#DFDEDE",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30
    },
    buttonText: {
        textAlign: "center",
        color: "#000000",
        fontFamily: "Poppins-Regular",
        fontSize: 14
    },
    introContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})