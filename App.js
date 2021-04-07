import React from 'react';
import { StyleSheet} from 'react-native';
import 'react-native-gesture-handler'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

library.add(fab, faCheckSquare, faCoffee, faSearch)

import HomeScreen from './src/screens/HomeScreen'
import SearchScreen from './src/screens/SearchScreen'
import CookbookScreen from './src/screens/CookbookScreen'
import LandingScreen from './src/screens/LandingScreen'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen 
      name="Landing" 
      component={LandingScreen}
      options={{
        headerShown: false,
      }}
       />
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#598b9e'
          },
          headerTintColor: '#f0f5fc',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
        />
        <Stack.Screen 
        name="Search" 
        component={SearchScreen}
        options={{
          headerStyle: {
            backgroundColor: '#598b9e'
          },
          headerTintColor: '#f0f5fc',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} 
        />
        <Stack.Screen 
        name="Cookbook" 
        component={CookbookScreen}
        options={{
          headerStyle: {
            backgroundColor: '#598b9e'
          },
          headerTintColor: '#f0f5fc',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  


  // import SearchResultsScreen from './src/screens/SearchResultsScreen'
  // import NewUserScreen from './src/screens/NewUserScreen'
  // import LoginScreen from './src/screens/LoginScreen'
  
       
        // <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
        // <Stack.Screen name="SignUp" component={NewUserScreen} />
        // <Stack.Screen name="Login" component={LoginScreen} /> */