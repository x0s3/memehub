import { useEffect, useState } from 'react';
import { NetInfo } from 'react-native';

export default function useConnectionState(): boolean {
    const [isConnected, setIsConnected] = useState<boolean>(true);

    useEffect(() => {
        const handler = (nextState: boolean): void => {
            if (isConnected === nextState) return;
            setIsConnected(nextState);
        }

        NetInfo.isConnected.addEventListener('connectionChange', handler);
        return () => NetInfo.isConnected.removeEventListener('connectionChange', handler);
    }, [isConnected]);

    return isConnected;
}
