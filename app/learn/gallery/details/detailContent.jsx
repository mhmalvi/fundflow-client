'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Events1 from "../../../../public/assets/images/events1.png";
import Learn1 from "../../../../public/assets/images/learn1.png";
import { Zoom, Fade, JackInTheBox } from "react-awesome-reveal";
import { useSelector } from "react-redux";

const DetailContent = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div className="max-w-[1280px] px-5 mx-auto mt-20 lg:mb-20 overflow-hidden">
      <Zoom triggerOnce>
        <Image src={Learn1} alt="img" className="w-full pb-10" />
      </Zoom>
      <Fade>
        <div className="text-2xl lg:text-4xl font-semibold mb-5">
        {lang==="eng"? `Lorem Ipsum is simply dummy text`:`লোরেম ইপসাম" হল মুদ্রণ এবং টাইপসেটিং শিল্পের জন্য শুধুমাত্র ডামি টেক্সট`}
        </div>
        {lang==="eng"? 
        <div className="lg:text-xl mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. <br />
          <br />
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </div>
        :
        <div className="lg:text-xl mb-10">
          লোরেম ইপসাম" হল মুদ্রণ এবং টাইপসেটিং শিল্পের জন্য শুধুমাত্র ডামি টেক্সট হিসাবে ব্যবহৃত একটি টেক্সট। এটি যদি উদাহরণ হিসেবে ব্যবহৃত হয়, তবে তা একটি মূল্যবান টেক্সট হিসাবে পরিচিত হবে না। এটি প্রথম বার প্রচলিত হয়েছিল সাধারণ মুদ্রণ উদ্যোগেদের জন্য, যারা আবশ্যক ছিলেন একটি টেক্সট স্পেস পূর্তি করার জন্য, যার উদ্দেশ্য হল ক্যানভাসে একটি বর্ণনা বা অংশগুলি প্রদর্শন করা। <br />
          <br />
          লোরেম ইপসাম" হল মূলত মুদ্রণ এবং টাইপসেটিং উদ্দেশ্যে ব্যবহৃত একটি টেক্সটের নাম, যা শুধুমাত্র ডামি টেক্সট হিসাবে ব্যবহৃত হয়। ব্যাংকিং ব্যবস্থার জন্য অত্যন্ত গুরুত্বপূর্ণ এবং এটি সমাজের জন্য একটি গুরুত্বপূর্ণ কার্য। এটি ব্যবসা এবং অর্থনীতি বিষয়ক জ্ঞান এবং সেবা সরবরাহের সাথে মানুষকে সমৃদ্ধি এবং সুবিধা উপহার দেওয়ায় সহায়তা করে।
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
          <Image src={Events1} alt="img" />
        </Zoom>
      </div>
      <Fade>
        <div className="text-lg lg:text-3xl font-semibold mb-5">
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

      <JackInTheBox triggerOnce>
        <div className="bg-white w-11/12 lg:w-1/2 mx-auto p-10 shadow-lg rounded-xl mb-5">
          <div className="text-2xl font-semibold text-center my-2">
          {lang==="eng"? `Admission Fee`:`ভর্তি খরচ`}
          </div>
          <div className="text-center lg:text-xl">
          {lang==="eng"? `Building an enterprise level site doesn't need nightmare or
            cost your thousands.`:`একটি এন্টারপ্রাইজ স্তরের সাইট নির্মাণ দুঃস্বপ্ন বা প্রয়োজন নেই
            আপনার হাজার হাজার খরচ।`}
          </div>
          <div className="text-3xl font-semibold text-center my-5">{lang==="eng"? "$14.99":"$১৪.৯৯"}</div>
          <Link href={"../../learnPayment"} className="flex justify-center">
            <div className="inliine-block mx-auto rounded-xl text-center bg-home-color text-white px-5 py-3">
            {lang==="eng"? `Payments`:`পেমেন্ট`}
            </div>
          </Link>
        </div>
      </JackInTheBox>
    </div>
  );
};

export default DetailContent;
