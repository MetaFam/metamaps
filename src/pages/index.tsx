import { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadUrl } from '../eth/3box';
import { CheckMetamask, GetAccounts } from '../eth/Metamask';
import { setEnabled, setAccounts } from '../store/metamask.slice';
import { setLoading, setItems } from '../store/directory.slice';
import { AppContainer } from '../theme/Theme.components';
import { Metamask } from '../components/shared/Metamask';
import { IndexLoading } from '../components/index/index.loading';
import { IndexTitle } from '../components/index/index.title';
import { IndexCreate } from '../components/index/index.create';
import { IndexList } from '../components/index/index.list';

export function Index({ enabled, setEnabled, setAccounts, setLoading, setItems }) {
    useEffect(() => {
        (async () => {
            const hasMetamask = CheckMetamask();
            setEnabled(hasMetamask);

            if (hasMetamask) {
                setLoading(true);
                const accounts = await GetAccounts();
                setAccounts(accounts);

                const owner = accounts[0];
                const payload = await LoadUrl(owner, `metamaps-${owner}`);
                const data = JSON.parse(payload);

                setItems(data);
                setLoading(false);
            }
        })();
    }, []);

    return(
        <AppContainer>
            <Metamask active={enabled}/>
            <IndexLoading/>
            <IndexTitle/>
            <IndexCreate/>
            <IndexList/>
        </AppContainer>
    )
}

export const IndexState = state => ({
    enabled: state.metamask.enabled,
});

export const IndexDispatch = {
    setEnabled,
    setAccounts,
    setLoading,
    setItems,
};

export default connect(IndexState, IndexDispatch)(Index);