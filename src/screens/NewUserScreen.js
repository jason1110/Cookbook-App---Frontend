import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, FlatList, TextInput } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpForm from '../components/SignUpForm';

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
