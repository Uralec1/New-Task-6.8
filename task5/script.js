const input = document.getElementById('input1'); 
const duplicateField = document.getElementById('duplicateField'); 

input.onchange = function() { 
  duplicateField.innerHTML = input.value; 
};
 
const submit = document.getElementById('button1'); 
submit.onclick = () => {
    console.log(input.value);
    input.value = '';
    duplicateField.innerHTML = '';
}