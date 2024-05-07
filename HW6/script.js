document.getElementById('textInput').addEventListener('input', function() {
    // Получаем введенный текст и приводим его к нижнему регистру
    var inputText = this.value.toLowerCase();
    
    // Переменные для подсчета гласных и общего количества символов
    var vowelCount = 0;
    var totalCount = 0;

    // Определяем массив гласных букв
    var vowels = ['а', 'е', 'ы', 'о', 'э', 'я', 'и', 'ю', 'ё', 'у'];

    // Перебираем каждый символ во введенном тексте
    for (var i = 0; i < inputText.length; i++) {
        // Проверяем, является ли текущий символ гласной
        if (vowels.includes(inputText[i])) {
            vowelCount++;
        }
        // Увеличиваем общее количество символов
        totalCount++;
    }

    // Получаем элемент для вывода результата
    var resultDiv = document.getElementById('result');

    // Обновляем содержимое элемента с учетом условий задачи
    if (vowelCount > 4) {
        resultDiv.innerHTML = `Всего символов: ${totalCount}
        Гласных букв: ${vowelCount}`;
        resultDiv.style.color = 'red';
    } else {
        resultDiv.innerHTML = `Всего символов: ${totalCount}
        Гласных букв: ${vowelCount}`;
        resultDiv.style.color = 'blue';
    }
});
