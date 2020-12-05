import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, FlatList, TextInput } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title='Search for a recipe'
                onPress={()=> navigation.navigate('Search')}
                />
            <Button
                title='Sign up'
                onPress={()=> navigation.navigate('SignUp')}
                />
            <Button
                title='Login'
                onPress={()=> navigation.navigate('Login')}
                />
        </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });


// <View style={styles.container}>
//           <Text>CookBook!</Text>
//           <RecipeSearch />
//       </View>