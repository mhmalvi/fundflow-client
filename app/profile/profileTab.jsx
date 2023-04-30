'use client'
import React, {useState} from 'react'
import UserProfile from './userProfile'
import Settings from './settings'
import Notification from './notification'
import WishProject from './wishProject'
import InvestList from './investList'
import Reccomendation from './reccomendation'
import { Fade, Slide } from "react-awesome-reveal";
import Link from 'next/link'
import Logout from "../../public/assets/images/logout.png"
import Image from 'next/image'
import { useSelector } from "react-redux";

const ProfileTab = () => {
  const { lang } = useSelector((state) => state?.language);
    const [toogleTab, setToogleTab] = useState(0)
    const [showTabs, setShowTabs] = useState(false);
    const HamburgerLine = `h-1 w-7 my-1 rounded-full bg-black transition ease transform duration-500 m-4`;

    const handleToogle = (id) => {
      setToogleTab(id);
      setShowTabs(false);
    };
    const handleShowTabs = () => {
      setShowTabs(!showTabs);
    };

  return (
    <div className="w-full h-screen lg:flex overflow-x-hidden">
      <div className="hidden lg:block w-[25rem] h-full bg-home-color text-white z-50">
        <Link href={"./"}>
        <div className='text-2xl font-semibold pl-20 py-20 cursor-pointer'>QUADQUE</div>
        </Link>
        <div className="flex flex-col justify-center text-lg pt-20">
          <div onClick={()=>{handleToogle(0);}} className={`${toogleTab===0 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer`}>{lang==="eng"? "Notifications":"প্রজ্ঞাপন"}</div>
          <div onClick={()=>{handleToogle(1);}} className={`${toogleTab===1 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer`}>{lang==="eng"? "Investments List":"বিনিয়োগ তালিকা"}</div>
          <div onClick={()=>{handleToogle(2);}} className={`${toogleTab===2 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer`}>{lang==="eng"? "Wish Project":"উইশ প্রজেক্ট"}</div>
          <div onClick={()=>{handleToogle(3);}} className={`${toogleTab===3 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer`}>{lang==="eng"? "Recommended":"প্রস্তাবিত"}</div>
          <div onClick={()=>{handleToogle(4);}} className={`${toogleTab===4 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer`}>{lang==="eng"? "Profile":"প্রোফাইল"}</div>
          <div onClick={()=>{handleToogle(5);}} className={`${toogleTab===5 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer`}>{lang==="eng"? "Account Settings":"অ্যাকাউন্ট সেটিংস"}</div>
          <Link href={'./'}>
            <div onClick={()=>{handleToogle(6);}} className={`${toogleTab===6 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer flex items-center`}><Image src={Logout} alt='logout' className='w-6 mr-2'/>{lang==="eng"? "Logout":"লগআউট"}</div>
          </Link>
        </div>
      </div>
      <div onClick={()=>{handleShowTabs()}} className='lg:hidden mt-24 mb-4 cursor-pointer flex items-center'>
        <div className='inline-block'>
          <div className={`${HamburgerLine} ${showTabs? "rotate-45 translate-y-2":""}`} />
          <div className={`${HamburgerLine} ${showTabs? "opacity-0":"opacity-100"}`} />
          <div className={`${HamburgerLine} ${showTabs? "-rotate-45 -translate-y-2":""}`} />
        </div>
        {toogleTab===0 && <div className='font-semibold'>{lang==="eng"? "Notifications":"প্রজ্ঞাপন"}</div>}
        {toogleTab===1 && <div className='font-semibold'>{lang==="eng"? "Investments List":"বিনিয়োগ তালিকা"}</div>}
        {toogleTab===2 && <div className='font-semibold'>{lang==="eng"? "Wish Project":"উইশ প্রজেক্ট"}</div>}
        {toogleTab===3 && <div className='font-semibold'>{lang==="eng"? "Recommended":"প্রস্তাবিত"}</div>}
        {toogleTab===4 && <div className='font-semibold'>{lang==="eng"? "Profile":"প্রোফাইল"}</div>}
        {toogleTab===5 && <div className='font-semibold'>{lang==="eng"? "Account Settings":"অ্যাকাউন্ট সেটিংস"}</div>}
      </div>
      <div>
      <Slide triggerOnce className={`${showTabs? "translate-y-0":"absolute -left-56 -translate-x-[500px]"} lg:hidden w-full flex flex-wrap justify-around px-4 mx-auto`}>
        <div onClick={()=>{handleToogle(0)}} className={`${toogleTab===0 ? "text-white bg-gray-800 duration-300":"text-black bg-white border duration-300"} ${showTabs? "translate-y-0":"absolute -left-56 -translate-x-[500px]"} w-full text-center rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>{lang==="eng"? "Notifications":"প্রজ্ঞাপন"}</div>
        <div onClick={()=>{handleToogle(1)}} className={`${toogleTab===1 ? "text-white bg-gray-800 duration-300":"text-black bg-white border duration-300"} ${showTabs? "translate-y-0":"absolute -left-56 -translate-x-[500px]"} w-full text-center rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>{lang==="eng"? "Investments List":"বিনিয়োগ তালিকা"}</div>
        <div onClick={()=>{handleToogle(2)}} className={`${toogleTab===2 ? "text-white bg-gray-800 duration-300":"text-black bg-white border duration-300"} ${showTabs? "translate-y-0":"absolute -left-56 -translate-x-[500px]"} w-full text-center rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>{lang==="eng"? "Wish Project":"উইশ প্রজেক্ট"}</div>
        <div onClick={()=>{handleToogle(3)}} className={`${toogleTab===3 ? "text-white bg-gray-800 duration-300":"text-black bg-white border duration-300"} ${showTabs? "translate-y-0":"absolute -left-56 -translate-x-[500px]"} w-full text-center rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>{lang==="eng"? "Recommended":"প্রস্তাবিত"}</div>
        <div onClick={()=>{handleToogle(4)}} className={`${toogleTab===4 ? "text-white bg-gray-800 duration-300":"text-black bg-white border duration-300"} ${showTabs? "translate-y-0":"absolute -left-56 -translate-x-[500px]"} w-full text-center rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>{lang==="eng"? "Profile":"প্রোফাইল"}</div>
        <div onClick={()=>{handleToogle(5)}} className={`${toogleTab===5 ? "text-white bg-gray-800 duration-300":"text-black bg-white border duration-300"} ${showTabs? "translate-y-0":"absolute -left-56 -translate-x-[500px]"} w-full text-center rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>{lang==="eng"? "Account Settings":"অ্যাকাউন্ট সেটিংস"}</div>
        <Link href={'./'} className='w-full'>
          <div className={`${showTabs? "translate-y-0":"absolute -left-56 -translate-x-[500px]"} bg-white rounded-full shadow-md px-5 py-2 my-1 cursor-pointer flex justify-center items-center`}><Image src={Logout} alt='logout' className='w-6 mr-2'/>{lang==="eng"? "Logout":"লগআউট"}</div>
        </Link>
      </Slide>
      </div>
      <div className='w-full'>
        {toogleTab===0 && <Slide direction='right' triggerOnce><Notification/></Slide>}
        {toogleTab===1 && <Slide direction='right' triggerOnce><InvestList/></Slide>}
        {toogleTab===2 && <Slide direction='right' triggerOnce><WishProject/></Slide>}
        {toogleTab===3 && <Slide direction='right' triggerOnce><Reccomendation/></Slide>}
        {toogleTab===4 && <Slide direction='right' triggerOnce><UserProfile/></Slide>}
        {toogleTab===5 && <Slide direction='right' triggerOnce><Settings/></Slide>}
      </div>
    </div>
  );
}

export default ProfileTab