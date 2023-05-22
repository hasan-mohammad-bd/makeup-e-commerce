import Link from "next/link";
import Image from "next/image";

// ** Import Icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="footer bg-slate-900 pt-14">
                <div className="footer-top pb-5">
                    <div className="container">
                        <div className="grid grid-cols-4 justify-between items-center gap-6">
                            <div className="col-span-1">
                                <div className="footer-widget">
                                    <Link href="/" className="logo inline-block mb-3">
                                        <Image
                                            src="/assets/images/logo.png"
                                            alt="Sotota Stall"
                                            width={200}
                                            height={0}
                                            className="h-auto"
                                        />
                                    </Link>
                                    <ul className="info-list">
                                        <li><FaMapMarkerAlt size={24} color="#EF4444"/><p className="pr-4">৫২/১, রোড নাম্বার # ১২, শেখেরটেক, আদাবর, মোহাম্মাদপুর, ঢাকা-১২০৭</p></li>
                                        <li><BsFillTelephoneFill size={14}/><Link href="tel:০১৭৬৮৫৭২৬৫৮">০১৭৬৮৫৭২৬৫৮</Link></li>
                                        <li><FaEnvelope ize={14}/><Link href="mailto:sototastall@gmail.com">sototastall@gmail.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="footer-widget">
                                    <h5>কোম্পানি</h5>
                                    <ul className="footer-list">
                                        <li>
                                            <Link href="#">আমাদের সম্পর্কে</Link>
                                        </li>
                                        <li>
                                            <Link href="/company/privacy-policy">প্রাইভেসি পলিসি</Link>
                                        </li>
                                        <li>
                                            <Link href="/company/booking-policy">বুকিং পলিসি</Link>
                                        </li>
                                        <li>
                                            <Link href="/company/terms-and-conditions">ট্রামস এন্ড কন্ডিশন</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="footer-widget">
                                    <h5>হেল্প</h5>
                                    <ul className="footer-list">
                                        <li>
                                            <Link href="#">পেমেন্টস</Link>
                                        </li>
                                        <li>
                                            <Link href="#">শিপিং</Link>
                                        </li>
                                        <li>
                                            <Link href="/help/contact-us">যোগাযোগ করুন</Link>
                                        </li>
                                        <li>
                                            <Link href="/help/qna">প্রশ্ন এবং জিজ্ঞাসা</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="footer-widget">
                                    <div className="footer-links mb-6">
                                        <p>সোশ্যাল লিংক</p>
                                        <div className="social-links flex items-center gap-5">
                                            <Link href=""><Image src="/assets/images/icons/fb.svg" alt="Facebook" width="0" height="0" className="w-auto h-auto" /></Link>
                                            <Link href=""><Image src="/assets/images/icons/YouTube.svg" alt="Youtube" width="0" height="0" className="w-auto h-auto" /></Link>
                                            <Link href=""><Image src="/assets/images/icons/TikTok.svg" alt="TikTok" width="0" height="0" className="w-auto h-auto" /></Link>
                                            <Link href=""><Image src="/assets/images/icons/twitter.svg" alt="Twitter" width="0" height="0" className="w-auto h-auto" /></Link>
                                            <Link href=""><Image src="/assets/images/icons/linkedin.svg" alt="Linkedin" width="0" height="0" className="w-auto h-auto" /></Link>
                                        </div>
                                    </div>
                                    <div className="footer-links">
                                        <p>পেমেন্ট মেথড</p>
                                        <div className="payment-methods flex items-center gap-6">
                                            <Image src="/assets/images/icons/payment.png" alt="Payment" width={32} height={23} />
                                            <Image src="/assets/images/icons/bkash.png" alt="Bkash" width={32} height={23} />
                                            <Image src="/assets/images/icons/visa.png" alt="visa" width={52} height={23} />
                                            <Link href="/" className="text-xs text-white">আরও অনেক</Link>
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
