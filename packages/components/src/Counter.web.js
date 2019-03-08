import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Title } from 'react-native-paper'

export default function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <View style={{ alignItems: 'center' }}>
            <Title>Web: {counter}</Title>
            <Button icon={'add-a-photo'} onPress={() => setCounter(counter + 1)}>Increment web counter</Button>
        </View>
    )
}
