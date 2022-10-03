// ********Задание 6************

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];

const sumArr = (...arrays) => {
  result = [];
  arrays.forEach((element) => {
    element.forEach((element, index) => {
      if (result[index] == undefined) {
        result[index] = +element;
      } else {
        result[index] += +element;
      }
    });
  });
  return result;
};

console.log(sumArr(arr1, arr2));
