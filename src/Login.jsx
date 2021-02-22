import React, {useContext, useEffect} from 'react';
import { userContext } from "./Contexts/User";

const Login = () => {
    const usuario = useContext(userContext);
    
    useEffect(() => {
        usuario.handleLogin('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoidGhpYWdvQHNoYXJrZGV2LmNvbS5iciIsImlhdCI6MTYxMDkxMjIxMH0.1UtJnMq7BBkrwi2esqbGyAzwwAKky-0attVrcHcmP8Q', 1);                
    },[])

    return(
        <div></div>
    )
}

export default Login;