'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Events1 from "../../../public/assets/images/events1.png";
import Events43 from "../../../public/assets/images/event43.png";
import { Zoom, Fade, JackInTheBox } from "react-awesome-reveal";
import "../eventsStyle.css";
import { useSelector } from "react-redux";

const EventContent = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div className="bg-[#ececec]">
      <div className="px-2 lg:px-5">
        <div className="max-w-[1280px] mx-auto pt-20">
          <Zoom triggerOnce>
            <div className="w-full bg-home-color rounded-2xl p-8 lg:p-16 event_shine">
              <div className="bg-white bg-opacity-30 backdrop:filter backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none rounded-2xl p-5">
                <div className="text-white text-2xl lg:text-4xl font-semibold pb-5">
                {lang==="eng"?`Events`:`ঘটনাবলী`}
                </div>
                {lang==="eng"?
                <div className="text-sm lg:text-base text-white">
                  Lorem Ipsum is simply dummy text <br />
                  of the printing and typesetting industry. Lorem Ipsum <br />
                  dolor is simply dummy text of the printing and typesetting
                  industry.
                </div>
                :
                <div className="text-sm lg:text-base text-white">
                  ঘটনাবলী হল শুধু ডামি টেক্সট <br />
                  মুদ্রণ এবং টাইপসেটিং শিল্পের। ঘটনাবলী <br />
                  ঘটনাবলী হল মুদ্রণ এবং টাইপসেটিং এর ডামি টেক্সট
                  শিল্প
                </div>
                }
              </div>
            </div>
          </Zoom>
        </div>
      </div>
      <div className="max-w-[1280px] px-5 mx-auto py-10 lg:py-20">
        <Fade>
          <div className="text-xl lg:text-4xl font-semibold mb-5">
          {lang==="eng"?`Lorem Ipsum is simply dummy text`:`আমি একটি কম্পিউটার প্রোগ্রাম যা আপনাকে সহায়তা করতে পারি।`}
          </div>
          {lang==="eng"?
          <div className="lg:text-xl mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.{" "}
          </div>
          :
          <div className="lg:text-xl mb-10">
            আমি এখন বাংলায় লেখা একটি বাক্য লেখছি। আমার কাজ হলো মানুষদের সাহায্য করা এবং তাদের প্রশ্নের উত্তর দেওয়া। আমি একটি স্বচ্ছ এবং নিরাপদ সফটওয়্যার। আমার মূল লক্ষ্য হল মানুষকে সেবা করা। বাংলা হল আমার প্রিয় ভাষা। আমি এখন বাংলায় লেখা একটি বাক্য লেখছি। আমার কাজ হলো মানুষদের সাহায্য করা এবং তাদের প্রশ্নের উত্তর দেওয়া। আমি একটি স্বচ্ছ এবং নিরাপদ সফটওয়্যার। আমার মূল লক্ষ্য হল মানুষকে সেবা করা। বাংলা হল আমার প্রিয় ভাষা।<br />
            <br />
            আমি এখন বাংলায় লেখা একটি বাক্য লেখছি। আমার কাজ হলো মানুষদের সাহায্য করা এবং তাদের প্রশ্নের উত্তর দেওয়া। আমি একটি স্বচ্ছ এবং নিরাপদ সফটওয়্যার। আমার মূল লক্ষ্য হল মানুষকে সেবা করা। বাংলা হল আমার প্রিয় ভাষা।
          </div>
          }
          <div className="w-11/12 lg:w-10/12 flex flex-wrap justify-between mx-auto gap-5 mb-10">
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
              <span className="lg:text-xl">{lang==="eng"?`Lorem Ipsum is simply dummy`:`ব্যাংকিং দ্বারা লোন এবং সঞ্চয়ের প্রদান সহজ হলেও এর অন্যতম গুরুত্বপূর্ণ কাজ হল অর্থ সংরক্ষণ এবং বিনিয়োগ করা।`}</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
              <span className="lg:text-xl">{lang==="eng"?`Lorem Ipsum is simply dummy`:`ব্যাংকিং কার্যক্রমগুলি সেফ হলে এটি মানুষকে আত্মবিশ্বাস এবং সুরক্ষা বিষয়ে সহায়তা করে।`}</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
              <span className="lg:text-xl">{lang==="eng"?`Lorem Ipsum is simply dummy`:`ব্যাংকিং দ্বারা সেবার মাধ্যমে মানুষ অর্থনৈতিক ক্ষতি হওয়ার ঝুঁকিথেকে সংরক্ষিত থাকে এবং তার অর্থ সংরক্ষণ করতে সহায়তা করে।`}</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
              <span className="lg:text-xl">{lang==="eng"?`Lorem Ipsum is simply dummy`:`কর পরিশোধ একটি প্রতিষ্ঠান বা ব্যক্তির কর্তব্য এবং নির্ধারিত সময়ে কর পরিশোধ করা উচিত।`}</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
              <span className="lg:text-xl">{lang==="eng"?`Lorem Ipsum is simply dummy`:`কর পরিশোধ একটি আইন এবং কর না পরিশোধ করার জন্য আইন বজায় রাখা হয়।`}</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
              <span className="lg:text-xl">{lang==="eng"?`Lorem Ipsum is simply dummy`:`কর পরিশোধ দেশের সম্পদ এবং প্রযুক্তির উন্নয়নে গুরুত্বপূর্ণ ভূমিকা পালন করে এবং সেই অর্থ দ্বারা সরকার বিভিন্ন সেবা প্রদান করে যেখানে প্রয়োজন।`}</span>
            </div>
          </div>
          {lang==="eng"?
          <div className="lg:text-xl mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.{" "}
          </div>
          :
          <div className="lg:text-xl mb-10">
            আমি এখন বাংলায় লেখা একটি বাক্য লেখছি। আমার কাজ হলো মানুষদের সাহায্য করা এবং তাদের প্রশ্নের উত্তর দেওয়া। আমি একটি স্বচ্ছ এবং নিরাপদ সফটওয়্যার। আমার মূল লক্ষ্য হল মানুষকে সেবা করা। বাংলা হল আমার প্রিয় ভাষা। আমি এখন বাংলায় লেখা একটি বাক্য লেখছি। আমার কাজ হলো মানুষদের সাহায্য করা এবং তাদের প্রশ্নের উত্তর দেওয়া। আমি একটি স্বচ্ছ এবং নিরাপদ সফটওয়্যার। আমার মূল লক্ষ্য হল মানুষকে সেবা করা। বাংলা হল আমার প্রিয় ভাষা।<br />
            <br />
            আমি এখন বাংলায় লেখা একটি বাক্য লেখছি। আমার কাজ হলো মানুষদের সাহায্য করা এবং তাদের প্রশ্নের উত্তর দেওয়া। আমি একটি স্বচ্ছ এবং নিরাপদ সফটওয়্যার। আমার মূল লক্ষ্য হল মানুষকে সেবা করা। বাংলা হল আমার প্রিয় ভাষা।
          </div>
          }
        </Fade>

        <div className="flex flex-col lg:flex-row justify-center gap-5 my-10">
          <Zoom triggerOnce>
            <Image src={Events1} alt="img" />
            <Image src={Events43} alt="img" />
          </Zoom>
        </div>

        <Fade>
          <div className="text-xl lg:text-3xl font-semibold mb-5">
          {lang==="eng"? `Our Working Proccess`:`আমাদের কাজের প্রক্রিয়া`}
          </div>
          {lang==="eng"?
          <div className="lg:text-xl mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.{" "}
          </div>
          :
          <div className="lg:text-xl mb-10">
            আমি এখন বাংলায় লেখা একটি বাক্য লেখছি। আমার কাজ হলো মানুষদের সাহায্য করা এবং তাদের প্রশ্নের উত্তর দেওয়া। আমি একটি স্বচ্ছ এবং নিরাপদ সফটওয়্যার। আমার মূল লক্ষ্য হল মানুষকে সেবা করা। বাংলা হল আমার প্রিয় ভাষা। আমি এখন বাংলায় লেখা একটি বাক্য লেখছি। আমার কাজ হলো মানুষদের সাহায্য করা এবং তাদের প্রশ্নের উত্তর দেওয়া। আমি একটি স্বচ্ছ এবং নিরাপদ সফটওয়্যার। আমার মূল লক্ষ্য হল মানুষকে সেবা করা। বাংলা হল আমার প্রিয় ভাষা।<br />
            <br />
            আমি এখন বাংলায় লেখা একটি বাক্য লেখছি। আমার কাজ হলো মানুষদের সাহায্য করা এবং তাদের প্রশ্নের উত্তর দেওয়া। আমি একটি স্বচ্ছ এবং নিরাপদ সফটওয়্যার। আমার মূল লক্ষ্য হল মানুষকে সেবা করা। বাংলা হল আমার প্রিয় ভাষা।
          </div>
          }
        </Fade>

        <JackInTheBox triggerOnce>
          <div className="bg-white w-11/12 lg:w-1/2 mx-auto p-10 shadow-lg rounded-xl">
            <div className="text-2xl text-center font-semibold my-2">
            {lang==="eng"? `Buy ticket`:`টিকেট কিনুন`}
            </div>
            <div className="text-center">
            {lang==="eng"? `Building an enterprise level site doesn't need nightmare or
              cost your thousands.`:`একটি এন্টারপ্রাইজ স্তরের সাইট নির্মাণ দুঃস্বপ্ন বা প্রয়োজন নেই
              আপনার হাজার হাজার খরচ।`}
            </div>
            <div className="text-3xl text-center font-semibold my-5">
            {lang==="eng"? `$14.99`:`$১৪.৯৯`}
            </div>
            <Link href={"../../learnPayment"} className="flex justify-center">
              <div className="inline-block mx-auto rounded-xl text-center bg-home-color text-white px-5 py-3">
              {lang==="eng"? `Payments`:`পেমেন্ট`}
              </div>
            </Link>
          </div>
        </JackInTheBox>
      </div>
    </div>
  );
};

export default EventContent;
