import axios from "axios";

const instance = axios.create({
    baseURL: "https://127.0.0.1:8000/",
    timeout: 4000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});
export default instance;