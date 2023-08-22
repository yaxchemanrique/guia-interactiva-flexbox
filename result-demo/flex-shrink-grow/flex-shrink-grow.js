const form = document.querySelector('form');
const flexContainer = document.querySelector('.flex-container');
const flexItems = document.querySelectorAll('.flex-item');

const flexShrinkController = document.querySelector('#flex-shrink');
const containerWidthContainer = document.querySelector('#container-width-value');
const flexShrinkValueContainers = document.querySelectorAll('.flex-shrink-value');
const containerWidthController= document.querySelector('#container-width');

let containerWidth = containerWidthController.value;

const firstItemWidthContainer = document.querySelector('#width-first-item');
const secondItemWidthContainer = document.querySelector('#width-second-item');
const divisionContainer = document.querySelector('#division');
const reducingItem1Container = document.querySelector('#multiplication-first');
const reducingItem2Container = document.querySelector('#multiplication-second');
const finalWidthItem1Container = document.querySelector('#final-width-item1');
const finalWidthItem2Container = document.querySelector('#final-width-item2');

const flexBasis = 200;
let flexShrinkValue = 1;

firstItemWidthContainer.textContent = flexBasis + ' px';
secondItemWidthContainer.textContent = flexBasis + ' px';

const hideIrrelevantInfo = () => {
    divisionContainer.parentElement.style.display = 'none';
    reducingItem1Container.parentElement.style.display = 'none';
    reducingItem2Container.parentElement.style.display = 'none';
    finalWidthItem1Container.parentElement.style.display = 'none';
    finalWidthItem2Container.parentElement.style.display = 'none';
}

const showRelevantInfo = () => {
    divisionContainer.parentElement.style.display = 'block';
    reducingItem1Container.parentElement.style.display = 'block';
    reducingItem2Container.parentElement.style.display = 'block';
    finalWidthItem1Container.parentElement.style.display = 'block';
    finalWidthItem2Container.parentElement.style.display = 'block';
}

const updateWidthsContainers = () => {
    const firstItemWidthValue = flexItems[0].offsetWidth;
    const secondItemWidthValue = flexItems[1].offsetWidth;
    firstItemWidthContainer.textContent = firstItemWidthValue + ' px';
    secondItemWidthContainer.textContent = secondItemWidthValue + ' px';
}

const updateStatsContainer = () => {
    const spaceMissing = containerWidth - (flexBasis * flexItems.length);
    document.querySelector('#missing-space').textContent = spaceMissing + ' px';

    if(spaceMissing > 0) {
        hideIrrelevantInfo();
        return
    }

    showRelevantInfo();

    const parts = Number(flexShrinkValue) + 1;
    const division = spaceMissing / parts;
    divisionContainer.textContent = (Math.round(division*100) / 100).toFixed(2) + ' px';

    const reducingItem1 = division * flexShrinkValue;
    reducingItem1Container.textContent = (Math.round(reducingItem1*100) / 100).toFixed(2) + ' px';

    const reducingItem2 = division;
    reducingItem2Container.textContent = (Math.round(reducingItem2*100) / 100).toFixed(2) + ' px';

    const finalWidthItem1 = flexBasis + reducingItem1;
    finalWidthItem1Container.textContent = (Math.round(finalWidthItem1*100) / 100).toFixed(2) + ' px';

    const finalWidthItem2 = flexBasis + reducingItem2;
    finalWidthItem2Container.textContent = (Math.round(finalWidthItem2*100) / 100).toFixed(2) + ' px';
}

const updateContainerWidth = () => {
    containerWidth = containerWidthController.value;
    flexContainer.style.width = containerWidth + 'px';
    containerWidthContainer.textContent = containerWidth + ' px';
    updateWidthsContainers();
    updateStatsContainer();
}

const updateFlexShrink = () => {
    flexShrinkValue = flexShrinkController.value;
    flexItems[0].style.flexShrink = flexShrinkValue;
    flexShrinkValueContainers.forEach(container => container.textContent = flexShrinkValue);
    updateWidthsContainers();
    updateStatsContainer();
}

updateStatsContainer();

containerWidthController.addEventListener("input", updateContainerWidth);
flexShrinkController.addEventListener("input", updateFlexShrink);