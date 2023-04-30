"use client";
import Image from "next/image";
import { useRef } from "react";
import Img1 from "../../../public/assets/images/blog-detail.png";
import Img2 from "../../../public/assets/images/blog-detail2.png";
import Img3 from "../../../public/assets/images/blog-detail3.png";
import Card1 from "../../../public/assets/images/card1.png";
import Card2 from "../../../public/assets/images/card2.png";
import Gal1 from "../../../public/assets/images/board1.png";
import Gal2 from "../../../public/assets/images/board2.png";
import Gal3 from "../../../public/assets/images/board3.png";
import Gal4 from "../../../public/assets/images/board4.png";
import Gal5 from "../../../public/assets/images/board5.png";
import Avatar1 from "../../../public/assets/images/avatar.png";
import Avatar2 from "../../../public/assets/images/avatar2.png";
import { FB, Insta, Twitter, Mail, Bell } from "../../shared/Icons";
import { Fade, Zoom } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

const BlogDetails = () => {
  const { lang } = useSelector((state) => state?.language);
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#fffbf1]">
      <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between lg:justify-end items-center pt-20 px-5 lg:pr-20 lg:px-0">
        <Image src={Avatar2} alt="img" className="lg:hidden" />
        <div className="hover:text-home-color cursor-pointer my-2 mx-5">
        {lang==="eng"?`Find Campaign`:`প্রচারাভিযান খুঁজুন`}
        </div>
        <div className="hover:text-home-color cursor-pointer my-2 mx-5">
        {lang==="eng"?`Dashboard`:`ড্যাশবোর্ড`}
        </div>
        <div className="hover:text-home-color cursor-pointer my-2 mx-5">
        {lang==="eng"?`Studio`:`স্টুডিও`}
        </div>
        <div className="hover:text-home-color cursor-pointer my-2 mx-5">
        {lang==="eng"?`Insight`:`অন্তর্দৃষ্টি`}
        </div>
        <Mail className="hover:text-home-color cursor-pointer my-2 mx-5" />
        <Bell className="hover:text-home-color cursor-pointer my-2 mx-5" />
        <Image src={Avatar2} alt="img" className="hidden lg:block" />
      </div>

      <div className="max-w-[1280px] px-5 mx-auto pt-10 pb-10 overflow-hidden">
        <Fade direction="right" triggerOnce>
          <div className="text-xl lg:text-4xl font-semibold mb-2">
          {lang==="eng"?`Do what you can, with what you have`:`তোমার যা আছে তাই করো`}
          </div>
          <div className="flex italic text-xs lg:text-sm">
            <span>{lang==="eng"?`January 15, 2023`:`১৫ জানুয়ারি, ২০২৩`}</span> &nbsp; / &nbsp;
            <span>{lang==="eng"?`By: Donn John`:`লিখেছেন: ডন জন`}</span>
          </div>
        </Fade>
        <Zoom triggerOnce>
          <Image src={Img1} alt="img" className="w-full mt-5 mb-10" />
        </Zoom>
        <Fade>
        {lang==="eng"?
          <div className="lg:text-xl">
            This page is a demo that shows everything you can do inside
            portfolio and blog posts. We've included everything you need to
            create engaging posts about your work, and show off your case
            studies in a beautiful way. Obviously, we've styled up all the
            basic text formatting options available in markdown. You can create
            lists: Simple bulleted lists Like this one Are cool And: Numbered
            lists Like this other one Are great too You can also add
            blockquotes, which are shown at a larger width to help break up the
            layout and draw attention to key parts of your content. This page is
            a demo that shows everything you can do inside portfolio and blog
            posts. We've included everything you need to create engaging
            posts about your work, and show off your case studies in a beautiful
            way. Obviously, we've styled up all the basic text formatting
            options available in markdown. You can create lists: Simple bulleted
            lists Like this one Are cool And: Numbered lists Like this other one
            Are great too You can also add blockquotes, which are shown at a
            larger width to help break up the layout and draw attention to key
            parts of your content. <br /> <br />
            This page is a demo that shows everything you can do inside
            portfolio and blog posts. We've included everything you need to
            create engaging posts about your work, and show off your case
            studies in a beautiful way. Obviously, we've styled up all the
            basic text formatting options available in markdown. You can create
            lists: Simple bulleted lists Like this one Are cool And: Numbered
            lists Like this other one Are great too You can also add
            blockquotes, which are shown at a larger width to help break up the
            layout and draw attention to key parts of your content.
          </div>
        :
          <div className="lg:text-xl">
            এই পৃষ্ঠাটি একটি ডেমো যা আপনি ভিতরে যা করতে পারেন তা দেখায়
            পোর্টফোলিও এবং ব্লগ পোস্ট. আমরা আপনার যা প্রয়োজন তা অন্তর্ভুক্ত করেছি
            আপনার কাজ সম্পর্কে আকর্ষক পোস্ট তৈরি করুন, এবং আপনার ক্ষেত্রে দেখান
            একটি সুন্দর উপায়ে পড়াশুনা। স্পষ্টতই, আমরা সব স্টাইল আপ করেছি
            মার্কডাউনে উপলব্ধ মৌলিক পাঠ্য বিন্যাস বিকল্প। আপনি তৈরি করতে পারেন
            তালিকা: সাধারণ বুলেটযুক্ত তালিকা এইরকম একটি দুর্দান্ত এবং: সংখ্যাযুক্ত
            এই অন্য একটির মত তালিকাগুলিও দুর্দান্ত আপনিও যোগ করতে পারেন
            ব্লককোট, যা ভাঙ্গতে সাহায্য করার জন্য একটি বড় প্রস্থে দেখানো হয়
            লেআউট এবং আপনার বিষয়বস্তুর মূল অংশ মনোযোগ আকর্ষণ. এই পেজ হল
            একটি ডেমো যা দেখায় যে আপনি পোর্টফোলিও এবং ব্লগের ভিতরে যা করতে পারেন
            পোস্ট আকর্ষক তৈরি করতে আপনার যা প্রয়োজন তা আমরা অন্তর্ভুক্ত করেছি
            আপনার কাজ সম্পর্কে পোস্ট, এবং একটি সুন্দর আপনার কেস স্টাডি দেখান
            উপায় স্পষ্টতই, আমরা সমস্ত মৌলিক পাঠ্য বিন্যাস স্টাইল করেছি
            মার্কডাউনে উপলব্ধ বিকল্পগুলি। আপনি তালিকা তৈরি করতে পারেন: সহজ বুলেটযুক্ত
            এইরকম তালিকাগুলি দুর্দান্ত এবং: সংখ্যাযুক্ত তালিকাগুলি এই অন্যটির মতো৷
            খুব ভালো আপনি ব্লককোটও যোগ করতে পারেন, যা a এ দেখানো হয়েছে
            বৃহত্তর প্রস্থ লেআউট ভাঙ্গতে সাহায্য করে এবং কী-এর প্রতি দৃষ্টি আকর্ষণ করে
            আপনার সামগ্রীর অংশ। <br /> <br />
            এই পৃষ্ঠাটি একটি ডেমো যা আপনি ভিতরে যা করতে পারেন তা দেখায়
            পোর্টফোলিও এবং ব্লগ পোস্ট. আমরা আপনার যা প্রয়োজন তা অন্তর্ভুক্ত করেছি
            আপনার কাজ সম্পর্কে আকর্ষক পোস্ট তৈরি করুন, এবং আপনার ক্ষেত্রে দেখান
            একটি সুন্দর উপায়ে পড়াশুনা। স্পষ্টতই, আমরা সব স্টাইল আপ করেছি
            মার্কডাউনে উপলব্ধ মৌলিক পাঠ্য বিন্যাস বিকল্প। আপনি তৈরি করতে পারেন
            তালিকা: সাধারণ বুলেটযুক্ত তালিকা এইরকম একটি দুর্দান্ত এবং: সংখ্যাযুক্ত
            এই অন্য একটির মত তালিকাগুলিও দুর্দান্ত আপনিও যোগ করতে পারেন
            ব্লককোট, যা ভাঙ্গতে সাহায্য করার জন্য একটি বড় প্রস্থে দেখানো হয়
            লেআউট এবং আপনার বিষয়বস্তুর মূল অংশ মনোযোগ আকর্ষণ.
          </div>
        }
        </Fade>

        <div className="text-xl lg:text-2xl font-semibold mt-10 mb-5">
        {lang==="eng"?`Image Gallery`:`ছবির গ্যালারি`}
        </div>
        <div className="lg:text-xl mb-5">
        {lang==="eng"?`Here’s a really neat custom feature we added in our gallery galleries:`:`এখানে একটি সত্যিই ঝরঝরে কাস্টম বৈশিষ্ট্য রয়েছে যা আমরা আমাদের গ্যালারী গ্যালারিতে যোগ করেছি:`}
        </div>
        <div className="grid lg:grid-cols-3 gap-3 mb-10">
          <Fade direction="right" triggerOnce>
            <div className="shadow-lg rounded-2xl">
              <Image src={Card1} alt="img" className="w-full rounded-2xl" />
            </div>
            <div className="shadow-lg rounded-2xl">
              <Image src={Gal1} alt="img" className="w-full rounded-2xl" />
            </div>
            <div className="shadow-lg rounded-2xl">
              <Image src={Gal2} alt="img" className="w-full rounded-2xl" />
            </div>
            <div className="shadow-lg rounded-2xl">
              <Image src={Gal3} alt="img" className="w-full rounded-2xl" />
            </div>
            <div className="shadow-lg rounded-2xl">
              <Image src={Gal4} alt="img" className="w-full rounded-2xl" />
            </div>
            <div className="shadow-lg rounded-2xl">
              <Image src={Gal5} alt="img" className="w-full rounded-2xl" />
            </div>
          </Fade>
        </div>

        <div className="my-16 lg:my-20">
          <div className="text-xl lg:text-2xl font-semibold mb-5">
          {lang==="eng"?`Top brands`:`শীর্ষ ব্র্যান্ড`}
          </div>
          <div className="lg:text-xl">
          {lang==="eng"
            ?`Here's another gallery with only one column, which creates a
            carousel slide-show instead. A nice little feature: the carousel
            only advances when it is in view, so your visitors won't scroll
            down to find it half way through your images.`
            :`এখানে শুধুমাত্র একটি কলাম সহ আরেকটি গ্যালারি, যা একটি তৈরি করে
            পরিবর্তে ক্যারোজেল স্লাইড-শো। একটি চমৎকার সামান্য বৈশিষ্ট্য: ক্যারোজেল
            এটি দৃশ্যমান হলেই অগ্রসর হয়, যাতে আপনার দর্শকরা স্ক্রল করতে না পারে
            এটি আপনার ইমেজ মাধ্যমে অর্ধেক পথ খুঁজে পেতে নিচে.`}
          </div>
          <Slider ref={sliderRef} {...settings} arrows={false}>
            <Zoom triggerOnce>
              <Image src={Img2} alt="img" className="w-full my-5" />
            </Zoom>
            <Zoom triggerOnce>
              <Image src={Img2} alt="img" className="w-full my-5" />
            </Zoom>
          </Slider>
        </div>
        <div className="text-xl lg:text-2xl font-semibold mt-10 mb-5">
        {lang==="eng"?`What about videos?`:`ভিডিও সম্পর্কে কি?`}
        </div>
        <div className="lg:text-xl">
        {lang==="eng"
        ?`Videos are an awesome way to show off your work in a more engaging and
        personal way, and we've made sure they work great on our themes.
        Just paste an embed code from YouTube or Vimeo, and the theme makes
        sure it displays perfectly.`
        :`ভিডিওগুলি আপনার কাজকে আরও আকর্ষকভাবে দেখানোর একটি দুর্দান্ত উপায় এবং৷
        ব্যক্তিগত উপায়, এবং আমরা নিশ্চিত করেছি যে তারা আমাদের থিমগুলিতে দুর্দান্ত কাজ করে।
        শুধু YouTube বা Vimeo থেকে একটি এম্বেড কোড পেস্ট করুন, এবং থিম তৈরি করে
        নিশ্চিত এটি পুরোপুরি প্রদর্শন করে।`}
        </div>
        <Zoom triggerOnce>
          <Image src={Img3} alt="img" className="w-full my-5" />
        </Zoom>

        {/* Share & Comments Section */}
        <div className="mx-auto pt-10 lg:pt-20">
          <div className="text-lg font-semibold mb-5">{lang==="eng"?`Share`:`শেয়ার`}</div>
          <div className="flex pb-5">
            <FB className="text-3xl mx-3 cursor-pointer text-blue-700" />
            <Insta className="text-3xl mx-3 cursor-pointer text-pink-600" />
            <Twitter className="text-3xl mx-3 cursor-pointer text-sky-500" />
          </div>
          <div className="text-lg font-semibold my-5">{lang==="eng"?`Leave a comment`:`মতামত দিন`}</div>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="3"
            placeholder="What's on your mind..."
            className="w-full border border-b-2 rounded-md outline-none p-2"
          ></textarea>
          <div className="inline-block border bg-white rounded-lg shadow-sm cursor-pointer py-1 px-3">
          {lang==="eng"?`Post`:`পোস্ট`}
          </div>

          <div>
            <div className="flex justify-start items-center">
              <Image src={Avatar1} alt="img" className="w-10 h-10 my-5" />
              <span className="text-sm lg:text-base px-5">Sourav Sen</span>
              <span className="text-xs text-zinc-400">Oct 22, 8:45pm</span>
            </div>
            <div className="text-sm lg:text-base pl-5">
            {lang==="eng"
            ?`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
            arcu dui. Aenean placerat.Lorem ipsumdolor sit amet, consectetur
            adipiscing elit. Sed at arcu dui. Aenean placerat.`
            :`গ্রাহক অত্যন্ত গুরুত্বপূর্ণ, গ্রাহক গ্রাহক দ্বারা অনুসরণ করা হবে। কিন্তু এ
            ঈশ্বরের ধনুক Aenean জায়গা
            গ্রাহক সেবা কিন্তু আমি তাকে ধনুক দিলাম। এনিয়াস বিনিয়োগ করেন।`}
            </div>
            <div className="text-sm text-sky-500 cursor-pointer ml-10">
            {lang==="eng"?`Reply`:`উত্তর`}
            </div>
          </div>
          <div className="pl-20">
            <div className="flex justify-start items-center">
              <Image src={Avatar2} alt="img" className="w-10 h-10 my-5" />
              <span className="text-sm lg:text-base px-5">Atika Younus</span>
              <span className="text-xs text-zinc-400">Oct 22, 8:45pm</span>
            </div>
            <div className="text-sm lg:text-base pl-5">
            {lang==="eng"
            ?`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
            arcu dui. Aenean placerat.Lorem ipsumdolor sit amet, consectetur
            adipiscing elit. Sed at arcu dui. Aenean placerat.`
            :`গ্রাহক অত্যন্ত গুরুত্বপূর্ণ, গ্রাহক গ্রাহক দ্বারা অনুসরণ করা হবে। কিন্তু এ
            ঈশ্বরের ধনুক Aenean জায়গা
            গ্রাহক সেবা কিন্তু আমি তাকে ধনুক দিলাম। এনিয়াস বিনিয়োগ করেন।`}
            </div>
            <div className="text-sm text-sky-500 cursor-pointer ml-10">
            {lang==="eng"?`Reply`:`উত্তর`}
            </div>
          </div>
          <div className="border w-full my-5"></div>
          <div>
            <div className="flex justify-start items-center">
              <Image src={Avatar2} alt="img" className="w-10 h-10 my-5" />
              <span className="text-sm lg:text-base px-5">Atika Younus</span>
              <span className="text-xs text-zinc-400">Oct 22, 8:45pm</span>
            </div>
            <div className="text-sm lg:text-base pl-5">
            {lang==="eng"
            ?`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
            arcu dui. Aenean placerat.Lorem ipsumdolor sit amet, consectetur
            adipiscing elit. Sed at arcu dui. Aenean placerat.`
            :`গ্রাহক অত্যন্ত গুরুত্বপূর্ণ, গ্রাহক গ্রাহক দ্বারা অনুসরণ করা হবে। কিন্তু এ
            ঈশ্বরের ধনুক Aenean জায়গা
            গ্রাহক সেবা কিন্তু আমি তাকে ধনুক দিলাম। এনিয়াস বিনিয়োগ করেন।`}
            </div>
            <div className="text-sm text-sky-500 cursor-pointer ml-10">
            {lang==="eng"?`Reply`:`উত্তর`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
