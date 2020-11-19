import React, { useEffect } from 'react';
import {
    Container,
    Input
} from './styles';
import {
    HeadingComponent,
    ContainerViewComponent
} from '../../components/Global/GlobalComponents';

import TabArea from '../../components/Tab/TabArea';


export default () => {

    return (
        <Container>
            <HeadingComponent></HeadingComponent>
            <ContainerViewComponent></ContainerViewComponent>
            <TabArea />
        </Container>
    );
}