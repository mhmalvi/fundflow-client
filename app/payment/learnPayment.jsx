import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CreditCard from "../../public/assets/images/creditcard.png"
import Meta from "../../public/assets/images/fb.png"
import Google from "../../public/assets/images/google.png"
import Youtube from "../../public/assets/images/yt.png"
const Login = () => {
  return (
    <div className="lg:bg-home-color lg:h-screen flex flex-col lg:flex-row ">
      <div className="w-full flex justify-center items-center">
        
      </div>
      <div className="w-full lg:bg-white flex justify-center items-center">
        <div className="lg:bg-zinc-100 lg:rounded-xl w-full lg:w-[50vh] h-auto lg:h-[80vh] lg:shadow-lg my-10">
          <div className="flex justify-start"></div>
          <div className="lg:pt-8">
            <div className="flex flex-col items-center">
              {/* <img src={Logo} alt="" /> */}
            </div>
          </div>
          <div className="text-center my-6">
            <h1 className="text-2xl font-semibold text-black">Transaction</h1>
          </div>

          <div className="m-6">
            <form className="mb-4">
              <div className="mb-4">
                <label
                  htmlFor="card_no"
                  className="block mb-2 text-sm text-black"
                >
                  Card number
                </label>
                <input
                  // type="password"
                  size="large"
                  name="card_no"
                  id="card_no"
                  // value={data.email}
                  placeholder="Enter your card number"
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
              <div className="mb-4">
                <label htmlFor="holder" className="text-sm text-black">
                  Card holder
                </label>
                <input
                  size="large"
                  name="holder"
                  id="holder"
                  placeholder="Enter card holder name"
                  // value={data.password}
                  className="w-full px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-color"
                  // onChange={userData}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="holder" className="text-sm text-black">
                  Card holder email
                </label>
                <input
                  size="large"
                  name="email"
                  id="email"
                  placeholder="Enter card holder email"
                  // value={data.password}
                  className="w-full px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-color"
                  // onChange={userData}
                  required
                />
              </div>

              <div className="flex justify-between gap-2 mb-4">
                <div>
                  <label htmlFor="holder" className="text-sm text-black">
                    Expiry Date (MM-YY)
                  </label>
                  <input
                    size="large"
                    name="expDate"
                    id="expDate"
                    placeholder="MM-YY"
                    // value={data.password}
                    className="w-full px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-color"
                    // onChange={userData}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="holder" className="text-sm text-black">
                    CVV
                  </label>
                  <input
                    size="large"
                    name="expDate"
                    id="expDate"
                    placeholder="CVV"
                    // value={data.password}
                    className="w-full px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-color"
                    // onChange={userData}
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between gap-2 mb-4">
                <div>
                  <label htmlFor="holder" className="text-sm text-black">
                    Country
                  </label>
                  <input
                    size="large"
                    name="country"
                    id="country"
                    placeholder="Select country"
                    // value={data.password}
                    className="w-full px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-color"
                    // onChange={userData}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="holder" className="text-sm text-black">
                    Postal code
                  </label>
                  <input
                    size="large"
                    name="postal"
                    id="postal"
                    placeholder="Postal code"
                    // value={data.password}
                    className="w-full px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-color"
                    // onChange={userData}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="holder" className="text-sm text-black">
                  Amount
                </label>
                <input
                  size="large"
                  name="amount"
                  id="amount"
                  placeholder="Enter payment amount"
                  // value={data.password}
                  className="w-full px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-color"
                  // onChange={userData}
                  required
                />
              </div>

              <div className="flex justify-center mb-6">
                <Link href={"../profile"}>
                  <button
                    type="submit"
                    className="inline-block px-6 py-2 text-white font-medium bg-home-color bg-opacity-80 hover:bg-opacity-100 rounded-md focus:outline-none"
                  >
                    Make Payment
                  </button>
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
    </div>
  );
}

export default Login