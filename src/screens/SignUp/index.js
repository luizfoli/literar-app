import React from 'react';

import { 
    Container, 
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

import { useNavigation } from '@react-navigation/native';

import SignInput from '../../components/SignInput';

import BookLoverIcon from '../../assets/book-lover.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {

    const navigation = useNavigation();

    handleSignClick = () => {
        navigation.navigate('SignIn');
    }

    return(
        <Container>
            <BookLoverIcon width="100%" height="160" fill="#ffffff"/>
            <InputArea>
                <SignInput IconSvg={EmailIcon} placeholder="Digite seu e-mail" />
                <SignInput IconSvg={LockIcon} placeholder="Digite sua senha" />
                <SignInput IconSvg={LockIcon} placeholder="Confirmer sua senha" />
                <CustomButton>
                    <CustomButtonText>Cadastrar-se</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessageButton onPress={handleSignClick}>
                <SignMessageButtonText>Leitor, já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Vamos logar!</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    )
}