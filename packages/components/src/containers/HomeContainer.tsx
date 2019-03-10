import React from 'react';
import { View, SafeAreaView } from 'react-native';
import CounterMagic from '../components/CounterMagic';

export default function HomeContainer() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <CounterMagic />
            </View>
        </SafeAreaView>
    )
}
