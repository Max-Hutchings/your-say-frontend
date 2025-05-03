import axios from "axios";

import {User} from "../../../shared_components/user/IUser.ts";


export default async function SignUpUserAPIClient(user: User) {
    return await axios.post("http://localhost:8081/api/your-say-user/sign-up",
        user, {withCredentials: true});
}