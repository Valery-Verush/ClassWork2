// ********Задание 3************

let num = 55639217;

const colonOdd = (num) => {
  let arr = [];
  let numStr = String(num);
  for (let i in numStr) {
    arr.push(numStr[i]);
  }
  let result = "";
  arr.forEach((item, index, arr) => {
    result += item;
    if (+item % 2 == 1 && +arr[index + 1] % 2 == 1) {
      result += ":";
    }
  });

  return result;
};

let result = colonOdd(num);

console.log(result);
