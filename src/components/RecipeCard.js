import React, { Component } from 'react'
import { StyleSheet, Text, View, Linking, SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements'

export default function RecipeCard({favorite}) {

        return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>   
                        < Card containerStyle={styles.card}>
                            <Card.Image  source={{ uri: favorite.thumbnail}} style={styles.image}/>
                            <Card.Title style={styles.title}>{favorite.title}</Card.Title>
                            <Text style={styles.paragraph} >{favorite.ingredients}</Text>
                            <Text 
                                style={{color: 'blue', marginBottom: 10}}
                                onPress={ () => Linking.openURL(favorite.href)}
                                >Recipe website
                            </Text>
                        </Card>  
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