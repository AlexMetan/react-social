import { setAuthUserDataTC } from "./authReducer";

const INIT_SUCCESS = "INIT_SUCCESS";

let initialState = {
    initialized : false
}

const appReducer = (state = initialState, action) =>{
    switch (action.type){
        case INIT_SUCCESS:
            return { ...state, initialized: true };
        default:
            return state;
    }
}

export const initSuccessAC = () =>({type:INIT_SUCCESS});

export const initAppTC = () => dispatch =>{
    let promise = dispatch(setAuthUserDataTC());
    promise.then(()=>{
        dispatch(initSuccessAC());
    })
}
export default appReducer;