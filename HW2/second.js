// Переменная для хранения данных анкеты
let message;

// функция для ввода фамилии, имени, отчества
function enterFio() {

    // переменная для ввода фамилии
    let lastName = prompt("Введите Вашу фамилию");
    // Проверка пустое поле или нет для фамилии
    if (lastName.trim() === null || lastName.trim() === "") {
    // Если пустое то сообщение
        alert("Вы не ввели данные");
    } 

    // переменная для ввода имени
     let firstName = prompt("Введите Ваше имя");
    // Проверка пустое поле или нет для имени
    if (firstName.trim() === null || firstName.trim() === "") {
    // Если пустое то сообщение
        alert("Вы не ввели имя");
    } 

    // переменная для ввода отчества
    let patronymic = prompt("Введите Ваше отчество");
    // Проверка пустое поле или нет для отчества
    if (patronymic.trim() === null || patronymic.trim() === "") {
    // Если пустое то сообщение
        alert("Вы не ввели отчество");
    } else {

    // объединени фамилии, имени и отчества в одну переменную
    fullName = firstName + " " + lastName + " " + patronymic;
}
}
// вызов функции ввода фамилии, имени, отчества
enterFio();

// переменные для возраста, пола и пенсии

let gender = confirm("Ваш пол - мужской?");
let age = prompt('Сколько Вам лет?');
let pension;

// функция для проверки возраста
function checkAge() {

    // Проверка, не является ли введенный возраст пустым или не число
    if (age === null || age.trim() === "") {
        alert("Возраст веден не корректно");
    }
    
    // Преобразовывание возраста в число
    age = parseInt(age);
    
    // проверка границ возраста
    if (age <= 18 && age >= 120) {
        alert("Возраст должен быть указан между цифрами 18 и 120");
    } 

    // проверка на пенсионный возраст и пол
    // переменная для хранения пенсионного возраста
    let pensionAge;
    gender?pensionAge=63:pensionAge=58;       
    if(pensionAge===63 && age>=pensionAge || pensionAge===58 && age>=pensionAge) {
        pension="да";
        } else{
        pension="нет"
        }
        if(gender){
        gender="мужской";
        } else{
        gender="женский";
        }
}

// вызов функции проверки возраста
checkAge();

// объявляем функцию для определения возраста через 5 лет и получаем результат
function ageIn5Years(a, age) {
    return a + age;
  }
// записываем результат в переменную
let resultInYears = ageIn5Years(5, age);

// объявляем функцию для определения возраста в днях и получаем результат
function ageInDays(a, age) {
    return a * age;
  }
// записываем результат в переменную
let resultInDays = ageInDays(365, age);

// Формирование данных анкеты
message=
         "Ваше ФИО: " + fullName + "\n" +
         "Ваш возраст в годах: " + age + "\n" +
         "Ваш возраст в днях: " + resultInDays + "\n" +
         "Через 5 лет вам будет: " + resultInYears + "\n" +
         "Ваш пол: " + gender + "\n" +
         "Вы на пенсии: " + pension;

// Вывод данных с информацией о пользователе
alert(message);