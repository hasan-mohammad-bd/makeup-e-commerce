import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
	addToCart,
	addToSelected,
	removeFromSelected,
} from "@/store/slices/cartSlice";

/**
 * The `useCart` function is a custom hook in JavaScript that provides methods for adding products to
 * the cart and handling the checkout process.
 * @returns The useCart function returns an object with two properties: handleAddToCart and
 * handleAddAndCheckout.
 */
const useCart = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	/**
	 * The function `handleAddToCart` adds a product to the cart with selected variants, and displays
	 * success or error messages.
	 * @param product - The product object contains information about the product being added to the cart,
	 * such as its name, price, and barcodes.
	 * @param selectedVariants - An array of selected variants for the product. Each variant should have
	 * properties like size, color, and stock quantity.
	 * @returns The function `handleAddToCart` returns a boolean value. It returns `true` if the product
	 * is successfully added to the cart, and `false` otherwise.
	 */
	const handleAddToCart = (product, selectedVariants) => {
		// if (product.barcodes?.length === 1 && !selectedVariants) {
		if (
			product.barcodes?.length === 1 &&
			product.barcodes[0].size === "" &&
			product.barcodes[0].color === ""
		) {
			if (product.barcodes[0]?.stock_qty <= 0) {
				toast.error("Oops! no stock available");
				return false;
			}
			dispatch(
				addToCart({
					product: product,
					selectedVariants: product.barcodes,
				})
			);
			return true;
		}
		if (!selectedVariants) {
			dispatch(addToSelected(product));
			return false;
		}
		if (!selectedVariants.length) {
			toast.error("You must select one variant at least");
			return false;
		}
		dispatch(
			addToCart({
				product: product,
				selectedVariants: selectedVariants,
			})
		);

		return true;
	};

	/**
	 * The function `handleAddAndCheckout` adds a product to the cart, removes selected variants, and
	 * navigates to the checkout page if successful.
	 * @param product - The product object that you want to add to the cart and checkout.
	 * @param selectedVariants - An array of selected variants for the product.
	 * @param isDrawerClose - A boolean value indicating whether the drawer should be closed after adding
	 * the product to the cart.
	 */
	const handleAddAndCheckout = (product, selectedVariants, isDrawerClose) => {
		const isSuccess = handleAddToCart(product, selectedVariants);
		if (isSuccess) {
			isDrawerClose && dispatch(removeFromSelected());
			router.push("/checkout");
		}
	};

	return {
		handleAddToCart,
		handleAddAndCheckout,
	};
};

export default useCart;
