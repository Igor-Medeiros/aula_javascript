function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

function redirecionar(){
    window.open("https://youtube.com");
    //window.location.href = "http://google.com.br";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado!!!"
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado!!!"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"
    elemento.innerHTML = "Passe o mouse aqui!"
}

function load(){
    alert("Pagina carregada!");
}

function funcaoChange(elemento){
    alert(elemento.value)

}
/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        return validar = true;
    } else {
        return validar = false;
    }    
}

var idade = prompt("Qual sua idade: ");
console.log(validaIdade(idade));

alert(soma(5, 10));
*/
/*
var d = new Date();
alert(d);
alert(d.getMonth()+1);//o mes sempre começa em 0 por isso para ser o mes certo tem que colocar +1
alert(d.getMinutes());
*/
/*
var count;
for(count=0; count<=5; count++){
    alert(count);
};
*/
/*
var count = 0;
while(count <= 5){
    console.log(count);
    count++;
};
*/
/*
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/
/*
var frutas = [{nome:"banana", cor:"amarelo"},{nome:"maça", cor:"vermelhor"}]
alert(frutas[1].nome);
console.log(frutas);
*/
/*
var fruta = {nome:"maça", cor:"vermelhor"};
console.log(fruta);
console.log(fruta.nome);
*/
/*
var lista = ["maça", "pera", "laranja"];
console.log(lista);
console.log(lista[1]);
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
*/
/*
var nome = "Igor de Medeiros";
var idade = 37;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos.");
alert(idade + idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão", "Brasil"));
*/