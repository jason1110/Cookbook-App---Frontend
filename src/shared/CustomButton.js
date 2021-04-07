import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from "react-native"
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
                colors={['#7ec4df', '#598b9e', '#20363e']}
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
    elevation: 0,
    backgroundColor: "transparent",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
},
buttonGradientContainer:{
    padding: 10,
    margin: 10,
    alignItems: 'center', 
    borderRadius: 5,
},
buttonText: {
    fontSize: 18,
    color: "#f0f5fc",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
}
});
