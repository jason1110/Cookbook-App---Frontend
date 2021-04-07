LogBox.ignoreAllLogs()
import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ImageBackground, LogBox} from 'react-native';
import 'react-native-gesture-handler'
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import AsyncStorage from '@react-native-async-storage/async-storage'
import CustomButton from '../shared/CustomButton'
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico'
import { AppLoading } from 'expo';

const baseURL = 'https://cookbook-app-backend.herokuapp.com/'
const Stack = createStackNavigator()

export default function LandingScreen({navigation}) {

    let [fontsLoaded] = useFonts({
        Pacifico_400Regular,
    });
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
            .then(response => response.json())
            .then(user => setUser( user ))  
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

    const image = {uri: "https://i.pinimg.com/originals/9f/f6/e6/9ff6e60c4834e30f2be56ae3ab2c65c4.jpg"}
    
        if (!fontsLoaded) {
            return <AppLoading />;
        } else {
        return (
            <>
            <ImageBackground source={image} style={styles.image} imageStyle={{opacity: 0.7}}>
            {!user.username
            ?!loginForm && !signUpForm 
                ?  <View>
                    <Text style={styles.title}>Savory Search</Text>
                        <CustomButton
                            style={styles.button}
                            title='Sign up'
                            onPress={handleSignUpForm}
                        />
                        <CustomButton
                            style={styles.button}
                            title='Login'
                            onPress={handleLoginForm}
                        />
                    </View>
                :  
                    (<View>
                            {loginForm
                                ? <LoginForm style={styles.login} login={login} user={user} error={error} />
                                : null
                            }
                            {signUpForm
                                ? <SignUpForm style={styles.login} signUp={signUp} />
                                : null 
                            }   
                    </View>)
            :  navigation.navigate('Home')
        } 
        </ImageBackground>
        </>     
        )
    }
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 350,
    },
    title: {
        fontSize: 60,
        alignItems: 'center',
        transform: [{
        rotate: '-25deg'
        }],
        color: '#f0f5fc',
        flexWrap: 'wrap',
        paddingVertical: 6,
        paddingHorizontal: 50,
        margin: 50,
        marginBottom: 70,
        fontFamily: 'Pacifico_400Regular'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: 'rgba(140,171,217,0.7)' 
    },
    button: {

    },
    login: {
        flex: 1
    }


})