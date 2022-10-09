// ********Задание 8************

let numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

let compareNumbers = (arr) => {
  arr.sort((a, b) => {
    return b - a;
  });
  return arr;
};

console.log(compareNumbers(numbers));
