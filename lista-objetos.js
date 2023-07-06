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

cliente.enderecos.push({
  rua: "Rua Chiborena",
  numero: 20,
  apartamento: false,
  complemento: "K",
});

const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento
);

console.log(listaApenasApartamentos);
