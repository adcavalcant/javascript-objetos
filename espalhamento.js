const cliente = {
  nome: "André",
  idade: 32,
  cpf: "21323144324",
  email: "andre@dominio.com",
  telefones: ["112313124", "4324324324", "2139263730"],
};

cliente.enderecos = [
  {
    rua: "Rua 34 Norte",
    numero: 1213,
    apartamento: true,
    complemento: "Cond Real Flat",
  },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

//espalhamento
ligaParaCliente(...cliente.telefones);

const encomenda = {
  destinatário: cliente.nome,
  //   rua: cliente.enderecos[0].rua,
  //   numero: cliente.enderecos[0].numero,
  //   endereco: cliente.enderecos[0],
  ...cliente.enderecos[0],
};

console.log(encomenda);
