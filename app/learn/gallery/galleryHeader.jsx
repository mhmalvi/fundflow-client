import React from 'react'
import "../learnStyles.css"
import { Zoom } from "react-awesome-reveal"
import { useSelector } from "react-redux"

const GalleryHeader = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div className="max-w-[1280px] px-4 lg:px-30 mx-auto mt-20 lg:mt-28 mb-20">
      <Zoom triggerOnce>
        <div className="w-full bg-home-color rounded-2xl lg:px-16 learn_shine">
          <div className="bg-black bg-opacity-30 backdrop:filter backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none rounded-2xl px-8 py-12">
            <div className="text-white text-2xl lg:text-4xl font-semibold pb-5">
              {lang === "eng" ? `Learn` : `শিখুন`}
            </div>
            {lang === "eng" ? (
              <div className="lg:w-5/12 text-white text-sm lg:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br /> Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </div>
            ) : (
              <div className="lg:w-5/12 text-white text-sm lg:text-base">
                টাইপসেটিং হল মুদ্রণ এবং টাইপসেটিং এর ডামি পাঠ্য শিল্প <br />
                টাইপসেটিং হল মুদ্রণের ডামি টেক্সট এবং টাইপসেটিং শিল্প।
              </div>
            )}
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default GalleryHeader
