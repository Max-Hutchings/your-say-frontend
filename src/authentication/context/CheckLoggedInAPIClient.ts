import axios from "axios";


export default async function checkLoggedInAPIClient() {
    return await axios.get("http://localhost:8081/api/your-say-user/check-logged-in", {withCredentials: true});
}