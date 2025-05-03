import React, {useEffect, useState} from "react";
// Import the shared InputBoxLarge component for text-based inputs
import { InputBoxLarge } from "../../../shared_components/forms/InputBoxLarge.tsx";
import {User} from "../../../shared_components/user/IUser.ts";
import axios, {AxiosResponse} from "axios";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useYourSayUser} from "../../../authentication/context/UserContext.tsx";
import YourSayUser from "../../../authentication/context/YourSayUser.ts";

const SignUpPage: React.FC = () => {

    const yourSayUserContext = useYourSayUser();
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (yourSayUserContext.user){
            navigate("/recommended");
        }
    },[])

    const [user, setUser] = useState<User>({
        dateOfBirth: "",
        email: "",
        password: "",
        fName: "",
        lName: "",
        username: ""

    })

    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

    function handleConfirmPasswordChange(value: string) {
        setConfirmPassword(value);
        setPasswordsMatch(value === user.password);
    }


    async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (passwordsMatch){
            console.log(user);
            const response: AxiosResponse<YourSayUser> = await axios.post("http://localhost:8081/api/your-say-user/sign-up",
                user, {withCredentials: true});
            if (response.status === 201){
                yourSayUserContext.login(response.data);
                navigate("/");
            }
        }
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <InputBoxLarge
                            placeholder="Email Address"
                            value={user.email}
                            onChange={(value) => setUser({...user, email: value})}
                            fieldType="email"
                        />
                    </div>
                    <div className="mb-4">
                        <InputBoxLarge
                            placeholder="Passsword"
                            value={user.password}
                            onChange={(value) => setUser({...user, password: value})}
                            fieldType="password"
                        />
                    </div>
                    <div className="mb-4">
                        <InputBoxLarge
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(value) => handleConfirmPasswordChange(value)}
                            fieldType="password"
                        />
                    </div>

                    {!passwordsMatch &&
                        <div className="mb-4">
                            Passwords Do Not match
                        </div>
                    }

                    <div className="mb-4">
                        <InputBoxLarge
                            placeholder="Username"
                            value={user.username}
                            onChange={(value) => setUser({...user, username: value})}
                            fieldType="text"
                        />
                    </div>

                    <div className="mb-4">
                        <InputBoxLarge
                            placeholder="First Name"
                            value={user.fName}
                            onChange={(value) => setUser({...user, fName: value})}
                            fieldType="text"
                        />
                    </div>
                    <div className="mb-4">
                        <InputBoxLarge
                            placeholder="Last Name"
                            value={user.lName}
                            onChange={(value) =>setUser({...user, lName: value})}
                            fieldType="text"
                        />
                    </div>
                    <div className="mb-6">
                        <InputBoxLarge
                            placeholder="Date of Birth"
                            fieldType="date"
                            value={user.dateOfBirth}
                            onChange={(value) => setUser({...user, dateOfBirth: value})}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150 ease-in-out"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
