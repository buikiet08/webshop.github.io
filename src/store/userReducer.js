import userService from "../services/userService";
import { getUser, setUser } from "../utils";

const initialValue = {
    user : getUser(),
}

const SET_USER = 'user/setUser'

export const setUserAction = (user) => ({type:SET_USER, payload:user})

export const getUserAction = (user) => {
    return async (dispatch) => {
        try {
            const user = await userService.getUser()
            setUser(user.data)

            dispatch(setUserAction(user.data))
        } catch (error) {
            
        }
    }
}

export default function userReducer(state = initialValue,action) {
    switch (action.type) {
        case SET_USER: return {...state, user: action.payload}
        default: return state
    }
}