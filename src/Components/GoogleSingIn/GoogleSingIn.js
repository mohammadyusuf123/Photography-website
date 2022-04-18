import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from'../../images/google.webp'

const GoogleSingIn = () => {
    const navigate=useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        return (
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          navigate('/')
        );
      }
    return (
        <div>
             <button onClick={()=>signInWithGoogle()} type="submit" class="btn btn-light w-100 mt-3"><img width='70px' height='35px' src={google}/>Continue with Google</button>
        </div>
    );
};

export default GoogleSingIn;