import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList, TextInput } from 'react-native';

export default function RecipeFilter() {

    const [value, onChangeText] = useState('Filter by type')

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        color: '#f00',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
});
