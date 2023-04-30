import React from "react";
import Image from "next/image";
import ProfilePic from "../../public/assets/images/propic.png";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div className="lg:w-9/12 h-full mx-auto p-4 lg:pl-20 pt-10 lg:pt-20">
      <div className="flex items-center gap-5 relative">
        <Image src={ProfilePic} alt="img" className="lg:absolute lg:-left-52 lg:top-5 z-50" />
        <div>
          <div className="text-xl">Atmaram Tukharaman</div>
          <div className="text-sm italic">Atmaram31@gmail.com</div>
        </div>
      </div>
      <div className="w-full border my-10"></div>
      <div className="lg:w-2/3 text-lg">
        {lang==="eng"? 
        `This handout will help you understand how paragraphs are formed, how to
        develop stronger paragraphs, and how to completely and clearly express
        your ideas.`
        :`এই হ্যান্ডআউট আপনাকে বুঝতে সাহায্য করবে কিভাবে অনুচ্ছেদ গঠিত হয়, কিভাবে হয়
        আরও শক্তিশালী অনুচ্ছেদ তৈরি করুন এবং কীভাবে সম্পূর্ণ এবং স্পষ্টভাবে প্রকাশ করবেন
        আপনার ধারণা।`}
      </div>
      <div className="w-full border my-10"></div>
      <div className="flex flex-wrap">
        <div className="w-[5rem] lg:w-[10rem] flex flex-col m-10">
          <div className="text-sm font-semibold">{lang==="eng"? "Business Id":"ব্যবসার আইডি"}</div>
          <div className="">{lang==="eng"? "2345622562":"ই৪৯০৩৭২১৮"}</div>
        </div>
        <div className="w-[5rem] lg:w-[10rem] flex flex-col m-10">
          <div className="text-sm font-semibold">{lang==="eng"? "Location":"অবস্থান"}</div>
          <div className="">{lang==="eng"? "NSW 250 USA":"ব্যবসার আইডি"}</div>
        </div>
        <div className="w-[5rem] lg:w-[10rem] flex flex-col m-10">
          <div className="text-sm font-semibold">{lang==="eng"? "Total Investments":"মোট বিনিয়োগ"}</div>
          <div className="">{lang==="eng"? "25":"১৮"}</div>
        </div>
        <div className="w-[5rem] lg:w-[10rem] flex flex-col m-10">
          <div className="text-sm font-semibold">{lang==="eng"? "Total Investing Money":"মোট বিনিয়োগের টাকা"}</div>
          <div className="">{lang==="eng"? "45,0000$":"$৫৬৪৯০৩"}</div>
        </div>
        <div className="w-[5rem] lg:w-[10rem] flex flex-col m-10">
          <div className="text-sm font-semibold">{lang==="eng"? "Business Id":"ব্যবসার আইডি"}</div>
          <div className="">{lang==="eng"? "2345622562":"ই৫৬৪৯০৩৭২১"}</div>
        </div>
        <div className="w-[5rem] lg:w-[10rem] flex flex-col m-10">
          <div className="text-sm font-semibold">{lang==="eng"? "Business Id":"ব্যবসার আইডি"}</div>
          <div className="">{lang==="eng"? "2345622562":"ই৪৯০৩৭২১৮"}</div>
        </div>
      </div>
      <div className="w-full border my-10"></div>
      <div className="flex flex-wrap justify-between lg:w-1/2">
        <div className="w-[5rem] lg:w-[10rem] flex flex-col m-10">
          <div className="text-sm font-semibold">{lang==="eng"? "Contact":"যোগাযোগ"}</div>
          <div className="">{lang==="eng"? "+2345622562":"+৪৯০৩৭২১৮৪৯০"}</div>
        </div>
        <div className="w-[5rem] lg:w-[10rem] flex flex-col m-10">
          <div className="text-sm font-semibold">{lang==="eng"? "Account":"অ্যাকাউন্ট"}</div>
          <div className="">{lang==="eng"? "DBL 5986 5686 65968":"ই ৪৯০৩৪ ৯০৩৭২ ১৮৭২১৮"}</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
