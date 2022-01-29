const $button = document.querySelector('button');
const $where = document.getElementById('tarefas');
const content = document.getElementById('task-input');

$button.addEventListener('click', ()=>{
    // usar um array
    $where.innerHTML += `<input type="checkbox" id="chec"> ${content.value}`
})