import axios from "axios";


export default async function loginUserAPIClient(password: string, email: string) {
    return await axios.post("http://localhost:8080/api/user-service/your-say-user/login", {
        "email": email,
        "password": password,
    }, {withCredentials: true});
}