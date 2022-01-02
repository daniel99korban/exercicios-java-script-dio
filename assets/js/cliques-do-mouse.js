//const $body = document.querySelector("body")
// criando botões
function criarBotao(contentText, where, callback){
    const $where = document.querySelector(where)
    const $button = document.createElement('button');
    $button.textContent = contentText;
    // personalizar antes de desenhar na tela
    callback($button);

    $where.insertAdjacentElement("beforeend", $button);

    return $button;
}

criarBotao("Cadastramento", "form", (button)=>{
    button.style.cssText = `
        font-size: 20px;
        font-family: arial;
        color: white;
        background-color: blue;`
    button.addEventListener('click', ()=>{
        console.log('Clicou em Cadastramento')
    })
})
    
criarBotao("Entrar", "form", (button)=>{
    button.style.cssText = `
    font-size: 20px;
    font-family: arial;
    background-color: white;`
    button.addEventListener('click', ()=>{
        console.log('Clicou em Entrar')
    })
})

