// Desafio 1: Contador de 1 até 10

let contador = 1; // Inicia o contador com 1

// Enquanto o contador for menor ou igual a 10, mostra o valor e incrementa
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// Desafio 2: Contador de 10 até 0

let contador = 10; // Inicia o contador com 10

// Enquanto o contador for maior ou igual a 0, mostra o valor e decrementa
while (contador >= 0) {
    console.log(contador);
    contador--;
}

// Desafio 3: Contagem regressiva a partir de um número informado pelo usuário

let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

// Enquanto o número for maior ou igual a 0, mostra o valor e decrementa
while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}

// Desafio 4: Contagem progressiva até um número informado pelo usuário

let numeroMaximo = prompt("Digite um número para a contagem progressiva:");
let contador = 0; // Inicia o contador com 0

// Enquanto o contador for menor ou igual ao número máximo, mostra o valor e incrementa
while (contador <= numeroMaximo) {
    console.log(contador);
    contador++;
}
