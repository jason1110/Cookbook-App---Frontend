import React, { useState, useEffect } from 'react'
import { View, Button} from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import AsyncStorage from '@react-native-async-storage/async-storage'
import HomeScreen from './HomeScreen'

const baseURL = 'http://localhost:3000/'
const Stack = createStackNavigator()

export default function LandingScreen({navigation}) {


    const [ user, setUser] = useState({})
    const [ error, setError] = useState('')
    const [ loginForm, setLoginForm] = useState(false)
    const [ signUpForm, setSignUpForm] = useState(false)

    const [isLoading, setisloading] = useState(false)
    const [isSignOut, setisSignOut] = useState(false)
    const [userToken, setUserToken] = useState('')
    
    
    useEffect(() => {
    let token = AsyncStorage.getItem('token')
    if(token){
        fetch(baseURL + 'profile', {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then (response => response.json())
            .then (result => {
            if (result.id) {
                setUser({user: result})
            }
        })
    }}, [])
    
    
    const signUp = (user) => {
        fetch(baseURL + 'users', { 
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
            user: {
                first_name: user.firstName,
                last_name: user.lastName,
                username: user.username,
                password: user.password
            }
            })
        })
            .then(response => response.json)
            .then(user => setUser({ user }))  
    }
    
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
    const handleSignUpForm = () => {
        setSignUpForm(true)
    }
    return (
        <>
        {!user.username
        ? !loginForm && !signUpForm 
            ? <View>
                <Button
                    title='Sign up'
                    onPress={handleSignUpForm}
                />
                <Button
                    title='Login'
                    onPress={handleLoginForm}
                />
            </View>
            : null 
            (<View>
                    {loginForm
                        ? <LoginForm login={login} user={user} error={error} />
                        : null
                    }
                    {signUpForm
                        ? <SignUpForm signUp={signUp} />
                        : null 
                    }   
            </View>)
        :  navigation.navigate('Home')
        }  
    </>     
    )
}
