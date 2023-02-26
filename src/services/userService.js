import Api from "../config/api"

const userService = {
    getUser () {
        return Api.get('/user/get-info')
    },
    updateUser (data) {
        return Api.post('/user/update', data)
    },
    changePassword (data) {
        return Api.post('/user/change-password', data)
    }
    
}
 export default userService