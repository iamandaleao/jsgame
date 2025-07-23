// Desafio 1: Verificar o dia da semana informado pelo usuário

// Pergunta ao usuário qual é o dia da semana
let diaDaSemana = prompt('Qual é o dia da semana?');

// Verifica se é sábado ou domingo e exibe a mensagem correspondente
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

// Desafio 2: Verificar se o número é positivo ou negativo

// Solicita um número ao usuário
let numero = prompt('Digite um número positivo ou negativo');

// Verifica se o número é maior que 0 e exibe a mensagem correspondente
if (numero > 0) {
    alert('Número positivo!');
} else {
    alert('Número negativo!');
}

// Desafio 3: Sistema de pontuação para jogo

// Define a pontuação (exemplo: 105)
let pontuacao = 105;

// Verifica se a pontuação é suficiente para vencer
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}

// Desafio 4: Exibir saldo da conta com template string

// Define um saldo de exemplo
let saldoConta = 500;

// Exibe uma mensagem com o saldo usando template string
alert(`Seu saldo é de R$${saldoConta}.`);

// Desafio 5: Boas-vindas personalizadas

// Solicita o nome do usuário
let nome = prompt('Qual o seu nome?');

// Exibe uma mensagem de boas-vindas com o nome informado
alert(`Boas vindas ${nome}`);
