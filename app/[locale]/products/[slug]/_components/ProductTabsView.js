"use client";
import { Link } from "@/navigation";
import { useEffect, useRef, useState } from "react";
import RatingReviews from "./reviews";
import ProductQNA from "./product-qna";
import Descriptions from "./descriptions";
import Specifications from "./specifications";
import HorizontalScrollView from "@/components/elements/HorizontalScrollView";

/**
 * The function handles the smooth scrolling to a specific section on the page when a tab item is
 * clicked.
 * @param e - The "e" parameter is an event object that represents the event that triggered the
 * function. It is commonly used in event handlers to access information about the event, such as the
 * target element or the event type.
 * @param sectionId - The ID of the section that you want to scroll to.
 */
export const handleTabItemToView = (e, sectionId) => {
  e.preventDefault();

  const targetElement = document.getElementById(sectionId);

  if (targetElement) {
    const offset = 48;
    const targetOffset = targetElement.offsetTop - offset;

    window.scroll({
      top: targetOffset,
      behavior: "smooth",
    });

    // setFirstVisibleSection(sectionId);
  }
};

const ProductTabsView = ({ product, settings, translations }) => {
  const [firstVisibleSection, setFirstVisibleSection] = useState(null);

  const handleScroll = () => {
    const sections = document.querySelectorAll("[data-section]");
    let firstVisible = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 235 && rect.bottom >= 0) {
        firstVisible = section.id;
      }
    });

    setFirstVisibleSection(firstVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tabItems = [
    {
      id: 1,
      title: translations["product-description"] || "প্রডাক্টের বিবরণ",
      key: `p-descriptions`,
    },
    {
      id: 2,
      title: translations["specifications"] || "স্পেসিফিকেশন",
      key: `p-specifications`,
    },
    {
      id: 3,
      title: translations["ratings-and-reviews"] || "Ratings and Reviews",
      key: `p-rating-reviews`,
    },
    {
      id: 4,
      title: translations["questions-and-answers"] || "প্রশ্ন ও উত্তর",
      key: `p-qna`,
    },
  ];

  // console.log(activeSection, "activeSection");

  return (
    <div className="tabs-view py-3 container mx-auto">
      {/* tabs view */}
      <div className="sticky bg-white top-20 z-20 mt-5 lg:mt-0 lg:pt-5 ">
        <HorizontalScrollView
          className={
            "product-tab-links text-xl font-bold py-0 justify-evenly lg:w-full lg:pb-4 !w-fit"
          }
        >
          {tabItems.map((item) =>
            item.key === "p-specifications" &&
            !product?.specification ? null : (
              <div key={item.id}>
                <Link
                  className={firstVisibleSection === item.key ? "active" : ""}
                  href={`#${item.key}`}
                  onClick={(e) => handleTabItemToView(e, item.key)}
                >
                  {item.title}
                </Link>
              </div>
            )
          )}
        </HorizontalScrollView>
      </div>
      {/* tabs content  */}
      <div className="product-tab-content container mx-auto">
        <div
          data-section
          id="p-descriptions"
          className="px-3 lg:px-0 mt-7 lg:mt-8 pb-7 lg:border-b-4 lg:border-slate-200"
        >
          <Descriptions
            product={product}
            settings={settings}
            translations={translations}
          />
        </div>
        {product?.specification && (
          <>
            <div className="h-2 w-full lg:hidden"></div>
            <div
              data-section
              id="p-specifications"
              className="px-3 lg:px-0 mt-7 lg:mt-8 pb-7 lg:border-b-4 lg:border-slate-200 overflow-hidden"
            >
              <Specifications product={product} translations={translations} />
            </div>
          </>
        )}

        <div className="h-2 w-full bg-slate-200 lg:hidden"></div>
        <div
          data-section
          id="p-rating-reviews"
          className="px-3 lg:px-0 mt-7 lg:mt-8 pb-7 lg:border-b-4 lg:border-slate-200"
        >
          <RatingReviews product_id={product?.id} />
        </div>

        <div className="h-2 w-full bg-slate-200 lg:hidden"></div>
        <div data-section id="p-qna" className="px-3 lg:px-0 mt-7 lg:mt-8 pb-7">
          <ProductQNA product_id={product?.id} />
        </div>
      </div>
    </div>
  );
};

export default ProductTabsView;
