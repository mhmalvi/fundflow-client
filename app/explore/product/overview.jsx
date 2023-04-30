import Image from "next/image";
import React from "react";
import Image3 from "../../../public/assets/images/overview.png"
import { useSelector } from "react-redux";

const Overview = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-10 p-10 rounded-xl shadow-md bg-white mb-5">
      <div className="text-lg lg:text-2xl">
        {lang==="eng"?
        "What this handout is about"
        :
        "এই হ্যান্ডআউট সম্পর্কে কি"}
      </div>
      <div className="text-sm lg:text-base">
        {lang==="eng"?
        "This handout will help you understand how paragraphs are formed, how to develop stronger paragraphs, and how to completely and clearly express your ideas. What is a paragraph?"
        :
        "এই হ্যান্ডআউট আপনাকে বুঝতে সাহায্য করবে কিভাবে অনুচ্ছেদ গঠিত হয়, কিভাবে হয় আরও শক্তিশালী অনুচ্ছেদ তৈরি করুন এবং কীভাবে সম্পূর্ণ এবং স্পষ্টভাবে প্রকাশ করবেন তোমার মতামত. একটি অনুচ্ছেদ কি?"}
      </div>
      <Image src={Image3} alt="img" className="w-full my-5" />
      {lang==="eng"?
      <div className="text-sm lg:text-base">
        Paragraphs are the building blocks of papers. Many students define
        paragraphs in terms of length: a paragraph is a group of at least five
        sentences, a paragraph is half a page long, etc. In reality, though, the
        unity and coherence of ideas among sentences is what constitutes a
        paragraph. A paragraph is defined as “a group of sentences or a single
        sentence that forms a unit” (Lunsford and Connors 116). Length and
        appearance do not determine whether a section in a paper is a paragraph.{" "}
        <br />
        <br />
        For instance, in some styles of writing, particularly journalistic
        styles, a paragraph can be just one sentence long. Ultimately, a
        paragraph is a sentence or group of sentences that support one main
        idea. In this handout, we will refer to this as the “controlling idea,”
        because it controls what happens in the rest of the paragraph. <br /><br />
        <b>
          {" "}
          do I decide what to put in a paragraph? Before you can begin to
          determine what the composition of a particular paragraph will be, you
          must first decide on an argument and a working thesis statement for
          your paper. What is the most important idea that you are trying to
          convey to your reader?
        </b><br /><br />
        How The information in each paragraph must be related to that idea. In
        other words, your paragraphs should remind your reader that there is a
        recurrent relationship between your thesis and the information in each
        paragraph. A working thesis functions like a seed from which your paper,
        and your ideas, will grow. The whole process is an organic one—a natural
        progression from a seed to a full-blown paper where there are direct,
        familial relationships between all of the ideas in the paper.
      </div>
      :
      <div className="text-sm lg:text-base">
        অনুচ্ছেদ হল কাগজপত্রের বিল্ডিং ব্লক। অনেক ছাত্র সংজ্ঞায়িত
        দৈর্ঘ্যের পরিপ্রেক্ষিতে অনুচ্ছেদ: একটি অনুচ্ছেদ কমপক্ষে পাঁচটির একটি গ্রুপ
        বাক্য, একটি অনুচ্ছেদ অর্ধেক পৃষ্ঠা দীর্ঘ, ইত্যাদি বাস্তবে, যদিও,
        বাক্যগুলির মধ্যে ধারণার ঐক্য এবং সংগতি হল একটি গঠন
        অনুচ্ছেদ একটি অনুচ্ছেদকে "বাক্যের একটি গ্রুপ বা একটি একক" হিসাবে সংজ্ঞায়িত করা হয়
        বাক্য যা একটি ইউনিট গঠন করে" (Lunsford এবং Connors 116)। দৈর্ঘ্য এবং
        চেহারা একটি কাগজের একটি বিভাগ একটি অনুচ্ছেদ কিনা তা নির্ধারণ করে না।
        <br />
        <br />
        উদাহরণস্বরূপ, লেখার কিছু শৈলীতে, বিশেষ করে সাংবাদিকতা
        শৈলী, একটি অনুচ্ছেদ শুধুমাত্র একটি বাক্য দীর্ঘ হতে পারে। শেষ পর্যন্ত, ক
        অনুচ্ছেদ হল একটি বাক্য বা বাক্যের গ্রুপ যা একটি প্রধানকে সমর্থন করে
        ধারণা. এই হ্যান্ডআউটে, আমরা এটিকে "নিয়ন্ত্রক ধারণা" হিসাবে উল্লেখ করব।
        কারণ এটি অনুচ্ছেদের বাকি অংশে যা ঘটবে তা নিয়ন্ত্রণ করে। <br /><br />
        <b>
          {" "}
          আমি কি একটি অনুচ্ছেদে কি রাখব তা কি ঠিক করব? আপনি শুরু করতে পারেন আগে
          একটি নির্দিষ্ট অনুচ্ছেদের রচনাটি কী হবে তা নির্ধারণ করুন, আপনি
          প্রথমে একটি যুক্তি এবং একটি কার্যকরী থিসিস বিবৃতি সম্পর্কে সিদ্ধান্ত নিতে হবে
          আপনার কাগজ। আপনি চেষ্টা করছেন যে সবচেয়ে গুরুত্বপূর্ণ ধারণা কি
          আপনার পাঠক বোঝাতে?
        </b><br /><br />
        কিভাবে প্রতিটি অনুচ্ছেদের তথ্য সেই ধারণার সাথে সম্পর্কিত হতে হবে। ভিতরে
        অন্য কথায়, আপনার অনুচ্ছেদগুলি আপনার পাঠককে মনে করিয়ে দেবে যে একটি আছে
        আপনার থিসিস এবং প্রতিটি তথ্যের মধ্যে পুনরাবৃত্ত সম্পর্ক
        অনুচ্ছেদ একটি কার্যকরী থিসিস একটি বীজের মতো কাজ করে যা থেকে আপনার কাগজ,
        এবং আপনার ধারনা, বৃদ্ধি হবে. পুরো প্রক্রিয়াটি একটি জৈব-একটি প্রাকৃতিক
        একটি বীজ থেকে একটি পূর্ণ বিকশিত কাগজে অগ্রগতি যেখানে সরাসরি আছে,
        কাগজের সমস্ত ধারণার মধ্যে পারিবারিক সম্পর্ক।
      </div>
      
      }
    </div>
  );
};

export default Overview;
