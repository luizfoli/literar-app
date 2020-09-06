import React, { useState } from 'react';

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
    const [emailField, setEmailField] = useState('');
    const [passwordFiel, setPasswordField] = useState('');
    const [confirmPasswordFiel, setConfirmPasswordField] = useState('');

    handleSignClick = () => {
        navigation.navigate('SignIn');
    }

    return(
        <Container>
            <BookLoverIcon width="100%" height="160" fill="#ffffff"/>
            <InputArea>
                <SignInput 
                    IconSvg={EmailIcon} 
                    placeholder="Digite seu e-mail" 
                    value={emailField}
                    onChangeText={value => setEmailField(value)}
                />
                <SignInput 
                    IconSvg={LockIcon} 
                    placeholder="Digite sua senha" 
                    value={passwordFiel}
                    onChangeText={value => setPasswordField(value)}
                    isPassword={true}
                />
                <SignInput 
                    IconSvg={LockIcon} 
                    placeholder="Confirmer sua senha" 
                    value={confirmPasswordFiel}
                    onChangeText={value => setConfirmPasswordField(value)}
                    isPassword={true}
                />
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