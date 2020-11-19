import React from 'react';
import styled from 'styled-components/native';

const Heading = styled.Text`
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    color: #fff;
`;

export const ContainerView = styled.View`
    width: 100%;
    height: 90%;
`;

export const HeadingComponent = () => (<Heading>literar-se</Heading>)
export const ContainerViewComponent = ContainerView;

