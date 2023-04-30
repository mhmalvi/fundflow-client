'use client';
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Learn1 from "../../../public/assets/images/learn2.png";
import Learn2 from "../../../public/assets/images/learn3.png";
import Learn3 from "../../../public/assets/images/learn4.png";
import Products from "../../shared/jsondata/products.json";
import { SliderArrow } from "../../shared/Icons";
import { useSelector } from "react-redux";

const LearnGallery = () => {
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
    slidesPerRow: 3,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          slidesPerRow: 3,
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
    <div className="max-w-[1280px] px-5 mx-auto mt-20 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl lg:text-2xl">{lang==="eng"?`Trending Items`:`ট্রেন্ডিং আইটেমস্‌`}</div>
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

      <Fade direction="right" triggerOnce>
        <div className="">
          <Slider ref={sliderRef} {...settings} arrows={false}>
            {Products?.map((product, i) => (
              <div key={i} className="p-2 mb-5">
                <div className="bg-white rounded-2xl hover:shadow-lg duration-300 pb-5 border p-3">
                  <Image
                    src={LearnImages[product?.id - 1].image}
                    alt="img"
                    className="w-full"
                  />
                  <div className="flex justify-between items-center pt-3">
                    <div className="rounded-full inline-block bg-indigo-300 text-indigo-600 shadow-md px-3 py-2">
                      {product?.medium}
                    </div>
                    <div>{lang==="eng"? (product?.raised):(product?.ban_raised)}</div>
                  </div>
                  <div className="text-xl my-5">{lang==="eng"? (product?.title):(product?.ban_title)}</div>
                  <div className="text-sm pb-8">{lang==="eng"? (product?.description):(product?.ban_description)}</div>
                  <Link href={"./learn/gallery/details"}>
                    <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
                    {lang==="eng"? `Admission Now`:`ভর্তি নিন`}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Fade>
    </div>
  );
};

export default LearnGallery;
const LearnImages = [
  { id: 1, image: Learn1 },
  { id: 2, image: Learn2 },
  { id: 3, image: Learn3 },
  { id: 4, image: Learn1 },
  { id: 5, image: Learn2 },
  { id: 6, image: Learn3 },
  { id: 7, image: Learn1 },
  { id: 8, image: Learn2 },
  { id: 9, image: Learn3 },
  { id: 10, image: Learn1 },
];
