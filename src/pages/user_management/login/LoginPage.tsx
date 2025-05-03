import React, {useEffect, useState} from "react";
import {InputBoxLarge} from "../../../shared_components/forms/InputBoxLarge.tsx";
import {AxiosResponse} from "axios";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {AuthContextType, useYourSayUser} from "../../../authentication/context/UserContext.tsx";
import loginUserAPIClient from "./LoginUserAPIClient.ts";


const LoginPage: React.FC = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate: NavigateFunction = useNavigate();
    const userContext :AuthContextType = useYourSayUser();


    useEffect(() => {
        if (userContext.user){
            navigate("/recommended");
        }
    },[])

    // Handle form submission
    async function handleLogin(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const response: AxiosResponse = await loginUserAPIClient(password, email);
        if (response.status === 200){
            navigate("/recommended");
        }
    };

    return (
        // Full-screen container with a light gray background, centered content using flex
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {/* Card container with white background, padding, rounded corners, shadow, and responsive width */}
            <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
                {/* Header text for the login page */}
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {/* Form element with onSubmit handler */}
                <form onSubmit={handleLogin}>
                    {/* Container for email input with bottom margin */}
                    <div className="mb-4">
                        <InputBoxLarge
                            placeholder="Email Address" // Placeholder text for email
                            value={email} // Value bound to email state
                            onChange={(value) => setEmail(value)} // Updates email state on change
                            fieldType="text" // Specifies input type as text
                        />
                    </div>
                    {/* Container for password input with bottom margin */}
                    <div className="mb-6">
                        <InputBoxLarge
                            placeholder="Password" // Placeholder text for password
                            value={password} // Value bound to password state
                            onChange={(value) => setPassword(value)} // Updates password state on change
                            fieldType="password" // Specifies input type as password
                        />
                    </div>
                    {/* Submit button styled with Tailwind for a modern look */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150 ease-in-out"
                    >
                        Login {/* Button label */}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
