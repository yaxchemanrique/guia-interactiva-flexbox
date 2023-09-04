const form = document.querySelector('.form');
const flexContainer = document.querySelector('.flex-container');

form.addEventListener('change', (e) => {
    switch (e.target.value) {
        case 'align-items-flex-start':
        flexContainer.style.alignItems = "flex-start";
            break;
        case 'align-items-center':
        flexContainer.style.alignItems = "center";
            break;
        case 'align-items-baseline':
        flexContainer.style.alignItems = "baseline";
            break;
        case 'align-items-stretch':
        flexContainer.style.alignItems = "stretch";
            break;
        
        case 'align-content-flex-start':
        flexContainer.style.alignContent = "flex-start";
            break;
        case 'align-content-center':
        flexContainer.style.alignContent = "center";
            break;
        case 'align-content-flex-end':
        flexContainer.style.alignContent = "flex-end";
            break;
        case 'align-content-stretch':
        flexContainer.style.alignContent = "stretch";
            break;
        case 'align-content-space-between':
        flexContainer.style.alignContent = "space-between";
            break;
        case 'align-content-space-around':
        flexContainer.style.alignContent = "space-around";
            break;
        case 'align-content-space-evenly':
        flexContainer.style.alignContent = "space-evenly";
            break;
    }
});