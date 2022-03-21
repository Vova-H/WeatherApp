import {Alert} from 'react-native';
import LoadingScreen from "./src/components/screens/LoadingScreen";
import {useEffect, useState} from "react";
import WeatherScreen from "./src/components/screens/WeatherScreen";
import * as Location from "expo-location";


export default function App() {

    const [isLoading, setIsLoading] = useState(true);
    const [state, setState] = useState({})

    // const lon = '34.5911318787936'
    // const lat = '49.582618346048314'


    const API_KEY = 'ca1133957587399fb043a4e41fcfbbad';
    const URL = 'https://api.openweathermap.org/data/2.5/weather?'
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        (async () => {
            const getWeather = async (latitude, longitude) => {
                const data = await fetch(`${URL}lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
                    .then(response => response.json())
                setState(
                    state => ({
                        ...state,
                        temperature: data.main.temp
                    })
                );
                setState(
                    state => ({
                        ...state,
                        condition: data.weather[0].main
                    })
                );
                setState(
                    state => ({
                        ...state,
                        city: data.name
                    })
                );
                setState(
                    state => ({
                        ...state,
                        description: data.weather[0].description
                    })
                );
            }
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                Alert.alert(errorMsg);
                return;
            }
            let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
            await getWeather(latitude, longitude);
            setIsLoading(false);
        })()
    }, [])

    return (
        isLoading ? <LoadingScreen/> : <WeatherScreen
            temp={Math.round(state.temperature)}
            condition={state.condition}
            city={state.city}
            description={state.description}
        />
    );
}



