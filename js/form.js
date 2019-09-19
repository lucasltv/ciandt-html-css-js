var urlApi = "https://ciandt-html-css-js.herokuapp.com/api/users";

$(document).ready(function () {
    $("form").on('submit', function (event) {
        event.preventDefault(); //Evitar o comportamento padrão (action do form)
        submeterDados();
    })
})


function submeterDados() {
    var usuario = {
        id: $("#id").val(),
        nome: $("#nome").val(),
        telefone: $("#telefone").val(),
        email: $("#email").val(),
    };

    var tituloForm = $("#form-title");
    tituloForm.text("Enviando...");

    $.ajax({
        url: urlApi,
        type: "post",
        data: usuario
    })
        .done(tratarSucesso)
        .fail(tratarErro)
        .always(function () {
            tituloForm.text("Formulário");
        })

}

function tratarSucesso(usuario) {
    $("input").val(""); //Limpa form
    alert("Usuário criado com sucesso!");
}

function tratarErro(jqXHR, textStatus, msgErro) {
    alert("Erro API: " + msgErro);
}
