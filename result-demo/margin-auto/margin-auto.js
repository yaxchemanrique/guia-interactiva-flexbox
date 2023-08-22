const nthTypeFieldset = document.querySelector('#nth-of-type');
const marginsFieldset = document.querySelector('#margins');
const flexContainer = document.querySelector('.flex-container');
const flexItems = document.querySelectorAll('.flex-item');

let nthOfType = 1;
let nthOfTypeSelector = document.querySelector(`.flex-item:nth-of-type(${nthOfType})`)
nthOfTypeSelector.style.backgroundColor = 'var(--clr-pink)';

let marginNthType = [0, 0];

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
};

const updateMargins = () => {
    nthOfTypeSelector.style.marginLeft = marginNthType[0];
    nthOfTypeSelector.style.marginRight = marginNthType[1];
};

const resetMargins = () => {
    nthOfTypeSelector.style.marginLeft = 0;
    nthOfTypeSelector.style.marginRight = 0;
};

const updateMarginNthType = (e) => {
    switch (e.target.value) {
        case 'margin-left-0':
            marginNthType[0] = 0;
            break;
        case 'margin-left-auto':
            marginNthType[0] = 'auto';
            break;
        case 'margin-right-0':
            marginNthType[1] = 0;
            break;
        case 'margin-right-auto':
            marginNthType[1] = 'auto';
            break;
        }
};

nthTypeFieldset.addEventListener('change', (e) => {
    flexItems.forEach(item => {
        item.style.backgroundColor = 'var(--clr-light-gray-100-3)';
    });

    resetMargins();

    updateNthOfType(e);
    nthOfTypeSelector = document.querySelector(`.flex-item:nth-of-type(${nthOfType})`);
    nthOfTypeSelector.style.backgroundColor = 'var(--clr-pink)';
    
    updateMargins();
});

marginsFieldset.addEventListener('change', (e) => {
    updateMarginNthType(e);
    updateMargins();
});