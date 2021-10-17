const SIGNUP = 'signup/SIGNUP';
const SIGNDOWN = 'signup/SIGNDOWN';

export const handlesignUp = () => ({
    type : SIGNUP,
    
})
export const handlesignDown = () => ({
    type : SIGNDOWN,
})

const initialState = {
    signUp :false
}

export default function signUpReducer(state = initialState,action){
    switch(action.type){
        case SIGNUP :
            return {...state,signUp :true}
        case SIGNDOWN :
            return {...state,signUp :false}
        default : return state;
    }
}