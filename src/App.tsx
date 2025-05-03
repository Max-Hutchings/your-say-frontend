
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import LoginPage from "./pages/user_management/login/LoginPage.tsx";
import SignUpPage from "./pages/user_management/signup/SignupPage.tsx";
import {UserProfilePage} from "./pages/user_management/user_profile/UserProfilePage.tsx";
import {UserContextProvider} from "./authentication/context/UserContext.tsx";
import HomePage from "./pages/public_site/Home.tsx";
import RecommendedPage from "./pages/content_feeds/RecommendedPage.tsx";
import AuthenticatedOnly from "./authentication/AuthenticatedOnly.tsx";



const App: React.FC = () => {
    return (
        <UserContextProvider>
            <BrowserRouter>
                {/*Public Routes*/}
                <Routes>
                        {/*Advertisement and Info */}
                        <Route path="/" element={<HomePage />} />



                        {/*User Management Pages*/}
                        <Route path={"/login"} element={<LoginPage />} />
                        <Route path={"/sign-up"} element={<SignUpPage />} />


            {/*    User Only Routes   */}
                    <Route element={<AuthenticatedOnly />}>
                        {/*User Management */}
                        <Route path={"/user-profile"} element={<UserProfilePage />} />

                        {/* User Feeds */}
                        <Route path={"/recommended"} element={<RecommendedPage />} />
                    </Route>
                </Routes>

            </BrowserRouter>
        </UserContextProvider>
    );
};

export default App;
