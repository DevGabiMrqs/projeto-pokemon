
//componentes
url = "https://bulbapedia.bulbagarden.net/wiki/Vulpix_(Pok%C3%A9mon)"
const btnVerSite = document.querySelector('.btn-ver-mais');
const selectGolpes = document.querySelector('.lista-golpes');
const btnAdicionar = document.querySelector('.btn-adicionar');
const delMovetxt = document.querySelector('#delMove');


//função para ver o site Bulbapedia
function verSite() {
    let ver = window.open(url, '_blank')
}

//array dos golpes da Vulpix
let moveSelecionado = '';
let moveSet = [];
let golpesLista = ['Flash Fire','Drought', 'Amber','Tackle','Bite'];


//função para mostrar os golpes no selects
function levarGolpes(){
    for (let i = 0; i < golpesLista.length; i++) {
        const option = document.createElement('option')
        option.innerText = `${golpesLista[i]}`
        option.id = `${golpesLista[i]}`
        selectGolpes.appendChild(option)
    }
}



//botão para adicionar os golpes 
btnAdicionar.addEventListener("click", adicionar)


//função para levar os golpes ao moveset
function adicionar() {
    moveSelecionado = selectGolpes.value

    if(moveSet.length >= 4 || moveSet.includes(moveSelecionado)){
        return;
    }

    let li = document.createElement('li')
    li.id = moveSelecionado
    li.innerHTML = `${moveSelecionado} <button id="del${moveSelecionado}">Deletar</button>`
    
    document.querySelector('.container-golpes').appendChild(li)
    document.getElementById(`del${moveSelecionado}`).addEventListener("click", deleteGolpe)
    moveSet.push(moveSelecionado)

    const posicao = golpesLista.indexOf(moveSelecionado)
    golpesLista.splice(posicao, 1)

    delMovetxt.style.display = "none" 
}

function deleteGolpe(event) {
    const id =  event.path[1].id

    const golpeIndex = moveSet.indexOf(id)
    moveSet.splice( golpeIndex , 1)

    document.getElementById(id).remove()

    if(moveSet.length === 0) {
        delMovetxt.style.display = 'block'
    }     
}


levarGolpes();
