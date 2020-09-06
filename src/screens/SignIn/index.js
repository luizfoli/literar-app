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

import SignInput from '../../components/SignInput';

import ReaderIcon from '../../assets/reader-icon.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
    return(
        <Container>
            <ReaderIcon width="100%" height="160" fill="#ffffff" />
            <InputArea>

                <SignInput IconSvg={EmailIcon} />
                <SignInput IconSvg={LockIcon} />

                <CustomButton>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessageButton>
                <SignMessageButtonText>Leitor, você ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    )
}