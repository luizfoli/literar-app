import React, { useEffect } from 'react';
import {
    Container,
    Input
} from './styles';

import TabArea from '../../components/Tab/TabArea';


export default () => {

    return (
        <Container>
            <Input />
            <TabArea />
        </Container>
    );
}