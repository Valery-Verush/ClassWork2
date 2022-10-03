let arrayNumb = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];

const treeSum = (arrayNumb, sumArray = 0) => {
  for (let i in arrayNumb) {
    if (typeof arrayNumb[i] == "number") {
      sumArray += arrayNumb[i];
    } else {
      sumArray += treeSum(arrayNumb[i]);
    }
  }
  return sumArray;
};

console.log(treeSum(arrayNumb));
