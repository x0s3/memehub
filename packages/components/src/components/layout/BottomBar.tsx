import React, { useState, ReactElement } from 'react';
import { BottomNavigation } from 'react-native-paper';
import HomeContainer from '../../containers/HomeContainer';
import YourMemesContainer from '../../containers/YourMemesContainer';
import RecentsContainer from '../../containers/RecentsContainer';

interface State {
    index: number,
    routes: { key: string, title: string, icon: string, color: string }[]
}

export default function BottomBarLayout(): ReactElement {
    const [state, setState] = useState<State>({
        index: 0,
        routes: [
            { key: 'home', title: 'Home', icon: 'home', color: '#3F51B5' },
            { key: 'favourits', title: 'Your memes', icon: 'bookmark', color: '#009688' },
            { key: 'recents', title: 'Recents', icon: 'history', color: '#795548' },
        ],
    });

    const _handleIndexChange = (index: number) => setState({ ...state, index });

    const _renderScene = BottomNavigation.SceneMap({
        home: HomeContainer,
        favourits: YourMemesContainer,
        recents: RecentsContainer,
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
