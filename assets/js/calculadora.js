somar = (a, b) => {return alert(`A soma de ${a} + ${b} = ${a+b}`)};
subtrair = (a, b) => {return alert(`A subtração entre ${a} - ${b} = ${a-b}`)};

dividir = function cal(a, b){
    if(b == 0){ 
        alert('Não é possivel dividir valor por zero :(');
        calculadora();
    }
    else return alert(`A divisão de ${a}/${b} = ${a/b}`);
}

multiplicar = (a, b) => {return alert(`A multiplicação de ${a} * ${b} = ${a*b}`)};
potenciacao = (a, b) => {return alert(`${a} ^ ${b} = ${a**b}`)};

function calculadora(){
    let op = Number(prompt('Digite a operação:\n1 - Soma(+)\n2 - Subtração(-)\n3 - Multiplicação(*)\n4 - Divisão(/)\n5 - Potenciação(**)'));

    if(op > 5){// devo receber numeros do prompt para isso (!op) verificar se op é diferente do tipo Number, isso dizendo o professor hahah;
        alert('Opção invalida');
        calculadora();
    }else{
        let n1 = Number(prompt('Primeiro valor: '));
        let n2 = Number(prompt('Segundo valor: '));
    // verificar se variaveis são válidas
        if(!n1 || !n2){
            alert('entrada invalida :(');
            calculadora();
        }else{
    
            switch(op){
                case op = 1 :// sem op só '+'
                    somar(n1, n2);
                    break;
                case op = 2:
                    subtrair(n1, n2);
                    break;
                case op = 4:
                    dividir(n1, n2);
                    break;
                case op = 3:
                    multiplicar(n1, n2);
                    break;
                case op = 5:
                    potenciacao(n1, n2);
                    break;
                default:
                    alert('Opção inválida :(');
                    calculadora();
                    //break;
            } 
        }
    }
    novaOperacao();
}

function novaOperacao(){
    let opcao = Number(prompt('Deseja continuar\n1 - Sim\n2 - Não'));
    if(opcao == 1){
        calculadora();
    }else if(opcao == 2){
        alert('Até breve! :)');
    }else{
        alert('Opção invalida :(');
        novaOperacao();
    }
}

// iniciar calculadora
calculadora();

