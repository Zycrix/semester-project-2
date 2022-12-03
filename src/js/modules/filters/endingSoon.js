export function endingFilter(data) {
  const copy = data.slice(0, data.length);

  copy.sort((a, b) => {
    return Date.parse(a.endsAt) - Date.parse(b.endsAt);
  });

  return copy;
}
