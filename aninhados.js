const cliente = {
  nome: "André",
  idade: 32,
  cpf: "21323144324",
  email: "andre@dominio.com",
  telefones: ["112313124", "4324324324"],
};

cliente.endereco = {
  rua: "Rua 34 Norte",
  numero: 1213,
  apartamento: true,
  complemento: "Cond Real Flat",
};

console.log(cliente);
console.log(cliente.endereco.rua);
