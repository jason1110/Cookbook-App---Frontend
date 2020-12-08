import React from 'react'
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native"
TouchableOpacity.defaultProps = { activeOpacity: 0.8 }
import {LinearGradient} from "expo-linear-gradient"

export default function CustomButton({onPress, title}) {
    return (
        <TouchableOpacity 
        activeOpacity={0.8} 
        onPress={onPress} 
        style={styles.buttonContainer}
        >
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.buttonGradientContainer}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // ...
    buttonContainer: {
    elevation: 8,
    backgroundColor: "transparent",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
},
buttonGradientContainer:{
    padding: 15, 
    alignItems: 'center', 
    borderRadius: 5,
},
buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
}
});
