"use client";
import Image from "next/image";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AnswerIcon, QuestionIcon } from "@/components/elements/svg";
import { useParams, useSearchParams } from "next/navigation";
import { useGetProductQnaListQuery } from "@/store/features/api/productsQnaAPI";
import { getBdFormattedDate } from "@/utils/formatDate";
import Paginator from "@/components/elements/Paginator";

const QuestionAnswer = () => {
  const [isSearch, setIsSearch] = useState(false);
  const { product_id } = useParams();
  const searchParams = useSearchParams();

  const { data, isLoading } = useGetProductQnaListQuery(product_id);
  const questions = data?.data || [];
  const meta = data?.meta || {};
  // console.log(meta);
  // console.log(product_id);
  // console.log(questions);
  // console.log(data);

  if (isLoading) return null;

  return (
    <>
      <div className="question-answer mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold font-title text-slate-900">
            এই প্রডাক্ট সম্পর্কে প্রশ্ন ও উত্তর ({meta?.total || 0})
          </h2>
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
        {questions.map((question) => (
          <div key={question.id} className="mb-2 bg-[#F8FAFC] rounded-lg p-6">
            <div className="flex justify-start">
              <div className="icon-container">
                <QuestionIcon />
              </div>
              <div className="icon-container pl-5">
                <p className="font-bold">{question.questions}</p>
                <p className="text-slate-500">
                  {question?.customer || "Not Available"} |{" "}
                  {getBdFormattedDate(question.created_at)}
                </p>
              </div>
            </div>
            {question?.answer ? (
              <div className="flex justify-start mt-3">
                <div className="icon-container">
                  <AnswerIcon />
                </div>
                <div className="icon-container pl-5">
                  <p className="font-bold">{question.answer}</p>
                  <p className="text-slate-500">
                    Sototastall | {getBdFormattedDate(question.updated_at)}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex justify-end mb-10">
        <Paginator meta={meta} />
      </div>
    </>
  );
};

export default QuestionAnswer;
