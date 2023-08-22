const iframes = document.querySelectorAll('iframe');

function resizeIframe () {
    iframes.forEach(frame => {
        frame.style.height = frame.contentWindow.document.body.offsetHeight + 16 + 'px';
    });
}
// for flex-responsive-form
iframes.forEach(frame => {
    frame.contentWindow.addEventListener('load', resizeIframe);
    frame.contentWindow.addEventListener('change', resizeIframe);
    frame.contentWindow.addEventListener('input', resizeIframe);
});

// iframe.contentWindow.addEventListener('input', resizeIframe);

// for display:flex/block
// iframe.contentWindow.addEventListener('change', resizeIframe);

resizeIframe();