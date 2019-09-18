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




