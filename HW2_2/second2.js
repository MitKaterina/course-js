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
    } 
    // возвращаем ФИО
    return 'Ваше ФИО: ' + lastName +' ' + firstName +' ' + patronymic;
}

// функция для проверки возраста
function checkAge() {

    // переменная для возраста
    let ageEnter = prompt('Сколько Вам лет?');
    
    // Проверка, не является ли введенный возраст пустым или не число
    if (ageEnter === null || ageEnter.trim() === "") {
        alert("Возраст веден не корректно");
    }

    // Проверяем, входит ли возраст в допустимый диапазон (18-120 лет)
    // Преобразовывание возраста в число
    let age = parseInt(ageEnter);
    if (age <= 18 || age >= 120) {
        // Выводим сообщение об ошибке, если возраст вне диапазона
        alert ("Ошибка: возраст должен быть от 18 до 120 лет");
    } 

    // объявляем переменную для возраста в днях и присваиваем ей значение переменной age умноженное на количество дней в году
    let ageInDays = age * 365;

    // объявляем переменную для возраста через 5 лет и присваиваем ей значение: 5 лет + переменная age
    let ageIn5Years = age + 5;

    // переменные для определения пола и пенсии
    let gender = confirm("Ваш пол - мужской?");
    let pension;

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
    // возвращаем полученные данные: возраст, возраст в днях, возраст через 5 лет, пол и пенсию
    return "Ваш возраст в годах: " + age + "\n" +
    "Ваш возраст в днях: " + ageInDays + "\n" +
    "Через 5 лет вам будет: " + ageIn5Years + "\n" +
    "Ваш пол: " + gender + "\n" +
    "Вы на пенсии: " + pension;
    }

// вызов функций и получаем из них данные
var nameInfo = enterFio();
var ageInfo = checkAge();

// Формирование данных анкеты
message= nameInfo + "\n" + ageInfo;
  
// Вывод данных с информацией о пользователе
alert(message);


