const form = document.querySelector('#flex-form');
let containerWidthController= document.querySelector('#container-size');
const containerSizeValue = document.querySelector('#container-size-value');
containerWidthController.value = 600;
form.style.width = containerWidthController.value + 'px';
containerSizeValue.textContent = containerWidthController.value;

const updateContainerWidth = () => {
    let containerWidth = containerWidthController.value;
    form.style.width = containerWidth + 'px';
    containerSizeValue.textContent = containerWidth;
}

containerWidthController.addEventListener("input", updateContainerWidth);