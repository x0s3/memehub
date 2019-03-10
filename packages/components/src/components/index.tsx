import React from 'react';
import ErrorBoundary from './layout/ErrorBoundary';
import App from './App';
import { ThemeContext } from '../hooks/use-theme-context';

export default function Root() {
    return (
        <ErrorBoundary>
            <ThemeContext.Provider value={{}}>
                <App />
            </ThemeContext.Provider>
        </ErrorBoundary>
    )
}
