import styled from 'styled-components';
import { Easing } from '../../theme/Theme.colors';

export const IndexLoadingContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1111;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    transition: ${Easing};
    opacity: 0;
    pointer-events: none;

    &.visible {
        opacity: 1;
    }
`;