import { Link } from "@/navigation";
import Image from "next/image";
import ViewHTML from "@/components/elements/ViewHTML";
import { BsFillTelephoneFill } from "react-icons/bs";
import VideoPlayer from "@/components/elements/VideoPlayer";

const Descriptions = ({ settings, product, translations }) => {
  return (
    <section id="product-descriptions">
      <div className="description">
        <h4 className="text-2xl font-bold font-title text-slate-900 mb-3">
          {translations["product-description"] || "Product Description"}:
        </h4>
        <ViewHTML htmlText={product?.product_description} />
      </div>
      {/* {product.includedProducts?.length ? ( */}
      <div className="mt-6 lg:mt-8">
        <h4 className="text-2xl font-bold font-title text-slate-900">
          {translations["product-includes"] || "Product Includes"}:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src={
              product.includedProducts[0]?.image ||
              `/assets/images/banner4.jpg`
            }
            alt="Product Includes"
            width={0}
            height={0}
            className="w-full rounded"
          />
          <Image
            src={
              product.includedProducts[0]?.image ||
              `/assets/images/banner1.jpg`
            }
            alt="Product Includes"
            width={0}
            height={0}
            className="w-full rounded object-cover"
          />
          <Image
            src={
              product.includedProducts[0]?.image ||
              `/assets/images/banner2.jpg`
            }
            alt="Product Includes"
            width={0}
            height={0}
            className="w-full rounded"
          />
          <Image
            src={
              product.includedProducts[0]?.image ||
              `/assets/images/banner3.jpg`
            }
            alt="Product Includes"
            width={0}
            height={0}
            className="w-full rounded"
          />
        </div>
      </div>
      {/* ) : null} */}
      {product?.review_video && (
        <div className="mt-6 lg:mt-8">
          <h4 className="text-2xl font-bold font-title text-slate-900">
            {translations["review-video"] || "Review Video"}
          </h4>
          <div className="mt-3">
            <VideoPlayer
              url={product?.review_video}
              loop={true}
              muted={true}
              // playing={true}
              controls={true}
              className={"h-[12rem] md:h-[21.875rem]"}
            />
          </div>
        </div>
      )}
      {settings?.phone?.length && (
        <div className="contact mt-8 bg-[#FCFCFC] border border-primary p-5 text-center">
          <h5 className="text-2xl font-bold font-title text-slate-900 mb-3">
            {translations["know-more"] || "Call us for more details"} 
          </h5>
          <p className="flex justify-center items-center gap-4">
            <span className="text-base text-slate-900">
              {translations["call-us"] || "Call Us"}:
            </span>{" "}
            <Link
              href={`tel:${settings?.phone[0]}`}
              className="text-2xl font-bold font-title text-primary"
            >
              <BsFillTelephoneFill /> {settings?.phone[0]}
            </Link>
          </p>
        </div>
      )}
    </section>
  );
};

export default Descriptions;
