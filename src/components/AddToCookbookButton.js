import React, { useState, useEffect } from 'react';
import { StyleSheet, 
        Text, 
        View,
        Alert,
        } 
        from 'react-native';
import { Button } from 'react-native-elements'
import {LinearGradient} from "expo-linear-gradient"

const baseURL = 'https://cookbook-app-backend.herokuapp.com/'

export default function AddToCookbookButton({recipe}) {

    const [ newRecipe, setNewRecipe] = useState({})

    const addRecipe = (recipe) => {
        fetch(baseURL + 'recipes', { 
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                href: recipe.href,
                title: recipe.title,
                thumbnail: recipe.thumbnail,
                ingredients: recipe.ingredients
            })
        })
            .then(response => response.json)
            .then(Alert.alert(`${recipe.title} has been added to your Cookbook!`))
            .catch((error) => {
                console.error(error);
        });
    }


    const handleSubmit = () => {
        addRecipe(recipe)
    }

    return (
        <View  style={styles.container}>
            <LinearGradient
                colors={['#7ec4df', '#598b9e', '#20363e']}
                style={styles.buttonGradientContainer}
            >
                <Button buttonStyle={styles.likeButton}
                icon={{ name: "book", size: 20, color: 'white' }}
                onPress={handleSubmit}
                />
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative"
    },
    likeButton: {
        backgroundColor: 'transparent',
        flex: 0,
        height: 30,
    },
    buttonGradientContainer:{
        padding: 10,
        margin: 10,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        position: "relative"
    }
})