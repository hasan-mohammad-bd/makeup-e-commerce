"use client";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import { useSelector } from "react-redux";
import { useAddToNewsletterMutation } from "@/store/api/contactAPI";

const SubscriptionForm = ({ settings }) => {
  const [addToNewsLetter] = useAddToNewsletterMutation();
  const { translations } = useSelector((state) => state.common);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const newMessage = {
      email: data.email,
    };
    // console.log(newMessage);

    addToNewsLetter(newMessage)
      .unwrap()
      .then((response) => {
        // Handle the successful response if necessary
        toast.success("Thank you for subscribe us.");
        reset();
      })
      .catch((error) => {
        // Handle the error if necessary
        toast.error("Failed to subscribe");
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <div className="w-full md:w-[250px]">
          <input
            style={{
              border: `1px solid ${settings?.colors?.primary}`,
            }}
            className="rounded-none w-full placeholder:text-lg placeholder:text-slate-400 placeholder:font-bold"
            type="email"
            name="email"
            placeholder="Email Address"
            {...register("email", {
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
              required: "Email is required.",
            })}
          />
          <button
            className="inline-block px-4 py-1 border-none text-center bg-primary text-xl font-bold text-white w-full leading-[40px] mt-3"
            type="submit"
            style={{
              backgroundColor: settings?.colors?.primary,
              color: settings?.colors?.primary_text,
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
      {errors.email && <p className="errorMsg">{errors.email.message}</p>}
    </form>
  );
};

export default SubscriptionForm;
