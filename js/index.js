const gallery = document.querySelector('.gallery')
const boxes = document.querySelector('#boxes')
const create = document.querySelector('button[data-action="render"]')
const input = document.querySelector('input')
const remove = document.querySelector('button[data-action="destroy"]')
let div;
// const children = boxes.children;
const scrollAmount = 5;
let elementSize = 30;

document.addEventListener('keydown', event => {
    event.preventDefault();
    if(event.code === 'KeyD') {
        gallery.scrollLeft += scrollAmount;
    }
    if(event.code === 'KeyA') {
        gallery.scrollLeft -= scrollAmount
    }
})

function random() {
    return Math.random() * 256;
}

function createBoxes(amount) {
    for (let i = 1; i <= amount; i++) {
        div = document.createElement('div')
        div.classList.add('boxes__item')
        div.style.backgroundColor = `rgb(${random()},${random()},${random()})`
        div.style.height = `${elementSize}px`;
        div.style.width = `${elementSize}px`;
        elementSize += 10;
        div.textContent = ' '
        boxes.appendChild(div);
    }
}
create.addEventListener('click', () => createBoxes(input.value))

function  destroyBoxes() {
    boxes.innerHTML ='';
    elementSize = 30;
}
remove.addEventListener('click', destroyBoxes)
