import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state=initialState, action) =>{
    switch (action.type){
        case SET_USER_DATA:{
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}

export const setAuthUserDataAC = (userId, email, login, isAuth) => ({type:SET_USER_DATA, data:{ userId, email, login, isAuth }}) 

export const setAuthUserDataTC = () =>  {
    return dispatch =>{
        authAPI.authMe().then( data =>{
            if(data.resultCode === 0){
                let {id, email, login} = data.data
                dispatch(setAuthUserDataAC(id, email, login, true));
            }
        })
    }
}

export const loginTC = (email, password, rememberMe) => dispatch =>{
    authAPI.login(email, password, rememberMe).then(response =>{
        if(response.data.resultCode === 0){
            dispatch(setAuthUserDataTC());
        }
    })
}

export const logoutTC = ( ) => dispatch =>{
    authAPI.logout().then(response =>{
        if(response.data.resultCode === 0){
            dispatch(setAuthUserDataAC('', '', '', false));
        }
    })
}

export default authReducer; 