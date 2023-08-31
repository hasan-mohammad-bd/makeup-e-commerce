import { format } from "date-fns";

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

/**
 * The function `getFormattedDate` takes a date as input and returns it in the format "dd MMM yyyy".
 * @param date - The `date` parameter is a string representing a date in any valid format.
 * @returns a formatted date string in the format "dd MMM yyyy".
 */
export const getFormattedDate = (date) => {
  return format(new Date(date), "dd MMM yyyy");
};

/**
 * The function `getBdFormattedDateTime` takes a date as input and returns a formatted date and time
 * string in the Bangladeshi time zone.
 * @param date - The `date` parameter is the input date that you want to format. It can be a Date
 * object, a string representing a date, or a timestamp.
 * @returns The function `getBdFormattedDateTime` returns a formatted date and time string in the
 * format "formattedDate - formattedTime".
 */
export const getBdFormattedDateTime = (date) => {
  const optionsDate = {
    timeZone: "Asia/Dhaka", // Set the time zone to Bangladeshi time zone
    year: "numeric",
    month: "long",
    day: "numeric",
    numberingSystem: "beng",
  };

  const optionsTime = {
    timeZone: "Asia/Dhaka", // Set the time zone to Bangladeshi time zone
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDate = new Date(date).toLocaleString("bn-BD", optionsDate);
  const formattedTime = new Date(date).toLocaleString("bn-BD", optionsTime);

  return `${formattedDate} - ${formattedTime}`;
};
