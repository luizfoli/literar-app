import React from 'react';
import styled from 'styled-components';

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
    return(
        <TabArea>
            <TabButton>
                <HouseIcon width="28" height="28" fill="#FFF" />
            </TabButton>
            <TabButton>
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

