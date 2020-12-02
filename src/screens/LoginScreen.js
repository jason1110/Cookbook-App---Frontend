return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>CookBook!</Text>
        <Button 
          onPress={() => Alert.alert('Simple Button pressed')}
          title='Sign up!'
          accessibilityLabel='Create a user account to make your Cookbook'
        />
        <Button 
          onPress={() => Alert.alert('Simple Button pressed')}
          title='Login'
          accessibilityLabel='Create a user account to make your Cookbook'
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}