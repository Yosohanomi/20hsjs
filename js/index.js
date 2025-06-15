const gallery = document.querySelector('.gallery')
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