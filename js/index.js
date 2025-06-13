const gallery = document.querySelector('.gallery')

document.addEventListener('keydown', event => {
    event.preventDefault();
    if(event.code === 'KeyD') {
        gallery.style.color = 'red'
    }
    if(event.code === 'KeyS') {
        gallery.style.color = 'black'
    }
})