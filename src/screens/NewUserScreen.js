import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler'

export default function NewUserScreen({navigation}) {
    return (
        <View>
            <Text>create account</Text>
            <Button
                title='Go Back'
                onPress={navigation.navigate('Landing')}
            />
        </View>
    )
}
