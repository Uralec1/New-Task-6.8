const linkField = document.querySelector('a'); 
linkField.addEventListener('click', evt => { 
    const link = prompt('Измените текст ссылки'); 
    linkField.textContent = link; 
    console.log('Текст в теге a изменён на', link); 
    evt.preventDefault(); 
});


