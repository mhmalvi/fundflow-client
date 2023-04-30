"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Card1 from "../../public/assets/images/card1.png";
import Card2 from "../../public/assets/images/card2.png";
import Products from "../shared/jsondata/products.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
import { SliderArrow, Heart, HeartOff } from "../shared/Icons";
import "./explore.css";
import { useSelector } from "react-redux";

const ExploreGallery = () => {
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

  const [isFavourite, setIsFavourite] = useState([]);

  const handleIsFavourite = (id) => {
    if (isFavourite?.includes(id)) {
      setIsFavourite(isFavourite?.filter((wtf) => wtf !== id));
      document.getElementById(`removeFromWishlist${id}`).classList.add("opacity-100");
      setTimeout(() => {
        document.getElementById(`removeFromWishlist${id}`).classList.remove("opacity-100");
      }, 2000);
    } else {
      setIsFavourite([...isFavourite, id]);
      document.getElementById(`addToWishlist${id}`).classList.add("opacity-100");
      setTimeout(() => {
        document.getElementById(`addToWishlist${id}`).classList.remove("opacity-100");
      }, 2000);
    }
  };

  /*   const handleSelectedCatagory = (id) => {
  if (selectedCat?.includes(id)) {
    setSelectedCat(selectedCat.filter((i) => i !== id));
  } else {
    setSelectedCat([...selectedCat, id]);
  }
}; */
  return (
    <div className="max-w-[1280px] lg:px-5 mx-auto mt-10 lg:mt-20 overflow-hidden">
      <div className="hidden lg:block">
        <div className="w-11/12 lg:w-full mx-auto lg:m-0 flex justify-between items-center mb-4">
          <div className="text-2xl font-semibold">{lang==="eng"? "Trending Items":"ট্রেন্ডিং আইটেমসমূহ"}</div>
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

      <div className="w-11/12 lg:w-full mx-auto">
        <Slider ref={sliderRef} {...settings} arrows={false}>
          {Products?.map((product, i) => (
            <Fade direction="right" triggerOnce key={i}>
              <div className="p-2 mb-5">
                <div className="relative bg-white lg:bg-transparent hover:bg-white rounded-2xl shadow-lg lg:shadow-none hover:shadow-lg pb-5 duration-500">
                  <div
                    id={`addToWishlist${product?.id}`}
                    className="opacity-0 delay-500 duration-700 absolute top-5 right-16 bg-white shadow-lg rounded-lg px-4 py-3 text-xs whitespace-nowrap"
                  >
                    {lang==="eng"?"Added to Wishlist!":"ইচ্ছা তালিকায় যোগ করা হয়েছে!"}
                  </div>
                  <div
                    id={`removeFromWishlist${product?.id}`}
                    className="opacity-0 delay-500 duration-700 absolute top-5 right-16 bg-white shadow-lg rounded-lg px-4 py-3 text-xs whitespace-nowrap"
                    >
                    {lang==="eng"?"Removed to Wishlist!":"ইচ্ছা তালিকা থেকে সরানো হয়েছে!"}
                  </div>
                  <div
                    onClick={() => {
                      handleIsFavourite(product?.id);
                    }}
                    // className={`${addToWishMsg ? "show-info" : ""
                    //   } w-10 h-10 rounded-full bg-white absolute top-5 right-5 flex justify-center items-center shadow-lg`}
                    className={`w-10 h-10 rounded-full bg-white absolute top-5 right-5 flex justify-center items-center shadow-lg transition-opacity delay-100 duration-200`}
                  >
                    <Heart
                      className={`${
                        isFavourite?.includes(product?.id)
                          ? "text-[#8075FF]"
                          : "text-gray-200"
                      } duration-500`}
                    />
                  </div>
                  <Image src={Card1} alt="img" className="w-full" />
                  <div className="px-4">
                    <div className="flex justify-between items-center mt-4 mx-2">
                      <div className="text-zinc-500">{lang==="eng"?"Category: Food":"শ্রেণী: খাদ্য"}</div>
                      <div className="text-zinc-500">{lang==="eng"?"10 Days late":"দশ দিন বিলম্বে"}</div>
                    </div>
                    <div className="text-xl font-semibold my-5">
                      {lang==="eng"?(product?.title):(product?.ban_title)}
                    </div>
                    <div className="text-sm pb-5">{lang==="eng"?(product?.description):(product?.ban_description)}</div>
                    <div className="text-zinc-500 pb-8">
                    {lang==="eng"?"Raised":"সংগৃহীত"}: <span className="text-black">{lang==="eng"?"$500 of $2000":"$২০০০ এর মধ্যে $৫০০"}</span>
                    </div>
                  </div>
                  <Link href={"./explore/product"}>
                    <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
                      {lang==="eng"?"Learn More":"আরও জানুন"}
                    </div>
                  </Link>
                </div>
              </div>
            </Fade>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExploreGallery;

