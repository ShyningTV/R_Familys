document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.querySelector("iframe");
    iframe.onload = function() {
        const iframeContent = iframe.contentDocument || iframe.contentWindow.document;
        const header = iframeContent.querySelector("header");
        if (header) {
            header.style.display = "none";
        }
    };
});
