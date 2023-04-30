'use client'
import React, {useState} from 'react'
import Image from 'next/image';
import Propic from "../../public/assets/images/sourav.png"
import Project from './project';
import Notifications from './notifications';
import Members from './members';
import Account from './account';
import UserSettings from './userSettings';
import Chat from './chat';
import Link from "next/link";
import Logout from "../../public/assets/images/logout.png";
import { Fade, Slide } from "react-awesome-reveal";
import { useSelector } from "react-redux";

const UsersTab = () => {
  const { lang } = useSelector((state) => state?.language);
    const [toogleTab, setToogleTab] = useState(0)
        const [showTabs, setShowTabs] = useState(false);
        const HamburgerLine = `h-1 w-7 my-1 rounded-full bg-white transition ease transform duration-500 m-4`;

    const handleToogle = (id) => {
      setToogleTab(id);
      setShowTabs(false)
    };
    const handleShowTabs = () => {
      setShowTabs(!showTabs);
    };
  return (
    <div className='bg-admin-color'>
    <div className="w-full max-w-[1280px] mx-auto h-auto lg:h-screen lg:flex bg-admin-color overflow-hidden">
      <div className="hidden lg:block w-[30rem] h-full text-white z-50 py-20">
        <div className='h-full bg-admin-secondary-color rounded-2xl py-20'>
            <Image src={Propic} alt="img" className="w-24 h-24 rounded-full mx-auto"/>
            <div className='text-2xl font-semibold text-center mt-3'>Sourav Sen</div>
            <div className="flex flex-col justify-center text-lg pt-20">
            <div onClick={()=>{handleToogle(0)}} className={`${toogleTab===0 && "bg-gradient-to-r from-[#ffffff30] to-transparent duration-500"} tracking-widest py-5 pl-20 cursor-pointer`}>{lang==="eng"?"Project":"প্রাজেক্ট"}</div>
            <div onClick={()=>{handleToogle(1)}} className={`${toogleTab===1 && "bg-gradient-to-r from-[#ffffff30] to-transparent duration-500"} tracking-widest py-5 pl-20 cursor-pointer`}>{lang==="eng"?"Notifications":"প্রজ্ঞাপন"}</div>
            <div onClick={()=>{handleToogle(2)}} className={`${toogleTab===2 && "bg-gradient-to-r from-[#ffffff30] to-transparent duration-500"} tracking-widest py-5 pl-20 cursor-pointer`}>{lang==="eng"?"Chat":"চ্যাট"}</div>
            <div onClick={()=>{handleToogle(3)}} className={`${toogleTab===3 && "bg-gradient-to-r from-[#ffffff30] to-transparent duration-500"} tracking-widest py-5 pl-20 cursor-pointer`}>{lang==="eng"?"Members":"সদস্য"}</div>
            <div onClick={()=>{handleToogle(4)}} className={`${toogleTab===4 && "bg-gradient-to-r from-[#ffffff30] to-transparent duration-500"} tracking-widest py-5 pl-20 cursor-pointer`}>{lang==="eng"?"Accounts":"অ্যাকাউন্টিং"}</div>
            <div onClick={()=>{handleToogle(5)}} className={`${toogleTab===5 && "bg-gradient-to-r from-[#ffffff30] to-transparent duration-500"} tracking-widest py-5 pl-20 cursor-pointer`}>{lang==="eng"?"Settings":"সেটিং"}</div>
            <Link href={'./'} className='w-full'>
            <div className="tracking-widest py-5 pl-20 cursor-pointer flex items-center"><Image src={Logout} alt='logout' className='w-6 mr-2'/>{lang==="eng"? "Logout":"লগআউট"}</div>
            </Link>
            </div>
        </div>
      </div>
      <div onClick={()=>{handleShowTabs()}} className='lg:hidden pt-24 mb-4 cursor-pointer flex items-center'>
        <div className='inline-block'>
          <div className={`${HamburgerLine} ${showTabs? "rotate-45 translate-y-2":""}`} />
          <div className={`${HamburgerLine} ${showTabs? "opacity-0":"opacity-100"}`} />
          <div className={`${HamburgerLine} ${showTabs? "-rotate-45 -translate-y-2":""}`} />
        </div>
        {toogleTab===0 && <div className='text-white font-semibold'>{lang==="eng"?"Project":"প্রাজেক্ট"}</div>}
        {toogleTab===1 && <div className='text-white font-semibold'>{lang==="eng"?"Notifications":"প্রজ্ঞাপন"}</div>}
        {toogleTab===2 && <div className='text-white font-semibold'>{lang==="eng"?"Chat":"চ্যাট"}</div>}
        {toogleTab===3 && <div className='text-white font-semibold'>{lang==="eng"?"Member":"সদস্য"}</div>}
        {toogleTab===4 && <div className='text-white font-semibold'>{lang==="eng"?"Accounts":"অ্যাকাউন্টিং"}</div>}
        {toogleTab===5 && <div className='text-white font-semibold'>{lang==="eng"?"Settings":"সেটিং"}</div>}
      </div>
      <div className='mb-4'>
      <Slide triggerOnce className={`lg:hidden w-full flex flex-wrap justify-around px-4 mx-auto`}>
        <div onClick={()=>{handleToogle(0)}} className={`${toogleTab===0 ? "text-white bg-admin-secondary-color duration-300":"text-black bg-white duration-300"} ${showTabs? "translate-y-0":"absolute -left-56 -translate-x-[500px]"} w-full text-center rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>{lang==="eng"?"Project":"প্রাজেক্ট"}</div>
        <div onClick={()=>{handleToogle(1)}} className={`${toogleTab===1 ? "text-white bg-admin-secondary-color duration-300":"text-black bg-white duration-300"} ${showTabs? "translate-y-0":"absolute -left-56 -translate-x-[500px]"} w-full text-center rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>{lang==="eng"?"Notifications":"প্রজ্ঞাপন"}</div>
        <div onClick={()=>{handleToogle(2)}} className={`${toogleTab===2 ? "text-white bg-admin-secondary-color duration-300":"text-black bg-white duration-300"} ${showTabs? "translate-y-0":"absolute -left-56 -translate-x-[500px]"} w-full text-center rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>{lang==="eng"?"Chat":"চ্যাট"}</div>
        <div onClick={()=>{handleToogle(3)}} className={`${toogleTab===3 ? "text-white bg-admin-secondary-color duration-300":"text-black bg-white duration-300"} ${showTabs? "translate-y-0":"absolute -left-56 -translate-x-[500px]"} w-full text-center rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>{lang==="eng"?"Member":"সদস্য"}</div>
        <div onClick={()=>{handleToogle(4)}} className={`${toogleTab===4 ? "text-white bg-admin-secondary-color duration-300":"text-black bg-white duration-300"} ${showTabs? "translate-y-0":"absolute -left-56 -translate-x-[500px]"} w-full text-center rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>{lang==="eng"?"Accounts":"অ্যাকাউন্টিং"}</div>
        <div onClick={()=>{handleToogle(5)}} className={`${toogleTab===5 ? "text-white bg-admin-secondary-color duration-300":"text-black bg-white duration-300"} ${showTabs? "translate-y-0":"absolute -left-56 -translate-x-[500px]"} w-full text-center rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>{lang==="eng"?"Settings":"সেটিং"}</div>
        <Link href={'./'} className='w-full'>
          <div className={`${showTabs? "translate-y-0":"absolute -left-56 -translate-x-[500px]"} bg-white rounded-full shadow-md px-5 py-2 my-1 cursor-pointer flex justify-center items-center`}><Image src={Logout} alt='logout' className='w-6 mr-2'/>{lang==="eng"? "Logout":"লগআউট"}</div>
        </Link>
      </Slide>
      </div>
      <div className='w-full'>
        {toogleTab===0 && <Slide direction='right'><Project/></Slide>}
        {toogleTab===1 && <Slide direction='right'><Notifications/></Slide>}
        {toogleTab===2 && <Slide direction='right'><Chat/></Slide>}
        {toogleTab===3 && <Slide direction='right'><Members/></Slide>}
        {toogleTab===4 && <Slide direction='right'><Account/></Slide>}
        {toogleTab===5 && <Slide direction='right'><UserSettings/></Slide>}
      </div>
    </div>
    </div>
  );
}

export default UsersTab