import { connect } from 'react-redux';
import { MapTitleContainer } from './map.title.styles';

export function MapTitleComponent() {
    return(
        <MapTitleContainer>
            
        </MapTitleContainer>
    )
}

export const MapTitleState = state => ({

});

export const MapTitleDispatch = { };

export const MapTitle = connect(MapTitleState, MapTitleDispatch)(MapTitleComponent);