import React from 'react';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: "1",
        title: "SET YOUR FINANCIAL GOALS",
        text: "Your goals will help us to formulate the right recommendations for success",
        image: require("../assets/images/onboard1.png"),
        backgroundColor: "#000000"
    },
    {
        key: "2",
        title: "FOLLOW OUR TIPS AND TRICKS",
        text: "We help our users to make the right financial decisions",
        image: require("../assets/images/onboard2.png"),
        backgroundColor: "#000000"
    },
    {
        key: "3",
        title: "ENJOY FINANCIAL SUCCESS",
        text: "You can track your progress and achievements in a special section",
        image: require("../assets/images/onboard3.png"),
        backgroundColor: "#000000"
    },
]

const Onboard = () => {

    const renderItem = ({item}) => {
        return (
            <View style={styles.slide}>
                {item.image && <Image style={styles.image} source={item.image} />}
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        )
    }

    const keyExtractor = (item) => item.key;

    const renderNextButton = () => {
        return (
            <View style={styles.buttonCircleWrapper}>
                <View style={styles.buttonCircle}>
                    <Feather name="arrow-right" color="black" size={20} />
                </View>
            </View>
        )
    }

    const renderDoneButton = () => {
        return (
            <View style={styles.buttonCircleWrapper}>
                <View style={styles.buttonCircle}>
                    <Feather name="arrow-right" color="black" size={20} />
                </View>
            </View>
        )
    }

    return (
        <View>
            <AppIntroSlider
                data={slides}
                keyExtractor={keyExtractor} 
                renderItem={renderItem} 
                renderNextButton={renderNextButton}    
                renderDoneButton={renderDoneButton}    
            />
        </View> 
    )
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#000000'
    },
    title: {
        color: "#fff",
        textAlign: "center",
        width: 140,
        height: 52,
        fontFamily: "Poppins-Bold",
        fontSize: 14,
    },
    text: {
        color: "#fff",
        textAlign: "center",
        width: 270,
        height: 54,
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        marginBottom: 150
    },
    image: {
        marginVertical: 30
    },
    buttonCircle: {
        width: 33,
        height: 33,
        backgroundColor: '#FFE4DA',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonCircleWrapper: {
        width: 50,
        height: 50,
        backgroundColor: 'rgba(255, 127, 80, .20)',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Onboard;
