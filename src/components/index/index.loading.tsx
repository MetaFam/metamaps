import { connect } from 'react-redux';
import { CircularProgress } from '@chakra-ui/react';
import { IndexLoadingContainer } from './index.loading.styles';

export function IndexLoadingComponent({ loading }) {
    return(
        <IndexLoadingContainer className={loading ? 'visible' : ''}>
            <CircularProgress isIndeterminate color="purple"/>
        </IndexLoadingContainer>
    )
}

export const IndexLoadingState = state => ({
    loading: state.directory.loading,
});

export const IndexLoading = connect(IndexLoadingState)(IndexLoadingComponent);