"use client";
import { setLogoutModalOpen } from "@/store/slices/authSlice";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import RequireAuth from "@/components/hoks/RequireAuth";

//icons
import { FaClipboardList, FaUser } from "react-icons/fa";
import { HiHeart, HiReceiptPercent, HiTicket } from "react-icons/hi2";
import { IoLogOut } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import DynamicBackgroundComponent from "@/components/utility/BackgroundImage";
import ServiceFeatures from "../_components/service-features";

const DashboardLayout = ({ children, params }) => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { translations, settings } = useSelector((state) => state.common);
  const pathArray = usePathname().split("/");


  const navItems = [
    {
      text: translations["my-profile"] || "My Profile",
      icon: <FaUser />,
      path: "profile",
    },
    {
      text: translations["my-order"] || "My Order",
      icon: <FaClipboardList />,
      path: "my-orders",
    },
    {
      text: translations["my-wish-list"] || "My Wish List",
      icon: <HiHeart />,
      path: "my-wishlist",
    },
    {
      text: translations["my-review"] || "My Review",
      icon: <MdRateReview />,
      path: "my-reviews",
    },
/*     {
      text: translations["voucher"] || "ভাউচার",
      icon: <HiReceiptPercent />,
      path: "my-voucher",
    }, */
    {
      text: translations["questions-and-answers"] || "Q&A",
      icon: <RiQuestionAnswerFill />,
      path: "qna",
    },
    {
      text: translations["support-ticket"] || "Support Ticket",
      icon: <HiTicket />,
      path: "support-ticket",
    },
  ];

  return isMobile ? (
    children
  ) : (
    <div className=" md:pb-20">
      <div className="">
        <DynamicBackgroundComponent
          heading={"My Account"}
          imageUrl={settings?.profile_banner_image}
          height={"30vh"}
        >
          <div className="text-lg mt-2 md:mt-5">
            <Link href={`/`} className=" hover:text-primary !text-white">
              {translations["home"] || "হোম"}
            </Link>
            <span className="text-primary mx-3 font-extrabold">/</span>{" "}
            <Link
              href={`/dashboard/my-orders`}
              className=" hover:text-primary !text-white"
            >
              My Account
            </Link>
            {/*               <Link
                href={`/products/${slug}`}
                aria-disabled="true"
                className={`text-base text-slate-900 pointer-events-none`}
              >
                {getSlicedText(slug, 50)}
              </Link> */}
          </div>
        </DynamicBackgroundComponent>
      </div>
      <div style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} className="small-container mx-auto md:px-10 2xl:px-0 md:mt-20">
        <div className="bg-white grid grid-cols-[max-content_1fr] min-h-screen  rounded-xl">
          <div className="border-r border-slate-300 px-6 py-12">
            <nav className="text-slate-500">
              <ul className="w-[15.25rem]">
                <div className="sticky min-h-[800px] w-[15.25rem]">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={`/dashboard/${item.path}`}
                      className="flex items-center capitalize mb-3 rounded-lg"
                    >
                      <li
                        key={item.path}
                        className={`flex items-center  space-x-2 py-3 px-4 rounded-lg w-full text-base font-normal ${
                          pathArray.includes(item.path) ? "text-primary" : ""
                        }`}
                      >
                        <span
                          className={` ${
                            pathArray.includes(item.path) ? "" : ""
                          } text-base font-normal`}
                        >
                          {item.icon}
                        </span>
                        <span className="font-bold">{item.text}</span>
                      </li>
                    </Link>
                  ))}
                  <li
                    className={`flex items-center py-3 px-4 hover:bg-amber-200 rounded-lg w-full font-bold`}
                  >
                    <button
                      className="flex items-center space-x-2 text-base font-normal"
                      onClick={() => dispatch(setLogoutModalOpen(true))}
                    >
                      <span className={``}>
                        <IoLogOut />
                      </span>
                      <span className="font-bold">
                        {translations["log-out"] || "Log Out"}
                      </span>
                    </button>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
          <div className="">{children}</div>
        </div>
      </div>
      <div className="md:mt-6 small-container mx-auto">
        <ServiceFeatures />
      </div>
    </div>
  );
};

export default RequireAuth(DashboardLayout);
