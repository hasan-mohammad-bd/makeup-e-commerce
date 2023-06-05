/**
 * This is an asynchronous function that fetches data from an API using the provided configuration and
 * returns the data.
 * @param config - The `config` parameter is an object that contains the configuration options for the
 * `fetchData` function. It may contain the following properties:
 * @returns The `fetchData` function is returning the `data` fetched from the API endpoint specified in
 * the `config` parameter. If there is an error during the fetch, it will throw an error with the
 * message "Failed to fetch data".
 */
export async function fetchData(config) {
  // fetch(`${process.env.server}/products`, { cache: 'force-cache' });
  const res = await fetch(`${process.env.server}/${config?.api}`, {
    next: { revalidate: config?.revalidate || 60 },
    headers: {
      AmsPublickey: process.env.AmsPublickey,
      AmsPrivateKey: process.env.AmsPrivateKey,
    },
  });
  const data = await res.json();

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return data;
}
