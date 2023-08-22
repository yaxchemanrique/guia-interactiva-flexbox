const form = document.querySelector('form');
const flexContainer = document.querySelector('.flex-container');
const flexItems = document.querySelectorAll('.flex-item');

const containerWidthContainer = document.querySelector('#container-width-value');
const containerWidthController= document.querySelector('#container-width');

const widthFirstItem = document.querySelector('#width-first-item');
const widthSecondItem = document.querySelector('#width-second-item');
let containerWidth = containerWidthController.value;

const reducedFirstByContainer = document.querySelector('#reduced-first-item');
const reducedSecondByContainer = document.querySelector('#reduced-second-item');

const flexBasisItem1 = 300;
const flexBasisItem2 = 150;

const updateWidthsContainers = () => {
    const firstItemWidthValue = flexItems[0].offsetWidth;
    const secondItemWidthValue = flexItems[1].offsetWidth;
    widthFirstItem.textContent = firstItemWidthValue + ' px';
    widthSecondItem.textContent = secondItemWidthValue + ' px';
    // const reducedFirst = Math.round((1 - (firstItemWidthValue / flexBasisItem1))*100);
    const reducedFirst = (1 - (firstItemWidthValue / flexBasisItem1))*(100);
    // const reducedSecond = Math.round((1 - (secondItemWidthValue / flexBasisItem2))*100);
    const reducedSecond = (1 - (secondItemWidthValue / flexBasisItem2))*(100);
    reducedFirstByContainer.textContent = reducedFirst.toFixed(2) + '%';
    reducedSecondByContainer.textContent = reducedSecond.toFixed(2) + '%';
}

const updateContainerWidth = () => {
    containerWidth = containerWidthController.value;
    flexContainer.style.width = containerWidth + 'px';
    containerWidthContainer.textContent = containerWidth + ' px';
    updateWidthsContainers();
}


containerWidthController.addEventListener("input", updateContainerWidth);