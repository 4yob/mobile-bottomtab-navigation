import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Atividade 06 - Bottom Tab Navigation</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFDAB9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF6347',
    },
});
