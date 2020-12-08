import React, { useState, useEffect } from 'react';
import { StyleSheet, 
        Text, 
        View,
        Alert  
        } 
        from 'react-native';
import { Button } from 'react-native-elements'

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
            .then(Alert.alert(`${recipe.title} has been added to favorites`))
            .catch((error) => {
                console.error(error);
        });
    }


    const handleSubmit = () => {
        addRecipe(recipe)
    }

    return (
        <View>
            <Button style={styles.likeButton}
            icon={{ name: "book", size: 20, color: 'white' }}
            onPress={handleSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    likeButton: {
        backgroundColor: 'grey',
        flex: 0,
        height: 67,
    }
})