// ********Задание 10************

let litmir = [
  { author: "Хэленка", title: "Улетела сказка" },
  { author: "Коул Кресли", title: "Восстание Аркан" },
  { author: "Райчел Мид", title: "Золотая лилия" },
];

const propertyValue = (array, key) => {
  let result = [];
  array.forEach((item) => {
    result.push(item[key]);
  });
  return result;
};

console.log(propertyValue(litmir, "title"));
