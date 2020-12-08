import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Input } from 'react-native-elements'

export default class SignUpForm extends Component {
    
    state = {
        firstName: "",
        lastName: "",
        username: "",
        password: ""
    }
    
    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state)
    }

    
    render(){
        return(
        <View style={styles.container}>   
        <Text> Sign Up to create your own Cookbook! </Text>
                <Input 
                style={styles.inputForm} 
                label='First name'  
                value={this.state.firstName} 
                onChangeText={ value => this.onChangeText('firstName', value) }
                />
                <Input 
                style={styles.inputForm} 
                label='Last Name' 
                value={this.state.lastName} 
                onChangeText={ value => this.onChangeText('lastName', value) }
                />
                <Input 
                style={styles.inputForm} 
                label='Username'
                value={this.state.username} 
                onChangeText={ value => this.onChangeText('username', value) }
                />
                <Input 
                style={styles.inputForm} 
                label='Password' 
                secureTextEntry={true} 
                value={this.state.password} 
                onChangeText={ value => this.onChangeText('password', value) }
                />
                <Button 
                title='Sign Up' 
                value='signUp' 
                onPress={this.handleSubmit}
                    />   
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    }
});