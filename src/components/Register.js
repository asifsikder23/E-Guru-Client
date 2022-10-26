import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../context/UserContext';

const Register = () => {
const { createUser } = useContext(AuthContext);
console.log('createUser', createUser);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const birth = form.birth.value;
        const number = form.number.value;
        console.log(name, email, password, birth, number);

        createUser(email, password)
        .then(result =>{
          const user = result.user;
          console.log('registered user', user);
        })
        .catch(error =>{
          console.error('error', error)
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
                          <span className="label-text">Mobile Number</span>
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
                        <p>
                          Already have account? Please, <Link className="text-red-600" to="/login">LogIn</Link>
                        </p>
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
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
    
};

export default Register;