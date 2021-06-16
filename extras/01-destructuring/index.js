// Caso 1

const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];
// "..." significa abrir esse array e pegar os dados dentro dele e jogar esses dados dentro do array numeros (e nao pegar o array e jogar dentro do outro array)
// "..." é um método do destructuring

// console.log(numeros)

/*
-----------------------------------------
    Caso 2
*/

//const num1 = 1
//const num2 = 2

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]; // no caso, outrosNumeros está recebendo "os valores restantes" na forma de um array

//console.log(num1, num2, outrosNumeros);

/*
--------------------------------------------
    Caso 3
*/

const [nome1 = "Ju"] = [1]; // nome1 = 1 mas, se não fosse passado nenhum valor, iria o valor default "Ju"

//console.log(nome1);

/*
-------------------------------------------
    Caso 4
*/

const pessoa = {
  nome: "Ju",
  idade: 25,
};

const pessoaComTelefone = {
  ...pessoa,
  telefone: 40028922,
};

//console.log(pessoa, pessoaComTelefone);

/*
--------------------------------------------
    Caso 5
*/

//const { nome, idade } = pessoa;
/*
1) criou uma variavel "nome"
2) buscou o valor da propriedade nome, dentro de pessoa
3) atribuiu esse valor à nova variavel "nome"
*/
//console.log(nome, idade);

/*
-------------------------------------------------
    Caso 6
*/

function imprimeDados({ nome, idade }) {
  /*
  1) recebe um objeto qualquer
  2) desse objeto, pega apenas os valores dos campos nome e idade
  3) atribui esses valores a novas variaveis com mesmos nomes, nome e idade
  */
  console.log(nome, idade);
}

imprimeDados(pessoa);
