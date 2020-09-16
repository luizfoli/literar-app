import React from 'react';

import {
    Container,
    BookStatusContainer,
    BooksHeaderContainer,
    BookStatusText,
    BooksStatusSubText,
    BooksViewerContainer,
    Book,
    TabArea,
    TabButton
} from './styles';


import HouseIcon from '../../assets/house.svg';
import VisionIcon from '../../assets/vision.svg';
import MagnifyingGlassIcon from '../../assets/magnifying-glass.svg';
import HeartIcon from '../../assets/heart.svg';

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
            <TabArea>
                <TabButton>
                    <HouseIcon width="28" height="28" fill="#FFF" />
                </TabButton>
                <TabButton>
                    <MagnifyingGlassIcon width="28" height="28" fill="#FFF" />
                </TabButton>
                <TabButton>
                    <HeartIcon width="28" height="28" fill="#FFF" />
                </TabButton>
                <TabButton>
                    <VisionIcon width="28" height="28" fill="#FFF" />
                </TabButton>
            </TabArea>
        </Container>
    );
};