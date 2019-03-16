import React, { useRef, ReactElement, useCallback } from 'react';
import { View, SafeAreaView } from 'react-native';
import CounterMagic from '../components/CounterMagic';
import BannerInfo from '../components/widgets/Banner';
import Fab from '../components/layout/FAB';

export default function HomeContainer(): ReactElement {
    const bannerRef = useRef(null);
    const bannerFilterActionCallback = useCallback(() => bannerRef.current.openBanner(), [bannerRef.current]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <BannerInfo ref={bannerRef} leftButtonText={'Cancel'} rightButtonText={'Save'} text={'Filters'} />
                <CounterMagic />
            </View>
            <Fab
                filterAction={bannerFilterActionCallback}
            />
        </SafeAreaView>
    )
}
