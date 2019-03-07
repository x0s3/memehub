import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Actually on iOS',
  android: 'Actually on Android',
  web: 'Actually on Web'
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to MemeHub Multiplatform!</Text>
      <Text style={styles.instructions}>This component is being shared between iOS, Android & Web.</Text>
      <Text style={styles.instructions}>{instructions}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
