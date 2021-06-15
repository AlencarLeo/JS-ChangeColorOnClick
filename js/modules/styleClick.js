export default function styleClick () {
    const menu = document.getElementById('menu')
    const red = document.getElementById('red');
    const blue = document.getElementById('blue');
    const yellow = document.getElementById('yellow');
    const green = document.getElementById('green');
    const orange = document.getElementById('orange');
    const pink = document.getElementById('pink');

    function handleChangeColor(){
        menu.style.backgroundColor = this.id;
    }

    ['touchstart', 'click'].forEach( (userEvent) => {
        red.addEventListener(userEvent, handleChangeColor);
        blue.addEventListener(userEvent, handleChangeColor);
        yellow.addEventListener(userEvent, handleChangeColor);
        green.addEventListener(userEvent, handleChangeColor);
        orange.addEventListener(userEvent, handleChangeColor);
        pink.addEventListener(userEvent, handleChangeColor);
    })
}