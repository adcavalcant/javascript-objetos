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

for (let chave in cliente) {
  let tipo = typeof cliente[chave];
  if (tipo != "object" && tipo != "function") {
    console.log(`A chave ${chave} tem valor = ${cliente[chave]}`);
  }
}
