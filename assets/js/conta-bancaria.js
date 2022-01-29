class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;// para diferençar do meu metodo saldo(), geralmente usado em atributos que possuem get e set
    }// getters e setters
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }
    // Metodos essenciais
    depositar(valor){
        this._saldo += valor;
        return "Saldo atual: " + this._saldo;
    }
    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada!";
        }
        this._saldo -= valor;
        return "Saldo atual: " + this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoDeCredito){
        super(agencia, numero);
        this.tipo = "corrente",
        this._cartaoDeCredito = cartaoDeCredito;
    }
    
    get cartaoDeCredito(){
        return this._cartaoDeCredito;
    }
    set cartaoDeCredito(valor){
        this.cartaoDeCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "poupanca";
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "universitária";
    }
    // sobrecrevendo
    sacar(valor){
        if(valor > 500){
            return "Operação negada!";
        }
        this._saldo -= valor;
        return "Saldo atual: " + this._saldo;
    }
}