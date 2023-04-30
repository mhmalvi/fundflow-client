'use client'
import React, { useState } from 'react'
import { Modal } from "antd";
import { useSelector } from "react-redux";

const ReccomendationModal = ({ isModalOpen, setIsModalOpen }) => {
  const { lang } = useSelector((state) => state?.language);
    const [selectedCat, setSelectedCat] = useState([]);

    const handleSelectedCatagory = (id) => {
        if (selectedCat?.includes(id)) {
        setSelectedCat(selectedCat.filter((i) => i !== id));
        } else {
        setSelectedCat([...selectedCat, id]);
        }
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
  return (
    <Modal
      title={false}
      footer={false}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleOk}
    >
      <div className="bg-white">
        <div className="text-lg font-semibold">{lang==="eng"?"Categories":"ক্যাটাগরি"}</div>
        <div className="lg:w-10/12 mx-auto grid grid-cols-2 my-10 gap-5 text-xs lg:text-sm">
          <div onClick={() => {handleSelectedCatagory(1);}} className="flex items-center">
            <div className={`${selectedCat.includes(1) && "bg-pink-200 border-none"} w-6 h-6 border rounded-md shadow-md mr-2`}></div>{lang==="eng"?"Edtech":"এডটেক"}
          </div>
          <div onClick={() => {handleSelectedCatagory(2);}} className="flex items-center">
            <div className={`${selectedCat.includes(2) && "bg-pink-200 border-none"} w-6 h-6 border rounded-md shadow-md mr-2`}></div>{lang==="eng"?"Fintech":"ফিনটেক"}
          </div>
          <div onClick={() => {handleSelectedCatagory(3);}} className="flex items-center">
            <div className={`${selectedCat.includes(3) && "bg-pink-200 border-none"} w-6 h-6 border rounded-md shadow-md mr-2`}></div>{lang==="eng"?"Logistics":"রসদ"}
          </div>
          <div onClick={() => {handleSelectedCatagory(4);}} className="flex items-center">
            <div className={`${selectedCat.includes(4) && "bg-pink-200 border-none"} w-6 h-6 border rounded-md shadow-md mr-2`}></div>{lang==="eng"?"E-Commerce and Retail":"ই-কমার্স এবং খুচরা"}
          </div>
          <div onClick={() => {handleSelectedCatagory(5);}} className="flex items-center">
            <div className={`${selectedCat.includes(5) && "bg-pink-200 border-none"} w-6 h-6 border rounded-md shadow-md mr-2`}></div>{lang==="eng"?"Gaming":"গেমিং"}
          </div>
          <div onClick={() => {handleSelectedCatagory(6);}} className="flex items-center">
            <div className={`${selectedCat.includes(6) && "bg-pink-200 border-none"} w-6 h-6 border rounded-md shadow-md mr-2`}></div>{lang==="eng"?"Climate and Energy":"জলবায়ু এবং শক্তি"}
          </div>
          <div onClick={() => {handleSelectedCatagory(7);}} className="flex items-center">
            <div className={`${selectedCat.includes(7) && "bg-pink-200 border-none"} w-6 h-6 border rounded-md shadow-md mr-2`}></div>{lang==="eng"?"Consumer Service":"ভোক্তা সেবা"}
          </div>
          <div onClick={() => {handleSelectedCatagory(8);}} className="flex items-center">
            <div className={`${selectedCat.includes(8) && "bg-pink-200 border-none"} w-6 h-6 border rounded-md shadow-md mr-2`}></div>{lang==="eng"?"Halthcare":"স্বাস্থ্যসেবা"}
          </div>
          <div onClick={() => {handleSelectedCatagory(9);}} className="flex items-center">
            <div className={`${selectedCat.includes(9) && "bg-pink-200 border-none"} w-6 h-6 border rounded-md shadow-md mr-2`}></div>{lang==="eng"?"Food & Agro":"খাদ্য ও কৃষি"}
          </div>
          <div onClick={() => {handleSelectedCatagory(10);}} className="flex items-center">
            <div className={`${selectedCat.includes(10) && "bg-pink-200 border-none"} w-6 h-6 border rounded-md shadow-md mr-2`}></div>{lang==="eng"?"Mobility":"গতিশীলতা"}
          </div>
          <div onClick={() => {handleSelectedCatagory(11);}} className="flex items-center">
            <div className={`${selectedCat.includes(11) && "bg-pink-200 border-none"} w-6 h-6 border rounded-md shadow-md mr-2`}></div>{lang==="eng"?"Software and Technology":"সফটওয়্যার এবং প্রযুক্তি"}
          </div>
          <div onClick={() => {handleSelectedCatagory(12);}} className="flex items-center">
            <div className={`${selectedCat.includes(12) && "bg-pink-200 border-none"} w-6 h-6 border rounded-md shadow-md mr-2`}></div>{lang==="eng"?"Sports and Entertainment":"খেলাধুলা এবং বিনোদন"}
          </div>
          <div onClick={() => {handleSelectedCatagory(13);}} className="flex items-center">
            <div className={`${selectedCat.includes(13) && "bg-pink-200 border-none"} w-6 h-6 border rounded-md shadow-md mr-2`}></div>{lang==="eng"?"Circular Economy":"সার্কুলার ইকোনমি"}
          </div>
          <div onClick={() => {handleSelectedCatagory(14);}} className="flex items-center">
            <div className={`${selectedCat.includes(14) && "bg-pink-200 border-none"} w-6 h-6 border rounded-md shadow-md mr-2`}></div>{lang==="eng"?"Others":"অন্যান্য"}
          </div>
        </div>
        <div
          onClick={handleOk}
          className="inline-block bg-home-color rounded-md text-white text-center px-2 py-2 cursor-pointer"
        >
          {lang==="eng"?"Done":"নিশ্চিত করুন"}
        </div>
      </div>
    </Modal>
  );
};

export default ReccomendationModal