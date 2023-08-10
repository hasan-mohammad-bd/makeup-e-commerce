/**
 * The function `getBdFormattedDate` takes a date as input and returns the formatted date in the
 * Bengali (Bangladesh) locale.
 * @param date - The `date` parameter is the input date that you want to format.
 * @returns The function `getBdFormattedDate` returns a formatted date string in the "bn-BD"
 * (Bengali-Bangladesh) locale.
 */
export const getBdFormattedDate = (date) => {
  return new Date(date).toLocaleDateString("bn-BD");
};
