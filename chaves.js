const cliente = {
  nome: "André",
  idade: 32,
  cpf: "21323144324",
  email: "andre@dominio.com",
  telefones: ["112313124", "4324324324"],
};

cliente.enderecos = [
  {
    rua: "Rua 34 Norte",
    numero: 1213,
    apartamento: true,
    complemento: "Cond Real Flat",
  },
];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("endereco")) {
  console.log("Erro. É necessário ter um endereço cadastrado.");
}
