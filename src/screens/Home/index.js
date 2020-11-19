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

import {
    ContainerViewComponent,
    HeadingComponent
} from '../../components/Global/GlobalComponents';

import TabArea from '../../components/Tab/TabArea';
import { ImageBackground } from "react-native";

export default () => {
    
    const books = {
        reading: [
            {
                name: '',
                imagePath: 'http://books.google.com/books/content?id=Y1HkuAwYUnsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
            }
        ],
        wannaRead: [
            {
                name: '',
                imagePath: 'http://books.google.com/books/content?id=Y1HkuAwYUnsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
            },
            {
                name: '',
                imagePath: 'http://books.google.com/books/content?id=Y1HkuAwYUnsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
            },
            {
                name: '',
                imagePath: 'http://books.google.com/books/content?id=Y1HkuAwYUnsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
            }
        ],
        read: [
            {
                name: '',
                imagePath: 'http://books.google.com/books/content?id=Y1HkuAwYUnsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
            },
            {
                name: '',
                imagePath: 'http://books.google.com/books/content?id=Y1HkuAwYUnsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
            }
        ]
    };

    return (
        <Container>
            <HeadingComponent></HeadingComponent>
            <ContainerViewComponent>
                <BookStatusContainer>
                <BooksHeaderContainer>
                    <BookStatusText>Lendo</BookStatusText>
                    <BooksStatusSubText>({books.reading.length})</BooksStatusSubText>
                </BooksHeaderContainer>
                <BooksViewerContainer 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {
                        books.reading.map(book => BookComponent(book))
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
                            books.wannaRead.map(book => BookComponent(book))
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
                            books.read.map(book => BookComponent(book))
                        }
                    </BooksViewerContainer>
                </BookStatusContainer>
            </ContainerViewComponent>
            <TabArea />
        </Container>

    );
};

const BookComponent = ({name, imagePath}) => { 
    return (
        <Book>
            <ImageBackground 
            source={{uri: imagePath}}
                style={{
                    width: 120,
                    height: 190,
                    margin: 2
                }}
            ></ImageBackground>
        </Book>
    )
};