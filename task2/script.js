const consoleLog = document.querySelector('#consoleLog');
consoleLog.onclick = function() {
    alert('Пример команды console.log');
    console.log('выводит текст в консоль');
}

const alertU = document.querySelector('#alert');
alertU.addEventListener('click', () => {
    alert('Пример команды alert - буквально это окошко и есть пример');
    console.log('выводит текст для пользоватеня в виде небольшого всплывающего окна');
});

const promptJ = document.querySelector('#prompt');
promptJ.onclick = function() {
    alert('Пример команды prompt');
    prompt('Введите данные вашей банковской карты');
    alert('это и был пример');
    console.log('обращение к пользователю в виде небольшого всплывающего окна');
};