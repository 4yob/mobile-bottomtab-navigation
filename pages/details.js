import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, visitante!</Text>
            <Text style={styles.text}>
                Você acabou de navegar para esta página.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFDAB9",
    },
    title: {
        marginBottom: 20,
        fontSize: 24,
        fontWeight: "bold",
        color: "#FF6347",
    },
    text: {
        fontSize: 18,
        color: "#FF6347",
    },
});