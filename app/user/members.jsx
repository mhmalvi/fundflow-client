import Image from 'next/image'
import React from 'react'
import Sourav from "../../public/assets/images/sourav.png"
import { useSelector } from "react-redux";
import "./userStyles.css"

const Members = () => {
  const { lang } = useSelector((state) => state?.language)
  return (
    <div className="w-full h-full mx-auto lg:py-20 lg:pl-5 text-white">
        <div className='text-xl lg:text-3xl mb-2 lg:mb-10 pl-5 pt-2'>{lang==="eng"?"Members List":"সদস্যদের তালিকা"}</div>
        <div className='grid lg:grid-cols-3 h-screen lg:h-[75vh] gap-3 p-5 overflow-y-scroll'>
            <div className='flex justify-center items-center p-5 border border-gray-200 border-opacity-5 rounded-2xl'>
                <div>
                    <Image src={Sourav} alt="img" className=" rounded-full mx-auto"/>
                    <div className='text-center mt-5'>{lang==="eng"?"Sourav Sen":"সৌরভ সেন"}</div>
                    <div className='text-sm text-center'>{lang==="eng"?"Business Owner":"ব্যবসার মালিক"}</div>
                </div>
            </div>

            <div className='flex justify-center items-center p-5 border border-gray-200 border-opacity-5 rounded-2xl'>
                <div>
                    <Image src={Sourav} alt="img" className=" rounded-full mx-auto"/>
                    <div className='text-center mt-5'>{lang==="eng"?"Sourav Sen":"সৌরভ সেন"}</div>
                    <div className='text-sm text-center'>{lang==="eng"?"Business Owner":"ব্যবসার মালিক"}</div>
                </div>
            </div>

            <div className='flex justify-center items-center p-5 border border-gray-200 border-opacity-5 rounded-2xl'>
                <div>
                    <Image src={Sourav} alt="img" className=" rounded-full mx-auto"/>
                    <div className='text-center mt-5'>{lang==="eng"?"Sourav Sen":"সৌরভ সেন"}</div>
                    <div className='text-sm text-center'>{lang==="eng"?"Business Owner":"ব্যবসার মালিক"}</div>
                </div>
            </div>

            <div className='flex justify-center items-center p-5 border border-gray-200 border-opacity-5 rounded-2xl'>
                <div>
                    <Image src={Sourav} alt="img" className=" rounded-full mx-auto"/>
                    <div className='text-center mt-5'>{lang==="eng"?"Sourav Sen":"সৌরভ সেন"}</div>
                    <div className='text-sm text-center'>{lang==="eng"?"Business Owner":"ব্যবসার মালিক"}</div>
                </div>
            </div>

            <div className='flex justify-center items-center p-5 border border-gray-200 border-opacity-5 rounded-2xl'>
                <div>
                    <Image src={Sourav} alt="img" className="rounded-full mx-auto"/>
                    <div className='text-center mt-5'>{lang==="eng"?"Sourav Sen":"সৌরভ সেন"}</div>
                    <div className='text-sm text-center'>{lang==="eng"?"Business Owner":"ব্যবসার মালিক"}</div>
                </div>
            </div>

            <div className='flex justify-center items-center p-5 border border-gray-200 border-opacity-5 rounded-2xl'>
                <div>
                    <Image src={Sourav} alt="img" className="rounded-full mx-auto"/>
                    <div className='text-center mt-5'>{lang==="eng"?"Sourav Sen":"সৌরভ সেন"}</div>
                    <div className='text-sm text-center'>{lang==="eng"?"Business Owner":"ব্যবসার মালিক"}</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Members