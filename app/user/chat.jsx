'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Avatar from "../../public/assets/images/avatar.png";
import Chatperson from "../shared/jsondata/chatperson.json";
import SingleChat from "./[message]/singleChat"; 

const Chat = () => {
  const [activeChat, setActiveChat] = useState()

  const handleActiveChatScreen = (id) => {
    setActiveChat(Chatperson?.find(wtf=>wtf.id === id))
    // console.log(activeChat);
  }

  useEffect(() => {
    setActiveChat(Chatperson[0])
  }, [])
  
  return (
    <div className="w-full mx-auto lg:flex lg:mt-20 px-5 lg:px-0 lg:pl-5 text-white gap-5">
      <div className="hidden lg:block w-2/3">
        <SingleChat activeChat={activeChat}/>
      </div>

      {/* ALL CHATS LIST */}
      <div className="lg:w-1/3 lg:bg-admin-secondary-color lg:rounded-2xl lg:p-5">
        <div className="text-xl pb-2">Chats</div>
        <div className="lg:hidden lg:h-[70vh] overflow-y-auto my-5">
          {Chatperson?.map((person, i) => (
            <div key={i} className="cursor-pointer">
              <Link href={`./user/${person?.id}`}>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center">
                    <Image src={Avatar} alt="img" className="w-10 h-10 mr-3 ml-1" />
                    <div className="font-semibold">{person?.name}</div>
                  </div>
                  <div className="text-zinc-400 text-xs mr-2">
                    {person?.time}
                  </div>
                </div>
              </Link>
              <div className="w-full border-b border-gray-600"></div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block h-[70vh] overflow-y-auto my-5">
          {Chatperson?.map((person) => (
            <div onClick={()=>{handleActiveChatScreen(person?.id)}} key={person?.id} className="cursor-pointer">
              <div className={`${(activeChat?.id) === (person?.id) ? "bg-admin-color":""} flex flex-col justify-start hover:bg-admin-color py-3`}>
                <div className="flex items-center">
                  <Image src={Avatar} alt="img" className="w-10 h-10 mr-3 ml-1" />
                  <div className="font-semibold">{person?.name}</div>
                </div>
                <div className="flex justify-end text-zinc-400 text-xs mr-2">{person?.time}</div>
              </div>
              <div className="w-full border-b border-gray-600"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
