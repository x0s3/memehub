import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Title, Portal } from 'react-native-paper';
import FAB from './layout/FAB';
import useDimensionHook from '../hooks/use-dimensions';

export default function CounterMagic() {
    const [counter, setCounter] = useState<number>(0);
    const dimensions = useDimensionHook();

    return (
        <View style={{ alignItems: 'center' }}>
            <Title>{counter}</Title>
            <Title>Height:{dimensions.window.height}</Title>
            <Title>Width:{dimensions.window.width}</Title>
            <Button icon={'add'} onPress={() => setCounter(c => c + 1)}>Increment</Button>
            <Portal>
                <FAB />
            </Portal>
        </View>
    )
}
