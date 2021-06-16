import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);

contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(102, new Cliente());

contaCorrenteRicardo.transferir(200, conta2);

//console.log(contaCorrenteRicardo);
console.log(ContaCorrente.numeroDeContas);
//console.log(cliente1);
//console.log(cliente1.cpf);
//console.log(conta2);
//console.log(numeroDeContas);
