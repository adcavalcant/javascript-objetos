const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(lista) {
  return clientes.filter(
    (cliente) => cliente.endereco.apartamento && !cliente.endereco.complemento
  );
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);
