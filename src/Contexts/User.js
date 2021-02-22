import React, { useEffect } from 'react';
import LoginHelper from '../Login';
import { useState } from "react";

export const userContext = React.createContext({});

export const UserProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.token);
    const [user, setUser] = useState(localStorage.usuario);

    useEffect(() => {

    }, []);

    function handleLogin(token, user){
        setToken(token);
        setUser(user);
        localStorage.token = token;
        localStorage.usuario = user;
    }

    return (
        <userContext.Provider value = {{token: token, usuario : user, handleLogin: handleLogin}}>
            {children}
        </userContext.Provider>
    )
}

