/**
 * Creates a new array with the ended listings removed
 * @param {array} data Array of all listings
 * @returns {array} Array with only active listings
 */
export function removeEnded(data) {
  const current = Date.parse(new Date());

  const filtered = data.filter((item) => {
    const ends = item.endsAt;
    const itemEnd = Date.parse(ends);
    return itemEnd > current;
  });

  return filtered;
}
