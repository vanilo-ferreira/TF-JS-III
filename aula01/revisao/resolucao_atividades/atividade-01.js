/* Desenvolva um jogo que permita que o usuário tente adivinhar um número inteiro aleatório entre 1 e 100. Utilize um loop do/while, o programa deve fornecer dicas como "maior" ou "menor" após cada tentativa, ao acertar deve informar o número adivinhado e número de tentativas realizadas para descobrir.
dica: pesquise como gerar um numero aleatório usando o Math */

// Gerar um número aleatório entre 1 e 100
const numeroCorreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let palpite;

// Loop do/while para permitir múltiplas tentativas
do {
  // Pedir ao usuário para fazer um palpite
  palpite = parseInt(prompt("Tente adivinhar o número (entre 1 e 100):"));

  // Verificar se o palpite é válido
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    console.log("Por favor, insira um número válido entre 1 e 100.");
  } else {
    // Incrementar o contador de tentativas
    tentativas++;

    // Verificar se o palpite está correto e fornecer dicas
    if (palpite === numeroCorreto) {
      console.log(`Parabéns! Você acertou o número ${numeroCorreto} em ${tentativas} tentativa(s).`);
    } else if (palpite < numeroCorreto) {
      console.log("Tente novamente. O número é maior.");
    } else {
      console.log("Tente novamente. O número é menor.");
    }
  }
} while (palpite !== numeroCorreto);
