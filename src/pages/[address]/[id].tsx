import { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppContainer } from '../../theme/Theme.components';
import { MapTitle } from '../../components/map/map.title';

export function Map() {
    return(
        <AppContainer>
            <MapTitle/>
        </AppContainer>
    )
}

export const MapState = state => ({

});

export const MapDispatch = {

};

export default connect(MapState, MapDispatch)(Map);