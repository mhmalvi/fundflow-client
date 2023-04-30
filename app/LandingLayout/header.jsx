"use client";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import YouTube from "react-youtube";
import "./style.css";
import "./globe.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const { lang } = useSelector((state) => state?.language);
  const [bannerClass, setBannerClass] = useState("hero-banner");
  const [index, setIndex] = useState(0);
  const videoId = `4TutF9refYo`;

  const opts = {
    height: "360",
    width: "460",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
        setBannerClass(BannerClasses[index]);
        setIndex((prevIndex) => (prevIndex + 1) % BannerClasses.length);
      }, 5000); // set the interval to 1 second (1000 milliseconds)

      return () => clearTimeout(timer);
    }, [index]);
    
  const RenderGlobe = () => {
    let totalOrbs = 1000;
    const orbs = [];
    for (let x = 0; x < totalOrbs; x++) {
      orbs.push(<div className="c" />);
    }
    return orbs;
  };
    return (
      <div className="bg-home-color h-auto lg:h-screen py-20 px-5 lg:px-20 overflow-x-hidden">
        <div className="hidden lg:block wrapHome">{RenderGlobe()}</div>
        <div className="border lg:h-[80vh] rounded-xl p-3 lg:p-10 max-w-[1280px] mx-auto">
          <div className="w-full lg:h-[71vh] flex flex-col lg:flex-row justify-between relative">
            <div className="w-full bg-gradient-to-r from-[#4d3cff] to-[#6456ff] rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none lg:rounded-bl-2xl text-white py-8 pl-4 pr-4 lg:pl-8 lg:pr-20">
              <Fade direction="left" triggerOnce>
                <div className="text-3xl lg:text-[60px] lg:leading-[60px] font-semibold mb-5 lg:mt-10">
                {lang === "eng" ? (
                  "Bring A Creative Project To Life."
                  ) : (
                  "একটি সৃজনশীল প্রকল্পকে বাস্তবে আনুন।"
                  )}
                </div>
                <div className="lg:text-lg mb-10">
                  {lang === "eng" ? 
                  "Below, we answer the questions people most often have about crowdfunding when they’re trying to decide if they want to start an online fundraiser."
                  :
                  "নীচে, আমরা ক্রাউডফান্ডিং সম্পর্কে লোকেদের প্রায়শই প্রশ্নগুলির উত্তর দিই যখন তারা সিদ্ধান্ত নেওয়ার চেষ্টা করে যে তারা একটি অনলাইন তহবিল সংগ্রহ করতে চায় কিনা"
                }
                </div>
                <div className="inline-block bg-white text-indigo-500 tracking-[.5em] font-semibold text-sm hover:scale-105 duration-500 text-center rounded-md py-3 px-4 cursor-pointer">
                  {lang === "eng" ? "EXPLORE":"অন্বেষণ"}
                </div>
                <div className="hidden lg:block">
                  <div className="flex items-center mt-28">
                    <div className="font-semibold mr-3">01</div>
                    <div className="w-[30%] h-[2px] bg-white"></div>
                    <div className="w-[30%] h-[2px] bg-gray-400"></div>
                    <div className="font-semibold ml-3">02</div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className={`w-full h-full`}>
              <Fade
                direction="right"
                triggerOnce
                className={`w-full h-full relative`}
              >
                <div
                  className={`${bannerClass} rounded-bl-2xl rounded-tr-2xl lg:rounded-bl-none rounded-br-2xl duration-1000 w-full h-full relative`}
                ></div>
              </Fade>
            </div>
            <YouTube
              opts={opts}
              videoId={videoId}
              className="youtubePlayer lg:absolute lg:bottom-15 lg:left-[40%]"
            />
          </div>
        </div>
      </div>
    );
};

export default Header;
const BannerClasses = ["hero-banner", "hero-banner2"];