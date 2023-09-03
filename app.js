const iframes = document.querySelectorAll('iframe');
const tableOfContent = document.getElementById('table-of-content');
const containers = document.querySelectorAll('.container');

const layoutMargins = function () {
    const tableOfContentWidth = tableOfContent.offsetWidth;
    const marginSize = (window.innerWidth - (containers[0].offsetWidth + tableOfContentWidth)) / 2;
    tableOfContent.style.left = `${marginSize + containers[0].offsetWidth}px`;
    for (let i = 0; i < containers.length; i++) {
        containers[i].style.marginInline = `${marginSize}px`;
    }
};

window.addEventListener('resize', layoutMargins);
layoutMargins();


function resizeIframe () {
    iframes.forEach(frame => {
        const padding = 16;
        const iframeContentHeight = frame.contentWindow.document.body.offsetHeight;
        frame.style.height =  `${iframeContentHeight + padding}px`;
    });
}
// for flex-responsive-form
iframes.forEach(frame => {
    frame.contentWindow.addEventListener('load', resizeIframe);
    frame.contentWindow.addEventListener('change', resizeIframe);
    frame.contentWindow.addEventListener('input', resizeIframe);
});

resizeIframe();