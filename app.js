const iframes = document.querySelectorAll('iframe');
const tableOfContent = document.getElementById('table-of-content');
const mainContainer = document.querySelector('.container');

const padding = 16;
const header = document.querySelector('header');
const headerBounding = header.getBoundingClientRect();
const headerHeight = document.querySelector('header').scrollHeight;
const nav = document.querySelector('nav');
const navHeight = nav.scrollHeight;
const backTopBtn = document.querySelector('#scroll-to-top');
const viewportHeight = window.innerHeight;
backTopBtn.style.display = 'none';

const layoutMargins = function () {
    const tableOfContentWidth = tableOfContent.offsetWidth;
    const marginSize = (window.innerWidth - (mainContainer.offsetWidth + tableOfContentWidth)) / 2;
    tableOfContent.style.left = `${marginSize + mainContainer.offsetWidth}px`;
    mainContainer.style.marginInline = `${marginSize}px`;
};

const positionToc = function () {
    if (window.scrollY >= 0 && window.scrollY < headerHeight) {
        tableOfContent.style.top = `${headerHeight - window.scrollY + navHeight}px`;
    } else if (window.scrollY >= headerHeight - (navHeight + 200)) {
        tableOfContent.style.top = `${navHeight}px`;
    }
    if (window.scrollY > viewportHeight * 0.3) {
        if (!backTopBtn.classList.contains('fade-in')) {
            console.log('button appears');
            backTopBtn.style.display = 'block';
            backTopBtn.classList = 'fade-in';
        }
    }

    else {
        if (!backTopBtn.classList.contains('fade-out')) {
            console.log('bye button');

            backTopBtn.classList = 'fade-out';
            setTimeout(() => {
                backTopBtn.style.display = 'none';
            }, 300);
        }
    }
}

window.addEventListener('resize', layoutMargins);
window.addEventListener('scroll', positionToc)
layoutMargins();
positionToc();


function resizeIframe() {
    iframes.forEach(frame => {
        if (frame.contentWindow.document.body) {
            const iframeContentHeight = frame.contentWindow.document.body.offsetHeight;
            frame.style.height = `${iframeContentHeight + padding}px`;
        }
    });
}
function resizeIframeLoad() {

    iframes.forEach(frame => {
        if (frame.contentWindow.document.body) {
            const iframeContentHeight = frame.contentWindow.document.body.offsetHeight;
            frame.style.height = `${iframeContentHeight + padding}px`;
        }
    });
    // document.body.style.backgroundColor = 'goldenrod'

}

// for flex-responsive-form
iframes.forEach(frame => {
    frame.contentWindow.addEventListener('load', resizeIframeLoad);
    frame.contentWindow.addEventListener('change', resizeIframe);
    frame.contentWindow.addEventListener('input', resizeIframe);
});

backTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})