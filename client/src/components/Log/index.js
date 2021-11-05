import React, { useState } from 'react'
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

function Log(props) {
    const [signUpModal, setSignUpModals] = useState(props.signup);
    const [signInModal, setSignInModals] = useState(props.signin);

    const handleModals = (e) => {
        if (e.target.id === "register") {
            setSignInModals(false);
            setSignUpModals(true);
        } else if (e.target.id === "login") {
            setSignUpModals(false);
            setSignInModals(true);
        }
    };

    return (
        <div className='connection-form'>
            <div className="form-container">
                <ul>
                    <li onClick={handleModals}
                        id="register"
                        className={signUpModal ? "active-btn" : null}
                    >
                        S'inscrire
                    </li>
                    <li onClick={handleModals} id='login'
                        className={signInModal ? "active-btn" : null}
                    >
                        Se connecter
                    </li>
                </ul>
                {signUpModal && <SignUpForm />}
                {signInModal && <SignInForm />}
            </div >
        </div >
    )
};

export default Log
