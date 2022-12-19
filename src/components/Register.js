import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/UserContext';
import { useState } from 'react';
import Swal from 'sweetalert2'

import {  sendEmailVerification, updateProfile } from 'firebase/auth';
import useTitle from '../hooks/useTitle';

const Register = () => {
  useTitle('Register')
  const { createUser } = useContext(AuthContext);

  const [success, setSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const {googleSignIn, gitSignIn, auth} = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";
  
  const handleGoogleLogIn =()=>{
    googleSignIn()
    .then(result => {
      const user = result.user;
      
      navigate(from,{replace:true})
    })
    .catch(error =>{
      console.error('error: ', error)
    })
  }
  const handleGitLogIn =()=>{
    gitSignIn()
    .then(result => {
      const user = result.user;
      
      navigate(from,{replace:true})
    })
    .catch(error =>{
      console.error('error: ', error)
    })
  }

console.log('createUser', createUser);

    const handleSubmit = event =>{
        event.preventDefault();
        setSuccess(false)
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const birth = form.birth.value;
        const number = form.number.value;
      
        console.log(name, email, photo, password, birth, number);

        if(!/(?=.*[!@#$&*])/.test(password)){
          setPasswordError('Please provide at least one special case letter.')
          return;
        }
        if(!/(?=.*[0-9].*[0-9])/.test(password)){
          setPasswordError('Please provide at least two digits.')
          return;
        }
        if(password.length < 8){
          setPasswordError('Password should be 8 characters.')
          return;
        }
        setPasswordError('');

        createUser(email, password)
        .then(result =>{
          const user = result.user;
          navigate(from,{replace:true})
          // console.log('registered user', user);
          setSuccess(true);
          verifyEmail();
          updateUser(name, photo);
          
        })
        .catch(error =>{
          console.error('error', error)
        })
      }
      const verifyEmail =()=>{
        sendEmailVerification(auth.currentUser)
        .then(()=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Check your Mail for verification ',
            showConfirmButton: false,
            timer: 1500
          })
        })
    }
    const updateUser =(name, photo)=>{
      updateProfile(auth.currentUser,{
          displayName:name,
          photoURL:photo
      })
      .then(()=>{
          console.log('display name updated');
      })
      .catch(error=>{
          console.error('error',error);
      })
  }
          return (
            <div>
              <div className="container mx-auto min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold pt-5 text-center">Register now!</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          name="name"
                          type="text"
                          placeholder="name"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">mobile Number</span>
                        </label>
                        <input
                          name="number"
                          type="text"
                          placeholder="Mobile Number"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">photo URL</span>
                        </label>
                        <input
                          name="photo"
                          type='url'
                          placeholder="photo URL"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Birth date</span>
                        </label>
                        <input
                          name="birth"
                          type="date"
                          placeholder="Bith date"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          name="email"
                          type="text"
                          placeholder="email"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input
                          name="password"
                          type="password"
                          placeholder="password"
                          className="input input-bordered"
                          required
                        />
                        <p className='text-red-700'>{passwordError}</p>
                        <p>
                          Already have account? Please, <Link className="text-red-600" to="/login">LogIn</Link>
                        </p>
                      </div>
                      <div className="form-control mt-6">
                        <button  className="btn btn-primary">Register</button>
                      </div>

                      <h2 className='text-center'>
                        or
                      </h2>

                    <div className='flex justify-center gap-4'>
                       <img onClick={handleGoogleLogIn} className='w-10 bg-white p-2 rounded-full cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" />

                        <img onClick={handleGitLogIn}  className='w-10 bg-white p-2 rounded-full cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                    </div>
                    </form>
                    
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="py-6">
                      <img
                        src="https://cdn.dribbble.com/users/3821672/screenshots/7172846/media/bdcf195a8ceaf94cd2e55ee274095c91.gif"
                        alt=""
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
    
}
export default Register;