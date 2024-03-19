let Text = document.querySelector('a');
  
Text.addEventListener('click', function(event) {
    event.preventDefault();
    const TextX = prompt('Введите текстдля изменения');
    Text.textContent = TextX
})