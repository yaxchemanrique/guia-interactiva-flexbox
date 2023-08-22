let form = document.querySelector('form');
let flexContainer = document.querySelector('.flex-container');
let describingDisplay = document.querySelector('#describing-display');

form.addEventListener('change', (e) => {
    switch (e.target.value) {
        case 'display-block':
            flexContainer.style.display = "block";
            describingDisplay.textContent = 'de Bloque';
            break;
        case 'display-flex':
            flexContainer.style.display = "flex";
            describingDisplay.textContent = 'Flex';
            break;
    }
})