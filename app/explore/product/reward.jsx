import Image from "next/image";
import React from "react";
import Card1 from "../../../public/assets/images/card1.png"
import Card2 from "../../../public/assets/images/card2.png"
import { useSelector } from "react-redux";

const Reward = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-10 p-10 rounded-xl shadow-md bg-white mb-5">
      <div className="text-lg lg:text-2xl">{lang==="eng"?"Rewards":"পুরস্কার"}</div>
      <div className="mb-5 text-sm lg:text-base">
      {lang==="eng"?"This handout will help you understand how paragraphs are formed, how to develop stronger paragraphs, and how to completely and clearly express your ideas. What is a paragraph?"
      :
      "এই হ্যান্ডআউট আপনাকে বুঝতে সাহায্য করবে কিভাবে অনুচ্ছেদ গঠিত হয়, কিভাবে হয় আরও শক্তিশালী অনুচ্ছেদ তৈরি করুন এবং কীভাবে সম্পূর্ণ এবং স্পষ্টভাবে প্রকাশ করবেন তোমার মতামত. একটি অনুচ্ছেদ কি?"}
      </div>

      <div className="grid lg:grid-cols-3 gap-3 mb-10">
        <div className="rounded-2xl shadow-lg pb-5 border">
          <Image src={Card1} alt="img" className="w-full" />
          <div className="text-lg lg:text-xl my-5 px-2">{lang==="eng"?"Startup Start":"স্টার্টআপ স্টার্ট"}</div>
          <div className="text-sm pb-5 px-2">
          {lang==="eng"?"Lorem Ipsum is simply dummy text of the printing and typesetting industry.":"লোরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের জন্য একটি প্রযুক্তি পাঠ্যবহুল টেক্সট যা শুধুমাত্র ঢাকা টাইপসেটিং ইন্ডাস্ট্রিতে ব্যবহৃত হয়।"}
          </div>
          <div className="text-lg lg:text-2xl px-2 pb-5">{lang==="eng"?"5000 Tk":"৫০০০ টাকা"}</div>
          <div className="inline-block border border-black text-black tracking-widest text-sm text-center rounded-md py-3 ml-4 px-4 cursor-pointer">
          {lang==="eng"?"Select":"নির্বাচন করুন"}
          </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
          <Image src={Card2} alt="img" className="w-full" />
          <div className="text-lg lg:text-xl my-5 px-2">{lang==="eng"?"Startup Start":"স্টার্টআপ স্টার্ট"}</div>
          <div className="text-sm pb-5 px-2">
          {lang==="eng"?"Lorem Ipsum is simply dummy text of the printing and typesetting industry.":"লোরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের জন্য একটি প্রযুক্তি পাঠ্যবহুল টেক্সট যা শুধুমাত্র ঢাকা টাইপসেটিং ইন্ডাস্ট্রিতে ব্যবহৃত হয়।"}
          </div>
          <div className="text-lg lg:text-2xl px-2 pb-5">{lang==="eng"?"5000 Tk":"৫০০০ টাকা"}</div>
          <div className="inline-block border border-black text-black tracking-widest text-sm text-center rounded-md py-3 ml-4 px-4 cursor-pointer">
          {lang==="eng"?"Select":"নির্বাচন করুন"}
          </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
          <Image src={Card1} alt="img" className="w-full" />
          <div className="text-lg lg:text-xl my-5 px-2">{lang==="eng"?"Startup Start":"স্টার্টআপ স্টার্ট"}</div>
          <div className="text-sm pb-5 px-2">          
          {lang==="eng"?"Lorem Ipsum is simply dummy text of the printing and typesetting industry.":"লোরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের জন্য একটি প্রযুক্তি পাঠ্যবহুল টেক্সট যা শুধুমাত্র ঢাকা টাইপসেটিং ইন্ডাস্ট্রিতে ব্যবহৃত হয়।"}
          </div>
          <div className="text-lg lg:text-2xl px-2 pb-5">{lang==="eng"?"5000 Tk":"৫০০০ টাকা"}</div>
          <div className="inline-block border border-black text-black tracking-widest text-sm text-center rounded-md py-3 ml-4 px-4 cursor-pointer">
          {lang==="eng"?"Select":"নির্বাচন করুন"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reward;
