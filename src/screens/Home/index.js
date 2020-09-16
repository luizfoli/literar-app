import React from 'react';

import {
    Container,
    BookStatusContainer,
    BooksHeaderContainer,
    BookStatusText,
    BooksStatusSubText,
    BooksViewerContainer,
    Book
} from './styles';

import TabArea from '../../components/Tab/TabArea';

export default () => {
    
    const books = {
        reading: [
            {
                name: '',
                imagePath: ''
            }
        ],
        wannaRead: [
            {
                name: '',
                imagePath: ''
            },
            {
                name: '',
                imagePath: ''
            },
            {
                name: '',
                imagePath: ''
            }
        ],
        read: [
            {
                name: '',
                imagePath: ''
            },
            {
                name: '',
                imagePath: ''
            }
        ]
    };

    return (
        <Container>
            <BookStatusContainer>
                <BooksHeaderContainer>
                    <BookStatusText>Lendo</BookStatusText>
                    <BooksStatusSubText>({books.reading.length})</BooksStatusSubText>
                </BooksHeaderContainer>
                <BooksViewerContainer 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {
                        books.reading.map(book => BookComponent())
                    }
                </BooksViewerContainer>
            </BookStatusContainer>
            <BookStatusContainer>
                <BooksHeaderContainer>
                    <BookStatusText>Quero Ler</BookStatusText>
                    <BooksStatusSubText>({books.wannaRead.length})</BooksStatusSubText>
                </BooksHeaderContainer>
                <BooksViewerContainer 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {
                        books.wannaRead.map(book => BookComponent())
                    }
                </BooksViewerContainer>
            </BookStatusContainer>
            <BookStatusContainer>
                <BooksHeaderContainer>
                    <BookStatusText>Lido</BookStatusText>
                    <BooksStatusSubText>({books.read.length})</BooksStatusSubText>
                </BooksHeaderContainer>
                <BooksViewerContainer 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        books.read.map(book => BookComponent())
                    }
                </BooksViewerContainer>
            </BookStatusContainer>
            <TabArea />
        </Container>
    );
};

const BookComponent = () => {
    return (
        <Book></Book>
    )
};