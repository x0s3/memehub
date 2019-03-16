import React, { useState, useCallback, ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

interface IFab {
    filterAction: VoidFunction
}

export default function Fab({ filterAction }: IFab): ReactElement {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <FAB.Group
            fabStyle={styles.fab}
            open={open}
            icon={open ? 'close' : 'add'}
            actions={[
                { icon: 'settings', onPress: () => console.log('Pressed settings') },
                { icon: 'brush', label: 'Create a meme', onPress: () => console.log('Pressed create meme') },
                { icon: 'filter-list', label: 'Filters', onPress: filterAction },
            ]}
            onStateChange={useCallback(({ open }) => setOpen(open), [setOpen])}
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
    },
});
