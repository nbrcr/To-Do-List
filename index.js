// Get the input field, add button, and output div
const inputElement = document.querySelector('input[name="input"]');
const btnAddItem = document.querySelector('.btn-add-item');
const outputDiv = document.querySelector('.output');
const clearBtn = document.querySelector('.clear')

btnAddItem.addEventListener('click', () => {
    const newItemText = inputElement.value;

    const newItem = document.createElement('li');
    newItem.textContent = newItemText;

    newItem.addEventListener('click', () => {
        if (newItem.style.color === 'green') {
            newItem.style.color = 'white';
            newItem.textContent = newItem.textContent.replace('✅', '');
        } else {
            newItem.style.color = 'green';
            newItem.textContent += ' ✅';
        }
    });

    outputDiv.appendChild(newItem);

     inputElement.value = '';

});

inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        btnAddItem.click();
    }
});


clearBtn.addEventListener('click', () => {
    outputDiv.innerHTML = ''; 
})


