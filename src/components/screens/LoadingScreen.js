import React, {useEffect, useState} from "react";
import {Alert, StyleSheet, Text, View} from "react-native";
import * as Location from "expo-location"

const LoadingScreen = (props) => {


    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                Alert.alert(errorMsg);
                return;
            }

            let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
            props.setIsLoading(false);
            // setLocation(coords)
            // console.log(coords)

        })()
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Загрузка Погоды...
            </Text>
            <Text>
                {/*{location}*/}
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fdf6aa"
    },
    text: {
        fontSize: 30,
    }

})

export default LoadingScreen
