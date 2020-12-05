import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, } from 'react-native';
import { SearchBar, Button } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchResultsScreen from './SearchResultsScreen'
import SearchResults from '../components/SearchResults'


export default function SearchScreen({navigation}) {

    const [recipes, setRecipes] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [ingredients, setIngredients] = useState('')
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState('')


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

    console.log(search)
    return (
        <>
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
            <Button buttonStyle={styles.searchButton}
            icon={{ name: "search", size: 20, color: 'white' }}
            onPress={handleSearch}
            />
        </View>
        : null}
        <View>
            {search
            ? createResults()
            : null}
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    textInput: {
        color: 'black',
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#fff',
        borderWidth: 1,
    },
    searchButton: {
        backgroundColor: 'grey',
        height: 50,
        width: 100,
        alignSelf: 'flex-end', 
    }
    
});

