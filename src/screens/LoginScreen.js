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
  // const [ loginForm, setLoginForm] = React.useState(false)
  // const [ signUpForm, setSignUpForm] = React.useState(false)


  // useEffect(() => {
  //   let token = AsyncStorage.getItem('token')
  //   if(token){
  //       fetch(baseURL + 'profile', {
  //           method: "GET",
  //           headers: {
  //               "Authorization": `Bearer ${token}`
  //           }
  //       })
  //           .then (response => response.json())
  //           .then (result => {
  //           if (result.id) {
  //               setUser({user: result})
  //           }
  //       })
  //   }}, [])
    
    
  //   const signUp = (user) => {
  //       fetch(baseURL + 'users', { 
  //           method: 'POST',
  //           headers: {
  //               "Accept": "application/json",
  //               "Content-Type": "application/json"
  //           },
  //           body: JSON.stringify({
  //           user: {
  //               first_name: user.firstName,
  //               last_name: user.lastName,
  //               username: user.username,
  //               password: user.password
  //           }
  //           })
  //       })
  //           .then(response => response.json)
  //           .then(user => setUser({ user }))  
  //   }
    
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
  //   const handleSignUpForm = () => {
  //       setSignUpForm(true)
  //   }


  //   const handleStartPress = () => {
  //     // WE COULD DISPATCH FROM HERE
  //     // HOWEVER, THAT WOULD NOT TRIGGER THE LOADING VIEW
  //     setLoading(true);
  // };
  
  // useEffect(() => {
  //     let timer;
  
  //     if (loading) {
  //       timer = setTimeout(() => {
  //         dispatch({ type: 'LOGIN', data: { email, password } });
  //         setLoading(false);
  //       }, 1000);
  //     }
  
  //     return () => clearTimeout(timer);
  // }, [loading]);

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
  


            {/* { !loginForm && !signUpForm
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
              : null  } */}

  {/* { signUpForm
      ?<SignUpForm signUp={signUp} />
      : null 
  } */}