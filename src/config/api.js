import axios from "axios";
const Api = axios.create({
    baseURL:'https://course.spacedev.vn/'
})

Api.interceptors.response.use((res) => {
    return res.data
}, (res) => {
    throw res.response.data
})
export default Api