var teste; //undefined (inicializa sem valor)
var name = "João";
var age, lastname; //undefined
age = 30; //Number
lastname = null;
var hasCar = false; //Boolean
var talk = function () { //Também pode ser uma função
    console.log("Im talking...");
}
talk(); //Im talking...

/**
 * Existe uma diferença semântica entre null e undefined.
 * undefined: valor primitivo utilizado quando uma variável não teve valor atribuído
 * null: valor primitivo que representa a ausência intencional de um valor de objeto
 */


var person = { name: "João", lastname: null, hasCar: false };    // Object
console.log(person.name);

var otherPerson = new Object(); //Outra maneira de inicializar um objeto
otherPerson.person = "José";
otherPerson.lastname = "da Silva";
otherPerson.hasCar = true;
otherPerson.cars = ['Ford KA', 'KIA Soul']; //Array
console.log(otherPerson.person + " " + otherPerson.lastname); //Concatenando strings
console.log(`${otherPerson.person} ${otherPerson.lastname}`); //Outra forma de concatenar strings

/**
 * Arrays
 */


var cars = ['Ford Ka', 'KIA Soul', 'Honda FIT'];
console.log(cars[0]); //Ford Ka

var moreCars = new Array("Saab", "Volvo", "BMW"); //Outra maneira de inicializar array
console.log(moreCars.length); //3

moreCars.push('Toyota'); //Um dos métodos de manipular arrays

if (cars[0] === "Honda FIT") {
    console.log("Honda FIT");
} else if (cars[0] === "Ford Ka") {
    console.log("Ford Ka");
} else {
    console.log("Não é HONDA nem Ford!");
}

switch (cars[0]) {
    case "Honda FIT":
        console.log("Honda FIT");
        break;
    case "Ford Ka":
        console.log("Ford Ka");
        break;
    default:
        console.log("Não é HONDA nem Ford!");
        break;
}

var i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

//FOR
for (var index = 0; index < cars.length; index++) {
    var car = cars[index];
    console.log(car);
}

//FOR IN
for (var index in cars) {
    var car = cars[index];
    console.log(car);
}

//FOR EACH
cars.forEach(function (car) {
    console.log(car);
})


function add(x, y) {
    var total = x + y;
    return total;
}

// Comentário de uma linha

/**
    Comentário
    de
    múltiplas
    linhas
**/



var paragrafo = document.getElementById('paragrafo'); //Busca elemento e armazena referencia em variável local
paragrafo.innerHTML = "Agora o texto não é mais um LOREM IPSUM!"; //Altera o conteúdo HTML da tag





var paragrafos = document.getElementsByClassName('paragrafos'); //Busca elementos e armazena referencia em variável local (Array)
paragrafos[0].innerHTML = "Agora o texto não é mais um LOREM IPSUM!"; //Altera o conteúdo HTML do primeiro elemento





//Alterando o título principal da página
var tituloH1 = document.getElementsByTagName("h1")[0]; //Recupera o primeiro título (posição zero) disponível na página
tituloH1.innerHTML = "Novo título"; //Altera o conteúdo HTML do título H1




var inputTelefone = document.getElementsByName("telefone")[0]; //Recupera o input de telefone e armazena numa variavel
inputTelefone.focus(); //Altera o foco (cursor de digitação) para o input de telefone




console.log("Hello World!"); //Log simples
console.warn("Log de alerta!"); //Log de warning (amarelo)
console.error("Log de erro!"); //Log de warning (vermelho)
console.clear(); //Limpa o console (logs)
console.timer(); //Inicia cronometro
console.timerEnd(); //Encera cronometro e printa o tempo decorrido



var x; //x é undefined
x = 5; //x é um número
x = "John"; //x é uma string
x = true; //x é boolean
x = null; //x é null



//Apagar 
var inputTelefone = document.getElementsByName("telefone")[0]; //Recupera o input de telefone e armazena numa variavel
inputTelefone.remove(); //Remove completamente do HTML


//Ocultar
var inputTelefone = document.getElementsByName("telefone")[0]; //Recupera o input de telefone e armazena numa variavel
inputTelefone.hidden = true; //Oculta do HTML (mantém no código fonte)
inputTelefone.hidden = false; //Torna visível





var btn = document.createElement("button");   // Cria um elemento do tipo <button>
btn.innerHTML = "CLICK ME";                   // Texto do botão
document.body.appendChild(btn);               // "Append" do <button> no <body>






//Alterando a largura do input telefone
var inputTelefone = document.getElementsByName("telefone")[0]; //Recupera o input de telefone e armazena numa variavel
inputTelefone.style.width = '50%';





var btn = document.getElementById("btn-submit");
btn.addEventListener("click", executaAcao);

function executaAcao(evento) {
    alert('Fui clicado!');
    console.log(evento);
}

//Para remover o "listener":
btn.removeEventListener("click", executaAcao);



window.addEventListener("load", carregada);
function carregada(evento) {
    alert("Página carregada completamente!");
}





var button = document.querySelector("button"); //Busca pelo tipo
var button = document.querySelector("#buttonId"); //Busca pelo ID
var button = document.querySelector(".buttonClass"); //Busca pela classe
var button = document.querySelectorAll("button"); //Busca TODOS pelo tipo (array)






//getElementById
var myElement = document.getElementById("id01"); //JS puro
var myElement = $("#id01"); //jQuery

//getElementsByClassName
var myElement = document.getElementsByClassName("class01"); //JS puro
var myElement = $(".class01"); //jQuery

//getElementsByTagName
var myElement = document.getElementsByTagName("p"); //JS puro
var myElement = $("p"); //jQuery

//Alterando conteúdo HTML
var myElement = document.querySelector(".title-h1"); //JS puro
myElement.innerHTML = "Novo título via JS puro!";
var myElement = $(".title-h1"); //jQuery
myElement.text("Novo texto via jQuery!"); //Texto do elemento
myElement.html("<a>Novo html via jQuery!</a>"); //Conteúdo HTML do elemento

//Ocultando o elemento
myElement.style.display = "none"; //JS puro
myElement.hide(); //jQuery (oculta)
myElement.show(); //jQuery (mostra)

//Alterando CSS
myElement.style.fontSize = "35px";//JS puro
myElement.css("font-size", "35px"); //jQuery

//Aguardar carregamento da página
window.addEventListener("load", funcaoPaginaCarregada); //JS puro
$(document).ready(funcaoPaginaCarregada)  //jQuery

function funcaoPaginaCarregada() {
    alert("Página carregada completamente!");
}



//GET
function buscaUsuarios() {
    $.ajax({
        url: "https://ciandt-html-css-js.herokuapp.com/api/users",
        type: "get",
    })
        .done(function (usuarios) {
            //Exemplo: alterando o HTML de um elemento com o resultado da API
            $("#resultado").html(usuarios); //O retorno pode ser um HTML, um texto, JSON, etc...
        })
        .fail(function (jqXHR, textStatus, msgErro) {
            alert("Erro API: " + msgErro);
        });
}



//POST
function salvaUsuario() {
    //OBS: o usuário deve ser uma parametro de entrada da função
    var usuario = {
        id: 1,
        nome: "Lucas",
        telefone: "123123",
        email: "lucasv@ciandt.com",
    };

    $.ajax({
        url: "https://ciandt-html-css-js.herokuapp.com/api/users",
        type: "post",
        data: usuario
    })
        .done(function (usuarios) {
            alert("Usuário salvo com sucesso!");
        })
        .fail(function (jqXHR, textStatus, msgErro) {
            alert("Erro API: " + msgErro);
        });
}




tbody.append("<tr>" +
    "<td>" + usuario.id + "</td>" +
    "<td>" + usuario.nome + "</td>" +
    "<td>" + usuario.telefone + "</td>" +
    "<td>" + usuario.email + "</td>" +
    "</tr>"
);




