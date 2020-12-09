import React, { useState, useEffect } from 'react';
import { StyleSheet, 
        Text, 
        View,  
        Linking,
        SafeAreaView,
        TouchableOpacity
        } 
        from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import AddToCookbookButton from './AddToCookbookButton'

export default function searchResults({recipe}) {

    const hasImage = () => {
        return recipe.thumbnail
        ? recipe.thumbnail
        : 'https://static.thenounproject.com/png/778815-200.png'
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                    < Card containerStyle={styles.card}>
                        <TouchableOpacity onPress={ () => Linking.openURL(recipe.href)}>
                        <Card.Image  source={{ uri: hasImage()}} style={styles.image}/>
                        <Card.Title style={styles.title}>{recipe.title}</Card.Title>
                        </TouchableOpacity>
                        <Card.Divider style={styles.divider}/>
                        <Text style={styles.paragraph} >{recipe.ingredients}</Text>
                        <AddToCookbookButton recipe={recipe}/>
                    </Card>  
            </View> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        width: 350,
    },
    paragraph: {
        margin: 0,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    card: {
        width: 300,
        height: 350,
        borderRadius: 9,
        elevation: 8
    },
    image: {
        margin: 0,
    },
    title: {
        marginBottom: 0,
        textAlign: "center",
        maxHeight: 50,
        fontSize: 20,
    }
})
