import axios from "axios";

const httpClient = () => axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost/api/',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
});

const oauth2Client = () => axios.create({
    baseURL: import.meta.env.VITE_OAUTH_API_SERVER_BASE_URL || 'http://localhost/oauth/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export {
    httpClient,
    oauth2Client
}