"use client";

import { useContactNowMutation } from "@/store/api/contactAPI";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactForm = ({ translations }) => {
	const [contactNow] = useContactNowMutation();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		const newMessage = {
			name: data.name,
			email: data.email,
			// phone: data.subject,
			subject: data.subject,
			message: data.msg,
		};
		// console.log(newMessage);

		contactNow(newMessage)
			.unwrap()
			.then((response) => {
				// Handle the successful response if necessary
				toast.success("Thanks for contacting us! We'll get back to you soon.");
				reset();
			})
			.catch((error) => {
				// Handle the error if necessary
				toast.error("Failed to send your message");
				console.log(error);
			});
	};

	return (
		<form className="basis-3/5" onSubmit={handleSubmit(onSubmit)}>
			<div className="form-control mb-4">
				<label className="block text-base text-slate-900 mb-2 capitalize">
					{translations["your-name"] || `Your Name`}
				</label>
				<input
					type="text"
					name="name"
					placeholder={translations["enter-name"] || `Enter Name`}
					{...register("name", {
						required: "Name is required.",
					})}
				/>
				{errors.name && <p className="errorMsg">{errors.name.message}</p>}
			</div>
			<div className="form-control mb-4">
				<label className="block text-base text-slate-900 mb-2 capitalize">
					{translations["your-email-(if-any)"] || `Your Email (if any)`}
				</label>
				<input
					type="email"
					name="email"
					placeholder={translations["enter-email"] || `Enter Email`}
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
				<label className="block text-base text-slate-900 mb-2 capitalize">
					{translations["subject"] || `Subject`}
				</label>
				<input
					type="text"
					name="subject"
					placeholder={translations["enter-subject"] || `Enter Subject`}
					{...register("subject", {
						required: "Subject is required.",
					})}
				/>
				{errors.subject && <p className="errorMsg">{errors.subject.message}</p>}
			</div>
			<div className="form-control">
				<label className="block text-base text-slate-900 mb-2 capitalize">
					{translations["message"] || `Message`}
				</label>
				<textarea
					className="h-[148px]"
					type="text"
					name="msg"
					placeholder={
						translations["enter-your-message"] || `Enter Your Message`
					}
					{...register("msg", {
						required: "Message is required.",
					})}
				/>
				{errors.msg && <p className="errorMsg">{errors.msg.message}</p>}
			</div>
			<div className="form-control mt-6 lg:mt-11">
				<label></label>
				<button type="submit" className="submit-btn">
					{translations["send-message"] || `Send Message`}
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
