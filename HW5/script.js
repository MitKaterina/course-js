// JavaScript-код для взаимодействия с хранилищем рецептов напитков

// класс для создания хранилища рецептов напитков
class objStorageFunc {
    constructor() {
    // Приватная переменная для хранения данных
    this.data = {};
    }
    // Метод для добавления значения по ключу
    addValue(key, value) {
        this.data[key] = value; // Сохраняем значение под указанным ключом
    };

    // Метод для получения значения по ключу
    getValue(key) {
        return this.data[key]; // Возвращаем значение по указанному ключу
    };

    // Метод для удаления значения по ключу
    deleteValue(key) {
        if (this.data[key]) {
            delete this.data[key]; // Удаляем значение с указанным ключом
            return true;
        }
        return false;
    };

    // Метод для получения массива ключей
    getKeys() {
        return Object.keys(this.data); // Возвращаем массив ключей
    };
}

// Создание объекта drinkStorage класса ObjStorageFunc
var drinkStorage = new objStorageFunc();

// Функция для добавления информации о напитке
function addDrink() {
    let name = document.getElementById('drinkName').value;
    let recipe = document.getElementById('drinkRecipe').value;
    let alco = document.getElementById('drinkAlco').value;
    drinkStorage.addValue(name, recipe, alco);
}

// Функция для получения информации о напитке
function getDrink() {
    let name = document.getElementById('drinkName').value;
    let alco = document.getElementById('drinkAlco').value;
    let recipe = drinkStorage.getValue(name, alco);
    if (recipe) {
        alert('Напиток: ' + name +'\n'+ 'Алкогольный: ' + alco +'\n'+ 'Рецепт приготовления: ' + recipe);
    } else {
        alert('Информации о напитке ' + name + ' нет в хранилище');
    }
}

// Функция для удаления информации о напитке
function deleteDrink() {
    let name = document.getElementById('drinkName').value;
    if (drinkStorage.deleteValue(name)) {
        alert('Информация о напитке ' + name + ' удалена из хранилища');
    } else {
        alert('Информации о напитке ' + name + ' нет в хранилище');
    }
}

// Функция для получения списка всех напитков
function getAllDrinks() {
    let keys = drinkStorage.getKeys();
    if (keys.length > 0) {
        alert('Список всех напитков: ' + keys.join(', '));
    } else {
        alert('Хранилище рецептов напитков пусто');
    }
}
