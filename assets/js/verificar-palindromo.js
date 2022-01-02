const entrada = document.querySelector('input')
const resposta = document.getElementById('resposta')


var $botao = document.getElementById("verficar");
$botao.addEventListener('click', ()=>{
    let string = entrada.value;
    if(!string){
        resposta.innerHTML = 'Sua resposta aqui'
        return;
    } 
        
    for (i in string) {// Remover espaços
        string = string.replace(' ', '');
    }
    
    let stringReversa = string.split('').reverse().join('');
    // Verificar o palindromo
    if(string == stringReversa){
       resposta.innerHTML = 'É palindromo'
       }else{
       resposta.innerHTML = 'Não é palindromo'
    }
});