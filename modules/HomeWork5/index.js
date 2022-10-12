// ***********Задание1*******************************************************

class Worker {
  constructor(name, surName, rate, days) {
    (this.name = name),
      (this.surName = surName),
      (this.rate = rate),
      (this.days = days);
  }
  getSalary() {
    return this.rate * this.days;
  }
}

var worker = new Worker("Иван", "Иванов", 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surName); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// ***********Задание2*******************************************************

class MyString {
  reverse = (str) => str.split("").reverse().join("");
  ucFirst = (str) => str[0].toUpperCase() + str.slice(1);
  ucWords = (str) =>
    str
      .split(" ")
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join(" ");
}

const str = new MyString();

console.log(str.reverse("abcde")); //выведет 'edcba'
console.log(str.ucFirst("abcde")); //выведет 'Abcde'
console.log(str.ucWords("abcde abcde abcde")); //выведет 'Abcde Abcde Abcde'
