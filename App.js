import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, FlatList } from 'react-native';
import 'react-native-gesture-handler'

const recipePuppyURL = 'http://recipepuppy.com/api/'

export default function App() {

const [recipes, setRecipes] = useState([])

useEffect(() => {
  fetch(recipePuppyURL)
  .then(response => response.json())
  .then(console.log())
}, [])

const renderItem = ({item}) => {
  <Item title={item.title} />
}


  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text>CookBook!</Text>
          <FlatList
            data={recipes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.flatList}
          />  
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flatList: {
      color: '#fff'
    }
  });
  


