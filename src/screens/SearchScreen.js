
console.disableYellowBox = true;
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ImageBackground} from 'react-native';
import { SearchBar, Button } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LinearGradient} from "expo-linear-gradient"
import {REACT_APP_API_KEY} from 'react-native-dotenv'

import SearchResultsScreen from './SearchResultsScreen'

const APIKey = REACT_APP_API_KEY

export default function SearchScreen({navigation}) {
    
    const [recipes, setRecipes] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [ingredients, setIngredients] = useState('')
    const [search, setSearch] = useState('')
    
    const backImage = {uri: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/05/cooking-video-background-example.jpg?w=750"}
    
    useEffect(() => {
        if (!search){
            null
        } else {
            
            fetch(`https://recipe-puppy.p.rapidapi.com/?p=${pageNumber}&i=${search}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "05911679f7mshac9281d6ec76c1ap1e246ejsnccbf9e7e5f2f",
                    "x-rapidapi-host": "recipe-puppy.p.rapidapi.com"
                }
            })
            .then(response => response.json())
            .then(({results}) => { 
                results.length === 0
                ? noResults()
                : setRecipes(results)
            })
            .catch(err => {
                console.error(err);
            })};
        }, [search])
        
    const createResults = () =>  <SearchResultsScreen recipes={recipes}  />

    const updateSearch = (ingredients) => {
        setIngredients(ingredients)
    }

    const handleSearch = () => {
        setSearch(ingredients)
    }

    const handleClear = () => {
        setIngredients('')
        setSearch('')
    }

    const noResults = () => {
        return Alert.alert('Uh Oh', 'No results found')
    }

    return (

    <ImageBackground source={backImage} style={styles.backgroundImage} imageStyle={{opacity: 0.7}}>
        {!search
        ?<View style={styles.container}>
            <SearchBar
                platform='android'
                style={styles.textInput}
                placeholder='search by ingredients'
                searchIcon={false}
                onChangeText={updateSearch}
                onClear={handleClear}
                value={ingredients}
                />
            <LinearGradient
            colors={['#7ec4df', '#598b9e', '#20363e']}
            style={styles.buttonGradientContainer}
            >   
                <Button buttonStyle={styles.searchButton}
                icon={{ name: "search", size: 20, color: 'white' }}
                onPress={handleSearch}
                />
            </LinearGradient> 
        </View>
        : null}
                <View>
                    {search
                    ? createResults()
                    : null}
                </View>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        opacity: 0.8
    },
    textInput: {
        color: 'black',
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#fff',
        borderWidth: 1,
        elevation: 1,
    },
    searchButton: {
        backgroundColor: 'transparent',
        height: 50,
        width: 75,
        alignSelf: 'flex-end',
    },
    buttonGradientContainer:{
        padding: 1,
        margin: 10,
        alignItems: 'center', 
        borderRadius: 5,
    },    
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: 'rgba(140,171,217,0.7)' 
    },
    
    
});

