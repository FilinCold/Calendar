import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import {login} from "../../../services";


const SignIn = () => {
    const history = useHistory();
    const transitionToSignUp = () => {
        history.push('/authentication/signup/')
    }
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();

        login(formLogin).then((res,req) => localStorage.setItem('token', res.token))
            .then((res,req) => localStorage.setItem('email', formLogin.email))
            .then(
                () => {
                    history.push('/calendar/');
                }
            )
            .catch((e) => {
                setError(true)
            });

    }

    const handleOnChange = (e, property) => {
        setFormLogin((prevProps) => {
            return {
                ...prevProps,
                [property]: e.target.value
            }
        })
    }

    return (
        <div className='wrapper__login-register'>

            <div className="container__h2">
                <h2>Sign In</h2>
            </div>

            <form onSubmit={handleSubmit} action="#" className='container__form'>
                <div className='form__box'>
                    <div className="box-label">
                        <label htmlFor="" className='style-label'>Email</label>
                    </div>
                    <div className='box-input'>
                        <input value={formLogin.email}
                               onChange={(e) =>
                                   handleOnChange(e, 'email')} type="email"/>
                    </div>
                </div>
                <div className='form__box'>
                    <div className="box-label">
                        <label htmlFor="" className='style-label'>Password</label>
                    </div>
                    <div className='box-input'>
                        <input value={formLogin.password}
                               onChange={(e) =>
                                   handleOnChange(e, 'password')} type="password"/>
                    </div>
                    {/*{error && <p className='error__text-login'>User not found</p>}*/}
                </div>
                <div className='form__box'>
                    <div className='box-input'>
                        <input id='style-submit' type="submit" value='Sign In'/>
                    </div>
                </div>
                <div className='block-text'>
          <span>Not a member?
            <button className='register-link'
                    onClick={transitionToSignUp}>Sign up now</button></span>
                </div>
            </form>
        </div>


    )
}

export default SignIn;