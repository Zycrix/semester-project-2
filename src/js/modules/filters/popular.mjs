/**
 * A function to create an array containing all the active listings with bids to display them as popular listings
 * @param {Array} data The data array containing all the active listings
 * @returns A new sorted array containing only listings with active bids
 */
export function popFilter(data) {
  const copy = data.slice(0, data.length);

  copy.sort((a, b) => {
    return b.bids.length - a.bids.length;
  });

  const removeEmpty = copy.filter((e) => {
    return e.bids.length > 0;
  });

  return removeEmpty;
}
