'use client'
import Image from "next/image";
import { useRef } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import Image2 from "../../public/assets/images/Method.png";
import Image1 from "../../public/assets/images/image2.png";
import Dotted from "../../public/assets/images/dotted.png";
import Icon from "../../public/assets/images/save-time.png";
import Posts from "../shared/jsondata/posts.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

const LearnContent = () => {
  const { lang } = useSelector((state) => state?.language);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
  };
  return (
    <div className="max-w-[1280px] px-3 lg:px-5 mx-auto mt-10 lg:mt-20 overflow-hidden">
      <div className="text-black mx-auto mb-10 lg:mb-20">
        {lang === "eng" ?
          <div className="text-xl lg:text-4xl font-semibold text-center pb-10">
            Lorem Ipsum is simply dummy text <br /> of the printing and
            typesetting
          </div>
          :
          <div className="text-xl lg:text-4xl font-semibold text-center pb-10 pt-4">
            লোরেম ইপসাম হল মূলত মুদ্রণ এবং টাইপসেটিং উদ্দেশ্যে ব্যবহৃত  <br />একটি টেক্সটের নাম, যা শুধুমাত্র ডামি টেক্সট হিসাবে ব্যবহৃত হয়
          </div>
        }
        <div className="lg:w-2/3 flex flex-wrap justify-evenly mx-auto">
          <Zoom triggerOnce>
            <div className="flex-col pb-5">
              <div className="text-indigo-600 text-xl lg:text-4xl font-semibold text-center">
                {lang === "eng" ? `1000` : `১৪৯૧૧`}
              </div>
              <div className="text-center text-sm lg:text-lg">{lang === "eng" ? `Investors` : `বিনিয়োগকারী`}</div>
            </div>
          </Zoom>
          <Zoom triggerOnce>
            <div className="flex-col pb-5">
              <div className="text-indigo-600 text-xl lg:text-4xl font-semibold text-center">
                {lang === "eng" ? `1000` : `૧৪৯৯`}
              </div>
              <div className="text-center text-sm lg:text-lg">{lang === "eng" ? `Clients` : `ক্লায়েন্ট`}</div>
            </div>
          </Zoom>
          <Zoom triggerOnce>
            <div className="flex-col pb-5">
              <div className="text-indigo-600 text-xl lg:text-4xl font-semibold text-center">
                {lang === "eng" ? `1000` : `১৪૧৯`}
              </div>
              <div className="text-center text-sm lg:text-lg ">{lang === "eng" ? `Products` : `পণ্য`}</div>
            </div>
          </Zoom>
        </div>
      </div>
      <div className="text-xl lg:text-4xl font-semibold text-center mb-4 lg:mb-10">
        {lang === "eng" ? `Save time by scheduling posts` : `পোস্ট শিডিউল করে সময় বাঁচান`}
      </div>
      <div className="hidden lg:block">
        <div className="grid lg:grid-cols-4 gap-5 mb-10">
          {Posts?.map((post) => (
            <Zoom triggerOnce key={post?.id}>
              <div className="bg-white rounded-2xl shadow-lg pb-5 border p-4">
                <div className="text-lg lg:text-xl font-semibold my-5">
                  {lang === "eng" ? (post?.title) : (post?.ban_title)}
                </div>
                <div className="text-sm pb-4">{lang === "eng" ? (post?.description) : (post?.ban_description)}</div>
                <div className="border-t w-11/12 mx-auto pb-4"></div>
                <div className="flex justify-between px-4">
                  <Image src={Icon} alt="img" className="" />
                  <div className="border text-black hover:bg-home-color hover:bg-opacity-10 shadow-md tracking-widest text-sm hover:scale-105 duration-500 text-center rounded-full py-3 px-4 cursor-pointer">
                    {lang === "eng" ? `GET STARTED` : `শুরু করুন`}
                  </div>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>

      <Slider
        ref={sliderRef}
        {...settings}
        arrows={false}
        className="lg:hidden"
      >
        {Posts?.map((post) => (
          <Zoom triggerOnce key={post?.id}>
            <div className="bg-white rounded-2xl shadow-lg mb-5 border p-4 mx-2">
              <div className="text-lg lg:text-xl my-5">{lang === "eng" ? (post?.title) : (post?.ban_title)}</div>
              <div className="text-sm pb-8">{lang === "eng" ? (post?.description) : (post?.ban_description)}</div>
              <div className="flex justify-between px-4">
                <Image src={Icon} alt="img" className="" />
                <div className="border text-black shadow-md tracking-widest text-sm text-center rounded-full py-3 px-4 cursor-pointer">
                  {lang === "eng" ? `GET STARTED` : `শুরু করুন`}
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </Slider>

      <div className="py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <Fade direction="left" triggerOnce>
            <div className="w-[21rem] h-[37rem] flex-col shadow-lg p-5 rounded-3xl bg-white mb-14 lg:mb-5 mt-5 relative lg:mr-10">
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
          <div className="lg:w-1/2 my-auto grid grid-cols-1 lg:grid-cols-2 pt-10 lg:pt-0 lg:gap-5">
            <Fade direction="right" triggerOnce>
              <div className="p-4">
                <div className="text-3xl lg:text-5xl font-semibold">{lang === "eng" ? `01` : `০১`}</div>
                <div className="font-semibold text-lg lg:text-xl pb-5">
                  {lang === "eng" ? `About Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.`
                    : `লোরেম ইপসাম" হল মুদ্রণ এবং টাইপসেটিং শিল্পের জন্য শুধুমাত্র ডামি টেক্সট হিসাবে ব্যবহৃত একটি টেক্সট।`}
                </div>
                <div className="text-sm pb-5">
                  {lang === "eng" ? `Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.`
                  :
                  `কাস্টমার সন্তুষ্টি ব্যবসার জন্য অত্যন্ত গুরুত্বপূর্ণ। কাস্টমারদের সন্তুষ্টি না থাকলে একটি ব্যবসা পরিচালনার কোন লাভ হতে পারে না। কাস্টমারদের নিয়ে বিশেষ দেখভাল করা উচিত যাতে তারা আবার ব্যবসার জন্য ফিরে আসতে চান। সন্তুষ্ট কাস্টমাররা ব্যবসার সাথে নিজেদের নিয়মিত সম্পর্ক রাখে এবং ব্যবসার কাছে আদর সূচনা করে। সফল ব্যবসা চালানোর জন্য কাস্টমারদের সন্তুষ্টি প্রথম শর্ত।`}
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl lg:text-5xl font-semibold">{lang === "eng" ? `01` : `০২`}</div>
                <div className="font-semibold text-lg lg:text-xl pb-5">
                {lang === "eng" ? `About Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.`
                    : `লোরেম ইপসাম" হল মুদ্রণ এবং টাইপসেটিং শিল্পের জন্য শুধুমাত্র ডামি টেক্সট হিসাবে ব্যবহৃত একটি টেক্সট।`}
                </div>
                <div className="text-sm pb-5">
                {lang === "eng" ? `Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.`
                  :
                  `কাস্টমার সন্তুষ্টি ব্যবসার জন্য অত্যন্ত গুরুত্বপূর্ণ। কাস্টমারদের সন্তুষ্টি না থাকলে একটি ব্যবসা পরিচালনার কোন লাভ হতে পারে না। কাস্টমারদের নিয়ে বিশেষ দেখভাল করা উচিত যাতে তারা আবার ব্যবসার জন্য ফিরে আসতে চান। সন্তুষ্ট কাস্টমাররা ব্যবসার সাথে নিজেদের নিয়মিত সম্পর্ক রাখে এবং ব্যবসার কাছে আদর সূচনা করে। সফল ব্যবসা চালানোর জন্য কাস্টমারদের সন্তুষ্টি প্রথম শর্ত।`}
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl lg:text-5xl font-semibold">{lang === "eng" ? `01` : `০৩`}</div>
                <div className="font-semibold text-lg lg:text-xl pb-5">
                {lang === "eng" ? `About Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.`
                    : `লোরেম ইপসাম" হল মুদ্রণ এবং টাইপসেটিং শিল্পের জন্য শুধুমাত্র ডামি টেক্সট হিসাবে ব্যবহৃত একটি টেক্সট।`}
                </div>
                <div className="text-sm pb-5">
                {lang === "eng" ? `Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.`
                  :
                  `কাস্টমার সন্তুষ্টি ব্যবসার জন্য অত্যন্ত গুরুত্বপূর্ণ। কাস্টমারদের সন্তুষ্টি না থাকলে একটি ব্যবসা পরিচালনার কোন লাভ হতে পারে না। কাস্টমারদের নিয়ে বিশেষ দেখভাল করা উচিত যাতে তারা আবার ব্যবসার জন্য ফিরে আসতে চান। সন্তুষ্ট কাস্টমাররা ব্যবসার সাথে নিজেদের নিয়মিত সম্পর্ক রাখে এবং ব্যবসার কাছে আদর সূচনা করে। সফল ব্যবসা চালানোর জন্য কাস্টমারদের সন্তুষ্টি প্রথম শর্ত।`}
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl lg:text-5xl font-semibold">{lang === "eng" ? `01` : `০৪`}</div>
                <div className="font-semibold text-lg lg:text-xl pb-5">
                {lang === "eng" ? `About Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.`
                    : `লোরেম ইপসাম" হল মুদ্রণ এবং টাইপসেটিং শিল্পের জন্য শুধুমাত্র ডামি টেক্সট হিসাবে ব্যবহৃত একটি টেক্সট।`}
                </div>
                <div className="text-sm pb-5">
                {lang === "eng" ? `Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.`
                  :
                  `কাস্টমার সন্তুষ্টি ব্যবসার জন্য অত্যন্ত গুরুত্বপূর্ণ। কাস্টমারদের সন্তুষ্টি না থাকলে একটি ব্যবসা পরিচালনার কোন লাভ হতে পারে না। কাস্টমারদের নিয়ে বিশেষ দেখভাল করা উচিত যাতে তারা আবার ব্যবসার জন্য ফিরে আসতে চান। সন্তুষ্ট কাস্টমাররা ব্যবসার সাথে নিজেদের নিয়মিত সম্পর্ক রাখে এবং ব্যবসার কাছে আদর সূচনা করে। সফল ব্যবসা চালানোর জন্য কাস্টমারদের সন্তুষ্টি প্রথম শর্ত।`}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnContent;
