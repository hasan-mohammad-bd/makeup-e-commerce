"use client";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import { useRemoveFromWishListMutation } from "@/store/features/api/wishListAPI";
import { addToCart, addToSelected } from "@/store/features/cartSlice";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import noImage from "@/public/assets/images/no-image.png";

const WishListCard = ({ product }) => {
  const [deleteFromWishlist] = useRemoveFromWishListMutation();
  const dispatch = useDispatch();

  const {
    id,
    slug,
    brand,
    product_name,
    new_price,
    old_price,
    productVariants,
    discount_percentage,
    stock_qty,
  } = product;

  const stockOut = stock_qty <= 0 ? true : false;

  const handleDelete = async (productId) => {
    try {
      await deleteFromWishlist(productId);
      toast.success("Product removed successfully!");
    } catch (error) {
      toast.error("Failed to delete from wishlist");
    }
  };

  const handleAddToCart = (product) => {
    if (productVariants?.length) {
      dispatch(addToSelected(product));
    } else {
      dispatch(addToCart(product));
    }
  };

  // console.log(product);
  return (
    <div className="relative px-3 py-4 bg-white border border-slate-200 rounded-xl mb-3">
      <button
        className="absolute right-1.5 top-1 bg-transparent text-red-500"
        onClick={() => handleDelete(id)}
      >
        <FiTrash2 />
      </button>
      <div className={`flex gap-4`}>
        <div className="relative">
          <Image
            src={product.image || noImage}
            alt="product"
            height={80}
            width={96}
            className={`${stockOut ? "opacity-50" : ""} w-24 h-20`}
          />
          {stockOut ? (
            <div className="w-full h-full rounded absolute left-0 top-0 flex items-center justify-center">
              <span className="text-red-500 rounded-lg bg-red-100 px-2 py-1 font-bold">
                স্টক শেষ
              </span>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col justify-between w-full">
          <Link
            href={`/brands/${brand?.id}`}
            className={`text-primary ${stockOut ? "opacity-50" : ""}`}
          >
            {brand?.brand_name || "No Brand"}
          </Link>
          <Link
            href={`/products/${slug}`}
            className={`${
              stockOut ? "opacity-50" : ""
            } product-title overflow-text`}
          >
            {product_name}
          </Link>
          <div className="flex justify-between items-center">
            <div
              className={`flex gap-3 products-center items-center ${
                stockOut ? "opacity-50" : ""
              }`}
            >
              <h3 className="text-xl text-red-500">৳ {new_price}</h3>
              {typeof discount_percentage === "number" &&
              discount_percentage > 0 ? (
                <>
                  <del className="text-xl text-slate-300">৳ {old_price}</del>
                  <div className="rounded-md px-2 py-1 text-sm text-white bg-red-500">
                    {Math.round(discount_percentage)}% OFF
                  </div>
                </>
              ) : null}
            </div>
            {!stockOut ? (
              <button
                className="bg-secondary-700 py-2 px-3 text-white rounded-lg text-center active:scale-95"
                onClick={() => handleAddToCart(product)}
              >
                <HiOutlineShoppingCart size={16} />
                <span className="ml-2">কার্টে রাখুন</span>
              </button>
            ) : (
              <Link
                href={"/products"}
                className="text-secondary-700 font-bold border border-secondary-700 py-2 px-3 rounded-lg active:scale-95 cursor-pointer"
              >
                সিমিলার খুঁজুন
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
