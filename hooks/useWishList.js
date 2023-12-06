import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
	useAddToWishListMutation,
	useRemoveFromWishListMutation,
} from "@/store/api/wishListAPI";

/**
 * The `useWishList` function is a custom hook that provides methods for adding and removing products
 * from a user's wishlist.
 * @returns The `useWishList` function returns an object with two properties: `handleAddToWishlist` and
 * `handleRemoveFromWishlist`.
 */
const useWishList = () => {
	const { user } = useSelector((state) => state.auth);
	const [addToWishlist] = useAddToWishListMutation();
	const [deleteFromWishlist] = useRemoveFromWishListMutation();

	/**
	 * The function `handleAddToWishlist` adds a product to the user's wishlist and displays a success or
	 * error message using the `toast` library.
	 * @param productId - The productId parameter is the unique identifier of the product that the user
	 * wants to add to their wishlist.
	 * @returns nothing (undefined).
	 */
	const handleAddToWishlist = async (productId) => {
		if (!user) {
			toast.error("You're not logged in");
			return;
		}
		try {
			await addToWishlist({ product_id: productId });
			toast.success("Product added to Wishlist!");
		} catch (error) {
			toast.error("Failed to add to wishlist");
		}
	};

	/**
	 * The function `handleRemoveFromWishlist` removes a product from a wishlist and displays a success
	 * message if successful, or an error message if unsuccessful.
	 * @param productId - The ID of the product that needs to be removed from the wishlist.
	 */
	const handleRemoveFromWishlist = async (productId) => {
		try {
			await deleteFromWishlist(productId);
			toast.success("Product removed successfully!");
		} catch (error) {
			toast.error("Failed to delete from wishlist");
		}
	};

	return {
		handleAddToWishlist,
		handleRemoveFromWishlist,
	};
};

export default useWishList;
