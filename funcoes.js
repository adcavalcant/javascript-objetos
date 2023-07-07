const cliente = {
  nome: "João",
  idade: 24,
  email: "joaofirma.com",
  telefone: ["313715262", "69123782137"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente!");
    } else {
      this.saldo -= valor;
      console.log(
        `Pagamento realizado no valor de R$${valor}. Novo Saldo: R$${this.saldo}`
      );
    }
  },
};

cliente.efetuaPagamento(350);
cliente.efetuaPagamento(150);
