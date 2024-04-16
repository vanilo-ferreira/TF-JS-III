/* Dado uma lista de produtos ecologicos, filtre quais produtos ainda estão disponíveis. */

let produtosEcologicos = [
    { nome: 'Copo de bambu', disponivel: true },
    { nome: 'Sacola retornável', disponivel: false },
    { nome: 'Escova de dentes de bambu', disponivel: true },
    { nome: 'Canudos de metal', disponivel: true },
    { nome: 'Frasco de vidro para armazenamento', disponivel: false }
];

console.log("Produtos Disponíveis:\n");
let contador = 1; 

for (let produto in produtosEcologicos) {
    if (produtosEcologicos[produto].disponivel === true) {
        console.log(`${contador}) ${produtosEcologicos[produto].nome}`);
        contador++;
    }
};