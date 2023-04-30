'use client'
import Link from 'next/link'
/* import CreditCard from "../../public/assets/images/creditcard.png" */
import { Send } from "../shared/Icons"
import { useSelector } from "react-redux";

const LearnPayment = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div className="lg:bg-home-color lg:h-screen flex flex-col lg:flex-row ">
      <div className="w-full flex justify-center items-center">
        <div className="mt-20 lg:mt-0 w-11/12 lg:w-1/2 mx-auto">
          <div className="text-black lg:text-white text-justify">
            {lang==="eng"
            ?`Paragraphs are the building blocks of papers. Many students define
            paragraphs in terms of length`
            :`অনুচ্ছেদ হল কাগজপত্রের বিল্ডিং ব্লক। অনেক ছাত্র সংজ্ঞায়িত
            দৈর্ঘ্যের পরিপ্রেক্ষিতে অনুচ্ছেদ`}
          </div>
          <div className="text-black lg:text-white font-semibold mt-5">
          {lang==="eng"?`Full name`:`পুরো নাম`} *
          </div>
          <input
            type="text"
            className="w-full bg-transparent outline-none bg-white lg:bg-transparent border lg:border-white rounded-2xl text-black lg:text-white py-3 px-2 my-2"
          />
          <div className="text-black lg:text-white font-semibold mt-5">
            {lang==="eng"?`Email`:`ইমেইল`} *
          </div>
          <input
            type="text"
            className="w-full bg-transparent outline-none bg-white lg:bg-transparent border lg:border-white rounded-2xl text-black lg:text-white py-3 px-2 my-2"
          />
          <div className="text-black lg:text-white font-semibold mt-5">
            {lang==="eng"?`Address`:`ঠিকানা`} *
          </div>
          <input
            type="text"
            className="w-full bg-transparent outline-none bg-white lg:bg-transparent border lg:border-white rounded-2xl text-black lg:text-white py-3 px-2 my-2"
          />
        </div>
      </div>
      <div className="w-full lg:bg-white flex justify-center items-center">
        <div className="lg:bg-zinc-100 lg:rounded-xl w-full lg:w-[50vh] h-auto lg:h-[80vh] lg:shadow-lg mb-10">
          <div className="flex justify-start"></div>
          <div className="lg:pt-8">
            <div className="flex flex-col items-center">
              {/* <img src={Logo} alt="" /> */}
            </div>
          </div>
          <div className="text-center my-6">
            <h1 className="text-2xl font-semibold text-black">{lang==="eng"? `Transaction`:`লেনদেন`}</h1>
          </div>

          <div className="m-6">
            <form className="mb-4">
              <div className="mb-4">
                <label
                  htmlFor="card_no"
                  className="block mb-2 text-sm text-black"
                >
                  {lang==="eng"? "Card number":"কার্ড নম্বর"}
                </label>
                <input
                  // type="password"
                  size="large"
                  name="card_no"
                  id="card_no"
                  // value={data.email}
                  placeholder={lang==="eng"? "Enter your card number":"আপনার কার্ড নম্বর লিখুন"}
                  className="w-full px-6 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-brand-color"
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
                {lang==="eng"? "Card holder":"কার্ড হোল্ডার"}
                </label>
                <input
                  size="large"
                  name="holder"
                  id="holder"
                  placeholder={lang==="eng"? "Enter card holder name":"কার্ড হোল্ডারের নাম লিখুন"}
                  // value={data.password}
                  className="w-full px-6 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-brand-color"
                  // onChange={userData}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="holder" className="text-sm text-black">
                {lang==="eng"? "Card holder email":"কার্ড ধারক ইমেল"}
                </label>
                <input
                  size="large"
                  name="email"
                  id="email"
                  placeholder={lang==="eng"? "Enter card holder email":"কার্ড ধারক ইমেল লিখুন"}
                  // value={data.password}
                  className="w-full px-6 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-brand-color"
                  // onChange={userData}
                  required
                />
              </div>

              <div className="flex justify-between gap-2 mb-4">
                <div>
                  <label htmlFor="holder" className="text-sm text-black">
                  {lang==="eng"? `Expiry Date (MM-YY)`:`মেয়াদ শেষ তারিখ (MM-YY)`}
                  </label>
                  <input
                    size="large"
                    name="expDate"
                    id="expDate"
                    placeholder="MM-YY"
                    // value={data.password}
                    className="w-full px-6 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-brand-color"
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
                    className="w-full px-6 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-brand-color"
                    // onChange={userData}
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between gap-2 mb-4">
                <div>
                  <label htmlFor="holder" className="text-sm text-black">
                  {lang==="eng"? "Country":"দেশ"}
                  </label>
                  <input
                    size="large"
                    name="country"
                    id="country"
                    placeholder={lang==="eng"? "Select country":"দেশ নির্বাচন করুন"}
                    // value={data.password}
                    className="w-full px-6 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-brand-color"
                    // onChange={userData}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="holder" className="text-sm text-black">
                  {lang==="eng"? "Postal code":"পোস্ট অফিসের নাম্বার"}
                  </label>
                  <input
                    size="large"
                    name="postal"
                    id="postal"
                    placeholder={lang==="eng"?"Postal code":"পোস্ট অফিসের নাম্বার"}
                    // value={data.password}
                    className="w-full px-6 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-brand-color"
                    // onChange={userData}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="holder" className="text-sm text-black">
                {lang==="eng"? "Amount":"পরিমাণ"}
                </label>
                <input
                  size="large"
                  name="amount"
                  id="amount"
                  placeholder={lang==="eng"? "Enter payment amount":"অর্থপ্রদানের পরিমাণ লিখুন"}
                  // value={data.password}
                  className="w-full px-6 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-brand-color"
                  // onChange={userData}
                  required
                />
              </div>

              <div className="flex justify-center mb-6">
                <Link href={"../profile"}>
                  <button
                    type="submit"
                    className="flex items-center px-6 py-2 text-white font-medium bg-home-color bg-opacity-80 hover:bg-opacity-100 duration-500 rounded-2xl focus:outline-none"
                  >
                    <Send className="mr-2"/> {lang==="eng"? "Make Payment":"পেমেন্ট করুন"}
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

export default LearnPayment;