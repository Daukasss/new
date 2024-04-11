import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Logo({ navigation }) {
useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Home');
    }, 3000);
}, []);


    return (
        <View style={styles.container}>
            <Image
                source={require('./assets/maxresdefault.png')}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    }
});
