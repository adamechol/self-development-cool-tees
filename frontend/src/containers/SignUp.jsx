import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../reducks/users/operations';
import CrossX from '../assets/img/cross.png';
import Home from './Home';
import { push } from 'connected-react-router';

const SignUp = () => {
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(push('/'));
    };
    const [user_name, setUserName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState('');
    const inputUserName = event => {
        setUserName(event.target.value);
    };
    const inputEmail = event => {
        setEmail(event.target.value);
    };
    const inputPassword = event => {
        setPassword(event.target.value);
    };
    const signUpButton = () => {
        dispatch(signUp(user_name, email, password));
        setUserName('');
        setEmail('');
        setPassword('');
    };
    return (
        <>
            <Home />
            <section className="gradient">
            <section class="popup">
                <div class="popup-inner">
                    <div class="popup-preview">
                        <span onClick={closeButton}>
                            <a href="/">
                                <img src={CrossX} class="close" />{' '}
                            </a>
                        </span>
                        <div class="input">
                            <div className="heading-sign-in">
                                <h2>Create an account and discover the benefits</h2>
                                <p> Sign Up to buy Cool-Tees</p>
                            </div>
                            <div className="input-feilds">
                                <input
                                    type="text"
                                    class="form-control"
                                    onChange={inputUserName}
                                    placeholder="Enter User Name"
                                    value={user_name}
                                    required
                                />
                                <br />
                                <br />
                                <input
                                    type="email"
                                    class="form-control"
                                    onChange={inputEmail}
                                    placeholder="Enter email"
                                    value={email}
                                    required
                                />
                                <br />
                                <br />
                                <input
                                    type="password"
                                    class="form-control"
                                    onChange={inputPassword}
                                    placeholder="Password"
                                    value={password}
                                    required
                                />
                                <div class="checkbox">
                                    <input type="checkbox" required id="terms" name="terms" />
                                    <label for="terms">I agree to the Google Terms of Service and Privacy Policy</label>
                                </div>

                                <br />

                                <button class="button" onClick={signUpButton}>
                                    SIGN UP
                                </button>
                                <p class="sign-up-bottom">
                                    Already a Member?{' '}
                                    <a href="/signin">
                                        <u>Sign In.</u>
                                    </a>{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </section>
        </>
    );
};

export default SignUp;
