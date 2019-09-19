var urlApi = "https://ciandt-html-css-js.herokuapp.com/api";

$(document).ready(function () {
    buscaUsuarios();
});

function tratarDadosRecebidos(usuarios) {
    console.log(`LOG: buscaUsuarios -> usuarios`, usuarios);
}

function tratarErro(jqXHR, textStatus, msgErro) {
    // debugger
    alert("Erro API: " + msgErro);
}

//GET
function buscaUsuarios() {
    $.ajax({
        url: urlApi + "/users",
        type: "get",
    })
        .done(tratarDadosRecebidos)
        .fail(tratarErro);
}