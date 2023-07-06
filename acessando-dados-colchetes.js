const cliente = {
  nome: "André",
  idade: 32,
  cpf: "21323144324",
  email: "andre@dominio.com",
};

const { nome, idade, cpf, email } = cliente;

console.log(cliente);
console.log(cliente["nome"]);
console.log(cliente["idade"]);
console.log(cliente["cpf"]);
console.log(cliente["email"]);


//
const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
//