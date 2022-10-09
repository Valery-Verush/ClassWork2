// ********Задание 8************

let litmir = [
  { author: "Хэленка", title: "Улетела сказка" },
  { author: "Коул Кресли", title: "Восстание Аркан" },
  { author: "Райчел Мид", title: "Золотая лилия" },
];

const sortLitmirByTitle = (arr) => {
  return arr.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
};

console.log(sortLitmirByTitle(litmir));
