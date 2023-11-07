import Link from "next/link";
import ContactForm from "./ContactForm";
import { fetchData } from "@/utils/fetchData";

// ** Import Icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import ViewHTML from "@/components/elements/ViewHTML";

const ContactUs = async () => {
	const [settingsRes, translationRes] = await Promise.allSettled([
		fetchData({ api: `info/basic` }),
		fetchData({ api: `translations` }),
	]);

	const settings =
		settingsRes.status === "fulfilled" ? settingsRes.value?.data || {} : {};
	const translations =
		translationRes.status === "fulfilled"
			? translationRes.value?.data || {}
			: {};

	return (
		<>
			<div className="breadcrumb breadcrumb-2 py-5 border-b border-slate-200 hidden lg:block">
				<div className="container">
					<div>
						<Link
							href={`/`}
							className="text-base text-slate-600 hover:text-primary"
						>
							{translations["home"]}
						</Link>
						<Link
							href={`/help/contact-us`}
							className="text-base text-slate-900 hover:text-primary"
						>
							{translations["contact"]}
						</Link>
					</div>
				</div>
			</div>

			<div className="md:container">
				<div className="contact-us mb-4 lg:mb-20">
					<h3 className="ml-3 lg:ml-0 text-3xl/[38px] lg:text-4xl/[48px] py-6 lg:py-8 font-bold font-title text-slate-900">
						{translations["contact"]}
					</h3>

					<div className="contact-wpr grid lg:grid-cols-2 items-center gap-6 lg:gap-12 bg-slate-200 rounded-2xl p-4 lg:p-8">
						<ContactForm translations={translations} />
						<div className="address basis-2/5 bg-slate-800 rounded-lg p-6">
							<ul className="info-list">
								<li className="flex items-start gap-2 bg-slate-700 rounded-lg p-6 mb-4">
									<FaMapMarkerAlt size={24} color="#EF4444" />
									<p className="pr-4 text-white">{settings.address}</p>
								</li>
								<li className="flex items-center flex-wrap text-white bg-slate-700 rounded-lg p-6 gap-2 mb-4">
									<BsFillTelephoneFill ize={16} />
									{settings?.phone?.map((e, index) => (
										<Link key={index} href={`tel:${settings?.phone[index]}`}>
											{`${settings?.phone[index]}${
												index + 1 < settings.phone.length ? "," : ""
											}`}
										</Link>
									))}
								</li>
								<li className="flex items-center flex-wrap text-white bg-slate-700 rounded-lg p-6 gap-2 mb-4">
									<FaEnvelope ize={16} />
									{settings?.email?.map((e, index) => (
										<Link key={index} href={`mailto:${settings?.email[index]}`}>
											{`${settings?.email[index]}${
												index + 1 < settings.email.length ? "," : ""
											}`}
										</Link>
									))}
								</li>
							</ul>
							<div className="[&>div>iframe]:w-full [&>div>iframe]:h-[280px] [&>div>iframe]:rounded-lg">
								<ViewHTML htmlText={settings.google_map_link} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactUs;
