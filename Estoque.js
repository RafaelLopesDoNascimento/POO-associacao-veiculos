const Veiculo = require("./Veiculo");

class Estoque {
  constructor(type) {
    this.type = type;
    this.inStock = [];
  }
  AddInStock(marca, ano, portas, valor) {
    this.inStock.push(new Veiculo(marca, ano, portas, valor));
  }
}

module.exports = Estoque;
