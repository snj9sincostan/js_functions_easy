const without = (array, ...values) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const candidateToPush = array[i];
    if (!values.includes(candidateToPush)) {
      newArray.push(candidateToPush);
    }
  }

  return newArray;
};

console.log(without([2, 1, 2], 1, 2, 4));
