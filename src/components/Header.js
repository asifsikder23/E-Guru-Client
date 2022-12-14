import React from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../e-guru.png';
import { useContext } from "react";
import { AuthContext } from "../context/UserContext";


const Header = () => {

  const {user, logOut} = useContext(AuthContext)
  console.log(user);


  return (
    <div>
      <div className="navbar bg-slate-900">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52"
            >
              <li>
                <Link className="text-white" to={'/'}>Home</Link>
              </li>
              <li>
              <Link className="text-white" to={'/courses'}>Courses</Link>
              </li>
              <li>
              <Link className="text-white" to={'/faq'}>FAQ</Link>
              </li>
              <li>
              <Link className="text-white" to={'/blog'}>Blog</Link>
              </li>
            </ul>
          </div>
          <a href="/">
            <img className="w-40" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
                <Link className="text-white" to={'/'}>Home</Link>
            </li>
              <li>
              <Link className="text-white" to={'/courses'}>Courses</Link>
              </li>
              <li>
              <Link className="text-white" to={'/faq'}>FAQ</Link>
              </li>
              <li>
              <Link className="text-white" to={'/blog'}>Blog</Link>
              </li>
          </ul>
        </div>



        <div className="navbar-end">
        <label className="swap swap-rotate pr-4">
  
           
              <input type="checkbox" />
              
              <svg className="swap-on fill-current w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
              

              <svg className="swap-off fill-current w-10 h-10 text-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
              
              </label>
          <div className="dropdown dropdown-end">
          {
                  user ?
            
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              
              <div className="w-10 rounded-full">
                    <img src={user.photoURL}/>
              </div>
            </label>
                  
                  :
                  <Link to={'/login'} className="btn px-5">Log in</Link>
              }
                
              
            
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-900 text-white rounded-box w-52"
            >
              <li>
              <a href="#my-modal-2">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
              {
                  user &&
                  <button onClick={logOut}>log out</button>
                  
                    
              }
              
              </li>
            </ul>
          </div>
          
          {
              user &&
              <div className="modal" id="my-modal-2">
            
                      
                  <div>
                      <div className="modal-action">
                          <a href="#" className="text-white">
                          <XMarkIcon className="h-10 w-10 text-white"/>
                          </a>
                          </div>

                    <section className="w-72 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
                      

                        <div className="mt-6 w-fit mx-auto ">
                            {
                              user?.photoURL &&
                              <img className="rounded-full" src={user.photoURL}/>
                            }
                            
                        </div>

                        <div className="mt-8 ">
                            {
                              user?.displayName &&
                              <h2 className="text-white font-bold text-2xl tracking-wide">{user.displayName}
                            </h2>
                            }
                            {
                              user?.email &&
                              <p className="text-white">{user.email}</p>
                            }
                            
                        </div>
                        <p className="text-emerald-400 font-semibold mt-2.5" >
                            Active
                        </p>

                        <div className="h-1 w-full bg-black mt-8 rounded-full">
                            <div className="h-1 rounded-full w-4/5 bg-yellow-500 "></div>
                        </div>
                        <div className="mt-3 text-white text-sm">
                            <span className="text-gray-400 font-semibold">Progress: </span>
                            <span>40%</span>
                        </div>

                    </section>
                      </div>
          </div>
           }
          
        </div>
      </div>
    </div>
  );
};

export default Header;
