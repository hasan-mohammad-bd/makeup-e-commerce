import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const SocialLogin = () => {
	const { translations } = useSelector((state) => state.common);
	return (
		<div className="social-login">
			<p className="pt-4 md:pt-7 pb-3 lg:pb-4">
				{translations["or-login"] || "অথবা, লগ-ইন করুন"}:
			</p>
			<div className="flex justify-between items-center gap-x-3 font-semibold">
				<button className="social-icon-btn">
					<Image
						src={"/assets/icons/social/facebook.png"}
						alt="facebook"
						height={24}
						width={24}
						sizes="100vh"
					/>
					<span>{translations["facebook"] || "ফেসবুক"}</span>
				</button>
				<button className="social-icon-btn">
					<Image
						src={"/assets/icons/social/google.png"}
						alt="facebook"
						height={24}
						width={24}
						sizes="100vh"
					/>
					<span>{translations["google"] || "গুগল"}</span>
				</button>
				<button className="social-icon-btn">
					<Image
						src={"/assets/icons/social/twitter.png"}
						alt="facebook"
						height={24}
						width={24}
						sizes="100vh"
					/>
					<span>{translations["twitter"] || "টুইটার"}</span>
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
