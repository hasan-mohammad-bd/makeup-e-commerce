"use client";
import { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import SupportTicketCard from "./SupportTicketCard";
import NoItems from "../_components/NoItems";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useGetSupportTicketQuery } from "@/store/api/supportTicketAPI";
import { getCountByKeyNotValue, getCountByKeyValue } from "@/utils/items-count";
import ItemsListLoader from "@/components/elements/loaders/ItemsListLoader";
import { useSelector } from "react-redux";
import NestedPageTitle from "../_components/NestedPageTitle";

export default function SupportTicket() {
  const { locale } = useParams();
  const [selectedTab, setSelectedTab] = useState("running");
  const { data, isLoading } = useGetSupportTicketQuery({ locale });
  const { translations } = useSelector((state) => state.common);
  const supportTickets = data?.data || [];
  let filteredTickets = [];
  if (selectedTab === "Completed") {
    filteredTickets = supportTickets.filter(
      (ticket) => ticket?.status === "Completed"
    );
  } else {
    filteredTickets = supportTickets.filter(
      (ticket) => ticket?.status !== "Completed"
    );
  }
  return (
    <div className="">
      <div className="md:flex justify-between items-center">
			<NestedPageTitle
        title={translations["support-ticket"] || "সাপোর্ট টিকিট"}
        href={"/dashboard"}
      />
        {
          <Link
            href={"/dashboard/support-ticket/new"}
            className="text-secondary-700 mr-3 md:mr-10 mt-3 md:mt-10 hidden md:inline font-bold border border-secondary-700 py-2 px-3 rounded-lg active:scale-95 cursor-pointer"
          >
            <HiPlus className="font-bold" />{" "}
            {translations["new-ticket"] || "নতুন টিকিট"}
          </Link>
        }
      </div>
			<div className="content px-3 lg:px-10">
			<div className="flex items-center gap-4 border-b md:border-t-0 border-slate-300">
        <button
          className={`font-title bg-transparent box-border py-3 border-b-2 ${
            selectedTab === "running" ? "border-primary" : "border-transparent"
          }`}
          onClick={() => setSelectedTab("running")}
        >
          <span>
            {translations["running-ticket"] || "রানিং টিকিট"}(
            {getCountByKeyNotValue(supportTickets, "status", "Completed")})
          </span>
        </button>
        <button
          className={`font-title bg-transparent box-border py-3 border-b-2 ${
            selectedTab === "Completed"
              ? "border-primary"
              : "border-transparent"
          }`}
          onClick={() => setSelectedTab("Completed")}
        >
          <span className="capitalize">
            {translations["done"] || "সম্পন্ন হয়েছে"} (
            {getCountByKeyValue(supportTickets, "status", "Completed")})
          </span>
        </button>
      </div>
      {isLoading ? (
        <div className="py-4">
          <ItemsListLoader itemHeight={110} noImage={true} viewBoxWidth={900} />
        </div>
      ) : (
        <div className="support-tickets pt-4">
          {filteredTickets?.length ? (
            filteredTickets.map((ticket) => (
              <SupportTicketCard key={ticket.id} ticket={ticket} />
            ))
          ) : (
            <NoItems title={"কোন টিকিট নেই"} />
          )}
					        {
          <Link
            href={"/dashboard/support-ticket/new"}
            className="text-white z-10 md:hidden fixed bottom-4 right-3 font-bold border bg-secondary-700 py-2 px-3 rounded-lg active:scale-95 cursor-pointer"
          >
            <HiPlus className="font-bold" />{" "}
            {translations["new-ticket"] || "নতুন টিকিট"}
          </Link>
        }
        </div>
      )}
			</div>


			
    </div>
  );
}
