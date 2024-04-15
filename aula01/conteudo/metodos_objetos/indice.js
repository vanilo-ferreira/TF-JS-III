/* Embora os métodos que operam em arrays, strings e outros tipos de dados possam ser aplicados a objetos em certas situações, também existem métodos projetados especificamente para trabalhar com objetos. Aqui estão alguns exemplos de métodos comuns para objetos */

//Object.keys(objeto): Retorna um array contendo os nomes das propriedades enumeráveis de um objeto.

// Objeto de exemplo
let pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
};

// Obter os nomes das propriedades do objeto
let propriedades = Object.keys(pessoa);

console.log(propriedades); // Saída: ["nome", "idade", "cidade"]

//Object.values(objeto): Retorna um array contendo os valores das propriedades enumeráveis de um objeto.
// Obter os valores das propriedades do objeto
let valores = Object.values(pessoa);

console.log(valores); // Saída: ["João", 30, "São Paulo"]

//Object.assign(destino, ...origens): Copia os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto de destino e retorna o objeto de destino.
// Objetos de exemplo
let destino = { a: 1, b: 2 };
let origem1 = { b: 3, c: 4 };
let origem2 = { d: 5 };

// Copiar valores das propriedades de origem para o objeto de destino
let objetoFinal = Object.assign(destino, origem1, origem2);

console.log(objetoFinal); // Saída: { a: 1, b: 3, c: 4, d: 5 }
