import React from 'react';
import styled from 'styled-components';

import { useNavigation } from '@react-navigation/native';

import HouseIcon from '../../assets/house.svg'
import VisionIcon from '../../assets/vision.svg';
import MagnifyingGlassIcon from '../../assets/magnifying-glass.svg';
import HeartIcon from '../../assets/heart.svg';

export const TabArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #3B3B98;
    flex: 1;
    flex-direction: row;
    justify-content: center;
`;

export const TabButton = styled.TouchableOpacity`
    padding: 20px 0px;
`;


// TODO REACT HOOK FOR CHANGE THE STYLED BY TOGGLED BUTTON


export default() => {

    const navigation = useNavigation();

    handleTabClick = (index) => {
        switch(index) {
            case 0:
                navigation.reset({
                    routes: [{name: 'Home'}]
                });    
                break;
            case 1:
                navigation.navigate('Search');        
                break;
        }
        navigation.navigate('Search');
    }

    return(
        <TabArea>
            <TabButton onPress={() => handleTabClick(0)}>
                <HouseIcon width="28" height="28" fill="#FFF" />
            </TabButton>
            <TabButton onPress={() => handleTabClick(1)}>
                <MagnifyingGlassIcon width="28" height="28" fill="#FFF" />
            </TabButton>
            <TabButton>
                <HeartIcon width="28" height="28" fill="#FFF" />
            </TabButton>
            <TabButton>
                <VisionIcon width="28" height="28" fill="#FFF" />
            </TabButton>
        </TabArea>
    );
};

