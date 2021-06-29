import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);
//const conta = new Conta(0, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(50);
contaSalario.sacar(10);

console.log(contaCorrenteRicardo);
//console.log(conta);
console.log(contaSalario);
