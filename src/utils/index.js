export const allergens = array =>
  array.map((a, i) => `${a}${array.length - 1 === i ? `` : `, `}`)

export const allergenList = [
  {
    no: 1,
    title: "Celery",
  },
  {
    no: 2,
    title: "Wheat",
  },
  {
    no: 3,
    title: "Eggs",
  },
  {
    no: 4,
    title: "Fish",
  },
  {
    no: 5,
    title: "Milk",
  },
  {
    no: 6,
    title: "Mustard",
  },
  {
    no: 7,
    title: "Nuts",
  },
  {
    no: 8,
    title: "Soya",
  },
  {
    no: 9,
    title: "Peanuts",
  },
  {
    no: 10,
    title: "Shellfish",
  },
  {
    no: 11,
    title: "Sulphites",
  },
]
