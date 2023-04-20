/**
 * Parses a query string into an object containing key-value pairs.
 *
 * @param {string} queryString - The query string to parse (e.g., "?key1=value1&key2=value2").
 * @returns {Record<string, string>} An object containing the key-value pairs parsed from the query string.
 */
export function parseQueryString(queryString: string): Record<string, string> {
  // Return an empty object if the input is empty or contains only a question mark
  if (!queryString || queryString === '?') return {}

  // Remove the leading question mark "?" if present
  const cleanedQueryString = queryString.replace(/^\?/, '')

  // Split the cleaned query string by the '&' character to get an array of key-value pairs
  const keyValuePairs = cleanedQueryString.split('&')

  // Map each key-value pair by splitting it by the '=' character
  const keyValueArrays = keyValuePairs.map((param) => param.split('='))

  // Reduce the array of key-value arrays into an object containing key-value pairs
  // Decode any URL-encoded characters for both keys and values
  const result = keyValueArrays.reduce(
    (acc, [key, value]) => ({
      ...acc,
      [decodeURIComponent(key)]: decodeURIComponent(value)
    }),
    {}
  )

  return result
}
