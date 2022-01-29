// const skills = document.getElementsByTagName('li');
// const listaEspecifica = document.querySelectorAll('li .opcao');// não funcionou aqui

// console.log(listaEspecifica.textContent);

/*for(i of skills) {
    console.log(i.textContent);
}*/

const designer = document.getElementById('designer');

designer.classList.add('novo-estilo');// adicionar uma nova propriedade por meio de uma classe


// Alternar entre modo light e modo dark
const atributos = document.getElementById('atributos');

function modoLight(){
    atributos.classList.remove('atributos-em-dark-mode');
    atributos.classList.add('atributos-em-light-mode');
}

function modoDark(){
    atributos.classList.remove('atributos-em-light-mode');
    atributos.classList.add('atributos-em-dark-mode');
}
