'use client'
import Image from "next/image";
import Link from 'next/link';
import { useRef } from 'react';
import { Fade, Zoom } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Story1 from "../../public/assets/images/story1.png";
import Story2 from "../../public/assets/images/story2.png";
import Story3 from "../../public/assets/images/story3.png";
import { SliderArrow } from "../shared/Icons";
import Blogs from "../shared/jsondata/blogs.json";
import "./storyStyle.css";
import { useSelector } from "react-redux";

const StoriesGallery = () => {
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
    <div className="max-w-[1280px] px-2 lg:px-5 mx-auto mt-20 overflow-hidden">
      <Zoom triggerOnce>
        <div className="w-full bg-home-color rounded-2xl p-0 lg:p-16 story_shine">
          <div className="bg-black bg-opacity-30 lg:bg-transparent backdrop:filter backdrop-blur-sm lg:backdrop-blur-0 rounded-2xl shadow-md lg:shadow-none px-8 py-12">
            <div className="text-white text-2xl lg:text-4xl font-semibold pb-5">
              {lang==="eng"?`Success Stories`:`সাফল্যের গল্প`}
            </div>
            {lang==="eng"?
            <div className="text-sm lg:text-xl text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br /> Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </div>
            :
            <div className="text-sm lg:text-xl text-white">
              কাস্টমার সন্তুষ্টি ব্যবসার জন্য অত্যন্ত গুরুত্বপূর্ণ। কাস্টমারদের সন্তুষ্টি না থাকলে <br /> একটি ব্যবসা পরিচালনার কোন লাভ হতে পারে না। কাস্টমারদের নিয়ে বিশেষ দেখভাল <br /> করা উচিত যাতে তারা আবার ব্যবসার জন্য ফিরে আসতে চান।
            </div>}
          </div>
        </div>
      </Zoom>

      <div className="max-w-[1280px] px-0 mx-auto mt-10 lg:mt-20 overflow-hidden">
        <div className="hidden lg:block">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl">{lang==="eng"? "Trending Items":"ট্রেন্ডিং আইটেমসমূহ"}</div>
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
              {Blogs?.map((product, i) => (
                <Link key={i} href={"./stories/story"} className="mb-5">
                  <div className="p-2">
                    <div className="p-2">
                      <Image
                        src={storyImages[product?.id - 1].image}
                        alt="img"
                        className="w-full rounded-xl"
                      />
                      <div className="text-xl my-5">{lang==="eng"?(product?.title):(product?.ban_title)}</div>
                      <div className="text-sm">{lang==="eng"?(product?.description):(product?.ban_description)}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default StoriesGallery
const storyImages = [
  {id:1, image: Story1},
  {id:2, image: Story2},
  {id:3, image: Story3},
  {id:4, image: Story1},
  {id:5, image: Story2},
  {id:6, image: Story3},
  {id:7, image: Story1},
  {id:8, image: Story2},
  {id:9, image: Story3},
  {id:10, image: Story1},
]