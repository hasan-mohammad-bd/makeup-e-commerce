import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

/**
 * The `useSelectURLQuery` function is a custom hook in JavaScript that helps handle select change
 * events and update the URL query string accordingly.
 * @returns The function `useSelectURLQuery` returns an object with a property `handleSelectChange`.
 */
const useSelectURLQuery = () => {
	const router = useRouter();
	let pathname = usePathname();
	const searchParams = useSearchParams();

	// Get a new searchParams string by merging the current
	// searchParams with a provided key/value pair
	const createQueryString = useCallback(
		(name, value) => {
			const params = new URLSearchParams(searchParams);
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);

	const handleSelectChange = (key, value) => {
		router.push(pathname + "?" + createQueryString(key, value));
	};

	return {
		handleSelectChange,
	};
};

useSelectURLQuery.metadata = {
	name: "Muhammad Touhiduzzaman",
	github: "touhidzaman",
	description: "A reusable hook to change url queries",
	filename: "useSelectURLQuery",
};

export default useSelectURLQuery;
