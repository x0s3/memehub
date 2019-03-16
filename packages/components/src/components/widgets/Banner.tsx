import React, { useState, ReactElement, useImperativeHandle, forwardRef, Ref } from 'react';
import { Banner } from 'react-native-paper';

interface IBannerInfo {
    text: string
    leftButtonText: string
    rightButtonText: string
}

function BannerInfo({ text, leftButtonText, rightButtonText }: IBannerInfo, ref: Ref<any>): ReactElement {
    const [visible, setVisible] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
        openBanner: (): void => setVisible(v => !v)
    }));

    return (
        <Banner
            visible={visible}
            actions={[
                {
                    label: leftButtonText,
                    onPress: (): void => setVisible(v => !v),
                },
                {
                    label: rightButtonText,
                    onPress: (): void => setVisible(v => !v),
                },
            ]}
        >
            {text}
        </Banner>
    );
}

export default forwardRef(BannerInfo);