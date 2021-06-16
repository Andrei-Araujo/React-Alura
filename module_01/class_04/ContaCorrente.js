import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  agencia;
  _cliente;

  set cliente(novoValor) {
    // permite criacao/alteracao de novos clientes
    if (novoValor instanceof Cliente) {
      // condicao para criacao/modificacao desses clientes
      this._cliente = novoValor;
    }
  }

  get cliente() {
    // permite leitura de algum cliente existente
    return this._cliente;
  }

  _saldo = 0;

  get saldo() {
    //pemite leitura do saldo mas, por nao haver um setter, nao permite modificacao desse saldo
    return this._saldo;
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
    console.log(this._saldo);
    return this._saldo;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
