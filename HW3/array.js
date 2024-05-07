
// Объявление массива
let arrayOfNumbers = [5, 7, [4, [2], 8, [1, 3], 2], [9, [] ], 1, 8];

// функция для нахождения суммы массива используя рекурсию
function treeSum(arrNum) {

// если массив пустой, возвращается 0
    if (arrNum.length === 0) {
        return 0;
    }

// ввод переменной для суммы
    let summa = 0;

// проверяем каждый элемент массива
    for (let i = 0; i < arrNum.length; i++) {

// если элемент является массивом, вызывается функция treeSum
        if (Array.isArray(arrNum[i])) {
            summa += treeSum(arrNum[i]);
        } 

// если элемент число, добавляем его в sum
        else if (typeof arrNum[i] === 'number') {
            summa += arrNum[i];
        }
    }

    return summa;
}

// Вывод суммы массива (сумма 50)
console.log(treeSum(arrayOfNumbers));  
