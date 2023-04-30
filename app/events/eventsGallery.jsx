"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Event1 from "../../public/assets/images/event1.png";
import Event2 from "../../public/assets/images/event2.png";
import Event3 from "../../public/assets/images/event3.png";
import Event4 from "../../public/assets/images/event4.png";
import { SliderArrow } from "../shared/Icons";
import Events from "../shared/jsondata/Events.json";
import { useSelector } from "react-redux";

const EventsGallery = () => {
  const { lang } = useSelector((state) => state?.language);
  const sliderRef = useRef(null);
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: false,
    dots: false,
    // centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          slidesPerRow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          slidesPerRow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1280px] px-5 mx-auto mt-10 lg:mt-20 overflow-hidden">
      <div className="hidden lg:block ">
        <div className="flex justify-end items-center mb-4 mr-10">
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

      <Fade direction="right" triggerOnce>
        <div className="">
          <Slider ref={sliderRef} {...settings} arrows={false}>
            {Events?.map((product, i) => (
              <Link key={i} href={"/events/event"}>
                <div className="pb-24 lg:pb-44 relative flex justify-center items-center">
                  <div
                    className={`${product?.bgColor} lg:w-[90%] h-[23rem] rounded-3xl`}
                  ></div>
                  <div className="w-full lg:w-auto absolute top-[68px] mx-auto">
                    <Image
                      src={EventImages[product?.id - 1]?.image}
                      alt="img"
                      className="w-full rounded-3xl"
                    />
                    <div className="w-1/2 mx-auto">
                      <div className="text-xl my-5">{lang==="eng"? (product?.title):(product?.ban_title)}</div>
                      <div className="text-sm pb-8">{lang==="eng"? (product?.description):(product?.ban_description)}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </Fade>

      {/* <div className="flex justify-center items-center mt-4 lg:hidden">
        <div className="flex items-center justify-end">
          <div
            onClick={() => sliderRef.current.slickPrev()}
            className="w-[40px] bg-[#5143F6] rounded-md shadow-md text-white tracking-widest text-sm text-center py-4 px-4 mr-3 cursor-pointer"
          >
            {"<"}
          </div>
          <div
            onClick={() => sliderRef.current.slickNext()}
            className="w-[40px] bg-[#5143F6] rounded-md shadow-md text-white tracking-widest text-sm text-center py-4 px-4 cursor-pointer"
          >
            {">"}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default EventsGallery;
const EventImages = [
  { id: 1, image: Event1,},
  { id: 2, image: Event2,},
  { id: 3, image: Event3,},
  { id: 4, image: Event4,},
  { id: 5, image: Event1,},
  { id: 6, image: Event2,},
  { id: 7, image: Event3,},
  { id: 8, image: Event4,},
  { id: 9, image: Event1,},
  { id: 10, image: Event2,},
  { id: 11, image: Event3,},
  { id: 12, image: Event4,},
];

const Color = [
  "bg-red-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-yellow-200",
]