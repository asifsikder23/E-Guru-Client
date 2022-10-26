import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const Login = () => {

  const {signIn} = useContext(AuthContext);

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      form.reset();
    })
    .catch(error=>{
      console.error('error', error)
    })
  }
  return (
    <div>
      <div className="container mx-auto min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <p className="">
              <img
                src="https://www.metaecu.xyz/assets/login/images/63787-secure-login.gif"
                alt=""
              />
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold pt-5 text-center">Login now!</h1>
            <form onSubmit={handleSubmit} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p>
                  New to this site? Please <Link className="text-red-600" to="/register">Register</Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              <div className='flex justify-center gap-4'>
                       <img  className='w-10 bg-white p-2 rounded-full cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" />

                        <img  className='w-10 bg-white p-2 rounded-full cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                    </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
