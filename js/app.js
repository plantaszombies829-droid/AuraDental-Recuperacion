document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('header');
    const menu = document.getElementById('menu');
    const enlaces = document.getElementById('enlaces');
    const formulario = document.getElementById('formCita');
    const modal = document.getElementById('modal');
    const modalExito = document.getElementById('modalExito');
    const modalServicio = document.getElementById('modalServicio');

    //parte del celular.
    menu.addEventListener('click', () => {
        enlaces.classList.toggle('mostrar');
    });

    document.querySelectorAll('.enlaces a').forEach(enlace => {
        enlace.addEventListener('click', () => {
            enlaces.classList.remove('mostrar');
        });
    });
    

    document.querySelectorAll('.mas-info').forEach(enlace => {

        enlace.addEventListener('click', (evento) => {

            evento.preventDefault();

            document.getElementById('tituloServicio').innerHTML =
                enlace.getAttribute('data-titulo');

            document.getElementById('descripcionServicio').innerHTML =
                enlace.getAttribute('data-descripcion');

            modalServicio.classList.add('activo');

        });

    });

    document.getElementById('cerrarServicio').addEventListener('click', () => {
        modalServicio.classList.remove('activo');
    });

    modalServicio.addEventListener('click', (evento) => {
        if (evento.target === modalServicio) {
            modalServicio.classList.remove('activo');
        }
    });

    document.getElementById('fecha').min =

    formulario.addEventListener('submit', (evento) => {

        evento.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('telefono').value;
        const servicio = document.getElementById('servicio').value;
        const fecha = document.getElementById('fecha').value
        
        if (nombre == '' || correo == '' || telefono == '' || servicio == '' || fecha == '') {

            document.getElementById('mensajeResultado').innerHTML =
                'Completa todos los campos obligatorios.';

        } else {

            document.getElementById('textoModal').innerHTML =
                '¿Estás seguro de enviar tu solicitud de cita para ' +
                servicio + '?';

            modal.classList.add('activo');

        }

    });

    document.getElementById('cancelarModal').addEventListener('click', () => {
        modal.classList.remove('activo');
    });

    document.getElementById('aceptarModal').addEventListener('click', () => {

        const nombre = document.getElementById('nombre').value;
        const servicio = document.getElementById('servicio').value;

        modal.classList.remove('activo');

        document.getElementById('textoExito').innerHTML =
            'Gracias, ' + nombre + '. Tu solicitud para ' +
            servicio + ' ha sido confirmada.';

        formulario.reset();

        modalExito.classList.add('activo');

        document.getElementById('mensajeResultado').innerHTML = '';

    });

    document.getElementById('cerrarExito').addEventListener('click', () => {
        modalExito.classList.remove('activo');
    });

    modal.addEventListener('click', (evento) => {
        if (evento.target === modal) {
            modal.classList.remove('activo');
        }
    });

    modalExito.addEventListener('click', (evento) => {
        if (evento.target === modalExito) {
            modalExito.classList.remove('activo');
        }
    });

});