// ********Задание 7************

let arr = [3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8];

const countIdentic = (arr) => {
  let arr1 = [];
  let arr2 = [];
  arr.forEach((element) => {
    if (!arr1.includes(element)) {
      arr1.push(element);
    } else if (!arr2.includes(element)) {
      arr2.push(element);
    }
  });
  return arr2.length;
};

console.log(countIdentic(arr));
