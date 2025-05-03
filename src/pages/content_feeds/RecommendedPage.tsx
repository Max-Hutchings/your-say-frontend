import {AuthContextType, useYourSayUser} from "../../authentication/context/UserContext.tsx";
import React from "react";


const RecommendedPage : React.FC = () => {

    const userContext: AuthContextType = useYourSayUser();

    console.log(userContext);



    return(
        <div>

            <h1>Recommended page for user: {userContext.user?.username}</h1>

        </div>

    )
}

export default RecommendedPage;