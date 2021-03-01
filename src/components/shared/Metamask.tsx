import { FC } from 'react';
import { MetamaskContainer } from './Metamask.styles';

export interface MetamaskProps {
    active: boolean;
}

export const Metamask: FC<MetamaskProps> = ({ active }) => {
    return(
        <MetamaskContainer style={{ display: active ? 'none' : 'flex' }}>
            <img src="/image/metamask.png"/>
            <p>Install MetaMask to use MetaMaps</p>
        </MetamaskContainer>
    )
}