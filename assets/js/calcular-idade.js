function calcularIdade(anos){
    return `Daqui a ${anos} anos ${this.nome} téra ${this.idade + anos} anos de idade`
}

const pessoa1 = {
    nome: "Daniel",
    idade: 23,
}
const pessoa2 = {
    nome: "Daniel",
    idade: 23,
}
const gato = {
    nome: "Geraldo",
    idade: 3,
}
// Metodo call
console.log(calcularIdade.call(pessoa1, 10));
// Metodo apply difere porq tem mandar parametros entre []
console.log(calcularIdade.apply(gato, [3]));