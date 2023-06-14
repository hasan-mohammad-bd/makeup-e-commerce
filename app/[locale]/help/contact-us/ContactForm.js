"use client";

import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data, event) => {
    event.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully", data);
      // reset the form
      reset({
        name: "",
        email: "",
        subject: "",
        msg: "",
      });
    }

    if (!response.ok) {
      console.log("Error sending message");
    }
  };

  return (
    <form className="basis-3/5" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control mb-4">
        <label className="block text-base text-slate-900 mb-2">আপনার নাম</label>
        <input
          type="text"
          name="name"
          placeholder="নাম লিখুন"
          {...register("name", {
            required: "Name is required.",
          })}
        />
        {errors.name && <p className="errorMsg">{errors.name.message}</p>}
      </div>
      <div className="form-control mb-4">
        <label className="block text-base text-slate-900 mb-2">
          আপনার ইমেইল (যদি থাকে)
        </label>
        <input
          type="email"
          name="email"
          placeholder="ইমেইল লিখুন"
          {...register("email", {
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Email is not valid.",
            },
          })}
        />
        {errors.email && <p className="errorMsg">{errors.email.message}</p>}
      </div>
      <div className="form-control mb-4">
        <label className="block text-base text-slate-900 mb-2">সাবজেক্ট</label>
        <input
          type="text"
          name="subject"
          placeholder="সাবজেক্ট লিখুন"
          {...register("subject", {
            required: "Subject is required.",
          })}
        />
        {errors.subject && <p className="errorMsg">{errors.subject.message}</p>}
      </div>
      <div className="form-control mb-4">
        <label className="block text-base text-slate-900 mb-2">মেসেজ</label>
        <textarea
          className="h-[148px]"
          type="text"
          name="msg"
          placeholder="আপনার মেসেজ লিখুন"
          {...register("msg", {
            required: "Message is required.",
          })}
        />
        {errors.msg && <p className="errorMsg">{errors.msg.message}</p>}
      </div>
      <div className="form-control mt-11">
        <label></label>
        <button type="submit" className="submit-btn">
          মেসেজ পাঠান
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
