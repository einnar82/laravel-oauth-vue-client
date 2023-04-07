import axios from "axios";

const httpClient = () => axios.create({
        baseURL: import.meta.env.VITE_OAUTH_SERVER_BASE_URL || 'http://localhost/api/',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
});

export default httpClient;