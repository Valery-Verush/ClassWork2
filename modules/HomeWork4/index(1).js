// ********Задание 1************

const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

function arrayClone(arr) {
  //   return JSON.parse(JSON.stringify(arr));
  // return [...arr];
  // return arr.concat();
  return arr.slice();
}

let arr1 = arrayClone(vegetables);

console.log(arr1);
