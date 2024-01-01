import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  useAddToWishListMutation,
  useGetWishListQuery,
  useRemoveFromWishListMutation,
} from "@/store/api/wishListAPI";
import { useParams } from "next/navigation";

/**
 * The `useWishList` function is a custom hook that provides methods for adding and removing products
 * from a user's wishlist.
 * @returns The `useWishList` function returns an object with two properties: `handleAddToWishlist` and
 * `handleRemoveFromWishlist`.
 */
const useWishList = () => {
  const { locale } = useParams();
  const { data, isLoading } = useGetWishListQuery({ locale });
  const { user } = useSelector((state) => state.auth);
  const [addToWishlist] = useAddToWishListMutation();
  const [deleteFromWishlist] = useRemoveFromWishListMutation();

  const wishedProducts = data?.data || [];

	
  
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

  const handleWishListProductStatus = (productId) => {
    const product = wishedProducts.find((product) => product.id === productId);
    if (product) {
      return true;
    }
    return false;
  };

  return {
    handleAddToWishlist,
    handleRemoveFromWishlist,
		handleWishListProductStatus
  };
};

export default useWishList;
