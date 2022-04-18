import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import GoogleSingIn from '../GoogleSingIn/GoogleSingIn';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate=useNavigate()
    const handleLogIn=()=>{
        navigate('/login')
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        const email=event.target.email.value;
        const password=event.target.password.value;
        const confirmPassword=event.target.confirmPassword.value;
        createUserWithEmailAndPassword(email,password)

    }
    if(user){
        navigate('/')
    }
    return (
        <div>
            <form onSubmit={handleSubmit} class="w-25 mx-auto shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input name='email' type="email" class="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input name='password' type="password" class="form-control"  required id="exampleInputPassword1"/>
        </div>
          <div class="pb-3">
          <label for="exampleInputPassword1" class="form-label"> Confirm Password</label>
          <input name='confirmPassword' type="password" class="form-control"  />
        </div>
        <button type="submit" class="btn btn-primary w-100 mt-3">Register Now</button>
        <GoogleSingIn></GoogleSingIn>
        <hr class="bg-secondary"/>
        <div id="passwordHelpBlock" class="form-text text-success">
            Already have an account?
          </div>
        <button onClick={handleLogIn} type="submit" class="btn btn-success w-100 mt-3">Log In</button>
      </form>
        </div>
    );
};

export default Register;