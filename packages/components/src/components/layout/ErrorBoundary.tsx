import React, { Component, ReactElement, ReactNode } from 'react';
import { View, Image } from 'react-native';
import { Title } from 'react-native-paper'

interface State {
    hasError: boolean
}

const ErrorPage = (): ReactElement => (
    <View style={{ alignItems: 'center' }}>
        <Image
            resizeMode={'center'}
            style={{ height: 300, width: 300 }}
            source={require('../../../assets/sad-pepe-error-boundary.png')}
        />
        <Title>Ups something went wrong...</Title>
    </View>
);

export default class ErrorBoundary extends Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // report error to endpoint
        console.log(error, info);
    }

    render(): ReactElement | ReactNode {
        if (this.state.hasError) return <ErrorPage />
        return this.props.children;
    }
}
