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
        case 'justify-flex-start':
        flexContainer.style.justifyContent = "flex-start";
            break;
        case 'justify-center':
        flexContainer.style.justifyContent = "center";
            break;
        case 'justify-flex-end':
        flexContainer.style.justifyContent = "flex-end";
            break;
        case 'justify-space-around':
        flexContainer.style.justifyContent = "space-around";
            break;
        case 'justify-space-between':
        flexContainer.style.justifyContent = "space-between";
            break;
        case 'justify-space-evenly':
        flexContainer.style.justifyContent = "space-evenly";
            break;
    }
    switch (e.target.value) {
        case 'align-flex-start':
        flexContainer.style.alignItems = "flex-start";
            break;
        case 'align-center':
        flexContainer.style.alignItems = "center";
            break;
        case 'align-flex-end':
        flexContainer.style.alignItems = "flex-end";
            break;
        case 'align-baseline':
        flexContainer.style.alignItems = "baseline";
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