class Cliente {
  Nome;
  CPF;
}

class ContaCorrente {
  agencia;
  // #saldo = 0
  _saldo = 0;

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return; // early return
    }
    this._saldo += valor;
    console.log(this._saldo);
    return this._saldo;
  }
}

const cliente1 = new Cliente();
cliente1.Nome = "Ricardo";
cliente1.CPF = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

const cliente2 = new Cliente();
cliente2.Nome = "Alice";
cliente2.CPF = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.depositar(1);
contaCorrenteRicardo.saldo = 8;
// esse atributo não privado é um atributo diferente do #saldo criado na instancia original desse objeto. É como se fossem duas variaveis distintas (uma publica e uma privada)
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);
console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.depositar(-456);
console.log(contaCorrenteRicardo.saldo);
