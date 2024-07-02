import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UsersProvider = ({children}) =>{
    const [users, setUsers] = useState([])

    return(
        <UserContext.Provider value={{
            users, setUsers
        }}>
            {children}
        </UserContext.Provider>
    )
}