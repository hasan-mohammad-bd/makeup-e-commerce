import Link from "next/link";
import Image from "next/image";

// ** Import Icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { fetchData } from "@/utils/fetchData";

const Footer = async () => {
  const { data: settings = {} } = await fetchData({ api: "info/basic" });
  const footerPage = settings?.footer_page || {};
  const helpPage = settings?.help_page || {};
  return (
    <>
      <footer className="footer relative bg-slate-900 pt-14 overflow-hidden z-10">
        <div className="footer-top pb-5">
          <div className="container">
            <div className="grid grid-cols-4 justify-between items-center gap-6">
              <div className="col-span-1">
                <div className="footer-widget">
                  <Link href="/" className="logo inline-block mb-3">
                    <Image
                      src={settings?.logo}
                      alt={settings?.name}
                      width={200}
                      height={0}
                      className="h-auto"
                    />
                  </Link>
                  <ul className="info-list">
                    <li>
                      <FaMapMarkerAlt size={24} color="#EF4444" />
                      <p className="pr-4">{settings?.address}</p>
                    </li>
                    <li>
                      <BsFillTelephoneFill size={14} />
                      <Link href={`tel:${settings?.phone}`}>
                        {settings?.phone}
                      </Link>
                    </li>
                    <li>
                      <FaEnvelope ize={14} />
                      <Link href={`mailto:${settings?.email}`}>
                        {settings?.email}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1">
                <div className="footer-widget">
                  <h5>কোম্পানি</h5>
                  <ul className="footer-list">
                    {Object.keys(footerPage).map((key) => (
                      <li key={key}>
                        <Link href={footerPage[key]}>{key}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-span-1">
                <div className="footer-widget">
                  <h5>হেল্প</h5>
                  <ul className="footer-list">
                    {Object.keys(helpPage).map((key) => (
                      <li key={key}>
                        <Link href={helpPage[key]}>{key}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-span-1">
                <div className="footer-widget">
                  <div className="footer-links mb-6">
                    <p>সোশ্যাল লিংক</p>
                    <div className="social-links flex items-center gap-5">
                      <Link href={settings.facebook_link}>
                        <Image
                          src="/assets/icons/social/fb.svg"
                          alt="Facebook"
                          width="24"
                          height="24"
                          className="w-6 h-6"
                        />
                      </Link>
                      <Link href={settings.youtube_link}>
                        <Image
                          src="/assets/icons/social/YouTube.svg"
                          alt="Youtube"
                          width="24"
                          height="24"
                          className="w-6 h-6"
                        />
                      </Link>
                      <Link href={settings.whatsapp_link}>
                        <Image
                          src="/assets/icons/social/whatsapp.png"
                          alt="TikTok"
                          width="24"
                          height="24"
                          className="w-6 h-6"
                        />
                      </Link>
                      <Link href={settings.twitter_link}>
                        <Image
                          src="/assets/icons/social/twitter.svg"
                          alt="Twitter"
                          width="24"
                          height="24"
                          className="w-6 h-6"
                        />
                      </Link>
                      <Link href={settings.linkedin_link}>
                        <Image
                          src="/assets/icons/social/linkedin.svg"
                          alt="Linkedin"
                          width="24"
                          height="24"
                          className="w-6 h-6"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="footer-links">
                    <p>পেমেন্ট মেথড</p>
                    <div className="payment-methods flex items-center gap-6">
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
                      <Link href="/" className="text-xs text-white">
                        আরও অনেক
                      </Link>
                    </div>
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
                  স্বত্ব &copy; ২০২৩ সততা স্টল কর্তৃক সর্বস্বত্ব সংরক্ষিত
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
