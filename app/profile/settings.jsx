import React from "react";
import Image from "next/image";
import ProfilePic from "../../public/assets/images/propic.png";
import { useSelector } from "react-redux";

const Settings = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div className="2xl:w-9/12 h-full mx-auto p-4 lg:p-20">
      <div className="flex justify-between">
        <div>
          <div className="text-lg font-bold pb-5">{lang==="eng"? "Email Address":"ইমেইল ঠিকানা"}</div>
          <div className="text-sm italic">
          {lang==="eng"? "Your email address is":"আপনার ইমেইল ঠিকানা:"}
            <span className="font-semibold">Atmaram31@gmail.com</span>
          </div>
        </div>
        <a href="" className="text-sm underline text-sky-600">
        {lang==="eng"? "change":"পরিবর্তন করুন"}
        </a>
      </div>
      <div className="w-full border my-10"></div>
      <div className="flex justify-between relative">
        <div className="lg:w-1/2">
          <div className="text-lg font-bold pb-5">{lang==="eng"? "Password":"পাসওয়ার্ড"}</div>
          <div className="pb-5">
            <span className="text-sm">{lang==="eng"? "Enter current password":"বর্তমান পাসওয়ার্ড লিখুন"}</span>
            <input
              type="password"
              className="w-full border rounded-md shadow-md py-2 px-2 outline-none"
            />
          </div>
          <div>
            <span className="text-sm">{lang==="eng"? "Enter new password":"নতুন পাসওয়ার্ড লিখুন"}</span>
            <input
              type="password"
              className="w-full border rounded-md shadow-md py-2 px-2 outline-none"
            />
          </div>
          <div className="text-sm my-5">{lang==="eng"? "Cannot remember your password?":"আপনার পাসওয়ার্ড মনে করতে পারেন না?"}
            <span className="underline text-sky-600 px-2 cursor-pointer">{lang==="eng"? "Reset your password":"আপনার পাসওয়ার্ড পুনরায় সেট করুন"}</span>
          </div>
          <div className="inline-block bg-home-color text-white text-center rounded-md px-4 py-2 my-5">{lang==="eng"? "Save":"সংরক্ষণ করুন"}</div>
        </div>
        <a href="" className="text-sm underline text-sky-600">
        {lang==="eng"? "change":"পরিবর্তন করুন"}
        </a>
      </div>
    </div>
  );
};

export default Settings;
