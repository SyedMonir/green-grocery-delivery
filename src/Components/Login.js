import React, { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Spinner from './Spinner/Spinner';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import login from '../assets/image/login1.jpg';

const Login = () => {
  // Show Password
  const [eye, setEye] = useState(false);
  // const handle Eye

  // Google
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const googleSignIn = () => {
    return signInWithGoogle();
  };

  if (user) {
    console.log(user?.user);
  }

  if (loading) {
    return <Spinner />;
  }

  // if (error) {
  //   console.log(error);
  // }
  return (
    <>
      <section className="min-h-screen bg-secondary text-neutral flex justify-center ">
        <div className="max-w-screen-xl m-4  bg-white shadow-md sm:rounded-lg flex justify-center flex-1">
          {/* Image */}
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${login})`,
              }}
            ></div>
          </div>
          {/*  */}
          <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-12">
            <h1 className="text-3xl text-primary text-center font-bold my-4">
              Green Grocery Delivery
            </h1>
            <div className="mt-4 flex flex-col items-center">
              <h1 className="text-4xl xl:text-4xl text-left text-black font-extrabold">
                Login<span className="text-[#2196f3] ">.</span>
              </h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <button
                    onClick={googleSignIn}
                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                  >
                    <div className="bg-white p-2 rounded-full">
                      <FcGoogle size={'23'} />
                    </div>
                    <span className="ml-4">Continue with Google</span>
                  </button>
                </div>
                {error && <small>{error}</small>}

                <div className="mb-4 mt-4 border-b text-center">
                  <div className="leading-none p-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or login with e-mail
                  </div>
                </div>

                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 mt-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                  <div className="relative">
                    <input
                      className=" block w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type={eye ? 'text' : 'password'}
                      placeholder="Password"
                    />
                    <span
                      onClick={() => setEye(!eye)}
                      className="absolute z-10 top-[35%] right-[5%] text-slate-500 cursor-pointer"
                    >
                      {eye ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                    </span>
                  </div>
                  <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <AiOutlineUser size={'23'} />
                    <span className="ml-3">Login</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
