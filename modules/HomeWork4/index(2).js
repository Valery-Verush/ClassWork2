// ********Задание 2************

const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

const transToString_1 = (item) => {
  return String(item);
};

let str1 = transToString_1(vegetables);

console.log(str1);

const transToString_2 = (item) => {
  let string = "";

  item.forEach(function (item, index, arr) {
    string += item;
    if (index !== arr.length - 1) {
      string += ",";
    }
  });
  return string;
};

let str2 = transToString_2(vegetables);

console.log(str2);

const transToString_3 = (item) => {
  return item.join();
};

let str3 = transToString_3(vegetables);

console.log(str3);
// document.writeln(str1);
// document.writeln(str2);
