import axios from "axios";

const BaseURL = 'http://188.120.231.198:4000/'
export const apiInstance = axios.create({
    baseURL: BaseURL,
});