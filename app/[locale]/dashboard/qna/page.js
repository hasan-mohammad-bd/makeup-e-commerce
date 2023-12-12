"use client";
import QNAItems from "@/components/QNAItems";
import { useSelector } from "react-redux";
import NestedPageTitle from "../_components/NestedPageTitle";

export default function QNAPage() {
  const { translations } = useSelector((state) => state.common);

  return (
    <div className=" md:py-6">
      <NestedPageTitle
        title={translations["questions-and-answers"] || "প্রশ্ন ও উত্তর"}
        href={"/dashboard"}
      />
      <QNAItems />
    </div>
  );
}
