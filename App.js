import React from 'react';
import {Text} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';

import MainStack from './src/stacks/MainStack';

export default () => {
    return ( 
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>   
    );
};