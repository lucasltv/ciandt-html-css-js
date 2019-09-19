
window.addEventListener('load', boot);

function boot() {
    var removeBtn = document.querySelector("#removeBtn");
    removeBtn.addEventListener('click', removeLoremIpsumSection);
    mostrarNotificacaoBoasVindas();
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