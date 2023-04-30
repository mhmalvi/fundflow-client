"use client";
import React from "react";
import { List1, List2, List3 } from "../shared/Icons";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";

const HowItWorks = () => {
  const { lang } = useSelector((state) => state?.language);

  return (
    <div className="max-w-[1280px] mx-auto pb-14 lg:pb-36">
      <div className="flex flex-col lg:flex-row justify-evenly items-center overflow-x-hidden">
        <div className="w-11/12 lg:w-1/2 lg:mr-auto flex-col pb-14 lg:pb-0">
          <Fade direction="left" triggerOnce>
            <div className="flex justify-start items-center mb-5">
              <div className="w-[5rem] bg-[#e7e7e7] lg:bg-transparent rounded-2xl p-3 mr-2">
                <List1 className="text-5xl mr-5" />
              </div>
              <div className="flex-col">
                <div className="font-semibold text-lg lg:text-3xl">
                  {lang==="eng"?
                  "How technology started"
                  :
                  "কিভাবে প্রযুক্তি শুরু হয়েছিল"
                  }
                </div>
                <div className="text-sm lg:text-base ">
                  {lang==="eng"?
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  :
                  "লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য।"
                  }
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center mb-5">
              <div className="w-[5rem] bg-[#e7e7e7] lg:bg-transparent rounded-2xl p-3 mr-2">
                <List2 className="text-5xl mr-5" />
              </div>
              <div className="flex-col">
                <div className="font-semibold text-lg lg:text-3xl">
                  {lang==="eng"?"Endless Possibilities":"অপার সম্ভাবনার"}
                </div>
                <div className="text-sm lg:text-base ">
                {lang==="eng"?"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                :
                "লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য।"
                }  
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center mb-5">
              <div className="w-[5rem] bg-[#e7e7e7] lg:bg-transparent rounded-2xl p-3 mr-2">
                <List3 className="text-5xl mr-5" />
              </div>
              <div className="flex-col">
                <div className="font-semibold text-lg lg:text-3xl">
                {lang==="eng"?"Endless Possibilities":"অপার সম্ভাবনার"}
                </div>
                <div className="text-sm lg:text-base ">
                {lang==="eng"?"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                :
                "লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য।"
                }  
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <div className="w-11/12 lg:w-1/4 my-auto mr-auto">
          <Fade direction="right" triggerOnce>
            <div className="font-semibold text-2xl lg:text-4xl pb-5">
            {lang==="eng"?
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              :
              "লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য।"
              }  
            </div>
            <div className="lg:text-lg">
            {lang === "eng"?
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            :
            "লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম ১৫০০ এর দশক থেকে শিল্পের মানক ডামি পাঠ্য।"
            }
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
