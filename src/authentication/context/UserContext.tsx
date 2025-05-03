import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import YourSayUser from "./YourSayUser.ts";
import axios, {AxiosResponse} from "axios";
import {NavigateFunction, useNavigate} from "react-router-dom";
import checkLoggedInAPIClient from "./CheckLoggedInAPIClient.ts";

export interface AuthContextType {
    user: YourSayUser | null;
    login: (user: YourSayUser) => void;
    logout: () => void;
    checkAuthenticated: () => void;
}

const YourSayUserContext = createContext<AuthContextType | undefined>(undefined);

export const UserContextProvider: React.FC<{children: ReactNode}> = ({children}) => {

    const [user, setUser] = useState<YourSayUser | null>(null);
    const [loadingUser, setLoadingUser] = useState<boolean>(true);

    function login(user: YourSayUser): void {
        setUser(user);
    }

    function logout(): void {
        setUser(null);
    }

    async function checkAuthenticated():Promise<void>{
        try{
            const response: AxiosResponse = await checkLoggedInAPIClient();
            if (response.status === 200) {
                setUser(response.data);
            }
            setLoadingUser(false);

        }catch(error){
            setLoadingUser(false);
        }
    }

    useEffect(() => {
        if (!user){
            checkAuthenticated();
        }
    },[])

    if (loadingUser){
        return <div>Loading...</div>;
    }


    return(
        <YourSayUserContext.Provider value={{user, login, logout, checkAuthenticated}}>
            {children}
        </YourSayUserContext.Provider>
    )
}

export function useYourSayUser() {
    const context = useContext(YourSayUserContext);
    if (!context) {
        throw new Error("useYourSayUser must be used within a UserContextProvider")
    }
    return context;
}