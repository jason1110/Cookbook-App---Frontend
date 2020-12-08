console.disableYellowBox = true;
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font'
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico'
import CustomButton from '../shared/CustomButton'
import  { LinearGradient } from "expo-linear-gradient"

import { AppLoading } from 'expo';

export default function HomeScreen({navigation}) {

  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  const image = {uri: "https://i.pinimg.com/originals/9f/f6/e6/9ff6e60c4834e30f2be56ae3ab2c65c4.jpg"}

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ImageBackground source={image} style={styles.image} imageStyle={{opacity: 0.7}}>
        <View style={styles.container}>
            <Text style={styles.title}>Savory Search</Text>

            <CustomButton
                style={styles.button}
                title='Search for a recipe'
                onPress={()=> navigation.navigate('Search')}
                />
            
            <CustomButton
                style={styles.button}
                title='Cookbook'
                onPress={()=> navigation.navigate('Cookbook')}
                />
          </View>
      </ImageBackground>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      marginBottom: 350,
    },
    title: {
      fontSize: 60,
      alignItems: 'center',
      transform: [{
        rotate: '-25deg'
      }],
      color: '#f0f5fc',
      flexWrap: 'wrap',
      paddingVertical: 6,
      paddingHorizontal: 50,
      margin: 50,
      marginBottom: 70,
      fontFamily: 'Pacifico_400Regular'
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      backgroundColor: 'rgba(140,171,217,0.7)' 
    },
    button: {

    }

  });
