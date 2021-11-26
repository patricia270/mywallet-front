import axios from 'axios';

const BASE_URL = 'https://mywallet-back1.herokuapp.com';

function postSignUp(body) {
    return axios.post(`${BASE_URL}/sign-up`, body);
}

function postSignIn(body) {
    return axios.post(`${BASE_URL}/sign-in`, body);
}

function getRegistries(config) {
    return axios.get(`${BASE_URL}/registries`, config);
}

function postNewInput(body, config) {
    return axios.post(`${BASE_URL}/inputs`, body, config);
}

function postNewOutput(body, config) {
    return axios.post(`${BASE_URL}/outputs`, body, config);
}

function signOut(config) {
    return axios.get(`${BASE_URL}/sign-out`, config);
}

export {
    postSignUp,
    postSignIn,
    getRegistries,
    postNewInput,
    postNewOutput,
    signOut
};
