$(document).ready(function () {
    $.get("https://jsonplaceholder.t2ypicode.com/users")
        .done(tratarDadosRecebidos)
        .fail(tratarErro)

});

function tratarDadosRecebidos(data) {
    console.log(`LOG: tratarDadosRecebidos -> data`, data);
}

function tratarErro(erro) {
    console.log(`LOG: tratarErro -> erro`, erro);
    alert("Erro ao buscar dados!");
}