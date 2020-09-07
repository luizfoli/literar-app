import React from 'react';

import {
    Container,
    BookStatusContainer,
    BooksHeaderContainer,
    BookStatusText,
    BooksStatusSubText,
    BooksViewerContainer,
    Book,
} from './styles';

export default () => {
    return (
        <Container>
            <BookStatusContainer>
                <BooksHeaderContainer>
                    <BookStatusText>Lendo</BookStatusText>
                    <BooksStatusSubText>(1)</BooksStatusSubText>
                </BooksHeaderContainer>
                <BooksViewerContainer 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <Book></Book>
                </BooksViewerContainer>
            </BookStatusContainer>
            <BookStatusContainer>
                <BooksHeaderContainer>
                    <BookStatusText>Quero Ler</BookStatusText>
                    <BooksStatusSubText>(4)</BooksStatusSubText>
                </BooksHeaderContainer>
                <BooksViewerContainer 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <Book></Book>
                    <Book></Book>
                    <Book></Book>
                    <Book></Book>
                </BooksViewerContainer>
            </BookStatusContainer>
            <BookStatusContainer>
                <BooksHeaderContainer>
                    <BookStatusText>Lido</BookStatusText>
                    <BooksStatusSubText>(1)</BooksStatusSubText>
                </BooksHeaderContainer>
                <BooksViewerContainer 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <Book></Book>
                    <Book></Book>
                    <Book></Book>
                    <Book></Book>
                </BooksViewerContainer>
            </BookStatusContainer>
        </Container>
    );
};