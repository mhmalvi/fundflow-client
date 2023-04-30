import Image from "next/image";
import React from "react";
import Image3 from "../../../public/assets/images/update.png";
import { useSelector } from "react-redux";

const Update = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-10 p-10 rounded-xl shadow-md bg-white mb-5">
      <div className="w-11/12 lg:w-1/2 mx-auto p-4 shadow-lg">
        <Image src={Image3} alt="img" className="w-full rounded-lg my-5" />
        <div className="text-sm lg:text-base">{lang==="eng"?"13.04.2023":"১৩.০৪.২০২৩"}</div>
        <div className="text-lg lg:text-2xl my-2">{lang==="eng"?"Happy New Year":"শুভ নববর্ষ"}</div>
        {lang==="eng"?
        <div className="text-sm lg:text-base">
          Paragraphs are the building blocks of papers. Many students define
          paragraphs in terms of length: a paragraph is a group of at least five
          sentences, a paragraph is half a page long, etc. In reality, though,
          the unity and coherence of ideas among sentences is what constitutes a
          paragraph.
        </div>
        :
        <div className="text-sm lg:text-base">
          অনুচ্ছেদ হল কাগজপত্রের বিল্ডিং ব্লক। অনেক ছাত্র সংজ্ঞায়িত
          দৈর্ঘ্যের পরিপ্রেক্ষিতে অনুচ্ছেদ: একটি অনুচ্ছেদ কমপক্ষে পাঁচটির একটি গ্রুপ
          বাক্য, একটি অনুচ্ছেদ অর্ধ পৃষ্ঠা দীর্ঘ, ইত্যাদি বাস্তবে, যদিও,
          বাক্যগুলির মধ্যে ধারণাগুলির ঐক্য এবং সংগতিই একটি গঠন করে
          অনুচ্ছেদ
        </div>
        }
      </div>
    </div>
  );
};

export default Update;
