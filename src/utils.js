/**
 * Simple string comparator function
 * @param sourceA
 * @param sourceB
 * @returns {number}
 */
const compareString = (sourceA, sourceB) => {
  const a = sourceA.toLowerCase();
  const b = sourceB.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const compareNumbers = (a, b) => a - b;

export const compareHelper = {
  name: compareString,
  amount: compareNumbers,
  price: compareNumbers
};
