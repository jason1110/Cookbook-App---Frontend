import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, FlatList, TextInput, ScrollView } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeCard from '../components/RecipeCard'
const baseURL = 'https://cookbook-app-backend.herokuapp.com/'

export default function CookbookScreen() {

    const [favorites, setFavorites] = useState([])

    useEffect ( () => {
        fetch (baseURL + 'recipes')
            .then(response => response.json())
            .then((recipe) => setFavorites(recipe))
            .catch((error) => {
                console.error(error);
        });
    }, [])
    console.log(favorites)
    const showRecipes = () =>  favorites.map(favorite => <RecipeCard favorite={favorite} key={favorite.id}/>)

    return (
        <ScrollView >
            <View style={styles.container}>
                {showRecipes()}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
