// Exibe uma mensagem de boas-vindas no console
console.log('Boas vindas');

// Cria uma variável com o nome e exibe saudação no console
let nome = 'Amanda Leão';
console.log(`Olá, ${nome}!`);

// Cria uma variável com o nome e exibe saudação usando alert
let nome = 'Amanda Leão';
alert(`Olá, ${nome}!`);

// Pergunta ao usuário qual linguagem de programação prefere e exibe no console
let linguagemPreferida = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagemPreferida);

// Soma dois valores e exibe o resultado no console
let valor1 = 12;
let valor2 = 40;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// Subtrai dois valores e exibe o resultado no console
valor1 = 12;
valor2 = 20;
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

// Verifica se a idade inserida pelo usuário indica maioridade ou não
let idade = prompt('Digite a sua idade:');
if (idade > 17) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.');
}

// Verifica se o número inserido é positivo, negativo ou zero
let numero = parseFloat(prompt("Digite um número:"));
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// Imprime os números de 1 a 10 usando while
numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}

// Verifica se a nota indica aprovação ou reprovação
let nota = 9;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Gera um número aleatório entre 0 e 1 e exibe no console
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// Gera um número inteiro aleatório entre 1 e 10 e exibe no console
let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio);

// Gera um número inteiro aleatório entre 1 e 1000 e exibe no console
numeroInteiroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio);
