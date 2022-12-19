import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import { useState } from "react";
import Swal from "sweetalert2";

import {
  
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
  
} from "firebase/auth";
import useTitle from "../hooks/useTitle";



const Login = () => {
  useTitle('Log In')
  const [success, setSuccess] = useState(false);
  
  const [userEmail, setUserEmail] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";
  const {googleSignIn, gitSignIn} = useContext(AuthContext)

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        
        navigate(from,{replace:true})
      })
      .catch((error) => {
        console.error("error: ", error);
      });
  };
  const handleGitLogIn = () => {
    gitSignIn()
      .then((result) => {
        const user = result.user;
        
        navigate(from,{replace:true})
      })
      .catch((error) => {
        console.error("error: ", error);
      });
  };

  const { signIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from,{replace:true})
        form.reset();
        setSuccess(true);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const handleAlert = () => {
    if (success) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Log in Success",
        showConfirmButton: false,
        timer: 1500,
      });
      
    } else {
      Swal.fire({
        title: "Lost Memory???",
        text: "Wrong email or password",
        imageUrl:
          "http://pa1.narvii.com/6090/d779f0c6e90bcfbaf14fd512985b0dfd065cd007_00.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    }
  };
  const handleEmailBLur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    console.log(email);
  };
  const handleResetPass = () => {
    if (!userEmail) {
      alert("Please check Your Email");
      return;
    }
  };
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
                  onBlur={handleEmailBLur}
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
                  <p
                    onClick={handleResetPass}
                    type="button"
                    className="btn btn-link"
                  >
                    Forget Password ?
                  </p>
                </label>
                <p>
                  New to this site? Please{" "}
                  <Link className="text-red-600" to="/register">
                    Register
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleAlert} className="btn btn-primary">
                  Login
                </button>
              </div>

              <div className="flex justify-center gap-4">
                <img
                  onClick={handleGoogleLogIn}
                  className="w-10 bg-white p-2 rounded-full cursor-pointer"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                  alt=""
                />

                <img
                  onClick={handleGitLogIn}
                  className="w-10 bg-white p-2 rounded-full cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
