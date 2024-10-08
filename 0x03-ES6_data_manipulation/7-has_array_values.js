export default function hasValuesFromArray(set, arr) {
  for (const items of arr) {
    if (!set.has(items)) return false;
  }
  return true;
}
