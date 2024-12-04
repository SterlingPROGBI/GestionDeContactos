
// Espera que el DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', function () {
    // Obtén el enlace para cerrar sesión
    const logoutButton = document.getElementById('logout');

    // Al hacer clic en "Cerrar sesión"
    logoutButton.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace

        // Muestra una alerta de confirmación de cierre de sesión
        Swal.fire({
            title: '¿Deseas cerrar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar',
            backdrop: false,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Sesión cerrada',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500, // Después de 1.5 segundos redirige
                }).then(() => {
                    window.location.href = 'login.html'; // Redirige al login
                });
            }
        });
    });
});