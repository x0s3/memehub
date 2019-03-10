import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Welcome from './layout/BottomBar';

export default function App() {
  return (
    <PaperProvider>
      <Welcome />
    </PaperProvider>
  )
}
