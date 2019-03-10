import React, { Fragment, useState } from 'react';
import { Provider as PaperProvider, FAB, Portal } from 'react-native-paper';
import Welcome from './layout/BottomBar';
import { themes } from '../styles/themes';

export default function App() {
  const [appThemeIndex, setAppThemeIndex] = useState(0);

  const changeTheme = () => setAppThemeIndex(appThemeIndex === 1 ? 0 : 1);

  return (
    <PaperProvider theme={themes[appThemeIndex].theme}>
      <Fragment>
        <Welcome />
        <Portal>
          <FAB style={{
            position: 'absolute',
            margin: 16,
            right: 0,
            backgroundColor: '#3F51B5'
          }} icon={'android'} onPress={changeTheme} />
        </Portal>
      </Fragment>
    </PaperProvider>
  )
}
