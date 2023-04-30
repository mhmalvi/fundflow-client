import Image from "next/image";
import React from "react";
import Image3 from "../../../public/assets/images/avatar.png";
import { useSelector } from "react-redux";

const Discussion = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div className="max-w-screen-xl mx-auto mt-10 p-5 rounded-xl shadow-md bg-white mb-5">
      <div className="lg:w-[80%] mx-auto">
        <div>
          <div className="flex justify-start items-center">
            <Image src={Image3} alt="img" className="w-10 h-10 my-5" />
            <span className="text-sm lg:text-base px-5">Sourav Sen</span>
            <span className="text-xs text-zinc-400">Oct 22, 8:45pm</span>
          </div>
          <div className="text-sm lg:text-base pl-5">
            {lang==="eng"?
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu
            dui. Aenean placerat.Lorem ipsumdolor sit amet, consectetur
            adipiscing elit. Sed at arcu dui. Aenean placerat.`
            :
            `গ্রাহক অত্যন্ত গুরুত্বপূর্ণ, গ্রাহক গ্রাহক দ্বারা অনুসরণ করা হবে। কিন্তু নম এ
            সৃষ্টিকর্তা Aenean জায়গা
            গ্রাহক সেবা কিন্তু আমি তাকে ধনুক দিলাম। এনিয়াস বিনিয়োগ করেন।`}
          </div>
          <div className="text-sm text-sky-500 pl-10 cursor-pointer">Reply</div>
        </div>
        <div className="pl-10 lg:pl-20">
          <div className="flex justify-start items-center">
            <Image src={Image3} alt="img" className="w-10 h-10 my-5" />
            <span className="text-sm lg:text-base px-5">Atika Younus</span>
            <span className="text-xs text-zinc-400">Oct 22, 8:45pm</span>
          </div>
          <div className="text-sm lg:text-base pl-5">
            {lang==="eng"?
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu
            dui. Aenean placerat.Lorem ipsumdolor sit amet, consectetur
            adipiscing elit. Sed at arcu dui. Aenean placerat.`
            :
            `গ্রাহক অত্যন্ত গুরুত্বপূর্ণ, গ্রাহক গ্রাহক দ্বারা অনুসরণ করা হবে। কিন্তু নম এ
            সৃষ্টিকর্তা Aenean জায়গা
            গ্রাহক সেবা কিন্তু আমি তাকে ধনুক দিলাম। এনিয়াস বিনিয়োগ করেন।`}
          </div>
          <div className="text-sm text-sky-500 pl-10 cursor-pointer">Reply</div>
        </div>
        <div className="border w-full my-5"></div>
        <div>
          <div className="flex justify-start items-center">
            <Image src={Image3} alt="img" className="w-10 h-10 my-5" />
            <span className="text-sm lg:text-base px-5">Sourav Sen</span>
            <span className="text-xs text-zinc-400">Oct 22, 8:45pm</span>
          </div>
          <div className="text-sm lg:text-base pl-5">
            {lang==="eng"?
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu
            dui. Aenean placerat.Lorem ipsumdolor sit amet, consectetur
            adipiscing elit. Sed at arcu dui. Aenean placerat.`
            :
            `গ্রাহক অত্যন্ত গুরুত্বপূর্ণ, গ্রাহক গ্রাহক দ্বারা অনুসরণ করা হবে। কিন্তু নম এ
            সৃষ্টিকর্তা Aenean জায়গা
            গ্রাহক সেবা কিন্তু আমি তাকে ধনুক দিলাম। এনিয়াস বিনিয়োগ করেন।`}
          </div>
          <div className="text-sm text-sky-500 pl-10 cursor-pointer">Reply</div>
        </div>
      </div>
      <div className="lg:w-[80%] mx-auto pt-5">
        <div className="font-semibold pb-5">{lang==="eng"? "Your comment":"আপনার মন্তব্য"}</div>
        <textarea name="comment" id="" cols="30" rows="2" className="w-full outline-none border-b" placeholder={lang==="eng"? "Your comment":"আপনার মন্তব্য কি?"}></textarea>
      </div>
    </div>
  );
};

export default Discussion;
