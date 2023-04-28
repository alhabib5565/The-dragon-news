import React, { createContext } from 'react';

export let AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    let user = {displayName: 'habib'}
    let authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;