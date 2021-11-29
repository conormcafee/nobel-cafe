export const getMenuDataByCategory = (data, category = "") => {
  return data.filter((row) => row.fields.category === category);
};
