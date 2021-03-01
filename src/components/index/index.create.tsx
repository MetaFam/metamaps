import { connect } from 'react-redux';
import { v1 } from 'uuid';
import { Input, Button } from '@chakra-ui/react';
import { setInput, addItem } from '../../store/directory.slice';
import { IndexCreateContainer } from './index.create.styles';

export function IndexCreateComponent({ accounts, input, setInput, addItem }) {
    return(
        <IndexCreateContainer>
            <Input
                size="lg"
                mr="15px"
                placeholder="Name of Map"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <Button
                size="lg"
                colorScheme="purple"
                onClick={e => addItem({
                    id: v1(),
                    title: input,
                    image: '',
                    description: '',
                    owner: accounts[0],
                })}
            >
                Create Map
            </Button>
        </IndexCreateContainer>
    )
}

export const IndexCreateState = state => ({
    accounts: state.metamask.accounts,
    input: state.directory.input,
});

export const IndexCreateDispatch = { setInput, addItem };

export const IndexCreate = connect(IndexCreateState, IndexCreateDispatch)(IndexCreateComponent);