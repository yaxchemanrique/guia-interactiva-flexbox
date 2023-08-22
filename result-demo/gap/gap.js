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
    if(e.target.value === 'direction-row') {
        flexContainer.style.flexDirection = "row";
    } else if(e.target.value === 'direction-column'){
        flexContainer.style.flexDirection = "column";
    }
});

updateGap();

gapController.addEventListener("input", updateGap);