/** Métodos são usados para realizar ações específicas ou para fornecer funcionalidades
    específicas dentro de um programa.
    Existe uma variedade de métodos embutidos que podem ser utilizados para manipular
    strings, arrays, objetos e outros tipos de dados.
    Apresentaremos alguns métodos utilizados com frequência para realizar determinadas ações. */

                                    /** Manipulação de Strings **/

// toUpperCase() e toLowerCase(): Converte uma string para maiúsculas ou minúsculas.

//split(): Divide uma string em um array de substrings com base em um delimitador.

//join une os elementos de um array em uma única string, separados pelo separator especificado.

// indexOf() e lastIndexOf(): Retorna o índice da primeira ou última ocorrência de um valor especificado em uma string.

//concat(): Concatena duas ou mais strings e retorna uma nova string.

//slice(start, end): Retorna uma parte da string, começando do índice start até o índice end (não incluso). Se end não for especificado, retorna até o final da string.

                                    /** Pesquisa e Substituição **/

//indexOf(substring) e lastIndexOf(substring): Retorna o índice da primeira ou última ocorrência da substring na string. Retorna -1 se não for encontrado.

// replace(searchValue, newValue): Substitui a searchValue por newValue na string. Pode aceitar uma expressão regular (regexp) para busca avançada e uma função de substituição.


                                    /** Divisão e União:**/

// split(separator) e join(separator): split divide a string em substrings com base no separator especificado e retorna um array.
// join une os elementos de um array em uma única string, separados pelo separator especificado.


                                    /** Verificação e limpeza **/


//startsWith(searchString) e endsWith(searchString): Verificam se a string começa ou termina com a searchString especificada.

// trim(), trimStart() e trimEnd(): Removem espaços em branco do início, fim ou ambos os lados da string. 
//Suponha que temos o nome de um produto que pode conter espaços em branco extras no início e no final:

//Podemos usar o método trim() para remover esses espaços em branco:


                                    /** Formatação e Preenchimento **/


//padStart(targetLength, padString) e padEnd(targetLength, padString): Preenchem a string com padString até atingir o targetLength especificado.
//padStart preenche no início, enquanto padEnd preenche no final.