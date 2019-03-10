import React, { useCallback, ReactElement } from 'react';
import { Provider as PaperProvider, FAB, Portal } from 'react-native-paper';
import Welcome from './layout/BottomBar';
import { themes } from '../styles/themes';
import { useDispatch, useGlobalState } from '../hooks/use-theme-context';

export default function App(): ReactElement {
  const themeIndex = useGlobalState('theme');
  const dispatch = useDispatch();
  const change = useCallback(() => dispatch({ type: 'change' }), [dispatch]);

  return (
    <PaperProvider theme={themes[themeIndex].theme}>
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
