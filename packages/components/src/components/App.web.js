import React, { Fragment } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Welcome from './layout/BottomBar';
import FAB from './layout/FAB';

export default function App() {
    return (
        <PaperProvider>
            <Fragment>
                {
                    <style type="text/css">{`
                        @font-face {
                        font-family: 'MaterialIcons';
                        src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
                        }
                    `}</style>
                }
                <Welcome />
            </Fragment>
        </PaperProvider>
    )
}
