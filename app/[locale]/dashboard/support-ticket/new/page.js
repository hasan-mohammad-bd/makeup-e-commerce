"use client";

import { Link } from "@/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { HiArrowLongLeft } from "react-icons/hi2";
import TicketImagesUpload from "./TicketImagesUpload";

import {
  useAddSupportTicketMutation,
  useGetSupportTicketTypesQuery,
} from "@/store/api/supportTicketAPI";
import { useGetOrdersQuery } from "@/store/api/orderAPI";
import { useParams, useRouter } from "next/navigation";
import NestedPageTitle from "../../_components/NestedPageTitle";
import { useSelector } from "react-redux";
import TicketImagesUploadMobile from "./TicketImagesUpdoadMobile";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function AddSupportTicket() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { translations } = useSelector((state) => state.common);
  const { locale } = useParams();
  const router = useRouter();
  const [imageFiles, setImageFiles] = useState([]);
  const { data: ordersData } = useGetOrdersQuery();
  const myOrders = ordersData?.data || [];
  const { data } = useGetSupportTicketTypesQuery({ locale });
  const ticketTypes = data?.data || [];

  const [addSupportTicket] = useAddSupportTicketMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUserUpdate = (data) => {
    const { orderNumber, problemType, subject, msg } = data;
    const formData = new FormData();
    if (imageFiles.length) {
      imageFiles.forEach((image) => {
        formData.append("images[]", image);
      });
    }
    formData.append("order_id", orderNumber);
    formData.append("title", subject);
    formData.append("description", msg);
    formData.append("support_ticket_type_id", problemType);

    addSupportTicket(formData)
      .unwrap()
      .then((response) => {
        // Handle the successful response if necessary
        console.log(response);
        toast.success("Support ticket added successfully!");
        router.push("/dashboard/support-ticket");
      })
      .catch((error) => {
        // Handle the error if necessary
        toast.error("Failed to add support ticket");
        console.log(error);
      });
  };

  return (
    <div className="">
      <NestedPageTitle
        title={
          translations["create-support-ticket"] || "Create Support Ticket"
        }
        href={"/dashboard/support-ticket"}
        buttonText={translations["go-back"] || "Go Back"}
      />

      <div className="content py-3 px-3 md:px-10 md:py-6">
        <form className="basis-3/5" onSubmit={handleSubmit(handleUserUpdate)}>
          <div className="grid lg:grid-cols-2 lg:gap-8">
            <div className="form-control mb-4">
              <label className="block text-base text-slate-900 mb-2 mt-3 md:mt-0">
                {translations["order-number"] || "Order Number"}
              </label>

              <select
                className="select w-full h-12 text-base font-title font-normal px-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                {...register("orderNumber", {
                  required: "Order number is Required",
                })}
              >
                <option disabled selected>
                  {translations["select-order-number"] ||
                    "Select Order Number"}
                </option>
                {myOrders.map((order) => (
                  <option key={order.id} value={order.id}>
                    {order.invoice_no}
                  </option>
                ))}
              </select>
              {errors.orderNumber && (
                <p className="errorMsg">{errors.orderNumber.message}</p>
              )}
            </div>
            <div className="form-control mb-4">
              <label className="block text-base text-slate-900 capitalize mb-2">
                {translations["type-of-problem"] || "Type of Problem"}
              </label>

              <select
                className="select w-full h-12 text-base font-title font-normal px-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                {...register("problemType", {
                  required: "Problem type is Required",
                })}
              >
                <option disabled selected className="">
                  {translations["select-problem-type"] ||
                    "Select Problem Type"}
                </option>
                {ticketTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
              {errors.problemType && (
                <p className="errorMsg">{errors.problemType.message}</p>
              )}
            </div>
          </div>
          <div className="form-control mb-4">
            <label className="block text-base text-slate-900 mb-2">
              {translations["subject"] || "Subject"}
            </label>
            <input
              type="text"
              name="subject"
              placeholder={translations["enter-subject"] || "Enter Subject"}
              {...register("subject", {
                required: "Subject is required.",
              })}
            />
            {errors.subject && (
              <p className="errorMsg">{errors.subject.message}</p>
            )}
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-8">
            <div className="form-control mb-4">
              <label className="block text-base text-slate-900 mb-2 capitalize">
                {translations["message"] || "Message"}
              </label>
              <textarea
                className="h-[148px]"
                type="text"
                name="msg"
                placeholder={
                  translations["enter-your-message"] || "Enter Your Message"
                }
                {...register("msg", {
                  required: "Message is required.",
                })}
              />
              {errors.msg && <p className="errorMsg">{errors.msg.message}</p>}
            </div>
            <div className="form-control mb-4">
              <label className="block text-base text-slate-900 mb-2">
                {translations["attachment-file"] || "Attachment File"} (jpg, jpeg,
                png and max-size: 2MB)
              </label>
              {isMobile ? (
                <TicketImagesUploadMobile setImageFiles={setImageFiles} />
              ) : (
                <TicketImagesUpload setImageFiles={setImageFiles} />
              )}
            </div>
          </div>
          <div className="form-control my-5">
            <label></label>
            <button
              type="submit"
              className="font-bold bg-primary py-3 w-full md:w-fit text-white px-4 active:scale-95"
            >
              {translations["submit-ticket"] || "Submit Ticket"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
