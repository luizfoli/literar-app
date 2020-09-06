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

import ReaderIcon from '../../assets/reader-icon.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {

    const navigation = useNavigation();
    const [emailField, setEmailField] = useState('');
    const [passwordFiel, setPasswordField] = useState('');

    handleSignClick = () => {
        navigation.navigate('SignUp');
    }

    return(
        <Container>
            <ReaderIcon width="100%" height="160" fill="#ffffff" />
            <InputArea>
                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={value => setEmailField(value)}
                />
                <SignInput 
                    IconSvg={LockIcon} 
                    placeholder="Digite a sua senha" 
                    value={passwordFiel}
                    onChangeText={value => setPasswordField(value)}
                />
                <CustomButton>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessageButton onPress={handleSignClick}>
                <SignMessageButtonText>Leitor, você ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}