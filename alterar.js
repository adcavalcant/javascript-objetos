const pessoa = {
  nome: "Luma",
  profissao: "Engenheira",
};

console.log(`${pessoa.nome} é ${pessoa.profissao}`);
console.log(pessoa.telefone);

pessoa.telefone = "(61) 981305686";
console.log(pessoa.telefone);
 
pessoa.nome = "Luma Silva";

console.log(pessoa);

const novaPessoa = {
  nome: "Pedro",
};

pessoa = novaPessoa;

