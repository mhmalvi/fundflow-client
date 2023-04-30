import React from 'react'
import "../learnStyles.css"
import { Zoom } from "react-awesome-reveal"
import { useSelector } from "react-redux"

const GalleryHeader = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div className="max-w-[1280px] px-5 mx-auto my-20">
      <Zoom triggerOnce>
        <div className="w-full bg-home-color rounded-2xl py-16 px-5 lg:px-16 learn_shine">
          <div className="bg-white bg-opacity-30 lg:bg-transparent backdrop:filter backdrop-blur-sm lg:backdrop-blur-0 rounded-2xl shadow-md lg:shadow-none p-5">
            <div className="text-white text-2xl lg:text-4xl font-semibold pb-5">
              {lang==="eng"? `Learn`:`শিখুন`}
            </div>
            {lang==="eng"?
            <div className="lg:w-5/12 text-white text-sm lg:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br /> Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </div>
            :
            <div className="lg:w-5/12 text-white text-sm lg:text-base">
              Lorem Ipsum হল মুদ্রণ এবং টাইপসেটিং এর ডামি পাঠ্য
              শিল্প <br /> Lorem Ipsum হল মুদ্রণের ডামি টেক্সট
              এবং টাইপসেটিং শিল্প।
            </div>
            }
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default GalleryHeader
