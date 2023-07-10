const dados = require("./clientes.json");

console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);
console.log(clienteEmString.length);

const objetoCliente = JSON.parse(clienteEmString);
console.log(typeof objetoCliente);
