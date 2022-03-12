import {StyleSheet} from 'react-native';
import LoadingScreen from "./src/components/screens/LoadingScreen";
import {useState} from "react";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    return (
        isLoading ? <LoadingScreen setIsLoading={setIsLoading}/> : null
    );
}

const styles = StyleSheet.create({});
