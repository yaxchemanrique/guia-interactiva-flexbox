const flexContainer = document.querySelector('.flex-container');
const flexWrapFieldset = document.querySelector('#flex-wrap-fieldset');
const containerWidthController= document.querySelector('#container-width');
const containerWidthContainer = document.querySelector('#container-width-value');

let containerWidth = containerWidthController.value;

containerWidthContainer.textContent = containerWidth;

const updateContainerWidth = () => {
    containerWidth = containerWidthController.value;
    flexContainer.style.width = containerWidth + 'px';
    containerWidthContainer.textContent = containerWidth;
}

const updateFlexWrap = (e) => {
    flexContainer.style.flexWrap = e.target.value;
}

flexWrapFieldset.addEventListener('change', updateFlexWrap);
containerWidthController.addEventListener("input", updateContainerWidth);
