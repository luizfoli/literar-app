import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #3B3B98;
    flex: 1;
    justify-content: space-between;
`;

export const Heading = styled.Text`
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    color: #fff;
`;

export const ContainerView = styled.View`
    width: 100%;
    height: 90%;
`;

export const BookStatusContainer = styled.View`
    width: 100%;
    height: 30%;
    margin: 10px 20px;
`;

export const BooksHeaderContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const BookStatusText = styled.Text`
    font-size: 26px;
    color: #fff;
    font-weight: bold;
`;

export const BooksStatusSubText  = styled.Text`
    font-size: 16px;
    padding: 5px;
    color: #182C61;
    font-weight: bold;
`;
    
export const BooksViewerContainer = styled.ScrollView`
    width: 100%;
    flex: 1;
    flex-direction: row;
    overflow: scroll;
`;
    
export const Book = styled.TouchableNativeFeedback``
