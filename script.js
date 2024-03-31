const contenedor = document.querySelector(".contenedor");
const barraNormal = document.querySelector(".barra_normal");
const menuIcon = document.querySelector(".menu_icon");
const icons = document.querySelector(".icons");
const icon = document.querySelector(".icon");
const barraDesplazada = document.createElement('div');

barraDesplazada.classList.add("barra_desplazada");

menuIcon.addEventListener('click' , () => {
    // Ocultar barraNormal
    barraNormal.style.display = 'none';
    // Mostrar barraDesplazada
    barraDesplazada.style.display = 'block';

    // const nuevaBarraNormal = barraNormal.cloneNode(true);

    // // Remover todos los hijos de la nueva barra normal
    // while (nuevaBarraNormal.firstChild) {
    //     nuevaBarraNormal.removeChild(nuevaBarraNormal.firstChild);
    // }

    // // Agregar barraDesplazada como hijo de la nueva barra normal
    // nuevaBarraNormal.appendChild(barraDesplazada);

    // // Reemplazar barraNormal con la nueva barra normal
    // contenedor.replaceChild(nuevaBarraNormal, barraNormal);
})