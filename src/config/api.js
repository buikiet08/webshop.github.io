import axios from "axios";
import { getToken } from "../utils";
const Api = axios.create({
    baseURL:'https://course.spacedev.vn'
})

Api.interceptors.request.use((config) => {
    let token = getToken()
    if(token) {
        config.headers.Authorization = `Bearer ${token.accessToken}`
    }

    return config
})
Api.interceptors.response.use((res) => {
    return res.data
}, (res) => {
    throw res.response.data
})


export default Api