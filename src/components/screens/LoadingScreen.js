import React from "react";
import {StyleSheet, Text, View} from "react-native";

const LoadingScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Загрузка Погоды...
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
