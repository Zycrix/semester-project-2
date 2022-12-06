export function searchFilter(term, data) {
  const copy = data.slice(0, data.length);

  const filtered = copy.filter((e) => {
    return (
      e.id.includes(term) ||
      e.created.includes(term) ||
      e.description?.includes(term) ||
      e.id.includes(term) ||
      e.seller.name.includes(term) ||
      e.seller.email.includes(term) ||
      e.title.includes(term)
    );
  });
  return filtered;
}
