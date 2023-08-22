const flexContainer = document.querySelector('.flex-container');
const flexItems = document.querySelectorAll('.flex-item');

const leftButtonsContainer = document.querySelector('#left-buttons-container');
const rightButtonsContainer = document.querySelector('#right-buttons-container');
const buttonsContainer = document.querySelectorAll('.buttons-container');

const leftNumeratorContainer = document.querySelector('#left-fraction-numerator');
const rightNumeratorContainer = document.querySelector('#right-fraction-numerator');
const denominators = document.querySelectorAll('.denominator');

const resetButton = document.querySelector('.reset-button');

let counter = 2;
let leftNumerator = 1;
let rightNumerator = 1;

const updateFractionsContent = () => {
    leftNumeratorContainer.textContent = leftNumerator;
    rightNumeratorContainer.textContent = rightNumerator;
    denominators.forEach( denominator => denominator.textContent = counter)
}

const updateNumerators = (e) => {
    switch (e.target.id) {
        case 'left-plus-button':
            leftNumerator = leftNumerator + 1;
            break;
        case 'left-minus-button':
            leftNumerator = leftNumerator - 1 > 0 ? leftNumerator - 1 : 0;
            break;
        case 'right-plus-button':
            rightNumerator = rightNumerator + 1;
            break;
        case 'right-minus-button':
            rightNumerator = rightNumerator > 0 ? rightNumerator - 1 : 0;
            break;
        default:
            break;
    }
    counter = leftNumerator + rightNumerator;
}

const updateFlexGrow = () => {
    flexItems[0].style.flexGrow = leftNumerator;
    flexItems[1].style.flexGrow = rightNumerator;
}

const resetButtonFunction = () => {
    leftNumerator = 1;
    rightNumerator = 1;
    counter = 2;
    updateFractionsContent();
    updateFlexGrow();
}

buttonsContainer.forEach(buttonContainer => {
    buttonContainer.addEventListener('click', (e) => {
            updateNumerators(e);
            updateFractionsContent();
            updateFlexGrow();
        });
});

resetButton.addEventListener('click', resetButtonFunction)



updateFractionsContent();
updateFlexGrow();