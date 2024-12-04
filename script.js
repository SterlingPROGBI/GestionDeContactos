function togglePassword() {
    const passwordInput = document.getElementById('pass_input');
    const toggleIcon = document.querySelector('.toggle-password i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.className = 'bi bi-eye-slash'; // Cambia el icono a "ojo cerrado"
    } else {
        passwordInput.type = 'password';
        toggleIcon.className = 'bi bi-eye'; // Cambia el icono a "ojo abierto"
    }
}


document.getElementById('btn_login').addEventListener('click', () => {
    const userInput = document.getElementById('user_input').value.trim();
    const passInput = document.getElementById('pass_input').value.trim();

    if (!userInput || !passInput) {
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: 'Por favor complete todos los campos.',
            backdrop: false, // Evita movimiento del fondo
            didOpen: () => document.body.classList.add('blurred'),
            willClose: () => document.body.classList.remove('blurred'),
        });
        return;
    }

    // Validación de usuario y contraseña fijos
    if (userInput === '20220260' && passInput === 'admin1212') {
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Inicio de sesión correcto.',
            backdrop: false, // Evita movimiento del fondo
            didOpen: () => document.body.classList.add('blurred'),
            willClose: () => document.body.classList.remove('blurred'),
        }).then(() => {
            window.location.href = 'index.html'; // Redirige a index.html
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario o contraseña incorrectos.',
            backdrop: false, // Evita movimiento del fondo
        });
    }
});


