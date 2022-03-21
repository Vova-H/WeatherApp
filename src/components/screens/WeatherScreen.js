import React from "react";
import propTypes from 'prop-types';
import {View, Text, StyleSheet, StatusBar} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import weatherOptions from "../../WeatherOptions";

const WeatherScreen = (props) => {
    return (
        <LinearGradient colors={weatherOptions[props.condition].gradient}
                        style={styles.container}>
            <StatusBar hidden={true}/>
            <View>
                <Text style={styles.textCity}>{props.city}</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <MaterialCommunityIcons name={weatherOptions[props.condition].iconName} size={60} color="#fff"
                                        style={{marginRight: 10}}/>
                <Text style={styles.textTemp}>
                    {props.temp}
                </Text>
                <MaterialCommunityIcons name="temperature-celsius" size={24} color="#fff"/>
            </View>
            <Text style={styles.textCondition}>
                {props.condition}
            </Text>
            <Text style={styles.textDescription}>({props.description})</Text>
        </LinearGradient>
    )
}

WeatherScreen.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Dust", "Ash", "Squall", "Tornado", "Clear", "Clouds"]).isRequired,
    city: propTypes.string.isRequired,
    description: propTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textCity: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 50,
        color: '#fff'
    },
    textTemp: {
        fontSize: 50,
        color: '#fff'
    },
    textCondition: {
        fontSize: 35,
        color: '#fff'
    },
    textDescription:{
        color: '#fff',
        fontSize:20
    }
})

export default WeatherScreen
