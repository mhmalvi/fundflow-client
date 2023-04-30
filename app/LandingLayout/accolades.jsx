'use client'
import React from 'react'
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";

const Accolades = () => {
  const { lang } = useSelector((state) => state?.language);

  return (
    <div className="max-w-[1280px] text-black mx-auto py-8 lg:py-36 overflow-x-hidden">
        {lang === "eng" ?
        <div className="text-2xl lg:text-5xl text-center font-semibold px-4 pb-10 lg:pb-20">
          Businesses all over the world <br /> trust us to build their brand
        </div>
        :
        <div className="text-2xl lg:text-5xl text-center font-semibold px-4 pb-10 lg:pb-20">
          সারা বিশ্বে ব্যবসা তাদের ব্র্যান্ড <br /><br /> তৈরি করতে আমাদের বিশ্বাস করুন।
        </div>
        }
      <div className="w-11/12 lg:w-2/3 flex flex-col lg:flex-row justify-evenly mx-auto">
        <Fade>
          <div className="flex-col pb-5 lg:pb-0">
            <div className="text-indigo-600 text-5xl font-semibold text-center pb-3">
            {lang==="eng" ? "1000" : "১০০০"}
            </div>
            <div className="text-xl text-center">{lang==="eng" ? "Investors" : "বিনিয়োগকারী"}</div>
          </div>
        </Fade>
        <Fade>
          <div className="flex-col pb-5 lg:pb-0">
            <div className="text-indigo-600 text-5xl font-semibold text-center pb-3">
            {lang==="eng" ? "2450" : "২৪৫০"}
            </div>
            <div className="text-xl text-center">{lang==="eng" ? "Monthly Blog Readers" : "মাসিক ব্লগ পাঠক"}</div>
          </div>
        </Fade>
        <Fade>
          <div className="flex-col pb-5 lg:pb-0">
            <div className="text-indigo-600 text-5xl font-semibold text-center pb-3">
            {lang==="eng" ? "50000+" : "৫০,০০০+"}
            </div>
            <div className="text-xl text-center">{lang==="eng" ? "Social Followers" : "সামাজিক অনুগামী"}</div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Accolades