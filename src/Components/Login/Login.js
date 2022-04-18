import { async } from '@firebase/util';
import'./Login.css'
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleSingIn from '../GoogleSingIn/GoogleSingIn';
const Login = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const navigate=useNavigate()
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
   const [
       signInWithEmailAndPassword,
       user,
       loading,
       error,
     ] = useSignInWithEmailAndPassword(auth);
     const handleSubmit=(event)=>{
        event.preventDefault()
        const email=event.target.email.value;
        const password=event.target.password.value;
        signInWithEmailAndPassword(email,password)

    }
    const emailRef = useRef('');
    const sendMail=async()=>{
        const email=emailRef.current.value;
        await sendPasswordResetEmail(email)
        alert('Sent email');
    }
    const handleRegister=()=>{
        navigate(from, { replace: true })
    }
    if(user){
        navigate('/')
    }
  
    return (
        <div>
            <form  onSubmit={handleSubmit} class="w-25 mx-auto shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input name='password' type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
          <div class="text-primary justify-content-between mt-3 ms-5">
            <h6 className='send-mail' onClick={sendMail}>Forgotten password?</h6>
          </div>
        <button type="submit" class="btn btn-primary w-100 mt-3">Log In</button>
        <GoogleSingIn></GoogleSingIn>
        <hr class="bg-secondary"/>
        <div id="passwordHelpBlock" class="form-text text-success">
            New to Nijol-Creative-Photography?
          </div>
        <Link to='/register' onClick={handleRegister} type="submit" class="btn btn-success w-100 mt-3">Create New Account</Link>
      </form>
        </div>
    );
};

export default Login;