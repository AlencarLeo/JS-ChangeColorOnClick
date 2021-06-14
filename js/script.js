const menu = document.getElementById('menu');
const estilos = document.querySelectorAll('#menu > *')

function mouseoverHanddle(){
    estilos.forEach((estilo)=>{
        estilo.classList.add('ativo');
    })
}

function mouseoutHanddle(){
    estilos.forEach((estilo)=>{
        estilo.classList.remove('ativo');
    })
}

menu.addEventListener('mouseover', mouseoverHanddle);
menu.addEventListener('mouseout', mouseoutHanddle);