"use client";
import Image from "next/image";
import React from "react";
import Image1 from "../../public/assets/images/image2.png";
import Image2 from "../../public/assets/images/Method.png";
import Dotted from "../../public/assets/images/dotted.png";
import { Fade } from "react-awesome-reveal";
import "./globe2.scss"
import { useSelector } from "react-redux";

const About = () => {
  const { lang } = useSelector((state) => state?.language);

  const RenderGlobe = () => {
    let totalOrbs = 1000;
    const orbs = [];
    for (let x = 0; x < totalOrbs; x++) {
      orbs.push(<div className="cAbout" />);
    }
    return orbs;
  };
  return (
    <div className="max-w-[1280px] mx-auto pt-10 lg:pt-0 pb-14 lg:pb-36 relative overflow-hidden">
      <div className="hidden lg:block wrapAbout">{RenderGlobe()}</div>
      <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center">
        <div className="w-11/12 lg:w-1/2 m-auto mr-auto">
          <Fade direction="left" triggerOnce>
            <div className="font-semibold text-2xl lg:text-4xl pb-5">
              {lang === "eng"?
              "About":"সম্বন্ধে"
            }
            </div>
            <div className="font-semibold text-2xl lg:text-4xl pb-5">
              {lang === "eng"?
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              :
              "লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য।"
              }
            </div>
            <div className="lg:text-lg pb-8">
              {lang === "eng"?
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              :
              "লরেম ইপসাম হল মুদ্রণ এবং টাইপসেটিং শিল্পের ডামি পাঠ্য। লোরেম ইপসাম ১৫০০ এর দশক থেকে শিল্পের মানক ডামি পাঠ্য।"
              }
            </div>
            <div className="w-11/12 mx-auto lg:m-0 bg-gradient-to-tl from-[#5143F6] via-indigo-400 to-[#5143F6] text-white tracking-widest text-2xl font-semibold text-center shadow-xl rounded-xl cursor-pointer py-8 px-4">
              <span className="text-4xl font-bold">{lang==="eng"?"100%":"১00%"}</span> {lang==="eng"?"Safe to Use":"নিরাপদ"}
            </div>
          </Fade>
        </div>
        <Fade direction="right" triggerOnce className="lg:w-1/2">
          <div className="w-[21rem] h-[37rem] flex-col shadow-lg p-5 rounded-3xl bg-white mb-14 lg:mb-5 mt-5 relative lg:mr-10 m-0 lg:mx-auto">
            <Image src={Dotted} alt="img" className="-ml-10 -mt-9 z-0" />
            <Image
              src={Dotted}
              alt="img"
              className="relative -top-24 left-12 z-0"
            />
            <Image
              src={Image1}
              alt="img"
              className="w-[18rem] absolute ml-1 top-5 pb-5 z-[999]"
            />
            <Image
              src={Image2}
              alt="img"
              className="w-[18rem] absolute ml-1 top-80 z-[999]"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
