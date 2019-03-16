import { DefaultTheme } from 'react-native-paper';
import { ThemeInterface } from './types/themeInterface';

export const theme: ThemeInterface = {
    ...DefaultTheme,
    roundness: 2,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3F51B5',
        accent: '#3F51B5',
    }
};
