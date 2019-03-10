import { DefaultTheme } from 'react-native-paper';
import { ThemeInterface } from './types/themeInterface';

export const theme: ThemeInterface = {
    ...DefaultTheme,
    roundness: 2,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3498db',
        accent: '#f1c40f',
    }
};
