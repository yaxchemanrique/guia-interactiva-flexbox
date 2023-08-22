const settingsFieldset = document.querySelector('#settings');
const propertyFieldset = document.querySelector('#property');
const flexContainer = document.querySelector('.flex-container');

const arrowHorizontal = document.querySelector('#arrow-horizontal');
const arrowVertical = document.querySelector('#arrow-vertical');

const primaryAxisCheckbox = document.querySelector('#show-primary-axis');
const flexItems = document.querySelectorAll('.flex-item');

const containerWidth = document.querySelector('.container-width');
const containerFreeSpace = document.querySelector('.container-free-space');
const flexItemsWidth = document.querySelectorAll('.flex-item-width');

let directionSelected = 'row';
let flexGrow = 0;
let flexGrowValue = 'flex-grow-0';
let nthOfType = 1;
let nthOfTypeSelector = document.querySelector(`.flex-item:nth-of-type(${nthOfType})`)
nthOfTypeSelector.style.backgroundColor = 'var(--clr-pink)';


function showBlockElement(element) {
    element.style.display = 'block'
}

function hideBlockElement(element) {
    element.style.display = 'none'
}

const updateContainerStats = ()=> {
    let flexItemsWidthValue = [];
    let flexItemsWidthTotalValue = 0;
    let containerWidthValue = 0;
    let directionTextString = '';
    
    if(directionSelected === 'row') {
        directionTextString = 'Width';
        containerWidthValue = flexContainer.offsetWidth;
        flexItems.forEach(item => {
            flexItemsWidthValue.push(item.offsetWidth);
            flexItemsWidthTotalValue += item.offsetWidth;
        });
    } else {
        directionTextString = 'Height';
        containerWidthValue = flexContainer.offsetHeight;
        flexItems.forEach(item => {
            flexItemsWidthValue.push(item.offsetHeight);
            flexItemsWidthTotalValue += item.offsetHeight;
        });
    }

    const containerFreeSpaceValue = containerWidthValue - flexItemsWidthTotalValue > 1 ? containerWidthValue - flexItemsWidthTotalValue : 0;
    containerWidth.innerHTML = `Flex Container ${directionTextString}: <span class="value">${containerWidthValue}</span>`;
    containerFreeSpace.innerHTML = `Free Space (Flex Container ${directionTextString} - Flex Items ${directionTextString}): <span class="value">${containerFreeSpaceValue}</span>`;
    for (let i = 0; i < flexItemsWidthValue.length; i++) {
        flexItemsWidth[i].innerHTML = `Flex Item No.${i} ${directionTextString}: <span class="value">${flexItemsWidthValue[i]}</span>`;
    }
}

const updateFlexDirection = (e) => {
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
}

const updateNthOfType = (e) => {
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
}

const updateFlexGrow = () => {
    if(flexGrowValue === 'flex-grow-1') {
        flexGrow = 1;
    } else {
        flexGrow = 0;
    }
    nthOfTypeSelector.style.flexGrow = flexGrow;
}

const resetFlexGrow = () => {
flexItems.forEach(item => {
        item.style.flexGrow = 0;
    })
}

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

settingsFieldset.addEventListener('change', (e) => {
    flexItems.forEach(item => {
        item.style.backgroundColor = 'var(--clr-light-gray-100-3)';
    });
    
    updateNthOfType(e);

    updateFlexDirection(e);
    
    nthOfTypeSelector = document.querySelector(`.flex-item:nth-of-type(${nthOfType})`);
    nthOfTypeSelector.style.backgroundColor = 'var(--clr-pink)';

    resetFlexGrow();
    updateFlexGrow();

    updateContainerStats();
});

propertyFieldset.addEventListener('change', (e) => {
    if(e.target.value === 'flex-grow-1') {
        flexGrowValue = 'flex-grow-1';
    } else {
        flexGrowValue = 'flex-grow-0';
    }
    updateFlexGrow();
updateContainerStats();
});

updateContainerStats();