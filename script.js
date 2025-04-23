function mostrar(id) {
    // Oculta todas las secciones con la clase
    const secciones = document.querySelectorAll('.seccion-contenido');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });

    // Oculta también el mensaje principal
    const principal = document.getElementById('mensaje-principal');
    if (principal) {
        principal.style.display = 'none';
    }

    // Muestra solo la que se pidió
    const seleccionada = document.getElementById(id);
    if (seleccionada) {
        seleccionada.style.display = 'block';
    }
}
