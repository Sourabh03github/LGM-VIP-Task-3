function enviarFormulario(elementForm) {
    elementForm.preventDefault();
    let nombre = document.querySelector('#nombre');
    let edad = document.querySelector('#edad');
    let password = document.querySelector('#password');

    let informacion = {
        nombre: nombre.value,
        edad: edad.value,
        password: password.value
    }

    console.log(informacion);
}

function informacionDeImagen(elementoImagen) {
    console.log(elementoImagen);
    console.log(elementoImagen.target.src);
    console.log(elementoImagen.target.alt);
}

let formulario = document.querySelector('form');
formulario.addEventListener('submit', enviarFormulario);

let imagen = document.querySelector('img');
imagen.addEventListener('click', informacionDeImagen);


function eliminaLista(elementLI) {
    //elementLI.parentElement
    console.log(elementLI.parentElement.remove());
}