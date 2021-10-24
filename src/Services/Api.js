import axios from "axios";

const BASE_URL = "http://localhost:4000";

function postSignUp (body) {
    return axios.post(`${BASE_URL}/sign-up`, body);
}


export {
    postSignUp
}