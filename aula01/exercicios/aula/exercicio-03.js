/* Dado uma lista de carros com suas informações, calcule o preço total da locação de três dias */

let carros = [
    { modelo: "Toyota Corolla", ano: 2020, precoDia: 100, disponivel: true },
    { modelo: "Honda Civic", ano: 2019, precoDia: 90, disponivel: true },
    { modelo: "Ford Focus", ano: 2018, precoDia: 80, disponivel: false },
    { modelo: "Chevrolet Cruze", ano: 2019, precoDia: 85, disponivel: true },
    { modelo: "Volkswagen Golf", ano: 2020, precoDia: 95, disponivel: true }
];

let carrosDisponiveis = [];
let carrosIndisponiveis = [];

for (let carro in carros) {
    if (carros[carro].disponivel === true) {
        carrosDisponiveis.push({ modelo: carros[carro].modelo, total: (carros[carro].precoDia * 3) });
    } else {
        carrosIndisponiveis.push({ modelo: carros[carro].modelo, total: (carros[carro].precoDia * 3) });
    }
};
console.log("Valor da locação dos carros por 3 dias\n")

console.log("Carros DISPONÍVEIS: ")
for (let i = 0; i < carrosDisponiveis.length; i++) {
    console.log(`${i+1}) ${carrosDisponiveis[i].modelo} - R$ ${carrosDisponiveis[i].total}`);
}

console.log("\nCarros INDISPONÍVEIS no momento: ")
for (let i = 0; i < carrosIndisponiveis.length; i++) {
    console.log(`${i+1}) ${carrosIndisponiveis[i].modelo} - R$ ${carrosIndisponiveis[i].total}`);
}