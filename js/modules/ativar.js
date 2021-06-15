import styleClick from './styleClick.js';

export default function ativar () {
    const menu = document.getElementById('menu');
    const estilos = document.querySelectorAll('#menu > *');

    function handdle(){
        estilos.forEach((estilo)=>{
            estilo.classList.toggle('ativo');

            if(estilo.classList.contains('ativo')){
                styleClick();
            }
        })

        outsideClick(this, ['touchstart', 'click'], () =>{
            estilos.forEach((estilo)=>{
                estilo.classList.remove('ativo');
            })
        })
    }
    
    ['touchstart', 'click'].forEach((userEvent)=>{
        menu.addEventListener(userEvent, handdle);
    })    
    
    function outsideClick(element, events, callback){
        const html = document.documentElement;
        const outsideAtt = 'data-outside';
    
        if(!element.hasAttribute(outsideAtt)){
            events.forEach( (userEvent) => {
                html.addEventListener(userEvent, handleOutsideClick);
            })
            
            element.setAttribute(outsideAtt, '');
        }
    
        function handleOutsideClick (event) {
            if(!element.contains((event.target))){
                element.removeAttribute(outsideAtt);
                callback();
                events.forEach( (userEvent) => {
                    html.removeEventListener(userEvent, handleOutsideClick);
                })
            }
        }
    }
}