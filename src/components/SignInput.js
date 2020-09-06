import React from 'react';
import styled from 'styled-components';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #fff;
    flex-direction: row;
    border-radius: 20px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #3B3B98;
    margin-left: 10px;
`;

export default ({IconSvg, placeholder}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#3B3B98"></IconSvg>
            <Input 
                placeholder={placeholder}
                placeholderTextColor="#3B3B98"
            />
        </InputArea>
    )
}