import React, { useState, useCallback, ReactElement } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { FAB } from 'react-native-paper';

export default function Fab(): ReactElement {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <FAB.Group
            fabStyle={styles.fab}
            open={open}
            icon={open ? 'close' : 'add'}
            actions={[
                { icon: 'settings', onPress: () => console.log('Pressed add') },
                { icon: 'brush', label: 'Create a meme', onPress: () => console.log('Pressed create meme') },
                { icon: 'filter-list', label: 'Filters', onPress: () => console.log('Pressed filters') },
            ]}
            onStateChange={useCallback(({ open }) => setOpen(open), [open])}
            onPress={() => {
                if (open) {
                    // do something if the speed dial is open
                }
            }}
        />
    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'relative',
        margin: 16,
        right: 0,
        marginBottom: Dimensions.get('screen').height / 10
    },
});
