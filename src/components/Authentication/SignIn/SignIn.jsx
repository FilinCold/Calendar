import React from "react";
import { useHistory } from "react-router-dom";

const SignIn = () => {
    const history = useHistory();
    const transitionToSignUp = () => {
        history.push('/authentication/signup/')
    }

    return (
        <div>
            <div>SignIn</div>
            <button onClick={transitionToSignUp}>SignUp</button>
        </div>


    )
}

export default SignIn;