import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Input } from 'react-native-elements'

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
    <View>
        <Input 
        label='Username' 
        value={username} 
        onChangeText={value => onChangeUser('username', value)} 
        />
        <Input 
        label='Password' 
        type='password' 
        value={password} 
        onChangeText={value => onChangePassword('password', value)} 
        />
        {error ? <p> {error} </p> : null}
        <Button title='Login' 
        value='login' 
        onPress={handleSubmit}
        />
    </View>
    )
}


            // <SearchBar
            //     platform='android'
            //     style={styles.textInput}
            //     placeholder='search by ingredients'
            //     searchIcon={false}
            //     onChangeText={updateSearch}
            //     onClear={handleClear}
            //     value={ingredients}
            //     />