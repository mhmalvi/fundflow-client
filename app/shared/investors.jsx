"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../LandingLayout/style.css";
import Image from "next/image";
import CommaDecor from "../../public/assets/images/comma.png";
import Image1 from "../../public/assets/images/image2.png";
import { ArrowWhite, Star } from "./Icons";
import { Zoom } from "react-awesome-reveal";
import Testimonials from "../shared/jsondata/testimonials.json"
import { useSelector } from "react-redux";

const Investors = () => {
  const { lang } = useSelector((state) => state?.language);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="px-2 lg:px-5 overflow-x-hidden">
      <div className="max-w-[1280px] px-3 investor_shine bg-home-color my-10 lg:my-20 p-20 mx-auto rounded-3xl text-white relative">
        <Zoom triggerOnce>
          <div className="text-2xl lg:text-5xl font-semibold text-center pb-10">
            {lang==="eng"?"Our Happy Investors":"আমাদের মূল্যবান বিনিয়োগকারীরা"}
          </div>
        </Zoom>
        <div
          onClick={() => sliderRef.current.slickPrev()}
          className="hidden lg:block absolute left-5 top-[60%] lg:top-[45%] cursor-pointer z-50"
        >
          <ArrowWhite className="text-5xl" />
        </div>
        <div
          onClick={() => sliderRef.current.slickNext()}
          className="hidden lg:block absolute right-5 top-[60%] lg:top-[45%] cursor-pointer z-50"
        >
          <ArrowWhite className="text-5xl rotate-180" />
        </div>

        <div className="text-center">
          <Zoom triggerOnce>
            <div className="lg:w-10/12 mx-auto">
              <Slider ref={sliderRef} {...settings} arrows={false}>
                {Testimonials?.map((post) => (
                  <div key={post?.id}>
                    <div className="lg:w-1/3 mx-auto relative">
                      <Image
                        src={Image1}
                        alt="img"
                        className="w-[6rem] lg:w-[10rem] mx-auto rounded-full"
                      />
                      <Image
                        src={CommaDecor}
                        alt="img"
                        className="w-[2rem] lg:w-[55px] absolute -bottom-2 lg:left-22 left-36"
                      />
                    </div>
                    <div className="text-white text-lg lg:text-xl pt-5 pb-2">
                      <span className="font-semibold">{lang==="eng"? (post?.name):(post?.ban_name)}</span>,{" "}
                      {lang==="eng"? (post?.designation):(post?.ban_designation)}
                    </div>
                    <div className="w-[10rem] mx-auto flex justify-evenly pb-5">
                      {[...Array(post?.stars)].map((_, i) => (
                        <Star key={i} className="text-[#FFA722] text-3xl" />
                      ))}
                    </div>
                    <div className="w-11/12 lg:w-9/12 text-white mx-auto text-sm lg:text-2xl">
                      {lang==="eng"? (post?.testimonial):(post?.ban_testimonial)}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Investors;
