import React, {useState} from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import { auth } from './firebase'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const signIn = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                console.log("account successfully created")
                if(auth){
                    history.pushState("/")
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img src="/amazon-logo.png" 
                    alt="amazon symbol"
                    className="login__logo"    
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />

                    <button type="submit" className="login__signInButton" onClick={signIn} >Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button type="submit" onClick={register} className="login__registerButton">Create Your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login