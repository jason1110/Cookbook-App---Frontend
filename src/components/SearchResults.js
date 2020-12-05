import React, { useState, useEffect } from 'react';
import { StyleSheet, 
        Text, 
        View, 
        // Button, 
        Alert, 
        TextInput, 
        ScrollView,  
        Linking,
        Image, 
        ActivityIndicator,
        defaultSource,
        FlatList,
        SafeAreaView
        } 
        from 'react-native';
import { SearchBar } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Constants from 'expo-constants';
import styled from 'styled-components'

import AddToCookbookButton from './AddToCookbookButton'
// import Card from '../shared/Card'

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
                        <Card.Image  source={{ uri: hasImage()}} style={styles.image}/>
                        <Card.Title style={styles.title}>{recipe.title}</Card.Title>
                        <Card.Divider style={styles.divider}/>
                        <Text style={styles.paragraph} >{recipe.ingredients}</Text>
                        <Text 
                            style={{color: 'blue', marginBottom: 10}}
                            onPress={ () => Linking.openURL(recipe.href)}
                            >Recipe website
                        </Text>
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