"use client";
import { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import SupportTicketCard from "./SupportTicketCard";
import NoItems from "../NoItems";
import Link from "next/link";
import { useGetSupportTicketQuery } from "@/store/features/api/supportTicketAPI";

export default function page() {
  const [selectedTab, setSelectedTab] = useState("running");
  const { data } = useGetSupportTicketQuery();
  const supportTickets = data?.data || [];
  console.log(supportTickets);

  return (
    <div className="px-10 py-6">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-slate-900 font-bold text-2xl">সাপোর্ট টিকিট</h2>
        <Link
          href={"/dashboard/support-ticket/new"}
          className="text-secondary-700 font-bold border border-secondary-700 py-2 px-3 rounded-lg active:scale-95 cursor-pointer"
        >
          <HiPlus className="font-bold" /> নতুন টিকিট
        </Link>
      </div>
      <div className="flex items-center mt-4 gap-4 border-b border-slate-300">
        <button
          className={`font-title bg-transparent box-border py-2 border-b-4 ${
            selectedTab === "running" ? "border-primary" : "border-transparent"
          }`}
          onClick={() => setSelectedTab("running")}
        >
          <span>রানিং টিকিট (১)</span>
        </button>
        <button
          className={`font-title bg-transparent box-border py-2 border-b-4 ${
            selectedTab === "completed"
              ? "border-primary"
              : "border-transparent"
          }`}
          onClick={() => setSelectedTab("completed")}
        >
          <span>সম্পন্ন হয়েছে (২)</span>
        </button>
      </div>
      <div className="support-tickets pt-4">
        <SupportTicketCard />
        <SupportTicketCard />
        {/* <NoItems title={"কোন টিকিট নেই"} /> */}
      </div>
    </div>
  );
}
