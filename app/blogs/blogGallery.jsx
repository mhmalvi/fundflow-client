'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Blog1 from "../../public/assets/images/blog1.png";
import Blog2 from "../../public/assets/images/blog4.png";
import Blog3 from "../../public/assets/images/blog2.png";
import Blog4 from "../../public/assets/images/blog5.png";
import Blogs from "../shared/jsondata/blogs.json";
import "./blogStyle.css";
import { useSelector } from "react-redux";

const BlogGallery = () => {
  const { lang } = useSelector((state) => state?.language);
  const sliderRef = useRef();
  const [oddBlogs, setOddBlogs] = useState()
  const [evenBlogs, setEvenBlogs] = useState()
  const [visible, setVisible] = useState(2)
  
  useEffect(() => {
    setOddBlogs(Blogs?.filter(wtf=> wtf.id%2===1))
    setEvenBlogs(Blogs?.filter(wtf=> wtf.id%2===0))
  }, [])

  const showMoreItems = () => {
      setVisible((prevValue)=>prevValue + 1)
  }
  
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
    <div className="max-w-[1280px] px-2 lg:px-5 mx-auto mt-20 overflow-hidden">
      <Zoom triggerOnce>
        <div className="w-full bg-home-color rounded-2xl p-0 lg:p-10 blog_shine">
          <div className=" bg-black bg-opacity-30 lg:bg-transparent backdrop:filter backdrop-blur-sm lg:backdrop-blur-0 rounded-2xl shadow-md lg:shadow-none px-8 py-12">
            <div className="text-white text-2xl lg:text-4xl font-semibold pb-5">
              {lang==="eng"? `Latest News`:`সর্বশেষ সংবাদ`}
            </div>
            {lang==="eng"? 
            <div className="text-sm lg:text-base text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br /> Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </div>
            :
            <div className="text-sm lg:text-base text-white">
              সর্বশেষ সংবাদ হল মুদ্রণ এবং টাইপসেটিং এর ডামি পাঠ্য
              শিল্প <br /> সর্বশেষ সংবাদ হল মুদ্রণের ডামি টেক্সট
              এবং টাইপসেটিং শিল্প।
            </div>
            }
          </div>
        </div>
      </Zoom>

      <div className="max-w-screen-xl px-0 mx-auto mt-10 lg:mt-20 overflow-hidden">
        {/* <div>
          <div className="hidden lg:block ">
            <div className="flex justify-end items-center mb-4">
              <div className="flex items-center">
                <div
                  onClick={() => sliderRef.current.slickPrev()}
                  className="w-[40px] bg-[#5143F6] rounded-md shadow-md text-white tracking-widest text-sm text-center py-4 px-4 mr-3 cursor-pointer"
                >
                  {"<"}
                </div>
                <div
                  onClick={() => sliderRef.current.slickNext()}
                  className="w-[40px] bg-white rounded-md shadow-md text-[#5143F6] font-semibold border border-[#5143F6] tracking-widest text-sm text-center py-4 px-4 cursor-pointer"
                >
                  {">"}
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <Fade direction="right" triggerOnce className="lg:hidden">
          <div className="">
            <Slider ref={sliderRef} {...settings} arrows={false}>
              {Blogs?.map((product, i) => (
                <Link key={i} href={"./blogs/blog"}>
                  <div className="p-2">
                    <div className="pb-5 p-2">
                      <Image
                        src={BlogImages[product?.id - 1]?.image}
                        alt="img"
                        className="w-full rounded-lg"
                      />
                      <div className="flex justify-between">
                        <div className="text-sm pt-5">{lang==="eng"? (product?.time):(product?.ban_time)}</div>
                        <div className="text-sm pt-5">{lang==="eng"?`3 min read`:`৩ মিনিট পড়া`}</div>
                      </div>
                      <div className="border w-11/12 mx-auto my-5"></div>
                      <div className="text-xl mb-5">{lang==="eng"? (product?.title):(product?.ban_title)}</div>
                      {lang==="eng"? (product?.description):(product?.ban_description)}
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </Fade>

        <Fade direction="right" triggerOnce>
          <div className="hidden lg:block">
            <div className="flex gap-6">
              <div className="w-1/2">
                <Fade duration={1000} triggerOnce>
                  {oddBlogs?.slice(0, visible).map((product, i) => (
                    <Link key={i} href={"./blogs/blog"}>
                      <Image
                        src={BlogImages[product?.id - 1]?.image}
                        alt="img"
                        className="w-full rounded-2xl"
                      />
                      <div className="flex justify-between">
                        <div className="text-sm pt-5">{lang==="eng"? (product?.time):(product?.ban_time)}</div>
                        <div className="text-sm pt-5">{lang==="eng"?`3 min read`:`৩ মিনিট পড়া`}</div>
                      </div>
                      <div className="border w-11/12 mx-auto my-5"></div>
                      <div className="text-xl mb-5">{lang==="eng"? (product?.title):(product?.ban_title)}</div>
                      <div className="text-sm lg:pb-10">
                      {lang==="eng"? (product?.description):(product?.ban_description)}
                      </div>
                    </Link>
                  ))}
                </Fade>
              </div>
              <div className="w-1/2">
                <Fade duration={1000} triggerOnce>
                  {evenBlogs?.slice(0, visible).map((product, i) => (
                    <Link key={i} href={"./blogs/blog"}>
                      <Image
                        src={BlogImages[product?.id - 1]?.image}
                        alt="img"
                        className="w-full rounded-2xl"
                      />
                      <div className="flex justify-between">
                        <div className="text-sm pt-5">{lang==="eng"? (product?.time):(product?.ban_time)}</div>
                        <div className="text-sm pt-5">{lang==="eng"?`3 min read`:`৩ মিনিট পড়া`}</div>
                      </div>
                      <div className="border w-11/12 mx-auto my-5"></div>
                      <div className="text-xl mb-5">{lang==="eng"? (product?.title):(product?.ban_title)}</div>
                      <div className="text-sm lg:pb-10">
                      {lang==="eng"? (product?.description):(product?.ban_description)}
                      </div>
                    </Link>
                  ))}
                </Fade>
              </div>
            </div>
          </div>
        </Fade>

        <div className="hidden lg:block">
          <div
            onClick={showMoreItems}
            className="inline-block bg-home-color text-white px-10 py-2 cursor-pointer mt-5"
          >
            {lang==="eng"?`Show more`:`আরো দেখুন`}
          </div>
        </div>

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
    </div>
  );
};

export default BlogGallery;

const BlogImages = [
  {id:1, image: Blog1},
  {id:2, image: Blog2},
  {id:3, image: Blog3},
  {id:4, image: Blog4},
  {id:5, image: Blog1},
  {id:6, image: Blog2},
  {id:7, image: Blog3},
  {id:8, image: Blog4},
  {id:9, image: Blog1},
  {id:10, image: Blog2},
]