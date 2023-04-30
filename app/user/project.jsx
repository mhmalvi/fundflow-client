'use client'
import React, { useState } from "react";
import Image from "next/image";
import Avatar from "../../public/assets/images/avatar.png";
import post1 from "../../public/assets/images/blog2.png";
import "./userStyles.css"
import { Select, Modal } from "antd";
import { useSelector } from "react-redux";

const categoryData = ["Recent", "All"];

const Project = () => {
  const { lang } = useSelector((state) => state?.language);
    const [open, setOpen] = useState(false);

  const handleProvinceChange = (value) => {
    value.preventDefault();
  };
  return (
    <div className="w-full h-full mx-auto lg:py-20 lg:pl-5 text-white px-5 lg:px-0">
      <div className="bg-admin-secondary-color rounded-3xl shadow-lg p-10">
        <div className="flex flex-col lg:flex-row justify-between">
          <Image src={post1} alt="img" className="w-[30rem] mr-3" />
          <div>
            <div className="flex justify-between items-center py-2">
              <div className="text-lg lg:text-2xl">{lang==="eng"?`Food Category`:`খাদ্য বিভাগ`}</div>
              <div className="text-xs lg:text-base">{lang==="eng"?`10 days late`:`১0 দিন দেরী`}</div>
            </div>
            <div className="font-semibold">{lang==="eng"?`Lorem ipsum dolor sit amet`:`কম দামে পেয়ারা কিনে ক্রেতা বেশ খুশি`}</div>
            <div className="">
              {lang==="eng"
              ? `Premium pepperoni and cheese is made with real mozzarella on
              original hand-tossed crust.`
              :
              `প্রিমিয়াম পেপেরোনি এবং পনির তৈরি করা হয় আসল মোজারেলা দিয়ে
              মূল হাত-টাস করা ভূত্বক।`}
            </div>
            <div>
              <span className="text-zinc-400">{lang==="eng"? "Raised":"উত্থাপিত"}:</span> {lang==="eng"? "$2300":"$২৩০০"}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between my-5">
        <div className="flex items-end gap-4">
          <div>
            <div className="text-2xl font-bold">{lang==="eng"? "Update":"আপডেট"}</div>
          </div>
          <Select
            defaultValue={categoryData[0]}
            style={{
              width: 140,
            }}
            onChange={handleProvinceChange}
            options={categoryData.map((province) => ({
              label: province,
              value: province,
            }))}
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="w-[15rem] bg-admin-secondary-color text-xl rounded-lg py-2 flex justify-center items-center mr-5 mt-5"
        >
          <span className="w-5 h-5 bg-white text-admin-secondary-color rounded-full flex justify-center items-center mr-3">
            +
          </span>
          {lang==="eng"? "Create Update":"আপডেট তৈরি করুন"}
        </div>
      </div>

      <div className="h-[50vh] text-sm p-5 overflow-y-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="bg-admin-secondary-color rounded-2xl p-5">
            <div className="text-lg pb-5">{lang==="eng"? "Lorem Ipsum":"উন্নয়ন সমূহ"}</div>
            <div>
            {lang==="eng"
              ?`Premium pepperoni and cheese is made with real mozzarella on
              original hand-tossed crust continue.....`
              :`প্রিমিয়াম পেপেরোনি এবং পনির তৈরি করা হয় আসল মোজারেলা দিয়ে
              আসল হাতে ছোঁড়া ক্রাস্ট চালিয়ে যান.....`}
            </div>
          </div>

          <div className="bg-admin-secondary-color rounded-2xl p-5">
            <div className="text-lg pb-5">{lang==="eng"? "Lorem Ipsum":"উন্নয়ন সমূহ"}</div>
            <div>
            {lang==="eng"
              ?`Premium pepperoni and cheese is made with real mozzarella on
              original hand-tossed crust continue.....`
              :`প্রিমিয়াম পেপেরোনি এবং পনির তৈরি করা হয় আসল মোজারেলা দিয়ে
              আসল হাতে ছোঁড়া ক্রাস্ট চালিয়ে যান.....`}
            </div>
          </div>

          <div className="bg-admin-secondary-color rounded-2xl p-5">
            <div className="text-lg pb-5">{lang==="eng"? "Lorem Ipsum":"উন্নয়ন সমূহ"}</div>
            <div>
            {lang==="eng"
              ?`Premium pepperoni and cheese is made with real mozzarella on
              original hand-tossed crust continue.....`
              :`প্রিমিয়াম পেপেরোনি এবং পনির তৈরি করা হয় আসল মোজারেলা দিয়ে
              আসল হাতে ছোঁড়া ক্রাস্ট চালিয়ে যান.....`}
            </div>
          </div>
        </div>
      </div>
      <Modal
        className=""
        title={false}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={false}
        width="70%"
        height="90vh"
      >
        <div className="w-full text-black text-xl py-10">
          <div className="text-2xl">Update Post</div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-full rounded-md border my-5"
          ></textarea>
          <div className="w-[6rem] bg-admin-secondary-color text-center text-white rounded-md py-2">
            Save
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Project;
