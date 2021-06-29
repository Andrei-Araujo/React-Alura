import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12312312300);
const gerente = new Gerente("Marcelo", 5000, 45645645699);
const cliente = new Cliente("Lais", 234234, "8899");
diretor.cadastrarSenha("1234");
gerente.cadastrarSenha("1234");

const gerenteEstaLogado = SistemaAutenticacao.login(diretor, "1234");
const diretorEstaLogado = SistemaAutenticacao.login(gerente, "1122");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "8899");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
console.log();
