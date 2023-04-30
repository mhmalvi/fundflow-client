'use client';
import Image from "next/image";
import React, {useRef} from "react";
import Coke from "../../public/assets/images/Photo.png";
import Coke2 from "../../public/assets/images/staff1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade, Zoom } from "react-awesome-reveal";
import { FB, Insta, Twitter, SliderArrow } from "../shared/Icons";
import Team from "../shared/jsondata/team.json";
import { useSelector } from "react-redux";

const OurTeam = () => {
  const { lang } = useSelector((state) => state?.language);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="max-w-[1280px] px-5 my-10 lg:my-20 mx-auto">
      <div className="text-2xl lg:text-3xl font-semibold mb-3">{lang==="eng"?`Our Team`:`আমাদের টিম`}</div>
      <div className="lg:w-5/12 lg:text-xl">
      {lang==="eng"? `Paragraphs are the building blocks of papers. Many students define
        paragraphs in terms of length`
      :
      `অনুচ্ছেদ হল কাগজপত্রের বিল্ডিং ব্লক। অনেক ছাত্র সংজ্ঞায়িত
      দৈর্ঘ্যের পরিপ্রেক্ষিতে অনুচ্ছেদ`
      }
      </div>
      <Zoom triggerOnce>
        <div className="my-5">
          <Slider ref={sliderRef} {...settings} arrows={false}>
            {Team?.map((team, i)=>
            <div key={i} className="w-full h-full outline-none">
              <Image src={Coke} alt="img" className="w-[95%] rounded-lg" />
              <div className="text-center text-black font-semibold mt-3">
                {lang==="eng"? (team?.name):(team?.ban_name)}
              </div>
              <div className="text-center text-black text-sm">
              {lang==="eng"? (team?.designation):(team?.ban_designation)}
              </div>
              <div className="flex justify-center pt-2 pb-5">
                <FB className="text-xl mx-3 cursor-pointer text-black" />
                <Insta className="text-xl mx-3 cursor-pointer text-black" />
                <Twitter className="text-xl mx-3 cursor-pointer text-black" />
              </div>
            </div>
            )}
            {/* <div className="w-full h-full outline-none">
              <Image src={Coke2} alt="img" className="w-[95%] rounded-lg" />
              <div className="text-center text-black font-semibold mt-3">
                Sofia Vergara
              </div>
              <div className="text-center text-black text-sm">
                Ceo & Founder{" "}
              </div>
              <div className="flex justify-center pt-2 pb-5">
                <FB className="text-xl mx-3 cursor-pointer text-black" />
                <Insta className="text-xl mx-3 cursor-pointer text-black" />
                <Twitter className="text-xl mx-3 cursor-pointer text-black" />
              </div>
            </div>
            <div className="w-full h-full outline-none">
              <Image src={Coke} alt="img" className="w-[95%] rounded-lg" />
              <div className="text-center text-black font-semibold mt-3">
                HM Alvi
              </div>
              <div className="text-center text-black text-sm">
                Ceo & Founder{" "}
              </div>
              <div className="flex justify-center pt-2 pb-5">
                <FB className="text-xl mx-3 cursor-pointer text-black" />
                <Insta className="text-xl mx-3 cursor-pointer text-black" />
                <Twitter className="text-xl mx-3 cursor-pointer text-black" />
              </div>
            </div>
            <div className="w-full h-full outline-none">
              <Image src={Coke} alt="img" className="w-[95%] rounded-lg" />
              <div className="text-center text-black font-semibold mt-3">
                HM Alvi
              </div>
              <div className="text-center text-black text-sm">
                Ceo & Founder{" "}
              </div>
              <div className="flex justify-center pt-2 pb-5">
                <FB className="text-xl mx-3 cursor-pointer text-black" />
                <Insta className="text-xl mx-3 cursor-pointer text-black" />
                <Twitter className="text-xl mx-3 cursor-pointer text-black" />
              </div>
            </div>
            <div className="w-full h-full outline-none">
              <Image src={Coke} alt="img" className="w-[95%] rounded-lg" />
              <div className="text-center text-black font-semibold mt-3">
                HM Alvi
              </div>
              <div className="text-center text-black text-sm">
                Ceo & Founder{" "}
              </div>
              <div className="flex justify-center pt-2 pb-5">
                <FB className="text-xl mx-3 cursor-pointer text-black" />
                <Insta className="text-xl mx-3 cursor-pointer text-black" />
                <Twitter className="text-xl mx-3 cursor-pointer text-black" />
              </div>
            </div> */}
          </Slider>
        </div>
      </Zoom>

      <div className="flex items-center">
        <div
          onClick={() => sliderRef.current.slickPrev()}
          className="w-[40px] h-[50px] bg-[#5143F6] flex items-center shadow-md cursor-pointer text-white tracking-widest text-sm text-center mr-3"
        >
          <SliderArrow className="text-3xl m-auto rotate-180" />
        </div>
        <div
          onClick={() => sliderRef.current.slickNext()}
          className="w-[40px] h-[50px] flex items-center cursor-pointer text-[#5143F6] font-semibold tracking-widest text-sm text-center"
        >
          <SliderArrow className="text-3xl m-auto text-home-color" />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
