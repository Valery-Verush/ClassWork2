// ********Задание 4************

const str = "КаЖдЫй ОхОтНиК";

const changeRegister = (str) => {
  let result = "";
  for (let i in str) {
    if (str[i].toLowerCase() === str[i]) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
};

console.log(changeRegister(str));
