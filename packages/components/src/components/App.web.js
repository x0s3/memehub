import React, { useCallback } from 'react';
import { Provider as PaperProvider, FAB, Portal } from 'react-native-paper';
import Welcome from './layout/BottomBar';
import { themes } from '../styles/themes';
import { useDispatch, useGlobalState } from '../hooks/use-theme-context';

export default function App() {
    const themeIndex = useGlobalState('theme');
    const dispatch = useDispatch();
    const change = useCallback(() => dispatch({ type: 'change' }), [dispatch]);

    return (
        <PaperProvider theme={themes[themeIndex].theme}>
            {
                <style type="text/css">{`
                        @font-face {
                        font-family: 'MaterialIcons';
                        src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
                        }
                    `}</style>
            }
            <Welcome />
            <Portal>
                <FAB style={{
                    position: 'absolute',
                    margin: 16,
                    right: 0,
                    backgroundColor: '#3F51B5'
                }} icon={'android'} onPress={change} />
            </Portal>
        </PaperProvider>
    )
}
