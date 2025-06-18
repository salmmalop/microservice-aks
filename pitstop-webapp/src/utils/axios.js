import Axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

let API_GATEWAY = Axios.create({
    baseURL: `${BASE_URL}/api`
});

export {
    API_GATEWAY
};
