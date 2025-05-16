import axios from "axios";


export default async function checkLoggedInAPIClient() {
    return await axios.get("http://localhost:8080/api/user-service/your-say-user/check-logged-in", {withCredentials: true});
}