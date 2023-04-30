"use client";
import React from "react";
import "./aboutus.css";
import Image1 from "../../public/assets/images/image2.png";
import Image2 from "../../public/assets/images/Method.png";
import Image3 from "../../public/assets/images/footer33.png";
import Mission from "../../public/assets/images/mission.png";
import Lady1 from "../../public/assets/images/lady1.png";
import Lady2 from "../../public/assets/images/lady2.png";
import Lady3 from "../../public/assets/images/lady3.png";
import Tick from "../../public/assets/images/tick.png";
import Image from "next/image";
import {
  List4,
  List5,
  Value1,
  Value2,
  Value3,
  Value4,
  Value5,
  Value6,
} from "../shared/Icons";
import { Fade, Zoom } from "react-awesome-reveal";
import { useSelector } from "react-redux";

const AboutHeader = () => {
  const { lang } = useSelector((state) => state?.language);

  return (
    <div className="max-w-[1280px] px-2 lg:px-5 mx-auto mt-20">
      <Zoom triggerOnce>
        <div className="w-full lg:h-[400px] flex justify-center items-center bg-home-color rounded-2xl p-16 aboutus_shine">
          <div>
            <div className="text-white text-2xl lg:text-[60px] font-semibold pb-8 text-center">
              {lang==="eng"? "About Us":"আমাদের সম্পর্কে"}
            </div>
            <div className="text-white text-center text-sm lg:text-xl">
            {lang==="eng"? "Lorem Ipsum is simply dummy text of the printing and typesetting industry.":"লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য।"}
            </div>
          </div>
        </div>
      </Zoom>

      <div className="py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-evenly items-center overflow-hidden">
          <Fade direction="right" triggerOnce>
            <div className="flex-col">
              <Image src={Lady1} alt="img" className="w-full pb-5" />
              <div className="flex gap-5">
                <Image src={Lady2} alt="img" className="" />
                <Image src={Lady3} alt="img" className="" />
              </div>
            </div>
          </Fade>

          <div className="w-11/12 lg:w-5/12 my-auto pt-10 lg:pt-0">
            <Fade direction="left" triggerOnce>
              <div className="font-bold text-xl lg:text-4xl pb-5">
              {lang==="eng"? "We're on a mission to bring ideas to life.":"আমরা একটি মিশনে আছি যাতে আইডিয়াগুলি জীবনে আনতে পারি।"}
              </div>
              <div className="text-sm lg:text-base pb-5">
              {lang==="eng"? 
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              :
              "লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম ১৫০০ এর দশক থেকে শিল্পের মানক ডামি পাঠ্য।"}
              </div>
              <div className="flex items-center pb-7">
                <List4 className="text-3xl mx-7" />
                <div>
                  <div className="text-sm lg:text-lg font-semibold">
                  {lang==="eng"? "How technology started":"কিভাবে প্রযুক্তি শুরু হয়েছিল"}
                  </div>
                  <div className="text-sm lg:text-base">
                  {lang==="eng"? "Building an enterprise doesn't need your thousands.":"একটি এন্টারপ্রাইজ তৈরি করতে আপনার হাজার হাজার প্রয়োজন নেই।"}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <List5 className="text-3xl mx-7" />
                <div>
                  <div className="text-sm lg:text-lg font-semibold">
                  {lang==="eng"? "Endless Possibilities":"অপার সম্ভাবনার"}
                  </div>
                  <div className="text-sm lg:text-base">
                  {lang==="eng"? "Building an enterprise doesn't need your thousands.":"একটি এন্টারপ্রাইজ তৈরি করতে আপনার হাজার হাজার প্রয়োজন নেই।"}
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="text-black mx-auto py-10 lg:py-20">
        {lang === "eng" ?
        <div className="text-2xl lg:text-5xl text-center font-semibold px-4 pb-10 lg:pb-20">
          Businesses all over the world <br /> trust us to build their brand
        </div>
        :
        <div className="text-2xl lg:text-5xl text-center font-semibold px-4 pb-10 lg:pb-20">
          সারা বিশ্বে ব্যবসা তাদের ব্র্যান্ড <br /><br /> তৈরি করতে আমাদের বিশ্বাস করুন।
        </div>
        }
        <div className="flex flex-col lg:flex-row justify-evenly mx-auto">
          <Fade>
            <div className="flex-col pb-6 lg:pb-0">
              <div className="text-indigo-600 text-5xl font-semibold text-center pb-5">
            {lang==="eng" ? "10 Years" : "১০ বছর"}
              </div>
              <div className="text-gray-600 text-xl text-center">
              {lang==="eng"? "In Business":"ব্যবসায় আছে"}
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="flex-col pb-6 lg:pb-0">
              <div className="text-indigo-600 text-5xl font-semibold text-center pb-5">
              {lang==="eng"? "75000+":"৭৫,০০০+"}
              </div>
              <div className="text-gray-600 text-xl text-center">{lang==="eng" ? "Investors" : "বিনিয়োগকারী"}</div>
            </div>
          </Fade>
          <Fade>
            <div className="flex-col pb-6 lg:pb-0">
              <div className="text-indigo-600 text-5xl font-semibold text-center pb-5">
              {lang==="eng"? "100K+":"১ লক্ষ+"}
              </div>
              <div className="text-gray-600 text-xl text-center">
              {lang==="eng" ? "Monthly Blog Readers" : "মাসিক ব্লগ পাঠক"}
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="flex-col pb-6 lg:pb-0">
              <div className="text-indigo-600 text-5xl font-semibold text-center pb-5">
              {lang==="eng"? "1.2m+":"১২ লক্ষ+"}
              </div>
              <div className="text-gray-600 text-xl text-center">
              {lang==="eng" ? "Social Followers" : "সামাজিক অনুগামী"}
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className="mb-10 lg:mb-20 lg:mt-20">
        <div className="flex flex-col lg:flex-row justify-evenly items-center overflow-hidden">
          <div className="w-11/12 lg:w-2/4 my-auto pb-10 lg:pb-0">
            <Fade direction="right" triggerOnce>
              <div className="font-bold text-xl lg:text-4xl pb-5">
              {lang==="eng"? "Our Mission":"আমাদের লক্ষ্য"}
              </div>
              <div className="text-gray-600 text-sm lg:text-xl pb-5">
              {lang==="eng"? 
              "Building an enterprise level site doesn't need nightmare or cost your thousands. Felix is purpose built for ease of use and completxability to create."
              :
              "একটি এন্টারপ্রাইজ স্তরের সাইট তৈরি করতে দুঃস্বপ্নের প্রয়োজন হয় না বা আপনার হাজার হাজার খরচ হয় না। ফেলিক্স ব্যবহার সহজে এবং তৈরি করতে জটিলতার জন্য তৈরি করা হয়েছে।"}
              </div>
              <div className="flex items-center pb-3">
                <Image src={Tick} alt="img" className="w-5 h-5 mr-5" />
                <div className="text-sm lg:text-lg">
                {lang==="eng"? "Posting to social media, blogs, and messengers":"সোশ্যাল মিডিয়া, ব্লগ এবং মেসেঞ্জারে পোস্ট করা"}
                </div>
              </div>
              <div className="flex items-center pb-3">
                <Image src={Tick} alt="img" className="w-5 h-5 mr-5" />
                <div className="text-sm lg:text-lg">
                  {lang==="eng"? "Endless Possibilities":"অপার সম্ভাবনার"}
                </div>
              </div>
              <div className="flex items-center">
                <Image src={Tick} alt="img" className="w-5 h-5 mr-5" />
                <div className="text-sm lg:text-lg">
                {lang==="eng"? "The Future of Writing Blog Articles":"ব্লগ প্রবন্ধ লেখার ভবিষ্যত"}
                </div>
              </div>
            </Fade>
          </div>
          <Fade direction="left" triggerOnce>
            <Image src={Mission} alt="img" className="" />
          </Fade>
        </div>
      </div>

      <div className="font-bold text-center text-xl lg:text-4xl pb-10">
        {lang==="eng"? "Our Value":"আমাদের মান"}
      </div>
      <div className="w-11/12 lg:w-auto mx-auto lg:m-0 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 my-20">
        <Fade>
          <div>
            <Value1 className="text-[5rem] mx-auto" />
            <div className="text-lg lg:text-2xl text-center font-semibold my-5 px-2">
              {lang==="eng"? "Innovation":"উদ্ভাবন"}
            </div>
            <div className=" text-sm lg:text-base text-center pb-8 px-2">
              {lang==="eng"? "Building an enterprise doesn't need nightmare or cost your thousands Felix is purpose built.":"একটি এন্টারপ্রাইজ তৈরি করতে দুঃস্বপ্নের প্রয়োজন হয় না বা আপনার হাজার হাজার খরচের প্রয়োজন হয় না ফেলিক্সের উদ্দেশ্য।"}
            </div>
          </div>
        </Fade>

        <Fade>
          <div>
            <Value2 className="text-[5rem] mx-auto" />
            <div className="text-lg lg:text-2xl text-center font-semibold my-5 px-2">
              {lang==="eng"? "Growth":"বৃদ্ধি"}
            </div>
            <div className=" text-sm lg:text-base text-center pb-8 px-2">
            {lang==="eng"? "Building an enterprise doesn't need nightmare or cost your thousands Felix is purpose built.":"একটি এন্টারপ্রাইজ তৈরি করতে দুঃস্বপ্নের প্রয়োজন হয় না বা আপনার হাজার হাজার খরচের প্রয়োজন হয় না ফেলিক্সের উদ্দেশ্য।"}
            </div>
          </div>
        </Fade>

        <Fade>
          <div>
            <Value3 className="text-[5rem] mx-auto" />
            <div className="text-lg lg:text-2xl text-center font-semibold my-5 px-2">
            {lang==="eng"? "Ownership":"মালিকানা"}
            </div>
            <div className=" text-sm lg:text-base text-center pb-8 px-2">
            {lang==="eng"? "Building an enterprise doesn't need nightmare or cost your thousands Felix is purpose built.":"একটি এন্টারপ্রাইজ তৈরি করতে দুঃস্বপ্নের প্রয়োজন হয় না বা আপনার হাজার হাজার খরচের প্রয়োজন হয় না ফেলিক্সের উদ্দেশ্য।"}
            </div>
          </div>
        </Fade>
        <Fade>
          <div>
            <Value4 className="text-[5rem] mx-auto" />
            <div className="text-lg lg:text-2xl text-center font-semibold my-5 px-2">
            {lang==="eng"? "Team Work":"দলবদ্ধভাবে সম্পাদিত কর্ম"}
            </div>
            <div className=" text-sm lg:text-base text-center pb-8 px-2">
            {lang==="eng"? "Building an enterprise doesn't need nightmare or cost your thousands Felix is purpose built.":"একটি এন্টারপ্রাইজ তৈরি করতে দুঃস্বপ্নের প্রয়োজন হয় না বা আপনার হাজার হাজার খরচের প্রয়োজন হয় না ফেলিক্সের উদ্দেশ্য।"}
            </div>
          </div>
        </Fade>

        <Fade>
          <div>
            <Value5 className="text-[5rem] mx-auto" />
            <div className="text-lg lg:text-2xl text-center font-semibold my-5 px-2">
            {lang==="eng"? "Commitment":"অঙ্গীকার"}
            </div>
            <div className=" text-sm lg:text-base text-center pb-8 px-2">
            {lang==="eng"? "Building an enterprise doesn't need nightmare or cost your thousands Felix is purpose built.":"একটি এন্টারপ্রাইজ তৈরি করতে দুঃস্বপ্নের প্রয়োজন হয় না বা আপনার হাজার হাজার খরচের প্রয়োজন হয় না ফেলিক্সের উদ্দেশ্য।"}
            </div>
          </div>
        </Fade>

        <Fade>
          <div>
            <Value6 className="text-[5rem] mx-auto" />
            <div className="text-lg lg:text-2xl text-center font-semibold my-5 px-2">
            {lang==="eng"? "Positivity":"ইতিবাচকতা"}
            </div>
            <div className=" text-sm lg:text-base text-center pb-8 px-2">
            {lang==="eng"? "Building an enterprise doesn't need nightmare or cost your thousands Felix is purpose built.":"একটি এন্টারপ্রাইজ তৈরি করতে দুঃস্বপ্নের প্রয়োজন হয় না বা আপনার হাজার হাজার খরচের প্রয়োজন হয় না ফেলিক্সের উদ্দেশ্য।"}
            </div>
          </div>
        </Fade>
      </div>

      <div className="investor_shine bg-[#5174EF] rounded-2xl max-w-screen-xl px-5 mx-auto p-5 lg:p-10 mt-20 shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <Fade direction="left" triggerOnce>
            <div className="w-full mx-auto lg:m-0 pb-10 lg:pb-0 text-white">
              <div className="text-2xl lg:text-5xl text-center lg:text-start font-bold my-4 lg:my-8">
              {lang==="eng"? "Start Course free trial":"কোর্স বিনামূল্যে ট্রায়াল শুরু করুন"}
              </div>
              <div className="text-sm lg:text-lg text-center lg:text-start pb-8">
              {lang==="eng"? "Felix can help bring your dream website to life with ease.":"ফেলিক্স আপনার স্বপ্নের ওয়েবসাইটকে সহজে প্রাণবন্ত করতে সাহায্য করতে পারে।"}
              </div>
              <div className="w-full mx-auto flex relative">
                <input
                  type="text"
                  placeholder={lang==="eng"?"Type your email":"আপনার ইমেইল টাইপ করুন"}
                  className="bg-white rounded-full w-full px-2 py-5 placeholder-gray-500 outline-none pl-3"
                />
                <div className="text-white bg-home-color rounded-full absolute right-1 my-1 py-4 px-10 cursor-pointer">
                {lang==="eng"? "Start":"শুরু করুন"}
                </div>
              </div>
            </div>
          </Fade>
          <Fade direction="right" triggerOnce>
            <div className="mx-auto lg:m-0 relative">
              <Image src={Image3} alt="img" className="w-[300px] mx-auto" />
              <div className="w-full absolute top-[30%] px-4">
                <div className="text-sm lg:text-lg text-white text-center pb-5">
                {lang==="eng"? "Paragraphs are the building blocks of papers":"অনুচ্ছেদ হল কাগজপত্র বিল্ডিং ব্লক"}
                </div>
                {lang==="eng"?
                <div className="text-white text-center text-3xl pb-3">
                  Startup <span>$25</span>
                </div>
                :
                <div className="text-white text-center text-3xl pb-3">
                  স্টার্টআপ <span>$২৫</span>
                </div>
                }
                <div className="w-[10rem] mx-auto bg-[#5143F6] rounded-lg shadow-md text-white text-center px-5 py-2">
                  {lang==="eng"? "Admit Now":"ভর্তি হন"}
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className="text-xl lg:text-4xl font-bold text-center mt-10 lg:mt-20 lg:mb-8">
      {lang==="eng"? "":""}Our Investors
      </div>
      <div className="w-11/12 lg:w-full mx-auto lg:m-0 grid lg:grid-cols-2 lg:gap-10">
        <Fade>
          <div className="lg:w-2/3">
            <div className="text-xl lg:text-4xl text-[#5174EF] font-bold my-5 px-2">
            {lang==="eng"? "Facebook":"ফেসবুক"}
            </div>
            <div className=" text-sm lg:text-base pb-8 px-2">
            {lang==="eng"? 
            "Lorem Ipsum is simply dummy text of the printing and typesetting. of the printing and typesetting industry Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text."
            :
            "লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম ১৫০০ এর দশক থেকে শিল্পের মানক ডামি পাঠ্য। লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম ১৫০০ এর দশক থেকে শিল্পের মানক ডামি পাঠ্য।"}
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="lg:w-2/3">
            <div className="text-xl lg:text-4xl text-[#5174EF] font-bold my-5 px-2">
            {lang==="eng"? "Amazon":"আমাজন"}
            </div>
            <div className=" text-sm lg:text-base pb-8 px-2">
            {lang==="eng"? 
            "Lorem Ipsum is simply dummy text of the printing and typesetting. of the printing and typesetting industry Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text."
            :
            "লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম ১৫০০ এর দশক থেকে শিল্পের মানক ডামি পাঠ্য। লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম ১৫০০ এর দশক থেকে শিল্পের মানক ডামি পাঠ্য।"}
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="lg:w-2/3">
            <div className="text-xl lg:text-4xl text-[#5174EF] font-bold my-5 px-2">
            {lang==="eng"? "Daraz":"দারাজ"}
            </div>
            <div className=" text-sm lg:text-base pb-8 px-2">
            {lang==="eng"? 
            "Lorem Ipsum is simply dummy text of the printing and typesetting. of the printing and typesetting industry Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text."
            :
            "লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম ১৫০০ এর দশক থেকে শিল্পের মানক ডামি পাঠ্য। লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম ১৫০০ এর দশক থেকে শিল্পের মানক ডামি পাঠ্য।"}
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="lg:w-2/3">
            <div className="text-xl lg:text-4xl text-[#5174EF] font-bold my-5 px-2">
            {lang==="eng"? "Google":"গুগল"}
            </div>
            <div className=" text-sm lg:text-base pb-8 px-2">
            {lang==="eng"? 
            "Lorem Ipsum is simply dummy text of the printing and typesetting. of the printing and typesetting industry Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text."
            :
            "লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম ১৫০০ এর দশক থেকে শিল্পের মানক ডামি পাঠ্য। লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম ১৫০০ এর দশক থেকে শিল্পের মানক ডামি পাঠ্য।"}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutHeader;
