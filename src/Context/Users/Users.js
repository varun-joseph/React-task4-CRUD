import React,{useState} from 'react'
import { UserData } from './UserData'
// Step 1 -  create context for Users

export const UsersContext = React.createContext();

// Step2 - create a provider function
// All components wrapped inside Userprovider will be able to access Users data
export const UsersProvider = ({children}) => {
    const [UsersData, setUsersData] = useState(UserData);
    console.log(UsersData);
    return(
        <UsersContext.Provider value={[UsersData, setUsersData]}>
            {children}
        </UsersContext.Provider>
    )
}

