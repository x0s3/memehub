import React, { ReactElement } from 'react';
import ErrorBoundary from './layout/ErrorBoundary';
import App from './App';
import { Provider as ProviderTheme } from '../hooks/use-theme-context';

export default function Root(): ReactElement {
    return (
        <ErrorBoundary>
            <ProviderTheme>
                <App />
            </ProviderTheme>
        </ErrorBoundary>
    )
}
