// calculadora

/*function somar(a, b){// usar um array e uma estrutura de dados(pilha) usando notação polonesa
    return a + b;
}*/

function listaNumPares(array){
    let numPares = [];
    for(let i=0; i< array.length; i++){
        if(array[i]%2 === 0){
            numPares.push(array[i]);
        }
    }
    console.log('lista completa: ' + numPares);
}

let nums = [];
for(let y=0; y < 25; y++){
    nums.push(y);
}

listaNumPares(nums);