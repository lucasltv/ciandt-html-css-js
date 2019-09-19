window.addEventListener('load', boot);

function boot() {
    var allLinksWithMouseHoverEfectArray = document.getElementsByClassName("mouseHoverEfect");
    for (let index = 0; index < allLinksWithMouseHoverEfectArray.length; index++) {
        var span = allLinksWithMouseHoverEfectArray[index];
        addMouseOverEfect(span);
    }
}

function addMouseOverEfect(span) {
    span.addEventListener('mouseenter', function (e) {
        this.style.fontWeight = "bold";
    });
    span.addEventListener('mouseleave', function (e) {
        this.style.fontWeight = "normal";
    })
}