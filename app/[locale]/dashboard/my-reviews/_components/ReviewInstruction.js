import Modal from "@/components/elements/Modal";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import React from "react";
import { useSelector } from "react-redux";

const ReviewInstruction = ({ isActive, setIsActive }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { translations } = useSelector((state) => state.common);
  const pageContent = (
    <div className="text-[#334155] ml-2">
      <div>
        <h3 className="font-semibold text-4">
          {translations["necessary-steps"] || "যা করবেন"}:
        </h3>
        <ul className="list-outside list-disc whitespace-pre-line ml-6 leading-7 mt-1">
          <li>
            {translations["focus-on-product"] ||
              "শুধুমাত্র পণ্য এবং এর বৈশিষ্ট্যগুলিতে ফোকাস করুন।"}
          </li>
          <li>
            {translations["discuss-about-the-product"] ||
              "আপনার নিজের ব্যক্তিগত অভিজ্ঞতার উপর ভিত্তি করে পর্যালোচনা করুন।"}
          </li>
          <li>
            {translations["review-feeling"] ||
              "আমাদের বলুন কেন আপনি এটি সম্পর্কে একটি নির্দিষ্ট উপায় অনুভব করেন৷"}
          </li>
        </ul>
      </div>
      <div className="mt-6 ">
        <h3 className="font-semibold text-4">
          {translations["what-not-to-do"] || "যা করবেন না"}:
        </h3>
        <ul className="list-outside list-disc whitespace-pre-line ml-6 leading-7 mt-1">
          <li>
            {translations["dont-share"] ||
              "পণ্যের সাথে অপ্রাসঙ্গিক কিছু শেয়ার করবেন না।"}
          </li>
          <li className="">
            {translations["dont-mislead"] ||
              "প্রতারণামূলক, মিথ্যা, বিভ্রান্তিকর বা প্রতারণামূলক তথ্য অন্তর্ভুক্ত করবেন না।"}
          </li>
          <li>
            {translations["use-good-language"] ||
              "অশ্লীল, মানহানিকর, হুমকিমূলক বা বৈষম্যমূলক ভাষা ব্যবহার করবেন না।"}
          </li>
          <li>
            {translations["dont-share-other-info"] ||
              "কারো ব্যক্তিগত তথ্য শেয়ার করবেন না।"}
          </li>
          <li>
            {translations["unauthorized-tread-mark"] ||
              "অননুমোদিত ট্রেডমার্ক বা কপিরাইটযুক্ত সামগ্রী অন্তর্ভুক্ত করবেন না।"}
          </li>
        </ul>
      </div>
    </div>
  );

  return isMobile ? (
    <Modal
      showModal={isActive}
      setShowModal={setIsActive}
      // title={translations["select-variant"] || "নির্বাচন করুন"}
      class
    >
      {pageContent}
    </Modal>
  ) : (
    <div className="p-6 w-[578px] shadow-top text-[#334155] absolute right-[-40px] top-10 rounded-xl bg-white">
      <div className="absolute top-0 right-6 -z-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-6 h-6 bg-white"></div>
      {pageContent}
    </div>
  );
};

export default ReviewInstruction;
