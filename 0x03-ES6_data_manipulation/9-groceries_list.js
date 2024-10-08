export default function groceriesList() {
  const arr = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const mps = new Map();
  // eslint-disable-next-line no-unused-vars
  for (const items of arr) {
    mps.set(items[0], items[1]);
  }
  return mps;
}
