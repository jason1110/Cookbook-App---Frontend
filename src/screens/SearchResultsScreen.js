import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchResults from '../components/SearchResults'

export default function SearchResultsScreen({recipes}) {

    const showResults = () => recipes.map(recipe => <SearchResults recipe={recipe} key={recipe.href}/>)

    return (
       <ScrollView>
            <View style={styles.container}>     
                {showResults()} 
            </View>
        </ScrollView> 
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
