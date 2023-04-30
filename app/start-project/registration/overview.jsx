import React from 'react'
import { useSelector } from "react-redux";

const Overview = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-10 my-5">
        <div className="text-lg lg:text-xl pb-5">{lang==="eng"? "Project title":"প্রকল্প শিরোনাম"}</div>
        <div className="pb-2 text-sm lg:text-base">
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
        <div className="flex flex-col">
          <input
            type="text"
            className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300 text-sm lg:text-base"
            placeholder={lang==="eng"? "Project title":"প্রকল্প শিরোনাম"}
          />
          <input
            type="text"
            className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300 text-sm lg:text-base"
            placeholder={lang==="eng"? "Subtitle":"সাবটাইটেল"}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-10 my-5">
        <div className="text-lg lg:text-xl pb-5">{lang==="eng"? "Project Category":"প্রকল্প বিভাগ"}</div>
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
        <div className="flex flex-col">
          <input
            type="text"
            className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300 text-sm lg:text-base"
            placeholder={lang==="eng"? "Primary category":"প্রাথমিক বিভাগ"}
          />
          <input
            type="text"
            className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300 text-sm lg:text-base"
            placeholder={lang==="eng"? "Subcategory":"উপশ্রেণি"}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-10 my-5">
        <div className="text-lg lg:text-xl pb-5">{lang==="eng"? "Project Location":"প্রকল্পের অবস্থান"}</div>
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
          placeholder={lang==="eng"?"Location":"অবস্থান"}
        />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-10 my-5">
        <div className="text-lg lg:text-xl pb-5">{lang==="eng"? "Project Image & Video":"প্রকল্পের ছবি ও ভিডিও"}</div>
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
          placeholder={lang==="eng"?"Project Image & Video":"প্রকল্পের ছবি ও ভিডিও"}
        />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-10 my-5">
        <div className="text-lg lg:text-xl pb-5">{lang==="eng"? "Project Goal":"প্রকল্পের লক্ষ্য"}</div>
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
        <div className="flex flex-col">
          <input
            type="text"
            className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300 text-sm lg:text-base"
            placeholder={lang==="eng"?"Currency":"মুদ্রা"}
          />
          <input
            type="text"
            className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300 text-sm lg:text-base"
            placeholder={lang==="eng"? "Amount":"পরিমাণ"}
          />
          <input
            type="text"
            className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300 text-sm lg:text-base"
            placeholder={lang==="eng"? "Share price":"শেয়ারের দাম"}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-10 my-5">
        <div className="text-lg lg:text-xl pb-5">{lang==="eng"? "Campaign Duration":"প্রচারের সময়কাল"}</div>
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
        <div className="flex flex-col lg:flex-row gap-2">
          <input
            type="text"
            className="shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300 text-sm lg:text-base"
            placeholder={lang==="eng"? "day":"দিন"}
          />
          <input
            type="text"
            className="shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300 text-sm lg:text-base"
            placeholder={lang==="eng"? "month":"মাস"}
          />
          <input
            type="text"
            className="shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300 text-sm lg:text-base"
            placeholder={lang==="eng"? "year":"বছর"}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-10 my-5">
        <div className="text-lg lg:text-xl pb-5">{lang==="eng"? "Campaign Story":"প্রচারের গল্প"}</div>
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
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="w-full shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300 text-sm lg:text-base"
        ></textarea>
      </div>

      <div className="w-[20rem] mx-auto bg-home-color text-white px-4 py-3 text-center mt-10 rounded-md cursor-pointer">
      {lang==="eng"? "Save & Continue":"সংরক্ষণ করুন এবং পরবর্তী ধাপে যান"}
      </div>
    </div>
  );
}

export default Overview