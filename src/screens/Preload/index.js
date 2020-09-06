import React, { useEffect } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Container, LoaderIcon } from './styles';
import ReaderIcon from '../../assets/reader-icon.svg';

export default () => {
    const navigation = useNavigation();

    useEffect(() => {
        (async() => {
            const token = await AsyncStorage.getItem('token');
            if(token) {
                //TODO
            } else {
                setTimeout(() => navigation.navigate('SignIn'), 4000);
            }
        })() 
    }, [])


    return(
        <Container>
            <ReaderIcon width="100%" height="160" fill="#ffffff" />
            <LoaderIcon size="large" color="#fff" />
        </Container>
    )
}