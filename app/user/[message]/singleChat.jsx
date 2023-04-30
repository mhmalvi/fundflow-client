'use client'
import Image from "next/image";
import Link from 'next/link';
import Avatar from "../../../public/assets/images/avatar.png";
import { ArrowLeftWhite, Menu, Search, Send } from "../../shared/Icons";
import Chatperson from "../../shared/jsondata/chatperson.json";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SingleChat = ({activeChat}) => {
  const pathname = usePathname();
  const msgid = pathname.split("/user/")
  console.log("when route ", msgid);
  const [chatData, setChatData] = useState()
  
  useEffect(() => {
    if (activeChat) {
      setChatData(activeChat);
    } else {
      setChatData(Chatperson?.find(wtf=>wtf.id==msgid[1]))
      console.log("chat data",chatData);
    }
  }, [activeChat]);
  
  return (
    <div className="w-full flex flex-col">
      <div className="relative h-[100vh] lg:h-[76vh] bg-admin-secondary-color lg:rounded-tr-2xl lg:rounded-tl-2xl p-8">
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center">
            <Link href={"../user"}>
              <ArrowLeftWhite className="lg:hidden mr-2" />
            </Link>
            <Image src={Avatar} alt="img" className="w-14 h-14 mr-3" />
            <div>
              <div className="text-xl text-white font-semibold">
                {chatData?.name}
              </div>
              <div className="text-sm text-white">3 new messages</div>
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <Search className="text-2xl text-white" />
            <Menu className="text-2xl" />
          </div>
        </div>
        <div className="w-full border-b border-gray-600"></div>

        <div className="my-2">
          <div className="bg-admin-color text-white inline-block rounded-3xl py-2 px-4">
            <div>Hi. How are you?</div>
          </div>
          <div className="text-zinc-400 text-sm pl-5">1 hour ago</div>
        </div>

        <div className="my-2">
          <div className="bg-admin-color text-white inline-block rounded-3xl py-2 px-4">
            <div>
              I would like to invest in a particular product. Can you help me.
            </div>
          </div>
          <div className="text-zinc-400 text-sm pl-5">1 hour ago</div>
        </div>

        <div className="my-2 float-right">
          <div className="bg-admin-color text-white inline-block rounded-3xl py-2 px-4">
            <div>Sure. What type of product are you interested in?</div>
          </div>
          <div className="text-zinc-400 text-sm pl-5">1 hour ago</div>
        </div>
      </div>
      <div className="w-full border-b border-gray-600"></div>
      <div className="bg-admin-secondary-color flex items-center  lg:rounded-br-2xl  lg:rounded-bl-2xl py-2">
        <textarea
          name=""
          id=""
          cols="30"
          rows="3"
          className="w-10/12 bg-transparent text-white outline-none px-4"
          placeholder="type your reply..."
        ></textarea>
        <Send className="text-3xl mx-auto" />
      </div>
    </div>
  );
}

export default SingleChat