import { theme as nightMode } from './themes/night-mode';
import { theme as dayMode } from './themes/day-mode';

export const themes = {
    0: {
        theme: {
            ...dayMode
        }
    },
    1: {
        theme: {
            ...nightMode
        }
    },
};
