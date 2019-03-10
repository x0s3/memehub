import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button, Title, Portal } from 'react-native-paper';
import FAB from './layout/FAB';
import useConnectionHook from '../hooks/use-connection-state';
import useDimensionHook from '../hooks/use-dimensions';

export default function CounterMagic() {
    const [counter, setCounter] = useState<number>(0);
    const isConnected = useConnectionHook();
    const dimensions = useDimensionHook();

    useEffect(() => {
        if (!isConnected) {
            setCounter(counter + 1);
        }
    }, [isConnected]);

    return (
        <View style={{ alignItems: 'center' }}>
            <Title>{counter}</Title>
            <Title>Height:{dimensions.window.height}</Title>
            <Title>Width:{dimensions.window.width}</Title>
            <Button icon={'add'} onPress={() => setCounter(counter + 1)}>Increment</Button>
            <Portal>
                <FAB />
            </Portal>
        </View>
    )
}
