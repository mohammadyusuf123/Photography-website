import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png'
import'./Navbar.css'


const Navbar = () => {
  const [user] = useAuthState(auth);
    const handleSingOut=()=>{
        signOut(auth)
    }
    return (
      <nav class="navbar navbar-expand-lg navbar-text navbar-light bg-info">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"> <img src={logo} alt="" width="180" height="50" class="d-inline-block align-text-top ps-5"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-end pe-5 " id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
            <NavLink className={({isActive})=>isActive?"active-link ": "link"} to='/'>Home</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className={({isActive})=>isActive?"active-link ": "link"}   to='/categories'>Categories</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className= {({isActive})=>isActive?"active-link ": "link"}  to='/blogs'>Blogs</NavLink>
            </li>
            {
              user? <Button className='link btn-info' onClick={handleSingOut}><h6>Log Out</h6></Button>
              :<li class="nav-item">
              <NavLink className= {({isActive})=>isActive?"active-link ": "link"}  to='/login'>Log In</NavLink>
              </li>
            }
            <li class="nav-item">
            <NavLink className= {({isActive})=>isActive?"active-link ": "link"}  to='/about'>About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;