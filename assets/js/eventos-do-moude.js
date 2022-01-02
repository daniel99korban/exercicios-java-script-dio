var blocos = document.getElementsByClassName('bloco');

for(let i=0; i<blocos.length; i++){// ouvindo eventos de mouse
    blocos[i].addEventListener("mouseover", mudarCorFundo);
  blocos[i].addEventListener("mouseout", restaurar);
}
function mudarCorFundo(obj){
  console.log('o evento foi (' + obj.type + ') que veio de ' + obj.target.id + '.');
  if(obj.target.id == 5){// verificar se tem semelhança com Truthy e falsy do JS
    obj.target.style.background = "green"
  }else{
    obj.target.style.background = "red"
    obj.target.style.border = "solid 1px yellow"
  }
}

function restaurar(obj){
  obj.target.style.background = "cyan"
  obj.target.style.border = "solid 1px rgb(1, 114, 206)"
}
// Limpar o console
var limparConsole = document.getElementById('limpar-console');
limparConsole.addEventListener('click', ()=>{
    console.clear()
})


