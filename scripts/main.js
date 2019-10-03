var miImage = document.querySelector('img');

miImage.onclick = function(){
    var miSrc = miImage.getAttribute('src');
    if(miSrc === 'images/Firefox-Logo-768x656.jpg'){
        miImage.setAttribute('src','images/xenonincrickit-768x656.jpg');
        
    }else{
        miImage.setAttribute('src', 'images/Firefox-Logo-768x656.jpg')
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function estableceNombreUsurario(){
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es fresco, ' + miNombre;
}

if(!localStorage.getItem('nombre')){
    estableceNombreUsurario();
}
else{
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es fresco, ' + nombreAlmacenado;
}

miBoton.onclick = function(){
    estableceNombreUsurario();
}