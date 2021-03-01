import styled from 'styled-components';
import { FontColor, PrimaryBackground } from '../../theme/Theme.colors';

export const MetamaskContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    z-index: 1111;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 128px;
        margin: 15px 0;
    }

    p {
        font-size: 32px;
        font-weight: bold;
        color: white;
    }
`;