"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { getBdFormattedDate, getFormattedDate } from "@/utils/format-date";
import noImage from "@/public/assets/images/no-image.png";
import { get } from "react-hook-form";
import { useSelector } from "react-redux";


function SupportTicketCard({ ticket }) {
	const { translations } = useSelector((state) => state.common);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-slate-900 p-4 rounded-lg bg-white border border-slate-200 my-4">
      <div className="flex justify-between items-center">
        <h3>{getFormattedDate(ticket.created_at)}</h3>
        <span className="text-blue-500">#{ticket.id}</span>
      </div>
      <div className="border-b border-slate-300 my-3"></div>

      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-1 justify-between w-full items-start">
          <div className="">
            <h3 className="text-slate-500 mb-2">{translations["order-number"] || "অর্ডার নাম্বার"}:</h3>
            <h3>{ticket.order.invoice_no}</h3>
          </div>

          <div className="md:mr-16">
            <h3 className="text-slate-500 mb-2  capitalize">{translations["type-of-problem"] || "সমস্যার ধরণ"}:</h3>
            <h3>{ticket.ticketType.name}</h3>
          </div>
        </div>
        <div className="flex mt-2 md:mt-0 pr-6 md:pr-10 flex-1 justify-between w-full items-center md:items-start">
          <div className="col-span-2 md:ml-16  justify-between items-baseline">
            <h3 className="text-slate-500  mb-2">{translations["subject"] || "সাবজেক্ট"}:</h3>
            <h3>{ticket.title}</h3>
          </div>

          <div className="flex justify-end items-end">
            <button
              className="icon-btn group/toggle-btn"
              onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
            >
              {isOpen ? (
                <BsChevronUp
                  size={24}
                  className="group-hover/toggle-btn:text-primary"
                />
              ) : (
                <BsChevronDown
                  size={24}
                  className="group-hover/toggle-btn:text-primary"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen ? (
        <>
          <div className="ticket-content bg-slate-100 rounded-lg py-4 px-5 my-5">
            <p>{ticket.description}</p>
            {ticket.note && (
              <div className="relative bg-slate-200 rounded-lg p-5 mt-5">
                <div className="absolute top-0 left-10 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-5 h-5 bg-slate-200"></div>
                <p>{ticket.note}</p>
                <p className="text-right">
                  {getBdFormattedDate(ticket.updated_at)}
                </p>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            {ticket.images.map((image, index) => (
              <Image
                key={index}
                src={image || noImage}
                height={80}
                width={80}
                alt="product-img"
                className="h-20 w-20 object-contain"
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default SupportTicketCard;
