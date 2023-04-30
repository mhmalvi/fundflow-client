'use client'
import Image from 'next/image'
import React from 'react'
import Bottle from "../../public/assets/images/learn-banner.png"
import Link from 'next/link'
import { Fade } from "react-awesome-reveal";
import { FB, Insta, Twitter } from "../shared/Icons";
import { useSelector } from "react-redux";

const LearnHeader = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div className="px-3 lg:px-5">
      <div className="bg-home-color rounded-2xl lg:rounded-none max-w-[1280px] mx-auto mt-20 overflow-hidden">
        <div className="w-full lg:h-[85vh] flex flex-col-reverse lg:flex-row justify-between items-center">
          <Fade direction="left" triggerOnce>
            <div className="w-full h-full bg-home-color rounded-bl-2xl lg:rounded-tl-2xl rounded-br-2xl lg:rounded-br-none text-white py-8 pl-4 pr-4 lg:pl-8 lg:pr-20">
              <div className="text-sm lg:text-xl mb-5 lg:mt-10">
              {lang==="eng"? `LOREM IPSUM`:`লোরেম ইপসাম`}
              </div>
              <div className="text-2xl lg:text-5xl font-semibold mb-5 lg:mt-10">
              {lang==="eng"? `Bring A Creative Project To Life.`:`একটি সৃজনশীল প্রকল্পকে জীবন দিন।`}
              </div>
              <div className="mb-10 text-sm lg:text-base">
              {lang==="eng"? 
                `Below, we answer the questions people most often have about
                crowdfunding when they’re trying to decide if they want to start
                an online fundraiser.`
                :`নীচে, আমরা প্রায়শই লোকেরা যে প্রশ্নগুলি করে তার উত্তর দিই৷
                ক্রাউডফান্ডিং যখন তারা সিদ্ধান্ত নেওয়ার চেষ্টা করছে তারা শুরু করতে চায় কিনা
                একটি অনলাইন তহবিল সংগ্রহকারী।`}
              </div>
              <Link href={"./learn/gallery"}>
                <div className="inline-block bg-white text-indigo-500 hover:text-indigo-700 hover:scale-105 duration-500 tracking-[.3em] text-sm text-center py-3 px-5 cursor-pointer lg:text-base">
                {lang==="eng"? `GET STARTED`:`শুরু করুন`}
                </div>
              </Link>
              <div className="flex mt-5">
                <Link href={"https://www.facebook.com/"}>
                  <FB className="text-xl mx-3 text-white cursor-pointer" />
                </Link>
                <Link href={"https://www.instagram.com/"}>
                  <Insta className="text-xl mx-3 text-white cursor-pointer" />
                </Link>
                <Link href={"https://twitter.com/"}>
                  <Twitter className="text-xl mx-3 text-white cursor-pointer" />
                </Link>
              </div>
            </div>
          </Fade>
          <div className="w-full h-full relative">
            <Fade direction="right" triggerOnce>
              <div className="bg-home-color w-full lg:h-[85vh] rounded-tl-2xl rounded-tr-2xl lg:rounded-br-2xl lg:rounded-tl-none flex justify-end">
                <Image
                  src={Bottle}
                  alt="img"
                  className="w-full lg:w-[50vh] lg:h-[50vh] lg:my-auto rounded-tl-2xl rounded-tr-2xl lg:rounded-tl-none lg:rounded-tr-none mx-auto lg:m-0"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnHeader
