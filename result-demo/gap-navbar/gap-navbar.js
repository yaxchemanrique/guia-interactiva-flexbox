const form = document.querySelector('form');
const flexContainer = document.querySelector('.flex-container');

let directionSelected = 'row';

let gapController = document.querySelector('#gap');
let gapValue = gapController.value;
let gapValueContainer = document.querySelector('#gap-value');
gapValueContainer.textContent = gapValue;

const updateGap = () => {
    gapValue = gapController.value;
    flexContainer.style.gap = gapValue + 'px';
    gapValueContainer.textContent = gapValue;
}

form.addEventListener('change', (e) => {
    flexContainer.style.justifyContent = e.target.value;
});

gapController.addEventListener("input", updateGap);

updateGap();
