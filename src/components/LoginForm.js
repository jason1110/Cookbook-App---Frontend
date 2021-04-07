import React, { useState } from 'react'
import { StyleSheet, View} from 'react-native';
import { Input } from 'react-native-elements'
import CustomButton from '../shared/CustomButton'

export default function LoginForm({login, error}) {
    
    const [ username, setUsername] = useState("")
    const [ password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        login(username, password)
    }

    const onChangeUser = (key, val) => {
        setUsername(val)
    }
    const onChangePassword = (key, val) => {
        setPassword(val)
    }

    
    return (
    <View style={styles.container}>
        <Input 
        label='Username'
        style={styles.inputForm}  
        value={username} 
        onChangeText={value => onChangeUser('username', value)} 
        />
        <Input 
        label='Password'
        style={styles.inputForm}  
        secureTextEntry={true} 
        value={password} 
        onChangeText={value => onChangePassword('password', value)} 
        />
        {error ? <p> {error} </p> : null}
        <CustomButton title='Login' 
        value='login' 
        onPress={handleSubmit}
        />
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
    flex: 0,
    backgroundColor: '#f0f5fc',
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    },
    inputForm:{
        color: 'black'
    }
});