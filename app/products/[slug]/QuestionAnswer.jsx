"use client";
import { useState } from "react";
import { AnswerIcon } from "@/public/assets/images/icons/svg/AnswerIcon";
import { QuestionIcon } from "@/public/assets/images/icons/svg/QuestionIcon";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";

const allQuestions = [
  {
    id: "1",
    title: "কালো কালারের পাওয়া যাবে?",
    author: "Rahman",
    date: "18 Feb 2023",
    answer: {
      title:
        "দুঃখিত স্যার, বর্তমানে আমাদের কাছে কালো কালারটি এভেইলেবল নেই, ২ সাপ্তাহ পরে আমাদের সাথে যোগাযোগ করবেন",
      author: "Sototastall",
      date: "20 Feb 2023",
    },
  },
  {
    id: "2",
    title: "গতকাল দেখলাম ২২ হাজার টাকা, আজ ২৮ হাজার টাকা কেন? ভাই",
    author: "Rahman",
    date: "30 Jan 2023",
    answer: {
      title: "অফার শেষ, তাই এখন রেগুলার প্রাইসে সেল হচ্ছে",
      author: "Sototastall",
      date: "2 Feb 2023",
    },
  },
  {
    id: "3",
    title:
      "কিছু তথ্য জানতে চাইঃ  1) charge কতখন থাকে?  ২) কতখন ভিডিও রেকর্ড করা যায়?",
    author: "Kamal",
    date: "30 Jan 2023",
    answer: {
      title:
        "GO 2's charging time is 35 minutes. When used with the Charge Case, GO 2 can be used for 150 minutes under 1080p30 Basic stabilization video settings.",
      author: "Sototastall",
      date: "2 Feb 2023",
    },
  },
  {
    id: "4",
    title: "ওয়ারেন্টি সেবা কোথা থেকে নেয়া যাবে???",
    author: "Kuddus",
    date: "30 Jan 2023",
    answer: {
      title: "1000fix service Center theke.",
      author: "Sototastall",
      date: "2 Feb 2023",
    },
  },
  {
    id: "5",
    title: "How long it could capture video with full charge? Thanks",
    author: "Babu",
    date: "30 Jan 2023",
    answer: {},
  },
];

export const QuestionAnswer = ({ questions }) => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div className="question-answer mb-8">
      <div className="flex justify-between items-center">
        <h4 className="text-2xl font-bold font-title text-slate-900">
          এই প্রডাক্ট সম্পর্কে প্রশ্ন ও উত্তর (2658)
        </h4>
        <button
          className="w-[48px] h-[48px] bg-white rounded-full border-2 border-[#E2E8F0] flex justify-center items-center"
          onClick={() => setIsSearch(true)}
        >
          <FiSearch size={24} />
        </button>
      </div>
      <div
        className={`w-full question-search my-12 flex items-center relative ${
          isSearch ? "block" : "hidden"
        }`}
      >
        <input
          type="text"
          placeholder="এই প্রডাক্ট সম্পর্কে সার্চ করুন"
          className="h-[3rem] w-[35rem] border-2 border-[#E2E8F0] focus:border-primary focus:outline-none rounded-full py-3 px-4"
        />
        <Image
          onClick={() => setIsSearch(false)}
          src={`/assets/images/icons/close-icon.png`}
          alt="close icon"
          width={0}
          height={0}
          sizes="32px"
          className="w-[32px] h-[32px] ml-6"
        />
      </div>
      <div className="flex justify-between my-8">
        <textarea
          className="h-[3rem] w-[25.75rem] border-2 border-[#E2E8F0] focus:border-primary focus:outline-none rounded-lg py-3 px-4"
          type="text"
          placeholder="প্রডাক্ট সম্পর্কে আপনার প্রশ্ন লিখুন "
        />

        <div className="product-actions flex justify-center items-center gap-2">
          <button className="primary-btn w-[12.25rem]">
            প্রশ্ন জিজ্ঞাস করুন
          </button>
        </div>
      </div>
      {allQuestions.map((question) => (
        <div key={question.id} className="mb-2 bg-[#F8FAFC] rounded-lg p-6">
          <div className="flex justify-start">
            <div className="icon-container">
              <QuestionIcon />
            </div>
            <div className="icon-container pl-5">
              <p className="font-bold">{question.title}</p>
              <p className="text-slate-500">
                {question.author} | {question.date}
              </p>
            </div>
          </div>
          {question.answer?.title ? (
            <div className="flex justify-start mt-3">
              <div className="icon-container">
                <AnswerIcon />
              </div>
              <div className="icon-container pl-5">
                <p className="font-bold">{question.answer.title}</p>
                <p className="text-slate-500">
                  {question.answer.author} | {question.answer.date}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};
