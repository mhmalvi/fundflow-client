"use client";
import Image from "next/image";
import React from "react";
import Image1 from "../../public/assets/images/biznez.png";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";


const Business = () => {
  const { lang } = useSelector((state) => state?.language);

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-around items-center overflow-x-hidden">
        <div className="lg:w-1/2">
          <Fade direction="left" triggerOnce>
            <Image src={Image1} alt="img" className="mt-10 lg:mt-20" />
          </Fade>
        </div>
        <div className="w-11/12 lg:w-1/2 m-auto">
          <div className="w-10/12">
            <Fade direction="right" triggerOnce>
              <div className="font-semibold text-2xl lg:text-4xl pb-5">
                {lang === "eng" ?
                "Join us in making a difference: Donate to our cause today"
                :
                "একটি পার্থক্য তৈরি করতে আমাদের সাথে যোগ দিন: আজই আমাদের উদ্দেশ্যে দান করুন"
                }
              </div>
              <div className="lg:text-lg ">
                {lang === "eng" ?
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                :
                "লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম ১৫০০ এর দশক থেকে শিল্পের মানক ডামি পাঠ্য।"
                }
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
