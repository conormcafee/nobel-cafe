export const chunkArray = (array = [], chunk = 2) => {
  const data = array.reduce((resultArray, item, idx) => {
    const chunkIndex = Math.floor(idx / chunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return data;
};

export const alternateRowColour = (idx) => {
  return idx % 2 ? "bg-gray-100" : "bg-white";
};
