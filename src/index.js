import "./main.scss";

let userSecondName;
while (true) {
  userSecondName = prompt("Введите вашу фамилию");
  if (typeof userSecondName == "string" && userSecondName != "") {
    break;
  } else {
    alert("Не указана фамилия пользователя");
  }
}

let userFirstName;
while (true) {
  userFirstName = prompt("Введите ваше имя");
  if (typeof userFirstName == "string" && userFirstName != "") {
    break;
  } else {
    alert("Не указано имя пользователя");
  }
}

let userFatherName;
while (true) {
  userFatherName = prompt("Введите ваше отчество");
  if (typeof userFatherName == "string" && userFatherName != "") {
    break;
  } else {
    alert("Не указано отчество пользователя");
  }
}

let userAge;
while (true) {
  userAge = prompt("Введите ваш возраст");
  userAge = +userAge;
  if (typeof userAge == "number" && userAge > 0) {
    break;
  } else {
    alert("Не указан возраст пользователя");
  }
}

let isUserMenGender;
let UserGender;
isUserMenGender = confirm("Ваш пол мужской ?");
if (isUserMenGender == true) {
  UserGender = "Мужской";
} else {
  UserGender = "Женский";
}

let isUserOnPension;
if (
  (isUserMenGender == true && userAge < 62) ||
  (isUserMenGender == false && userAge < 57)
) {
  isUserOnPension = "нет";
} else {
  isUserOnPension = "да";
}

const questionnaire = `ваше ФИО: ${
  userSecondName + " " + userFirstName + " " + userFatherName
}
ваш возраст в годах: ${userAge}
ваш возраст в днях: ${userAge * 365}
через 5 лет вам будет: ${userAge + 5}
ваш пол: ${UserGender}
вы на пенсии: ${isUserOnPension}`;

alert(questionnaire);
