'use client';
import React, { useState } from "react";
import Overview from "./overview";
import About from "./about";
import Update from "./update";
import Rewards from "./rewards";
import Faq from "./faq";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";

const ProjectForm = () => {
  const { lang } = useSelector((state) => state?.language);
  const [toogleTab, setToogleTab] = useState(0);

  const hangleToogle = (id) => {
    setToogleTab(id);
  };
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1280px] px-5 mx-auto pt-20">
        <div className="text-2xl lg:text-4xl font-semibold mb-5">
          {lang==="eng"? "Let’s get ready to start your campaign!":"আপনার প্রচারাভিযান শুরু করার জন্য প্রস্তুত!"}
        </div>
        <div className="text-sm lg:text-base">
        {lang==="eng"? 
        `Select a primary category and subcategory for your new project.We want
        to create the best onboarding for you – please fill out the
        information below. Your answers will be locked for this campaign and
        can’t be changed later.`
        :
        `আপনার নতুন প্রকল্পের জন্য একটি প্রাথমিক বিভাগ এবং উপশ্রেণী নির্বাচন করুন। আমরা চাই
        আপনার জন্য সেরা অনবোর্ডিং তৈরি করতে - অনুগ্রহ করে পূরণ করুন
        নীচের তথ্য। আপনার উত্তর এই প্রচারাভিযানের জন্য লক করা হবে এবং
        পরে পরিবর্তন করা যাবে না।`}
        </div>
        <div className="flex flex-wrap justify-around bg-white p-5 shadow-lg rounded-xl my-10">
          <div
            onClick={() => {
              hangleToogle(0);
            }}
            className={`${toogleTab === 0 &&
              "text-home-color scale-110 duration-300 text-shadow"
              } flex-col justify-center items-center text-center cursor-pointer`}
          >
            <div
              className={`w-6 h-6 bg-black rounded-full text-white mx-auto ${toogleTab === 0 && "bg-home-color"
                }`}
            >
              1
            </div>
            <div className="text-sm">{lang==="eng"? "Overview":"ওভারভিউ"} </div>
          </div>
          <div
            onClick={() => {
              hangleToogle(1);
            }}
            className={`${toogleTab === 1 &&
              "text-home-color scale-110 duration-300 text-shadow"
              } flex-col justify-center items-center text-center cursor-pointer`}
          >
            <div
              className={`w-6 h-6 bg-black rounded-full text-white mx-auto ${toogleTab === 1 && "bg-home-color"
                }`}
            >
              2
            </div>
            <div className="text-sm">{lang==="eng"? "About":"সম্পর্কিত"} </div>
          </div>
          <div
            onClick={() => {
              hangleToogle(2);
            }}
            className={`${toogleTab === 2 &&
              "text-home-color scale-110 duration-300 text-shadow"
              } flex-col justify-center items-center text-center cursor-pointer`}
          >
            <div
              className={`w-6 h-6 bg-black rounded-full text-white mx-auto ${toogleTab === 2 && "bg-home-color"
                }`}
            >
              3
            </div>
            <div className="text-sm">{lang==="eng"? "Update":"আপডেট"} </div>
          </div>
          <div
            onClick={() => {
              hangleToogle(3);
            }}
            className={`${toogleTab === 3 &&
              "text-home-color scale-110 duration-300 text-shadow"
              } flex-col justify-center items-center text-center cursor-pointer`}
          >
            <div
              className={`w-6 h-6 bg-black rounded-full text-white mx-auto ${toogleTab === 3 && "bg-home-color"
                }`}
            >
              4
            </div>
            <div className="text-sm">{lang==="eng"? "Rewards":"পুরস্কার"} </div>
          </div>
          <div
            onClick={() => {
              hangleToogle(4);
            }}
            className={`${toogleTab === 4 &&
              "text-home-color scale-110 duration-300 text-shadow"
              } flex-col justify-center items-center text-center cursor-pointer`}
          >
            <div
              className={`w-6 h-6 bg-black rounded-full text-white mx-auto ${toogleTab === 4 && "bg-home-color"
                }`}
            >
              5
            </div>
            <div className="text-sm">{lang==="eng"? "FAQ":"এফএকিউ"} </div>
          </div>
        </div>

        {toogleTab === 0 && (
          <Fade bottom opposite>
            <Overview />
          </Fade>
        )}
        {toogleTab === 1 && (
          <Fade bottom opposite>
            <About />
          </Fade>
        )}
        {toogleTab === 2 && (
          <Fade bottom opposite>
            <Update />
          </Fade>
        )}
        {toogleTab === 3 && (
          <Fade bottom opposite>
            <Rewards />
          </Fade>
        )}
        {toogleTab === 4 && (
          <Fade bottom opposite>
            <Faq />
          </Fade>
        )}
      </div>
    </div>
  );
};

export default ProjectForm;
