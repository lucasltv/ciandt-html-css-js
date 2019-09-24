var urlApi = "https://ciandt-html-css-js.herokuapp.com/api/users";

var usuarios = [];
var ordenacao = true; //true=asc e false=desc
var selecionado = "nome";
$(document).ready(function () {
    buscaUsuarios();
    $("th").on("click", alteraOrdenacao)
});

function renderizaTabela(usuariosParaRenderizar) {
    var tbody = $("table tbody");
    tbody.html("");
    usuarios = usuariosParaRenderizar;
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
        url: urlApi,
        type: "get",
    })
        .done(renderizaTabela)
        .fail(tratarErro)
        .always(function () {
            tituloTabela.text("TABELA DINÂMICA");
        })
}

function alteraOrdenacao(event) {
    var id = this.id;
    switch (id) {
        case "thId":
            ordenaTabela('id');
            break;
        case "thNome":
            ordenaTabela('nome');
            break;
        case "thTelefone":
            ordenaTabela('telefone');
            break;
        case "thEmail":
            ordenaTabela('email');
            break;
        default:
            return;
    }
    renderizaSeta(id);
}

function renderizaSeta(id) {
    $("#thId a").text("ID");
    $("#thNome a").text("Nome");
    $("#thTelefone a").text("Telefone");
    $("#thEmail a").text("Email");
    var selecionado = $("#" + id + " a");
    var seta = ordenacao ? " &darr;" : " &uarr;";
    selecionado.html(selecionado.text() + seta);
}

function ordenaTabela(coluna) {
    if (coluna === selecionado) {
        ordenacao = !ordenacao;
        renderizaTabela(usuarios.reverse());
    } else {
        selecionado = coluna;
        ordenacao = true;
        renderizaTabela(_.sortBy(usuarios, coluna, "asc"));
    }
}