"use client";
import { Link } from "@/navigation";
import Image from "next/image";

// ** Import Icons
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaLinkedin,
  FaFacebookMessenger,
} from "react-icons/fa";
import FooterPages from "./FooterPages";
import SocialIcon from "../elements/SocialIcon";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useParams, usePathname } from "next/navigation";
import FooterTitle from "./FooterTitle";
import SubscriptionForm from "./SubscriptionForm";
import { RiTwitterXLine } from "react-icons/ri";
import ScrollToTopButton from "../utility/ScrollToTopButton";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathArray = usePathname().split("/");
  const params = useParams();
  // console.log(pathArray);
  const { settings, settingsLoading, translationsLoading, translations } =
    useSelector((state) => state.common);

  if (settingsLoading || translationsLoading) return null;

  if (
    (isMobile && pathArray.includes("categories") && !params.slug) ||
    (isMobile && pathArray.includes("checkout")) ||
    (isMobile && pathArray.includes("dashboard")) ||
    (isMobile && pathArray.includes("mobile-login")) ||
    (isMobile && pathArray.includes("products") && params.slug)
  )
    return null;

  const footerPage = settings?.footer_page || [];
  const helpPage = settings?.help_page || [];

  const facebook = () => {
    <FaFacebookF />;
  };

  return (
    <>
      <footer className="footer relative bg-black rounded-t-2xl lg:rounded-none pt-6 lg:pt-14 overflow-hidden z-10">
        <div className="footer-top pb-5">
          <div className="container lg:px-10 2xl:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-4 justify-between gap-4 lg:gap-6">
              <div className="text-white ">
                {/* 								<Link href="/" className="logo inline-block mb-3">
									<Image
										src={settings?.logo}
										alt={settings?.name}
										width={200}
										height={48}
										className="h-auto max-h-[48px]"
									/>
								</Link> */}
                <FooterTitle title={"About us"} />
                <ul className="info-list">
                  <li className="!items-start">
                    {/* <FaMapMarkerAlt size={24} color="#EF4444" /> */}
                    <p className="pr-4">{settings?.address}</p>
                  </li>
                  <li className="flex flex-wrap text-white gap-2">
                    <BsFillTelephoneFill ize={16} />
                    {settings?.phone?.map((e, index) => (
                      <Link key={index} href={`tel:${settings?.phone[index]}`}>
                        {`${settings?.phone[index]}${
                          index + 1 < settings.phone.length ? "," : ""
                        }`}
                      </Link>
                    ))}
                  </li>
                  <li className="flex flex-wrap text-white gap-2">
                    <FaEnvelope ize={16} />
                    {settings?.email?.map((e, index) => (
                      <Link
                        key={index}
                        href={`mailto:${settings?.email[index]}`}
                      >
                        {`${settings?.email[index]}${
                          index + 1 < settings.email.length ? "," : ""
                        }`}
                      </Link>
                    ))}
                  </li>
                  <li className="mt-6">
                    <p className="mb-3">{translations["social-link"]}</p>
                    <div className="social-links flex items-center gap-3">
                      <SocialIcon
                        href={settings.facebook_link}
                        icon={
                          <FaFacebookF color="white" className="text-white" />
                        }
                      />
                      <SocialIcon
                        href={settings.youtube_link}
                        icon={
                          <FaYoutube color="white" className="text-white" />
                        }
                      />
                      <SocialIcon
                        href={settings.whatsapp_link}
                        icon={
                          <FaWhatsapp color="white" className="text-white" />
                        }
                      />
                      <SocialIcon
                        href={settings.twitter_link}
                        icon={
                          <RiTwitterXLine
                            color="white"
                            className="text-white"
                          />
                        }
                      />
                      <SocialIcon
                        href={settings.linkedin_link}
                        icon={
                          <FaLinkedin color="white" className="text-white" />
                        }
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <FooterPages title={translations.company} pages={footerPage} />
              <FooterPages title={translations.help} pages={helpPage} />

              <div className="footer-widget mt-2 lg:mt-0">
                {/*                 <div className="footer-links mb-6">
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
                </div> */}
                <div>
                  <div>
                    <FooterTitle title={"News Letter"} />
                    <p className="text-white mb-4">
                      Stay Informed, Stay Inspired
                    </p>
                    <SubscriptionForm settings={settings} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom border-t border-slate-700 py-5">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="col-span-12">
                <p className="text-sm font-normal font-body text-slate-400 text-center">
                  {translations["copyright"]} {new Date().getFullYear()}{" "}
                  {translations["copyright-msg"] || "All Rights Reserved"}.
                </p>
              </div>
              <div className="footer-links">
                {/* <p>{translations["payment-method"]}</p> */}
                <div className="payment-methods flex items-center gap-6 h-6">
                  <span className="py-2 px-3 rounded-md bg-white">
                    <Image
                      src="/assets/icons/payments/payment.png"
                      alt="Payment"
                      width={32}
                      height={23}
                    />
                  </span>
                  <span className="py-2 px-3 rounded-md bg-white">
                    <Image
                      src="/assets/icons/payments/bkash.png"
                      alt="Bkash"
                      width={32}
                      height={23}
                    />
                  </span>
                  <span className="py-2 px-3 rounded-md bg-white">
                    <Image
                      src="/assets/icons/payments/visa.png"
                      alt="visa"
                      width={52}
                      height={23}
                    />
                  </span>

                  <Link
                    href="/"
                    className="!text-base/[100%] !mb-0 text-white w-1/5"
                  >
                    {translations["many-more"]}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTopButton />
        <Link
          className="fixed hidden md:inline-block z-30 bottom-20 right-5 text-blue-500"
          href={`https://m.me/${process.env.MESSENGER_LINK}`}
        >
          <FaFacebookMessenger size={45}/>
        </Link>
      </footer>
    </>
  );
};

export default Footer;
