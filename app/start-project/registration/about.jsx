import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-10 my-5">
        <div className="text-lg lg:text-xl pb-5">{lang==="eng"?`Address`:`ঠিকানা`}</div>
        <div className="text-sm lg:text-base pb-2">
          {lang==="eng"? 
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut.`
        :
        `কোচিং প্রক্রিয়া অনুসরণ করা গ্রাহকের জন্য খুবই গুরুত্বপূর্ণ, কিন্তু আমি করি
        এমন সময়ে তারা প্রচণ্ড শ্রম ও যন্ত্রণার মধ্যে পড়ে। যাতে
        আমি দুঃখের সাথে বলতে চাই যে, এটি ছাড়া কেউ কোন ধরণের কাজের অনুশীলন করবেন না`}
        </div>
        <div className="text-sm lg:text-base font-semibold pb-5">
          *{lang==="eng"? "All fields required unless noted.":"উল্লেখ না করা পর্যন্ত সমস্ত ক্ষেত্র আবশ্যক."}
        </div>
        <input
          type="text"
          className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300 text-sm lg:text-base"
          placeholder={lang==="eng"?`Address`:`ঠিকানা`}
        />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-10 my-5">
        <div className="text-lg lg:text-xl pb-5">{lang==="eng"?`Valuation`:`মূল্যায়ন`}</div>
        <div className="text-sm lg:text-base pb-2">
          {lang==="eng"? 
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut.`
        :
        `কোচিং প্রক্রিয়া অনুসরণ করা গ্রাহকের জন্য খুবই গুরুত্বপূর্ণ, কিন্তু আমি করি
        এমন সময়ে তারা প্রচণ্ড শ্রম ও যন্ত্রণার মধ্যে পড়ে। যাতে
        আমি দুঃখের সাথে বলতে চাই যে, এটি ছাড়া কেউ কোন ধরণের কাজের অনুশীলন করবেন না`}
        </div>
        <div className="text-sm lg:text-base font-semibold pb-5">
          *{lang==="eng"? "All fields required unless noted.":"উল্লেখ না করা পর্যন্ত সমস্ত ক্ষেত্র আবশ্যক."}
        </div>
        <input
          type="text"
          className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300 text-sm lg:text-base"
          placeholder={lang==="eng"?`Ammount`:`পরিমাণ`}
        />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-10 my-5">
        <div className="text-lg lg:text-xl pb-5">{lang==="eng"?`Description`:`বর্ণনা`}</div>
        <div className="text-sm lg:text-base pb-2">
          {lang==="eng"? 
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut.`
        :
        `কোচিং প্রক্রিয়া অনুসরণ করা গ্রাহকের জন্য খুবই গুরুত্বপূর্ণ, কিন্তু আমি করি
        এমন সময়ে তারা প্রচণ্ড শ্রম ও যন্ত্রণার মধ্যে পড়ে। যাতে
        আমি দুঃখের সাথে বলতে চাই যে, এটি ছাড়া কেউ কোন ধরণের কাজের অনুশীলন করবেন না`}
        </div>
        <div className="text-sm lg:text-base font-semibold pb-5">
          *{lang==="eng"? "All fields required unless noted.":"উল্লেখ না করা পর্যন্ত সমস্ত ক্ষেত্র আবশ্যক."}
        </div>
        <input
          type="text"
          className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300 text-sm lg:text-base"
          placeholder={lang==="eng"?`Description`:`বর্ণনা`}
        />
      </div>

      <div className="w-[20rem] mx-auto bg-home-color text-white px-4 py-3 text-center mt-10 rounded-md cursor-pointer">
        {lang==="eng"? "Save & Continue":"সংরক্ষণ করুন এবং পরবর্তী ধাপে যান"}
      </div>
    </div>
  );
};

export default About;
