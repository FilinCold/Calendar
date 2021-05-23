import React from "react";
import { useHistory } from "react-router-dom";

const SignUp = () => {
    const history = useHistory();
    const transitionToSignIn = () => {
        history.push('/authentication/signin/')
    }

    return (
        <div>
            <div>SignUp</div>
            <button onClick={transitionToSignIn}>SignIn</button>
        </div>


    )
}

export default SignUp;