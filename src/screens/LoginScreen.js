import React, { useState, useEffect } from 'react';
import { View, Button} from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import AsyncStorage from '@react-native-async-storage/async-storage'

const baseURL = 'http://localhost:3000/'
const AuthContext = React.createContext()



export default function LoginScreen({navigation}) {

const [ user, setUser] = React.useState({})
const [ error, setError] = React.useState('')

    const login = (username, password) => {
        fetch(baseURL + 'login', {
            method: "POST",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            user: {
                username,
                password
            }
            })
        })
            .then(response => response.json())
            .then(result => {
            if (result.token){
                AsyncStorage.setItem('token', result.token)
                setUser( 
                result.user
                )
            } else {
                setError(
                result.error
                )
            }
            })
    }

    const handleLoginForm = () => {
        setLoginForm(true)
    }

const loginUser = (username, password) => {
    login(username, password)
    .then(() => {
        navigation.navigate('Home');
    })
    .catch((err) => console.log('error:', err.message));
};

return (
    <View>
        <LoginForm login={login} user={user} error={error} />            
    </View>
    )
}


