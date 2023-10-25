"use client";
import Image from "next/image";
import noImage from "@/public/assets/images/no-image.png";
import Link from "next/link";

const SaleProductCard = ({ saleProduct }) => {
	return (
		<div className="px-3 py-2 bg-white border-b border-slate-200">
			<div className={`flex gap-4`}>
				<div className="">
					<Image
						src={saleProduct?.product?.image || noImage}
						alt="product"
						height={80}
						width={80}
						className="h-20 w-20 rounded-lg"
					/>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<h2>
						<Link
							href={`/products/${saleProduct.product.slug}`}
							className="product-title"
						>
							{saleProduct.product.product_name}
						</Link>
					</h2>
					{saleProduct?.product_variant && (
						<div className="flex text-sm items-center gap-3">
							<div className="px-2 border border-slate-300 rounded-md">
								{saleProduct?.product_variant.color}
							</div>
							<div className="px-2 border border-slate-300 rounded-md">
								{saleProduct?.product_variant.size}
							</div>
						</div>
					)}
					<div className="flex products-center justify-between text-sm">
						<h3 className="text-lg font-bold">
							৳ {saleProduct.price} x {saleProduct.qty} পিস
						</h3>
						<div className="flex items-center gap-1 text-primary cursor-pointer">
							{/* <del className="text-lg text-slate-300">৳2,984</del> */}
							<h3 className="text-lg text-red-500">
								৳ {saleProduct.price * saleProduct.qty}
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SaleProductCard;
