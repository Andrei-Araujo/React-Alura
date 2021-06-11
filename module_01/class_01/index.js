class Cliente {
  Nome;
  CPF;
  Agencia;
  Saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.Nome = "Ricardo";
cliente1.CPF = 11122233309;
cliente1.Agencia = 1001;
cliente1.Saldo = 0;

cliente2.Nome = "Alice";
cliente2.CPF = 88822233309;
cliente2.Agencia = 1001;
cliente2.Saldo = 0;

console.log(cliente1);
console.log(cliente2);
