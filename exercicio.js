//A. Exercícios de interpretação de código
/*let array
console.log('a. ', array)
sera impresso "a. undefined"
array = null
console.log('b. ', array)
sera impresso "b. null "
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
sera impresso "c. 11 "
let i = 0
console.log('d. ', array[i])
sera impresso "d. 3"
array[i+1] = 19
console.log('e. ', array)
 sera impresso "e. 11"
const valor = array[i+6]
console.log('f. ', valor)
sera impresso "f. 9"
2.
"Subi num ônibus em Marrocos" Será impresso no console assim: "SUBI NUM ÔNIBUS EM MIRROCOS 27"
*/
//B. 
let nomeDoUser = prompt("digite seu nome");
let emailUser = prompt("agora, digite seu email")
console.log("O e-mail", emailUser, "foi cadastrado com sucesso. Seja bem-vinda(o)",
nomeDoUser, "!")

//2.
let comidas = ["arroz", "feijão", "brócolis", "banana", "manga"]
console.log(comidas);
console.log("Essas são as minhas comidas preferidas:")
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);
let comidaUser = prompt("qual a sua comida preferida?");
comidas[1] = comidaUser;
console.log(comidas);

//3
let listaDetarefas = []
console.log(listaDetarefas);
let tarefa1 = prompt("me diga uma tarefa para a manhã de hoje");
let tarefa2 = prompt("me diga outra tarefa  que devemos realzar");
let tarefa3 = prompt("agora, me diga uma tarefa para à tarde");
listaDetarefas.push(tarefa1);
listaDetarefas.push(tarefa2);
listaDetarefas.push(tarefa3);
console.log(listaDetarefas);
let realizado = prompt("você já realizou alguma tarefa? digite o indice");
listaDetarefas.splice(realizado, 1);
console.log(listaDetarefas);
//desafio
let fala = prompt("como foi seu dia?");
let arrayFala = fala.split(" ");
console.log(arrayFala);
//
let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

// Encontra o índice da palavra "Abacaxi"
let indiceAbacaxi = -1;

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === "Abacaxi") {
        indiceAbacaxi = i;
        break;
    }
}

// Imprime o índice do Abacaxi e o tamanho do array
if (indiceAbacaxi !== -1) {
    console.log(`Índice do Abacaxi: ${indiceAbacaxi}`);
    console.log(`Tamanho do array: ${frutas.length}`);
} else {
    console.log("Abacaxi não encontrado no array.");
}
