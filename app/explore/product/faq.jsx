import React from "react";
import Accordion from "../../shared/Accordion/Accordion";
import { useSelector } from "react-redux";

const Faq = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div className="max-w-screen-xl px-3 mx-auto mt-10 p-10 rounded-xl shadow-md bg-white mb-5">
      <div className="text-xl lg:text-2xl pb-5">{lang==="eng"?"Frequently Asked Questions":"সচরাচর জিজ্ঞাসিত প্রশ্নাবলী (এফএকিউ)"}</div>
      <div>
        <Accordion 
          title={lang==="eng"?"1. Why is my order late?":"১. আমার অর্ডার দেরী কেন?"} 
          content={lang==="eng"? 
          `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since.
          </br>
          </br>
          Listen to what they say about you
          </br>
          Randomised words which.
          </br>
          Internet tend to repeat predefined chunks
          </br>
          Automate multiple scenarios 
          </br>
          </br>
          <b>Do you currently have vacancies?</b>
          </br>
          When an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five cedfgfnturies, but alsjkjo the leap into electronic typesetting.
          `
          :
          `লোরেম ইপসাম ছড়িয়ে চলা লেখার প্রিন্টিং এবং টাইপসেটিং শিল্পের একটি ভুল লেখা যা ইন্ডাস্ট্রি মান কিংবা স্ট্যান্ডার্ড টেক্সট হিসাবে ব্যবহৃত হয়।
          </br>
          </br>
          তারা আপনার সম্পর্কে কি বলে তা শুনুন
          </br>
          এলোমেলো শব্দ যা.
          </br>
          ইন্টারনেট পূর্বনির্ধারিত অংশগুলি পুনরাবৃত্তি করতে থাকে
          </br>
          একাধিক পরিস্থিতিতে স্বয়ংক্রিয়
          </br>
          </br>
          <b>আপনার কি বর্তমানে শূন্যপদ আছে?</b>
          </br>
          যখন একটি অজানা প্রিন্টগ্যালি টাইপ এবং এটি একটি টাইপ নমুনা বই তৈরি করতে scrambled. এটি কেবল পাঁচটি সিডএফজিএফএনচুরি নয়, ইলেকট্রনিক টাইপসেটিংয়ে লাফিয়েও টিকে আছে।
          `}
           />
        <Accordion
          title={lang==="eng"? "2. Can I cancel or change my order?":"২. আমি কি আমার অর্ডার বাতিল বা পরিবর্তন করতে পারি?"}
          content={lang==="eng"? 
          "When an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five cedfgfnturies, but alsjkjo the leap into electronic typesetting."
          :
          "যখন একটি অজানা প্রিন্টগ্যালি টাইপ এবং এটি একটি টাইপ নমুনা বই তৈরি করতে scrambled. এটি কেবল পাঁচটি সিডএফজিএফএনচুরি নয়, ইলেকট্রনিক টাইপসেটিংয়ে লাফিয়েও টিকে আছে।"}
        />
        <Accordion
          title={lang==="eng"? "3. How can I return an item purchased online?":"৩. আমি কিভাবে অনলাইনে কেনা একটি আইটেম ফেরত দিতে পারি?"}
          content={lang==="eng"?
          `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`
          :
          `<p>যখন একটি অজানা প্রিন্টগ্যালি টাইপ এবং এটি একটি টাইপ নমুনা বই তৈরি করতে এটি কেবল পাঁচটি সিডএফজিএফএনচুরি নয়, ইলেকট্রনিক টাইপসেটিংয়ে লাফিয়েও টিকে আছে।</p>
          </br>
          <p>যখন একটি অজানা প্রিন্টগ্যালি টাইপ এবং এটি একটি টাইপ নমুনা বই তৈরি করতে এটি কেবল পাঁচটি সিডএফজিএফএনচুরি নয়, ইলেকট্রনিক টাইপসেটিংয়ে লাফিয়েও টিকে আছে।</p>
          </br>
          <p>যখন একটি অজানা প্রিন্টগ্যালি টাইপ এবং এটি একটি টাইপ নমুনা বই তৈরি করতে এটি কেবল পাঁচটি সিডএফজিএফএনচুরি নয়, ইলেকট্রনিক টাইপসেটিংয়ে লাফিয়েও টিকে আছে।</p>`
          }
        />
      </div>
    </div>
  );
};

export default Faq;
