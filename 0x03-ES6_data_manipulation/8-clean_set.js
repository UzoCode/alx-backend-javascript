// eslint-disable-next-line consistent-return
export default function cleanSet(set, startString) {
  let ress = '';
  if (!startString || !startString.length) return ress;
  for (const items of set) {
    if (items && items.startsWith(startString)) {
      ress += `${items.slice(startString.length)}-`;
    }
  }
  return ress.slice(0, ress.length - 1);
}
