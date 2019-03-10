import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { FAB } from 'react-native-paper';

const Fab = () => (
    <FAB
        style={styles.fab}
        small
        icon={'add'}
        onPress={() => console.log('Pressed')}
    />
);

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: Dimensions.get('screen').height / 15,
        backgroundColor: '#3F51B5'
    },
})

export default Fab;