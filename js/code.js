const shareActive = document.getElementById('boton');
const modalActive = document.getElementById('modal');

shareActive.addEventListener("click", () =>{
    modalActive.classList.toggle('modalClick');
})