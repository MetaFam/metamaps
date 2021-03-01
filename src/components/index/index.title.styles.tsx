import styled from 'styled-components';
import { FontColor, PrimaryBackground } from '../../theme/Theme.colors';

export const IndexTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 480px;

    img {
        width: 320px;
    }

    h1 {
        margin: 15px;
        font-size: 48px;
        font-weight: bold;
        letter-spacing: 2px;
    }

    h2 {
        font-size: 24px;
    }
`;