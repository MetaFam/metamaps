import Link from 'next/link';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from '@chakra-ui/react';
import { IndexListContainer } from './index.list.styles';

export function IndexListComponent({ items }) {
    return(
        <IndexListContainer>
            {
                items.map(item => {
                    return(
                    <div className="item" key={item.id}>
                        <div className="item-image">
                            <img src={item.image ? item.image : "/image/logo.png"}/>
                        </div>
                        <div className="item-info">
                            <h3>{item.title}</h3>
                            <h4>By {item.owner}</h4>
                            <p>{item.description}</p>
                            <ButtonGroup size="xs" display="flex" justifyContent="flex-end" width="100%">
                                <Button colorScheme="red">Delete</Button>

                                <Link href={`/${item.owner}/${item.id}`}>
                                    <Button colorScheme="purple" width="96px">View</Button>
                                </Link>
                            </ButtonGroup>
                        </div>
                    </div>
                    )
                })
            }
        </IndexListContainer>
    )
}

export const IndexListState = state => ({
    items: state.directory.items,
});

export const IndexListDispatch = { };

export const IndexList = connect(IndexListState, IndexListDispatch)(IndexListComponent);