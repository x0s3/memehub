import React, { Fragment, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Button, Title } from 'react-native-paper';

const instructions = Platform.select({
  ios: 'Actually on iOS',
  android: 'Actually on Android',
  web: 'Actually on Web'
});

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={{ alignItems: 'center' }}>
      <Title>{counter}</Title>
      <Button icon={'add-a-photo'} onPress={() => setCounter(counter + 1)}>Increment</Button>
    </View>
  )
}

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
      <Fragment>
        <Welcome />
      </Fragment>
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
