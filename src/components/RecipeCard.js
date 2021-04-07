import React, { Component } from 'react'
import { StyleSheet, Text, View, Linking, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements'

export default function RecipeCard({favorite}) {

    const showIngredients = () =>{
        return favorite.ingredients
    }

        return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>   
                <TouchableOpacity 
                activeOpacity={0.5}
                onPress={ () => Linking.openURL(favorite.href)}>
                    <ListItem
                        key={favorite.id} 
                        topDivider
                        style={styles.card}
                        >
                        <Avatar source={{ uri: favorite.thumbnail}} size='large' rounded/>
                        <ListItem.Content style={styles.content}>
                        <ListItem.Title style={styles.title}>{favorite.title}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        )
}



const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },   
    card: {
        flex: 1,
        alignContent: 'center',
        width: 400,
        height: 100,
        padding: 10,
    },
    image: {
        margin: 0,
    },
    title: {
        marginBottom: 0,
        textAlign: "center",
        justifyContent: 'center',
        maxHeight: 50,
        fontSize: 20,
    },
    content: {
        flex: 1,
    }
})