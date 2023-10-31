"use client";
import Link from "next/link";
import Image from "next/image";

// ** Import Icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import FooterPages from "./FooterPages";
import SocialIcon from "../elements/SocialIcon";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePathname } from "next/navigation";

const Footer = () => {
	const matches = useMediaQuery("(max-width: 768px)");
	const pathArray = usePathname().split("/");
	// console.log(pathArray);
	const { settings, settingsLoading, translationsLoading, translations } =
		useSelector((state) => state.common);

	if (matches && pathArray.includes("categories")) return null;
	if (settingsLoading || translationsLoading) return null;

	const footerPage = settings?.footer_page || {};
	const helpPage = settings?.help_page || {};
	return (
		<>
			<footer className="footer relative bg-slate-900 rounded-t-2xl lg:rounded-none pt-6 lg:pt-14 overflow-hidden z-10">
				<div className="footer-top pb-5">
					<div className="container">
						<div className="grid grid-cols-1 lg:grid-cols-4 justify-between items-center gap-4 lg:gap-6">
							<div className="footer-widget">
								<Link href="/" className="logo inline-block mb-3">
									<Image
										src={settings?.logo}
										alt={settings?.name}
										width={200}
										height={48}
										className="h-auto max-h-[48px]"
									/>
								</Link>
								<ul className="info-list">
									<li>
										<FaMapMarkerAlt size={24} color="#EF4444" />
										<p className="pr-4">{settings?.address}</p>
									</li>
									<li>
										<BsFillTelephoneFill size={14} />
										<Link href={`tel:${settings?.phone[0]}`}>
											{settings?.phone}
										</Link>
									</li>
									<li>
										<FaEnvelope ize={14} />
										<Link href={`mailto:${settings?.email[0]}`}>
											{settings?.email}
										</Link>
									</li>
								</ul>
							</div>
							<FooterPages title={translations.company} pages={footerPage} />
							<FooterPages title={translations.help} pages={helpPage} />

							<div className="footer-widget mt-2 lg:mt-0">
								<div className="footer-links mb-6">
									<p>{translations["social-link"]}</p>
									<div className="social-links flex items-center gap-5">
										<SocialIcon
											href={settings.facebook_link}
											icon={"/assets/icons/social/fb.svg"}
										/>
										<SocialIcon
											href={settings.youtube_link}
											icon={"/assets/icons/social/YouTube.svg"}
										/>
										<SocialIcon
											href={settings.whatsapp_link}
											icon={"/assets/icons/social/whatsapp.svg"}
											// iconClass={"h-7 w-7"}
										/>
										<SocialIcon
											href={settings.twitter_link}
											icon={"/assets/icons/social/twitter.svg"}
										/>
										<SocialIcon
											href={settings.linkedin_link}
											icon={"/assets/icons/social/linkedin.svg"}
										/>
									</div>
								</div>
								<div className="footer-links">
									<p>{translations["payment-method"]}</p>
									<div className="payment-methods flex items-center gap-6 h-6">
										<Image
											src="/assets/icons/payments/payment.png"
											alt="Payment"
											width={32}
											height={23}
										/>
										<Image
											src="/assets/icons/payments/bkash.png"
											alt="Bkash"
											width={32}
											height={23}
										/>
										<Image
											src="/assets/icons/payments/visa.png"
											alt="visa"
											width={52}
											height={23}
										/>
										<Link href="/" className="!text-xs/3 !mb-0 text-white">
											{translations["many-more"]}
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom border-t border-slate-700 py-5">
					<div className="container">
						<div className="grid grid-cols-12">
							<div className="col-span-12">
								<p className="text-sm font-normal font-body text-slate-400 text-center">
									{translations["copyright"]}
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
