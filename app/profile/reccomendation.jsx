'use client'
import React, {useState} from 'react'
import Image from "next/image";
import Card1 from "../../public/assets/images/card1.png";
import Card2 from "../../public/assets/images/card2.png";
import Products from "../shared/jsondata/products.json";
import { Modal } from 'antd';
import ReccomendationModal from './ReccomendationModal';
import { useSelector } from "react-redux";
import Link from 'next/link';

const Reccomendation = () => {
  const { lang } = useSelector((state) => state?.language);
    const [selectedCat, setSelectedCat] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };


    const handleSelectedCatagory = (id) => {
        if (selectedCat?.includes(id)) {
            setSelectedCat(selectedCat.filter(i => i !== id));
        } else {
            setSelectedCat([...selectedCat, id]);
        }
    }
    console.log(selectedCat);
  return (
    <div className="lg:h-[100vh] overflow-y-auto pb-10">
      <div className="2xl:w-9/12 h-auto mx-auto p-5 lg:p-20">
        <div
          onClick={showModal}
          className="inline-block bg-home-color rounded-md text-white text-center px-2 py-2 mb-5 cursor-pointer"
        >
          {lang==="eng"? "Select categories":"বিভাগ নির্বাচন করুন"}
        </div>
        <ReccomendationModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>

        <div className="grid lg:grid-cols-3 gap-5">
          {Products?.map((prod, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg pb-5 border">
              <Image src={Card1} alt="img" className="w-full" />
              <div className="px-3">
                <div className="text-xl my-5">{lang==="eng"?(prod?.title):(prod?.ban_title)}</div>
                <div className="text-sm pb-3">{lang==="eng"? (prod?.description):(prod?.ban_description)}</div>
                <div className="text-sm pb-3">
                  <span className="text-zinc-400 pr-2">{lang==="eng"? "Raised":"উত্থাপিত"}:</span>
                  {lang==="eng"? (prod?.raised):(prod?.ban_raised)}
                </div>
              </div>
              <Link href={"./explore/product"}>
              <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              {lang==="eng"? "Learn More":"আরও জানুন"}
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reccomendation
