const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для ввода информации в консоль');
})

const alertParagraph = document.querySelector('#alertParagraph');

alertParagraph.addEventListener('click', () => {
    alert('Функция, выводящая информацию во всплывающем окне в браузере');
})

const promptParagraph = document.querySelector('#promptParagraph');

promptParagraph.addEventListener('click', () => {
    alert('Окно, предназначенное для запроса данных, которые пользователю нужно ввести в текстовое поле');
})