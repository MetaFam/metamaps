import styled from 'styled-components';
import { FontColor, BackgroundColor } from '../../theme/Theme.colors';

export const IndexListContainer = styled.div`
    width: 100%;
    max-width: 768px;
    margin: 45px auto;

    div.item {
        display: flex;
        width: 100%;
        min-height: 128px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        padding: 15px 15px 0 15px;
        margin: 15px 0;

        div.item-image {
            width: 92px;
            img {
                height: 64px;
            }
        }

        div.item-info {
            width: calc(100% - 92px);
            h3 {
                font-size: 18px;
                font-weight: bold;
            }
            h4 {
                font-size: 12px;
                font-weight: bold;
                padding: 0 0 5px 0;
            }
            p {
                font-size: 14px;
                padding: 0 0 5px 0;
            }
        }
    }
`;