import React, { useEffect } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Container, LoaderIcon } from './styles';
import IconPreload from '../../assets/preload-icon.svg';

export default () => {
    const navigation = useNavigation();

    useEffect(() => {
        (async() => {
            const token = await AsyncStorage.getItem('token');
            if(token) {
                //TODO
            } else {
                navigation.navigate('SignIn');
            }
        })()
    }, [])


    return(
        <Container>
            <IconPreload width="100%" height="160" fill="#ffffff" />
            <LoaderIcon size="large" color="#fff" />
        </Container>
    )
}