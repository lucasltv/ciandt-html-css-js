var urlApi = "https://ciandt-html-css-js.herokuapp.com/api";

$(document).ready(function () {
    buscaUsuarios();
});

function tratarDadosRecebidos(usuarios) {
    var tbody = $("table tbody");
    usuarios.forEach(usuario => {
        tbody.append("<tr>" +
            "<td>" + usuario.id + "</td>" +
            "<td>" + usuario.nome + "</td>" +
            "<td>" + usuario.telefone + "</td>" +
            "<td>" + usuario.email + "</td>" +
            "</tr>"
        );
    });
}

function tratarErro(jqXHR, textStatus, msgErro) {
    alert("Erro API: " + msgErro);
}

function buscaUsuarios() {
    var tituloTabela = $("#table-title");
    tituloTabela.text("Carregando...");
    $.ajax({
        url: urlApi + "/users",
        type: "get",
    })
        .done(tratarDadosRecebidos)
        .fail(tratarErro)
        .always(function () {
            tituloTabela.text("TABELA DINÂMICA");
        })
}