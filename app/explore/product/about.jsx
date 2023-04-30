import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const { lang } = useSelector((state) => state?.language);
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-10 p-10 rounded-xl shadow-md bg-white mb-5">
      <div className="text-lg lg:text-2xl">{lang==="eng"?"Address":"ঠিকানা"}</div>
      <div className="w-1/3 text-sm lg:text-base pb-5">
        {lang==="eng"?"HEADQUARTERS":"হেডকোয়ার্টার"} <br />
        
        {lang==="eng"?"12381 Wilshire Boulevard, Suite 105":"১২৩৮১ উইলশায়ার বুলেভার্ড, স্যুট ১০৫"} <br />
        {lang==="eng"?"Los Angeles, CA 90025":"লস এঞ্জেলেস, সিএ ৯০০২৫"}
      </div>
      <div className="lg:text-2xl">{lang==="eng"?"Description":"বর্ণনা"}</div>
      <div className="lg:text-2xl pb-5">{lang==="eng"?"Valuation: $5M":"মূল্যায়ন: ৫ মিলিয়ন ডলার."}</div>
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
        For instance, in some styles of writing, particularly journalistic
        styles, a paragraph can be just one sentence long. Ultimately, a
        paragraph is a sentence or group of sentences that support one main
        idea. In this handout, we will refer to this as the “controlling idea,”
        because it controls what happens in the rest of the paragraph. <br />{" "}
        How do I decide what to put in a paragraph? Before you can begin to
        determine what the composition of a particular paragraph will be, you
        must first decide on an argument and a working thesis statement for your
        paper. What is the most important idea that you are trying to convey to
        your reader? The information in each paragraph must be related to that
        idea. In other words, your paragraphs should remind your reader that
        there is a recurrent relationship between your thesis and the
        information in each paragraph. A working thesis functions like a seed
        from which your paper, and your ideas, will grow. The whole process is
        an organic one—a natural progression from a seed to a full-blown paper
        where there are direct, familial relationships between all of the ideas
        in the paper.
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
        উদাহরণস্বরূপ, লেখার কিছু শৈলীতে, বিশেষ করে সাংবাদিকতা
        শৈলী, একটি অনুচ্ছেদ শুধুমাত্র একটি বাক্য দীর্ঘ হতে পারে। শেষ পর্যন্ত, ক
        অনুচ্ছেদ হল একটি বাক্য বা বাক্যের গ্রুপ যা একটি প্রধানকে সমর্থন করে
        ধারণা. এই হ্যান্ডআউটে, আমরা এটিকে "নিয়ন্ত্রক ধারণা" হিসাবে উল্লেখ করব।
        কারণ এটি অনুচ্ছেদের বাকি অংশে যা ঘটবে তা নিয়ন্ত্রণ করে। <br />
        একটি অনুচ্ছেদে কী রাখতে হবে তা আমি কীভাবে সিদ্ধান্ত নেব? আপনি শুরু করতে পারেন আগে
        একটি নির্দিষ্ট অনুচ্ছেদের রচনাটি কী হবে তা নির্ধারণ করুন, আপনি
        প্রথমে আপনার জন্য একটি যুক্তি এবং একটি কার্যকরী থিসিস বিবৃতি সম্পর্কে সিদ্ধান্ত নিতে হবে
        কাগজ আপনি বোঝাতে চেষ্টা করছেন যে সবচেয়ে গুরুত্বপূর্ণ ধারণা কি
        আপনার পাঠক? প্রতিটি অনুচ্ছেদের তথ্য অবশ্যই এর সাথে সম্পর্কিত হতে হবে
        ধারণা. অন্য কথায়, আপনার অনুচ্ছেদগুলি আপনার পাঠককে মনে করিয়ে দেবে
        আপনার থিসিস এবং এর মধ্যে একটি পুনরাবৃত্ত সম্পর্ক রয়েছে
        প্রতিটি অনুচ্ছেদে তথ্য। একটি কাজ থিসিস একটি বীজ মত কাজ করে
        যা থেকে আপনার কাগজ, এবং আপনার ধারনা বৃদ্ধি পাবে। পুরো প্রক্রিয়াটি হল
        একটি জৈব একটি - একটি বীজ থেকে একটি পূর্ণ প্রস্ফুটিত কাগজ একটি প্রাকৃতিক অগ্রগতি
        যেখানে সমস্ত ধারণার মধ্যে প্রত্যক্ষ, পারিবারিক সম্পর্ক রয়েছে
        কাগজে।
      </div>
      }
    </div>
  );
};

export default About;
