import authService from "../services/authService"
import userService from "../services/userService"
import { getUser, setToken, setUser } from "../utils"
import { getUserAction } from "./userReducer"

// thông tin user chuyển qua userReducer
const initialValue = {
    // user: getUser() || null
}

export const loginAction = (data) => {
    return async (dispatch) => {
        try {
            const token = await authService.login(data.form)
            setToken(token.data)
            dispatch(getUserAction())
            // const user = await userService.getUser()
            // setUser(user.data)

            // // dispatch({type:'auth/login', payload:user.data})
            // dispatch(setUserAction())
        } catch (error) {
            data.error(error)
        }
    }
}

export const registerAction = (data) => {
    return async (dispatch) => {
        try {
            await authService.register(data.form)
            dispatch(loginAction({
                form:{
                    username: data.form.username,
                    password: data.form.password
                },
                success:data.success,
                error:data.error
            }))
        } catch (error) {
            data.error(error)
        }
    }
}

export default function authReducer(state = initialValue, action) {
    switch(action.type) {
        // case 'auth/login':
        //     return {
        //         ...state,
        //         user: action.payload
        //     }
        default: return state
    }
}