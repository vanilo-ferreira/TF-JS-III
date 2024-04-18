// Lista de carros disponíveis para locação
let carrosDisponiveis = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100 },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90 },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80 },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85 },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95 }
];

// Lista de clientes com informações sobre a locação 
let clientes = [
    { nome: "João", dias: 3, modelo: "Toyota Corolla" },
    { nome: "Maria", dias: 5, modelo: "Ford Focus" },
    { nome: "Carlos", dias: 2, modelo: "Volkswagen Gol" }];

// Calcule o preço total da locação para cada cliente de acordo com o modelo escolhido utilizando o FOR

/* Portugol: 
Para cada cliente na lista de clientes:

Para cada cliente na lista de clientes, vamos fazer o seguinte:
Obter o cliente atual:

Atribuímos o cliente atual a uma variável chamada cliente.
Definir o preço total da locação como nulo:

Inicializamos uma variável chamada precoTotalLocacao com o valor nulo. Esta variável será usada para armazenar o preço total da locação para o cliente atual.
Para cada carro na lista de carros disponíveis:

Para cada carro na lista de carros disponíveis, vamos fazer o seguinte:
Obter o carro atual:

Atribuímos o carro atual a uma variável chamada carro.
Verificar se o modelo do carro corresponde ao modelo escolhido pelo cliente:

Verificamos se o modelo do carro é igual ao modelo escolhido pelo cliente.
Se o modelo corresponder:

Se o modelo do carro corresponder ao modelo escolhido pelo cliente, vamos fazer o seguinte:
Calcular o preço total da locação:

Calculamos o preço total da locação multiplicando o preço do dia do carro pelo número de dias escolhidos pelo cliente.Armazenamos este valor na variável precoTotalLocacao.
Exibir o preço total da locação:

Exibimos o preço total da locação para o cliente atual, incluindo o nome do cliente.
Sair do loop de carros:

Como encontramos o carro correspondente ao cliente, não precisamos continuar procurando. Saímos do loop de carros.
Fim do loop de clientes:

Quando terminarmos de processar todos os clientes, nosso algoritmo estará completo. */

let valoresDaLocacao = [];

for (let i = 0; i < clientes.length; i++) {
    for (let carro in carrosDisponiveis) {
        if (clientes[i].modelo === carrosDisponiveis[carro].modelo) {
            valoresDaLocacao.push({ cliente: clientes[i].nome, precoTotalLocacao: (carrosDisponiveis[carro].precoDia * clientes[i].dias), dias: clientes[i].dias, modelo: clientes[i].modelo});
        }
    };
}

console.log("Valores da locação por cliente (CARROS DISPONÍVEIS):\n")
for (let i = 0; i < valoresDaLocacao.length; i++) {
    console.log(`${i+1}) ${valoresDaLocacao[i].cliente}, o valor total da locação, do ${valoresDaLocacao[i].modelo} por ${valoresDaLocacao[i].dias} dias é R$ ${valoresDaLocacao[i].precoTotalLocacao}.`);
}