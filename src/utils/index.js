export const allergens = array =>
  array.map((a, i) => `${a}${array.length - 1 === i ? `` : `, `}`)
