document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const countdownDiv = document.getElementById('countdown');
    const resultDiv = document.getElementById('result');
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // функция для проверки типа пароля, если тип пассворд, тогда меняет на текст и наоборот
    function togglePasswordVisibility(input, toggleIcon) {
        if (input.type === 'password') {
            input.type = 'text';
            toggleIcon.textContent = '🙈';
        } else {
            input.type = 'password';
            toggleIcon.textContent = '👁️';
        }
    }

    // событие по клику переключать пароль видимый/невидимый
    togglePassword.addEventListener('click', () => {
        togglePasswordVisibility(password, togglePassword);
    });

    // событие по клику переключать подтверждения пароля видимый/невидимый
    toggleConfirmPassword.addEventListener('click', () => {
        togglePasswordVisibility(confirmPassword, toggleConfirmPassword);
    });

    // отправка формы регистрации, событие по кнопке отправить
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const gender = document.getElementById('gender').value;
        const terms = document.getElementById('terms').checked;

        // проверка совпадения пароля и подтверждения пароля
        if (password.value !== confirmPassword.value) {
            alert('Пароли не совпадают');
            return;
        }

        // проверка чекбокса согласия с условиями
        if (!terms) {
            alert('Необходимо согласиться с условиями');
            return;
        }
        
        // переменные для хранения данных
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('gender', gender);

        // вызов функции обратного отсчета
        startCountdown();

    });

    // функция обратного отсчета
    function startCountdown() {
        let countdown = 5;
        countdownDiv.style.display = 'block';
        countdownDiv.textContent = `Обратный отсчет: ${countdown} секунд`;

        const interval = setInterval(() => {
            countdown--;
            countdownDiv.textContent = `Обратный отсчет: ${countdown} секунд`;
            if (countdown <= 0) {
                clearInterval(interval);
                displayResult();
            }
        }, 1000);
    }

    // функция для отображения результата
    function displayResult() {
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        const gender = localStorage.getItem('gender');

        document.getElementById('resultUsername').textContent = username;
        document.getElementById('resultPassword').textContent = password;
        document.getElementById('resultGender').textContent = gender;

        countdownDiv.style.display = 'none';
        resultDiv.style.display = 'block';
    }
});

