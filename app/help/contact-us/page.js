'use client'

import Link from "next/link";
import { useForm } from "react-hook-form";

// ** Import Icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export const metadata = {
    title: 'Sotota Stall || Contact Us',
};

const Contact = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
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
                name: '',
                email: '',
                subject: '',
                msg: ''
            })
		}

        if (!response.ok) {
			console.log("Error sending message");
		}

        
    };

    
    return (
        <>
            <div className="breadcrumb breadcrumb-2 py-5 border-b border-slate-200">
                <div className="container">
                    <div>
                        <Link href={`/`} className="text-base text-slate-600 hover:text-primary">হোম</Link>
                        <Link href={`/help/contact-us`} className="text-base text-slate-900 hover:text-primary">যোগাযোগ করুন</Link>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="contact-us mb-20">
                    <div className="heading border-b border-slate-200 py-4 mb-6">
                        <h3 className="text-4xl/[48px] font-bold font-title text-slate-900">যোগাযোগ করুন</h3>
                    </div>
                    <div className="contact-wpr flex items-center gap-12 bg-slate-200 rounded-2xl p-8">
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
                                {errors.name && (
                                    <p className="errorMsg">{errors.name.message}</p>
                                )}
                            </div>
                            <div className="form-control mb-4">
                                <label className="block text-base text-slate-900 mb-2">আপনার ইমেইল (যদি থাকে)</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="ইমেইল লিখুন"
                                    {...register("email", {
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: "Email is not valid."
                                    }
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
                                <button type="submit" className="submit-btn">মেসেজ পাঠান</button>
                            </div>
                        </form>
                        <div className="address basis-2/5 bg-slate-800 rounded-lg p-6">
                            <ul className="info-list">
                                <li className="flex items-start gap-2 bg-slate-700 rounded-lg p-6 mb-4"><FaMapMarkerAlt size={24} color="#EF4444"/><p className="pr-4 text-white">৫২/১, রোড নাম্বার # ১২, শেখেরটেক, আদাবর, মোহাম্মাদপুর, ঢাকা-১২০৭</p></li>
                                <li className="flex items-center gap-2 bg-slate-700 rounded-lg p-6 mb-4"><BsFillTelephoneFill size={14} color="#ffffff"/><Link href="tel:০১৭৬৮৫৭২৬৫৮" className="text-white">০১৭৬৮৫৭২৬৫৮</Link></li>
                                <li className="flex items-center gap-2 bg-slate-700 rounded-lg p-6 mb-4"><FaEnvelope ize={14} color="#ffffff"/><Link href="mailto:sototastall@gmail.com" className="text-white">sototastall@gmail.com</Link></li>
                            </ul>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.419994637345!2d90.35608507599457!3d23.76805398809721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1e5280a3149%3A0x625fd2bcd25924aa!2sMedia365%20Limited!5e0!3m2!1sbn!2sbd!4v1684737614659!5m2!1sbn!2sbd" className="block border-0 rounded-lg mt-4" width="100%" height={280} allowFullScreen=""></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;