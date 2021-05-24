import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import {registration} from "../../../services";

const SignUp = () => {

    const transitionToSignIn = () => {
        history.push('/authentication/signin/')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        registration(form).then(res => res).
        then(() => {
            history.push('/authentication/signin/')
        });
        history.push('/authentication/signin/');
    }
    const handleOnChange = (e, property) => {
        setForm((prevProps) => {
            return {
                ...prevProps,
                [property]: e.target.value
            }
        })
    }
    const history = useHistory();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    return (
        <div className='wrapper__login-register'>
            <div className="container__h2">
                <h2>Sign Up</h2>
            </div>
            <form onSubmit={handleSubmit} action="#" className='container__form'>
                <div className='form__box'>
                    <div className="box-label">
                        <label htmlFor="" className='style-label'>Your name</label>
                    </div>
                    <div className='box-input'>
                        <input value={form.name}
                               onChange={(e) =>
                                   handleOnChange(e, 'name')} type="text"/>
                    </div>
                </div>
                <div className='form__box'>
                    <div className="box-label">
                        <label htmlFor="" className='style-label'>Email</label>
                    </div>
                    <div className='box-input'>
                        <input value={form.email}
                               onChange={(e) =>
                                   handleOnChange(e, 'email')} type="email"/>
                    </div>
                </div>
                <div className='form__box'>
                    <div className="box-label">
                        <label htmlFor="" className='style-label'>Password</label>
                    </div>
                    <div className='box-input'>
                        <input value={form.password}
                               onChange={(e) =>
                                   handleOnChange(e, 'password')}
                               type="password"/>
                    </div>
                </div>
                <div className='form__box'>
                    <div className="box-label">
                        <label htmlFor="" className='style-label'>Confirm Password</label>
                    </div>
                    <div className='box-input'>
                        <input
                            value={form.confirmPassword}
                            onChange={(e) =>
                                handleOnChange(e, 'confirmPassword')}
                            type="password"
                        />
                    </div>
                </div>
                <div className='form__box'>
                    <div className='box-input'>
                        <input id='style-submit' type="submit" value='Sign Up'/>
                    </div>
                </div>
                <div className='block-text'>
                    <span>Have an account? <button onClick={transitionToSignIn}
                                                   className='login__link' to='/register'>Sign in</button></span>
                </div>
            </form>
        </div>


    )
}

export default SignUp;