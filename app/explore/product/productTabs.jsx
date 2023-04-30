'use client'
import React, { useState } from 'react'
import Overview from './overview'
import About from './about'
import Update from './update'
import Reward from './reward'
import Faq from './faq'
import Discussion from './discussion'
import { Fade, Slide } from "react-awesome-reveal";
import { useSelector } from "react-redux";

const ProductTabs = () => {
  const { lang } = useSelector((state) => state?.language);
  const [toogleTab, setToogleTab] = useState(0)

  const hangleToogle = (id) => {
    setToogleTab(id);
  }
  return (
    <div className='max-w-[1280px] px-5 mx-auto my-10 overflow-hidden'>
      <Fade bottom>
      <div className='w-full flex flex-wrap justify-around lg:p-5 lg:shadow-md lg:rounded-xl mx-auto lg:bg-white pt-2'>
        <div onClick={()=>{hangleToogle(0)}} className={`${toogleTab===0 && "text-home-color scale-110 lg:scale-125 duration-300 font-semibold text-shadow"} bg-white rounded-full lg:border-none shadow-lg lg:shadow-none text-sm lg:text-base px-5 py-2 mb-2 cursor-pointer`}>{lang==="eng"?"Overview":"ওভারভিউ"}</div>
        <div onClick={()=>{hangleToogle(1)}} className={`${toogleTab===1 && "text-home-color scale-110 lg:scale-125 duration-300 font-semibold text-shadow"} bg-white rounded-full lg:border-none shadow-lg lg:shadow-none text-sm lg:text-base px-5 py-2 mb-2 cursor-pointer`}>{lang==="eng"?"About":"সম্পর্কিত"}</div>
        <div onClick={()=>{hangleToogle(2)}} className={`${toogleTab===2 && "text-home-color scale-110 lg:scale-125 duration-300 font-semibold text-shadow"} bg-white rounded-full lg:border-none shadow-lg lg:shadow-none text-sm lg:text-base px-5 py-2 mb-2 cursor-pointer`}>{lang==="eng"?"Update":"আপডেট"}</div>
        <div onClick={()=>{hangleToogle(3)}} className={`${toogleTab===3 && "text-home-color scale-110 lg:scale-125 duration-300 font-semibold text-shadow"} bg-white rounded-full lg:border-none shadow-lg lg:shadow-none text-sm lg:text-base px-5 py-2 mb-2 cursor-pointer`}>{lang==="eng"?"Rewards":"পুরস্কার"}</div>
        <div onClick={()=>{hangleToogle(4)}} className={`${toogleTab===4 && "text-home-color scale-110 lg:scale-125 duration-300 font-semibold text-shadow"} bg-white rounded-full lg:border-none shadow-lg lg:shadow-none text-sm lg:text-base px-5 py-2 mb-2 cursor-pointer`}>{lang==="eng"?"FAQ":"এফএকিউ"}</div>
        <div onClick={()=>{hangleToogle(5)}} className={`${toogleTab===5 && "text-home-color scale-110 lg:scale-125 duration-300 font-semibold text-shadow"} bg-white rounded-full lg:border-none shadow-lg lg:shadow-none text-sm lg:text-base px-5 py-2 mb-2 cursor-pointer`}>{lang==="eng"?"Discussion":"আলোচনা"}</div>
      </div>
      </Fade>

    {toogleTab===0 && <Slide direction='right' triggerOnce><Overview/></Slide>}
    {toogleTab===1 && <Slide direction='right' triggerOnce><About/></Slide>}
    {toogleTab===2 && <Slide direction='right' triggerOnce><Update/></Slide>}
    {toogleTab===3 && <Slide direction='right' triggerOnce><Reward/></Slide>}
    {toogleTab===4 && <Slide direction='right' triggerOnce><Faq/></Slide>}
    {toogleTab===5 && <Slide direction='right' triggerOnce><Discussion/></Slide>}
    </div>
  )
}

export default ProductTabs;
