import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Counter from './Counter';

const instructions = Platform.select({
  ios: 'Actually on iOS',
  android: 'Actually on Android',
});

function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to MemeHub Multiplatform!</Text>
      <Text style={styles.instructions}>This component is being shared between iOS, Android & Web.</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      <Counter />
    </View>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <Welcome />
    </PaperProvider>
  )
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
