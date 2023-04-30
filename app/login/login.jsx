'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Biznez from "../../public/assets/images/biznez.png"
import Meta from "../../public/assets/images/fb.png"
import GoogleImg from "../../public/assets/images/google.png"
import Youtube from "../../public/assets/images/yt.png"
import { FB, Google } from '../shared/Icons'
import { useSelector } from "react-redux";

const Login = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div className="bg-home-color h-screen flex flex-col lg:flex-row">
      <div className="w-full flex justify-center items-center py-20 lg:py-0">
        <div className="">
          <Image src={Biznez} alt="img" className="m-auto" />
          <div className="text-white flex justify-center mb-3">Partners</div>
          <div className="w-9/12 flex mx-auto">
            <Image src={Meta} alt="img" className="w-[5rem] mx-auto" />
            <Image src={GoogleImg} alt="img" className="w-[5rem] mx-auto" />
            <Image src={Youtube} alt="img" className="w-[5rem] mx-auto" />
          </div>
        </div>
      </div>
      <div className="w-full bg-zinc-100 flex justify-center items-center py-10 lg:py-0">
          <div className="pt-8">
            <div className="flex flex-col items-center">
              {/* <img src={Logo} alt="" /> */}
            </div>
          <div className="my-6">
            <h1 className="text-2xl font-semibold text-black">{lang==="eng"? "Login":"লগইন"}</h1>
            <p className="pt-2 pb-4 text-black text-sm">
            {lang==="eng"? "Login to access your account":"আপনার অ্যাকাউন্টে প্রবেশ করতে লগ ইন করুন"}
            </p>
          </div>

            <form className="mb-4">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-black"
                >
                  {lang==="eng"?`Email`:`ইমেইল`}
                </label>
                <input
                  // type="password"
                  size="large"
                  name="email"
                  id="email"
                  // value={data.email}
                  placeholder={lang==="eng"? "Enter your email":"ইমেইল প্রবেশ করুন"}
                  className="w-full px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-color"
                  // onChange={userData}
                  required
                />
                {/* <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Your Username"
                className="w-full px-3 py-2 placeholder-gray-600 border bg-gray-100 rounded-md focus:outline-none focus:border-brand-color"
                required
              /> */}
              </div>
              <div className="mb-4  ">
                {/* Forgot password */}
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm text-black">
                  {lang==="eng"? `Password`:`পাসওয়ার্ড`}
                  </label>
                  <label
                    className="text-xs text-gray-400 focus:outline-none hover:text-indigo-500"
                    // onClick={ForgotPasswordModal}
                  >
                    {lang==="eng"? `Forgot password?`:`পাসওয়ার্ড ভুলে গেছেন?`}
                  </label>

                  {/*                 <ForgotPassword
                  visibility={tooglePasswordForget}
                  oncancel={(cancel) => setTooglePasswordForget(cancel)}
                  emaildata ={data.email} 
                /> */}
                </div>
                <input
                  // type="password"
                  size="large"
                  name="password"
                  id="password"
                  placeholder={lang==="eng"? "Enter your password":"আপনার পাসওয়ার্ড লিখুন"}
                  // value={data.password}
                  className="w-full px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-color"
                  // onChange={userData}
                  required
                />
              </div>

              <div className="mb-6   flex items-center">
                <input
                  className="cursor-pointer mr-2"
                  type="checkbox"
                  name="remember me"
                  id="remember_me"
                  defaultValue="off"
                  /* onChange={handleRememberMe} */
                />
                <label
                  className="cursor-pointer text-black"
                  htmlFor="remember_me"
                >
                  {lang==="eng"? `Remember Me`:`আমার আইডি মনে রাখ`}
                </label>
              </div>

              <div className="mb-6">
                <Link href={"../profile"}>
                  <button
                    type="submit"
                    className="w-full p-3 text-white font-medium bg-home-color bg-opacity-80 hover:bg-opacity-100 duration-500 rounded-md focus:outline-none  "
                  >
                    {lang==="eng"? `Log in`:`লগইন`}
                  </button>
                </Link>
              </div>
              <div className="text-center">{lang==="eng"?"or":"অথবা"}</div>
              <div className="flex justify-center items-center bg-white px-4 py-2 shadow-lg border rounded-lg mt-5 mb-3 cursor-pointer">
                <Google className="text-3xl mr-3" />
                {lang==="eng"? "Continue with Google":"গুগল দিয়ে লগইন করুন"}
              </div>
              <div className="flex justify-center items-center bg-white px-4 py-2 shadow-lg border rounded-lg mt-3 mb-5 cursor-pointer">
                <FB className="text-3xl text-[#1877F2] mr-3" />
                {lang==="eng"? "Continue with Facebook":"ফেসবুক দিয়ে লগইন করুন"}
              </div>
              <div>
              {lang==="eng"?`Dont have an account?`:`অ্যাকাউন্ট নেই?`}
                <Link href={"../signup"}>
                  <span className="pl-2 underline text-sky-600">
                  {lang==="eng"? `Sign up here`:`এখানে নিবন্ধন করুন`}
                  </span>
                </Link>
              </div>
              <div>
                Admin Panel:
                <Link href={"../user-login"}>
                  <span className="pl-2 underline text-sky-600">
                    User login
                  </span>
                </Link>
              </div>

              {/* <p className="text-sm text-center text-gray-400">
                Don't have an account yet?
                <Link to="/join" className="font-semibold ml-1.5">
                  Sign up
                </Link>
              </p> */}
            </form>
        </div>
      </div>
    </div>
  );
}

export default Login