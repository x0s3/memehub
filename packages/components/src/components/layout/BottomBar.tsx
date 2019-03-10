import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import CounterMagic from '../CounterMagic';

const MusicRoute = () => <SafeAreaView><CounterMagic /></SafeAreaView>;

const YourMemesRoute = () => <SafeAreaView><Text style={{ alignSelf: 'center' }}>Your memes</Text></SafeAreaView>;

const RecentsRoute = () => <Text style={{ alignSelf: 'center' }}>Recents</Text>;

export default function MyComponent() {
    const [state, setState] = useState({
        index: 0,
        routes: [
            { key: 'home', title: 'Counter Magic', icon: 'home', color: '#3F51B5' },
            { key: 'favourits', title: 'Your memes', icon: 'bookmark', color: '#009688' },
            { key: 'recents', title: 'Recents', icon: 'history', color: '#795548' },
        ],
    });

    const _handleIndexChange = (index: number) => setState({ ...state, index });

    const _renderScene = BottomNavigation.SceneMap({
        home: MusicRoute,
        favourits: YourMemesRoute,
        recents: RecentsRoute,
    });


    return (
        <BottomNavigation
            shifting={true}
            navigationState={state}
            onIndexChange={_handleIndexChange}
            renderScene={_renderScene}
        />
    );
}
