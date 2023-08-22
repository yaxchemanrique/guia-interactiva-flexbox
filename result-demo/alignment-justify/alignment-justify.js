const form = document.querySelector('.form');
const flexContainer = document.querySelector('.flex-container');

const arrowHorizontal = document.querySelector('#arrow-horizontal');
const arrowVertical = document.querySelector('#arrow-vertical');

const primaryAxisCheckbox = document.querySelector('#show-primary-axis');

let directionSelected = 'row';

function showBlockElement(element) {
    element.style.display = 'block'
}

function hideBlockElement(element) {
    element.style.display = 'none'
}

form.addEventListener('change', (e) => {
    if(e.target.value === 'direction-row') {
        flexContainer.style.flexDirection = "row";
        directionSelected = 'row';

        if(primaryAxisCheckbox.checked){
            hideBlockElement(arrowVertical);
            showBlockElement(arrowHorizontal);
        }
    } else if(e.target.value === 'direction-column'){
        flexContainer.style.flexDirection = "column";
        directionSelected = 'column';

        if(primaryAxisCheckbox.checked) {
            hideBlockElement(arrowHorizontal);
            showBlockElement(arrowVertical);
        }
    }
    switch (e.target.value) {
        case 'flex-start':
        flexContainer.style.justifyContent = "flex-start";
            break;
        case 'center':
        flexContainer.style.justifyContent = "center";
            break;
        case 'flex-end':
        flexContainer.style.justifyContent = "flex-end";
            break;
        case 'space-around':
        flexContainer.style.justifyContent = "space-around";
            break;
        case 'space-between':
        flexContainer.style.justifyContent = "space-between";
            break;
        case 'space-evenly':
        flexContainer.style.justifyContent = "space-evenly";
            break;
    }
})

primaryAxisCheckbox.addEventListener('change', (e) => {
    if(primaryAxisCheckbox.checked && directionSelected === 'row') {
        showBlockElement(arrowHorizontal);

    } else if(primaryAxisCheckbox.checked && directionSelected === 'column') {
        showBlockElement(arrowVertical);

    } else if(!primaryAxisCheckbox.checked) {
        hideBlockElement(arrowHorizontal);
        hideBlockElement(arrowVertical);
    }
});