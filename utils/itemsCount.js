/**
 * The function `getCountByKeyValue` counts the number of items in an array that have a specific
 * key-value pair.
 * @param items - The `items` parameter is an array of objects.
 * @param key - The `key` parameter is a string that represents the property key of the objects in the
 * `items` array that you want to check for a specific value.
 * @param value - The value parameter is the specific value that you want to count in the items array.
 * @returns the count of items in the given array that have a specific key-value pair.
 */
export const getCountByKeyValue = (items, key, value) => {
  let count = 0;
  if (Array.isArray(items)) {
    items.forEach((item) => {
      if (item[key] && item[key] === value) {
        count++;
      }
    });
  }
  return count;
};
