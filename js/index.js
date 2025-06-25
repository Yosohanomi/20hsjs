const gallery = document.querySelector('.gallery')
const boxes = document.querySelector('#boxes')
const create = document.querySelector('button[data-action="render"]')
const remove = document.querySelector('button[data-action="destroy"]')
// const children = boxes.children;
const scrollAmount = 5; 
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

// function createBoxes(amount) {
    
// }
create.addEventListener('click', ()=> {
    const div = document.createElement('div')
    console.log(div);
    div.classList.add('boxes__item')
    div.style.backgroundColor = `rgb(${random()},${random()},${random()})`
    div.style.height += '10px'
    div.style.width += '10px'
    div.textContent = 'ppp'
    boxes.appendChild(div);
    console.log(boxes);
})
