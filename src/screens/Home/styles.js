import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #3B3B98;
    flex: 1;
    justify-content: space-between;
    align-items: center;
`;

export const BookStatusContainer = styled.View`
    width: 90%;
    height: 25%;
    margin: 20px;
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
    
export const Book = styled.View`
    width: 140px;
    height: 160px;
    background-color: #fff;
    margin: 20px 5px;
`

export const ButtonAddBook = styled.TouchableOpacity`
    padding: 10px;
    background-color: #182C61;
    border-radius: 2px;
`;

export const ButtonAddBookText = styled.Text`
    font-size: 18px;
    color: #fff;
    text-align: center;
`;