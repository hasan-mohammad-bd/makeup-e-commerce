import { useEffect, useState } from "react";

/**
 * The `useScrollPosition` function is a custom React hook that returns the current scroll position of
 * the window.
 * @returns The `useScrollPosition` hook returns the current scroll position of the window.
 */
export const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const updatePosition = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener("scroll", updatePosition);

		updatePosition();

		return () => window.removeEventListener("scroll", updatePosition);
	}, []);

	return scrollPosition;
};
