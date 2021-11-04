import React, { useState } from 'react';
import axios from 'axios';

function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');

        axios({
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}api/user/login`,
           withcredentials: true,
            data: {
                email,
                password,
            },
        })
            .then((res) => {
                if (res.data.errors) {
                    emailError.innerHTML = res.data.errors.email;
                    passwordError.innerHTML = res.data.errors.passwords;
                } else {
                    window.location = '/';
                }
            })
            .catch((err) => {
                console.log(err);
            })  
    };
    return (
        <form id='sign-up-form' action='' onSubmit={handleLogin} >
            <label htmlFor='email'>Email</label>
            <br />
            <input
                htmlFor='email'
                type='text'
                value={email}
                id='email'
                onChange={(e) => setEmail(e.target.value)} />
            <div className='email error'></div>
            <br />
            <label htmlFor="password">Mot de passe</label>
            <input type="password"
                name="password"
                id="password"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
            />
            <div className='password error'></div>
            <br />

            <input type='submit' value='Se connecter' />
        </form>
    )
}

export default SignInForm
