import React, { createContext, useReducer } from 'react';
import { initialState, UserReduce} from '../reducers/UserReduce';

export const UserContext = createContext();

export default ({children}) => {

    const [state, dispatch] = useReducer(UserReduce, initialState);

    return(
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    );
};