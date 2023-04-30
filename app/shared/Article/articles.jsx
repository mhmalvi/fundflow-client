'use client';
import Image from "next/image";
import { useRef } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Article2 from "../../../public/assets/images/article2.png";
import Article1 from "../../../public/assets/images/cocacola.png";
import { SliderArrow } from "../Icons";
import "./article.css";
import Testimonials from "../jsondata/testimonials.json"
import { useSelector } from "react-redux";

const Articles = () => {
  const { lang } = useSelector((state) => state?.language);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="max-w-[1280px] px-2 py-10 lg:py-20 mx-auto overflow-x-hidden">
      <Fade direction="up" triggerOnce>
        <div className="text-zinc-700 tracking-[.5em] text-sm mb-3 pl-5 lg:pl-0">
          -{lang==="eng"? "ARTICLES" : "প্রবন্ধ"}
        </div>
        <div className="w-11/12 lg:w-5/12 text-xl lg:text-3xl font-semibold mx-auto lg:m-0">
          {lang==="eng"?
          "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length."
          :
          "অনুচ্ছেদ হল কাগজপত্রের বিল্ডিং ব্লক। অনেক ছাত্র দৈর্ঘ্যের পরিপ্রেক্ষিতে অনুচ্ছেদ সংজ্ঞায়িত করে।"
          }
        </div>
      </Fade>
      <Zoom triggerOnce>
        <div className="my-5">
          <Slider ref={sliderRef} {...settings} arrows={false}>
            {Testimonials?.map((post, i) =>
              <div key={i} className="content">
                <div className="content-overlay"></div>
                <Image src={Article1} alt="img" className="content-image" />
                <div className="content-details fadeIn-bottom text-white text-xs lg:text-xl">
                  {lang==="eng"? (post?.testimonial):(post?.ban_testimonial)}
                  <span className="text-indigo-500 cursor-pointer">
                    View More
                  </span>
                </div>
              </div>
            )}
          </Slider>
        </div>
      </Zoom>

      <div className="w-11/12 lg:w-full mx-auto flex items-center">
        <div className="inline-block bg-[#5143F6] shadow-md cursor-pointer text-white tracking-widest text-sm text-center py-4 px-4 mr-20">
          {lang==="eng" ? "See More" : "আরো দেখুন"}
        </div>
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
    </div>
  );
};

export default Articles;
