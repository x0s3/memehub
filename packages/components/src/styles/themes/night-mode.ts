import { DefaultTheme } from 'react-native-paper';
import { ThemeInterface } from './types/themeInterface';

export const theme: ThemeInterface = {
    ...DefaultTheme,
    roundness: 2,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3498DB',
        accent: '#F1C40F',
        background: '#484848',
        text: '#FFFFFF'
    }
};
