/**
 * The function `getChunksList` takes an array and splits it into smaller arrays of a specified size.
 * @param list - The `list` parameter is an array that you want to split into chunks.
 * @param [chunk_size=2] - The `chunk_size` parameter determines the size of each chunk in the
 * resulting chunks list. By default, it is set to 2, which means that the input list will be divided
 * into chunks of size 2.
 * @returns The function `getChunksList` returns an array of chunks, where each chunk is a subarray of
 * the original `list` array. If the `list` is an array, the function will divide it into chunks of
 * size `chunk_size` (default is 2). If the `list` is not an array, it will return an array with the
 * `list` as the only element
 */
export const getChunksList = (list, chunk_size = 2) => {
	if (Array.isArray(list)) {
		const chunksList = new Array(Math.ceil(list.length / chunk_size))
			.fill()
			.map((_, index) => index * chunk_size)
			.map((begin) => list.slice(begin, begin + chunk_size));
		return chunksList;
	}
	return [list];
};
