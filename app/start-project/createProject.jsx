'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import startProj from "../../public/assets/images/start-project.png";
import { Fade, Slide } from "react-awesome-reveal";
import { useSelector } from "react-redux";

const CreateProject = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div className="max-w-[1280px] px-5 mx-auto pt-20">
      <div className="text-2xl lg:text-4xl font-bold mb-5">
        {lang === "eng" ? "Lorem Ipsum is simply dummy text" : "লোরেম ইপসাম হল মূলত মুদ্রণ"}
      </div>
      <div className="mb-5 lg:text-xl">
        {lang === "eng" ?
          `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum been the industry's standard dummy text ever
        since the 1500s, when an unknown printegalley of type and scrambled it
        to make a type specimen book.`
          :
          `Lorem Ipsum হল মুদ্রণ এবং টাইপসেটিং এর ডামি পাঠ্য
        শিল্প লোরেম ইপসাম ইন্ডাস্ট্রির স্ট্যান্ডার্ড ডামি টেক্সট
        1500 এর দশক থেকে, যখন একটি অজানা প্রিন্টগ্যালি টাইপ এবং এটি scrambled
        একটি টাইপ নমুনা বই করতে.`}
      </div>
      <Link href={"/start-project/registration"}>
        <div className="inline-block bg-home-color text-white text-sm text-center tracking-[.3em] rounded-md px-5 py-3">
          {lang === "eng" ? "START PROJECT" : "প্রকল্প শুরু করুন"}
        </div>
      </Link>
      <Fade direction="up" triggerOnce>
        <Image src={startProj} alt="img" className="w-full my-10" />
      </Fade>
      <Fade>
        <div className="text-2xl lg:text-4xl font-bold mb-5">
          {lang === "eng" ? "Lorem Ipsum is simply dummy text" : "লোরেম ইপসাম হল মূলত মুদ্রণ"}
        </div>
        <div className="mb-5 lg:text-xl">
          {lang === "eng" ?
            `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.`
            :
            `জনপ্রিয় বিশ্বাসের বিপরীতে, Lorem Ipsum কেবল এলোমেলো পাঠ্য নয়। এটি 45 খ্রিস্টপূর্বাব্দের ধ্রুপদী ল্যাটিন সাহিত্যের একটি অংশে শিকড় রয়েছে, এটি 2000 বছরেরও বেশি পুরানো। ভার্জিনিয়ার হ্যাম্পডেন-সিডনি কলেজের একজন ল্যাটিন অধ্যাপক রিচার্ড ম্যাকক্লিনটক লোরেম ইপসাম প্যাসেজ থেকে আরও অস্পষ্ট ল্যাটিন শব্দ কনসেক্টুরের সন্ধান করেছিলেন এবং শাস্ত্রীয় সাহিত্যে এই শব্দের উদ্ধৃতিগুলির মধ্য দিয়ে গিয়ে সন্দেহাতীত উত্সটি আবিষ্কার করেছিলেন। লোরেম ইপসাম 45 খ্রিস্টপূর্বাব্দে লেখা সিসেরোর "ডি ফিনিবাস বোনরাম এট ম্যালোরাম" (দ্য এক্সট্রিমস অফ গুড অ্যান্ড ইভিল) এর বিভাগ 1.10.32 এবং 1.10.33 থেকে এসেছে। এই বইটি নৈতিকতার তত্ত্বের উপর একটি গ্রন্থ, রেনেসাঁর সময় খুব জনপ্রিয়।`}
        </div>
        <div className="mb-5 lg:text-xl">
          {lang === "eng" ?
            `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum been the industry's standard dummy text ever
        since the 1500s, when an unknown printegalley of type and scrambled it
        to make a type specimen book.`
            :
            `লোরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং এর ডামি পাঠ্য
        শিল্প লোরেম ইপসাম ইন্ডাস্ট্রির স্ট্যান্ডার্ড ডামি টেক্সট
        1500 এর দশক থেকে, যখন একটি অজানা প্রিন্টগ্যালি টাইপ এবং এটি scrambled
        একটি টাইপ নমুনা বই করতে.`}
        </div>
        <ul className="lg:w-1/2 mx-auto lg:my-10">
          <li className="py-3 text-sm lg:text-xl flex">
            <span className="font-semibold pr-2">{lang==="eng" ? "01":"০১"}</span>
            {lang==="eng" ? "Listen to what they say about you":"তারা আপনার সম্পর্কে কি বলে তা শুনুন"}
          </li>
          <li className="py-3 text-sm lg:text-xl flex">
            <span className="font-semibold pr-2">{lang==="eng" ?"02":"০২"}</span>
            {lang==="eng" ?"Randomised words which don't look even slightly believable.":"এলোমেলো শব্দ যা সামান্য বিশ্বাসযোগ্য মনে হয় না।"}
          </li>
          <li className="py-3 text-sm lg:text-xl flex">
            <span className="font-semibold pr-2">{lang==="eng" ?"03":"০৩"}</span>
            {lang==="eng" ?`Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks`:`ইন্টারনেটে Lorem Ipsum জেনারেটরগুলি পূর্বনির্ধারিত পুনরাবৃত্তি করতে থাকে
            খণ্ড`}
          </li>
          <li className="py-3 text-sm lg:text-xl flex">
            <span className="font-semibold pr-2">{lang==="eng" ?"04":"০৪"}</span>
            {lang==="eng" ? `Automate multiple scenarios and eliminate tedious tasks.`:`একাধিক পরিস্থিতি স্বয়ংক্রিয় করুন এবং ক্লান্তিকর কাজগুলি দূর করুন।`}
          </li>
        </ul>
        <div className="mb-5 lg:text-xl">
        {lang==="eng" ?
          `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum been the industry's standard dummy text
          ever since the 1500s, when an unknown printegalley of type and
          scrambled it to make a type specimen book.`
          :
          `আপনার নতুন প্রকল্পের জন্য একটি প্রাথমিক বিভাগ এবং উপশ্রেণী নির্বাচন করুন। আমরা
          আপনার জন্য সেরা অনবোর্ডিং তৈরি করতে চান - অনুগ্রহ করে পূরণ করুন
          নীচের তথ্য। আপনার উত্তর এই প্রচারাভিযানের জন্য লক করা হবে
          এবং পরে পরিবর্তন করা যাবে না।`}
        </div>
      </Fade>

      <div className="flex flex-col lg:flex-row justify-between mt-20 overflow-hidden">
        <div className="lg:w-1/3">
          <Fade direction="left" triggerOnce>
            <div className="text-2xl lg:text-4xl font-bold mb-5">
            {lang==="eng" ? `Let’s get ready to start your campaign!`:``}
            </div>
            <div className="mb-5 lg:text-xl">
              {lang==="eng" ?
              `Select a primary category and subcategory for your new project.We
              want to create the best onboarding for you – please fill out the
              information below. Your answers will be locked for this campaign
              and can’t be changed later.`
              :
              `আপনার নতুন প্রকল্পের জন্য একটি প্রাথমিক বিভাগ এবং উপশ্রেণী নির্বাচন করুন। আমরা
              আপনার জন্য সেরা অনবোর্ডিং তৈরি করতে চান - অনুগ্রহ করে পূরণ করুন
              নীচের তথ্য। আপনার উত্তর এই প্রচারাভিযানের জন্য লক করা হবে
              এবং পরে পরিবর্তন করা যাবে না।`}
            </div>
            <ul className="lg:my-5">
              <li className="py-3 text-sm lg:text-xl flex">
                <span className="font-semibold pr-2">{lang==="eng" ?"01":"০১"}</span>
                {lang==="eng" ?`Listen to what they say about you`:`তারা আপনার সম্পর্কে কি বলে তা শুনুন`}
              </li>
              <li className="py-3 text-sm lg:text-xl flex">
                <span className="font-semibold pr-2">{lang==="eng" ?"02":"০২"}</span>
                {lang==="eng" ? `Randomised words which don't look even slightly believable.`:`এলোমেলো শব্দ যা সামান্য বিশ্বাসযোগ্য মনে হয় না।`}
              </li>
              <li className="py-3 text-sm lg:text-xl flex">
                <span className="font-semibold pr-2">{lang==="eng" ?"03":"০৩"}</span>
                {lang==="eng" ?`Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks`:`ইন্টারনেটে Lorem Ipsum জেনারেটরগুলি পূর্বনির্ধারিত পুনরাবৃত্তি করতে থাকে
                খণ্ড`}
              </li>
              <li className="py-3 text-sm lg:text-xl flex">
                <span className="font-semibold pr-2">{lang==="eng" ?"04":"০৪"}</span>
                {lang==="eng" ? `Automate multiple scenarios and eliminate tedious tasks.`:`একাধিক পরিস্থিতি স্বয়ংক্রিয় করুন এবং ক্লান্তিকর কাজগুলি দূর করুন।`}
              </li>
            </ul>
          </Fade>
        </div>
        <div className="lg:w-1/3 flex flex-wrap justify-center m-auto overflow-hidden">
          <Slide direction="right" triggerOnce>
            <Link href={"/start-project/registration"}>
              <div className="w-[8rem] lg:w-[10rem] lg:h-[8rem] flex justify-center items-center border-2 border-home-color hover:bg-home-color lg:text-2xl text-home-color hover:text-white rounded-xl p-5 m-2 lg:m-4">
              {lang==="eng" ?"Donation":"দান"}
              </div>
            </Link>
          </Slide>
          <Slide direction="right" triggerOnce>
            <Link href={"/start-project/registration"}>
              <div className="w-[8rem] lg:w-[10rem] lg:h-[8rem] flex justify-center items-center border-2 border-home-color hover:bg-home-color lg:text-2xl text-home-color hover:text-white rounded-xl p-5 m-2 lg:m-4">
              {lang==="eng" ?"Debt":"ঋণ"}
              </div>
            </Link>
          </Slide>
          <Slide direction="right" triggerOnce>
            <Link href={"/start-project/registration"}>
              <div className="w-[8rem] lg:w-[10rem] lg:h-[8rem] flex justify-center items-center border-2 border-home-color hover:bg-home-color lg:text-2xl text-home-color hover:text-white rounded-xl p-5 m-2 lg:m-4">
              {lang==="eng" ?"Equity":"ইক্যুইটি"}
              </div>
            </Link>
          </Slide>
          <Slide direction="right" triggerOnce>
            <Link href={"/start-project/registration"}>
              <div className="w-[8rem] lg:w-[10rem] lg:h-[8rem] flex justify-center items-center border-2 border-home-color hover:bg-home-color hover:text-white lg:text-2xl text-home-color rounded-xl p-5 m-2 lg:m-4">
              {lang==="eng" ?"Reward":"পুরস্কার"}
              </div>
            </Link>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
