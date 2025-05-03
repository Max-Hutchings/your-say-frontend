import {AuthContextType, useYourSayUser} from "../../authentication/context/UserContext.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useEffect} from "react";


const HomePage: React.FC = () => {

    const userContext : AuthContextType = useYourSayUser();
    const navigate: NavigateFunction = useNavigate();

    
    
    useEffect(() => {
        if (userContext.user !== null) {
            console.log("User context", userContext);
            navigate("/recommended")
        }
    }, [navigate, userContext]);

    return(
        <div>
            <h1>This is the home page before being signed in</h1>
        </div>
    )
}

export default HomePage;