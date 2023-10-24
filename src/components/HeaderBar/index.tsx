
import { useState, useEffect } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { styles } from './HeaderBar';
const lupa = require('../../../assets/lupa.png');

export const HeaderBar = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Image style={styles.image} source={lupa}/>
                <TextInput style={styles.input} placeholder='Pesquisar'/>
            </View>
            <Text style={styles.text}>MeteorOlho</Text>
            <Text>{time.toLocaleTimeString()}</Text>
        </View>
    );
};
