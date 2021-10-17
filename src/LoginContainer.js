import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Login from './Login';
import {handlesignUp,handlesignDown} from './features/signup';

function LoginContainer() {
    
    const signUp = useSelector(state => state.signUp)
    
    const dispatch = useDispatch();

    const ModalUp = () => dispatch(handlesignUp());
    const ModalDown = () => dispatch(handlesignDown());
    // console.log(handleSign)
    return <Login signUp = {signUp} funcUp = {ModalUp} funcDown = {ModalDown} />

    
}

export default LoginContainer;