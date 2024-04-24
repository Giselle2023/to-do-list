const input = document.querySelector('input');


function createTarefa(){


    const selectOption = document.createElement('span');
    selectOption.classList.add('span');

    const container = document.querySelector('.container')
3
    const div = document.createElement('div');
    div.classList.add('content');

    const paragraph = document.createElement('p');
    paragraph.innerHTML = input.value;


    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btnDelete');
    btnDelete.innerHTML = 'x';

    const checkedTarefa = document.createElement('input');
    checkedTarefa.type = 'checkbox';
    checkedTarefa.classList.add('edit');
       
    checkedTarefa.addEventListener('click',()=>{
        
        if(checkedTarefa.checked){
            paragraph.innerHTML = `<s>${input}</s>`
        }else{
              paragraph.innerHTML = input;
           
        }

    })


    btnDelete.addEventListener('click',()=>{
        container.removeChild(div);
    })


    const option = document.querySelector('select').value

   switch(option){
    case 'faculdade':
        selectOption.innerHTML = 'faculdade'
        selectOption.style.background = '#adeb86'
    break
    case 'trabalho':
        selectOption.innerHTML = 'trabalho';
        selectOption.style.background = '#b3a3f4'


    break
    case 'urgente':
        selectOption.innerHTML = 'urgente';
        selectOption.style.background = '#eb8686'
    break
    default:   selectOption.style.background = 'none'

}


    container.appendChild(div);
    div.appendChild(checkedTarefa);
    div.appendChild(paragraph);
    div.appendChild(selectOption)
    div.appendChild(btnDelete);


    localStorage.setItem('tarefasSalvas',container);
    
}

document.querySelector('#btn').addEventListener('click',()=>{
    createTarefa();
})

function popUp(){

    const popUp = document.querySelector('dialog')

    if(input == ''){
        popUp.showModal()
        
        const btn = document.querySelector('.btn-close-modal')
           btn.addEventListener('click',()=>{
               popUp.close()
    
           }) 
           return
    }

}