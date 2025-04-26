
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import LoginPage from "./pages/user_management/login/LoginPage.tsx";
import SignUpPage from "./pages/user_management/signup/SignupPage.tsx";


const Home: React.FC = () => <div>Home Page</div>;


const App: React.FC = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                {/*User Management Pages*/}
                <Route path={"/login"} element={<LoginPage />} />
                <Route path={"/sign-up"} element={<SignUpPage />} />


            </Routes>
        </BrowserRouter>
    );
};

export default App;
