import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

type Dimension = {
    fontScale: number,
    height: number,
    scale: number,
    width: number
}

interface UseDimensionProps {
    screen: Dimension,
    window: Dimension
}

export default function useDimensions(): UseDimensionProps {
    const [dimensions, setDimensions] = useState<UseDimensionProps>({
        screen: Dimensions.get('screen'),
        window: Dimensions.get('window'),
    });

    useEffect(() => {
        Dimensions.addEventListener('change', ({ screen, window }) => setDimensions({ screen, window }));
        return () => Dimensions.removeEventListener('change', setDimensions);
    }, []);

    return dimensions;
}
