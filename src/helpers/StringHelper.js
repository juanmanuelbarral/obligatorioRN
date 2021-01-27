export const contains = (container, containee, caseSensitive) => {
  const s1 = caseSensitive ? container : container.toLowerCase();
  const s2 = caseSensitive ? containee : containee.toLowerCase();
  return s1.indexOf(s2) >= 0;
};
