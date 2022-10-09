// ********Задание 5***********

let arr = [
  "php",
  "php",
  "css",
  "css",
  "script",
  "script",
  "html",
  "html",
  "java",
];

const removeDuplicates = (arr) => {
  let result = [];
  arr.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  return result;
};

console.log(removeDuplicates(arr));
