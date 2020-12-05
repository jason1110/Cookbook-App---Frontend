import React, { useState, useEffect } from 'react';
import { StyleSheet, 
        Text, 
        View,  
        } 
        from 'react-native';
import { Button } from 'react-native-elements'


export default function AddToCookbookButton({recipe}) {

    // const handleFavorite = () {

    // }

    return (
        <View>
            <Button style={styles.likeButton}
            icon={{ name: "book", size: 20, color: 'white' }}
            // onPress={}
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