const form = document.querySelector('.form');
const flexContainer = document.querySelector('.flex-container');

const arrowHorizontal = document.querySelector('#arrow-horizontal');
const arrowVertical = document.querySelector('#arrow-vertical');

const primaryAxisCheckbox = document.querySelector('#show-primary-axis');

let directionSelected = 'row';
let nthOfType = 1;
let alignSelfProperty = 'stretch';
let nthOfTypeSelector = document.querySelector(`.flex-item:nth-of-type(${nthOfType})`)

nthOfTypeSelector.style.backgroundColor = 'var(--clr-pink)';

function showBlockElement(element) {
    element.style.display = 'block'
}

function hideBlockElement(element) {
    element.style.display = 'none'
}

form.addEventListener('change', (e) => {
    const flexItems = document.querySelectorAll('.flex-item');
    flexItems.forEach(item => {
        item.style.alignSelf = 'stretch';
        item.style.backgroundColor = 'var(--clr-light-gray-100-3)';
    });
    if(e.target.value === 'direction-row') {
        flexContainer.style.flexDirection = 'row';
        directionSelected = 'row';

        if(primaryAxisCheckbox.checked){
            hideBlockElement(arrowVertical);
            showBlockElement(arrowHorizontal);
        }
    } else if(e.target.value === 'direction-column'){
        flexContainer.style.flexDirection = 'column';
        directionSelected = 'column';

        if(primaryAxisCheckbox.checked) {
            hideBlockElement(arrowHorizontal);
            showBlockElement(arrowVertical);
        }
    }
    switch (e.target.value) {
        case 'stretch':
            alignSelfProperty = 'stretch';
            flexContainer.style.alignSelf = 'stretch';
            break;
        case 'center':
            alignSelfProperty = 'center';
            flexContainer.style.alignSelf = 'center';
            break;
        case 'flex-start':
            alignSelfProperty = 'flex-start';
            flexContainer.style.alignSelf = 'flex-start';
            break;
        case 'flex-end':
            alignSelfProperty = 'flex-end';
            flexContainer.style.alignSelf = 'flex-end';
            break;
    }
    switch (e.target.value) {
        case 'nth-1':
            nthOfType = 1;
            break;
        case 'nth-2':
            nthOfType = 2;
            break;
        case 'nth-3':
            nthOfType = 3;
            break;
        case 'nth-4':
            nthOfType = 4;
            break;
    }
    nthOfTypeSelector = document.querySelector(`.flex-item:nth-of-type(${nthOfType})`);
    nthOfTypeSelector.style.alignSelf = alignSelfProperty;
    nthOfTypeSelector.style.backgroundColor = 'var(--clr-pink)';
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