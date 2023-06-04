const Estoque = require("./Estoque");

const Carro = new Estoque("Carro");
const Caminhao = new Estoque("Caminhao");

Carro.AddInStock("chevrolett", "2010", "4", "80.000");
Carro.AddInStock("ferrari", "2023", "2", "1.000.000");
Carro.AddInStock("merceds", "2015", "2", "200.000");
Carro.AddInStock("panamera", "2009", "4", "500.000");

Caminhao.AddInStock("merceds", "2008", "2", "150.000");

console.log(Carro, Caminhao);
