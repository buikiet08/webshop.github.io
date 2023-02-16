import Api from "../config/api"

const authService = {
    login (data) {
        return Api.post('/login', data)
    },
    register (data) {
        return Api.post('/register', data)
    },
    refreshToken (data) {
        return Api.get('/refresh-token', data)
    }
}
 export default authService