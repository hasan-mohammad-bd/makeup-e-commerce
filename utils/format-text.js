/**
 * The function `getSlicedText` takes a string `text` and a number `size` as input, and returns a
 * sliced version of the text if its length is greater than the specified size, otherwise it returns
 * the original text.
 * @param text - The `text` parameter is a string that represents the text that you want to slice.
 * @param size - The `size` parameter is the maximum number of characters that the `text` should be
 * sliced to. If the length of the `text` is greater than `size`, it will be sliced to `size`
 * characters and an ellipsis ("...") will be appended to the end. If the
 * @returns The function `getSlicedText` returns the sliced text if the length of the text is greater
 * than the specified size. If the length is not greater than the size, it returns the original text.
 */
export const getSlicedText = (text, size) => {
	if (typeof text === "string") {
		if (text.length > size) return text.slice(0, size) + "...";
	}
	return text;
};
