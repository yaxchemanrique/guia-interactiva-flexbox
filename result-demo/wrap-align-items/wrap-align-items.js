const form = document.querySelector('.form');
const flexContainer = document.querySelector('.flex-container');

form.addEventListener('change', (e) => {
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
        case 'align-stretch':
        flexContainer.style.alignItems = "stretch";
            break;
    }
});