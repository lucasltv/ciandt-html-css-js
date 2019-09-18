
window.addEventListener('load', boot);

function boot() {
    var removeBtn = document.querySelector("#removeBtn");
    removeBtn.addEventListener('click', removeLoremIpsumSection);
    mostrarNotificacaoBoasVindas();

    var allLinksWithMouseHoverEfectArray = document.getElementsByClassName("mouseHoverEfect");
    for (let index = 0; index < allLinksWithMouseHoverEfectArray.length; index++) {
        var span = allLinksWithMouseHoverEfectArray[index];
        addMouseOverEfect(span);
    }
}

function mostrarNotificacaoBoasVindas() {
    alert('Olá! Seja bem vindo à página inicial!');
}

function removeLoremIpsumSection(e) {
    var loremIpsumSection = document.getElementById('loremIpsumSection');
    loremIpsumSection.remove();
    this.remove();
    document.body.style.backgroundColor = "#FFFFFF";
}

function addMouseOverEfect(span) {
    span.addEventListener('mouseenter', function (e) {
        this.style.fontWeight = "bold";
    });
    span.addEventListener('mouseleave', function (e) {
        this.style.fontWeight = "normal";
    })
}