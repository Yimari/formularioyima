function validateForm(event) {
    event.preventDefault();

    // Validación básica del formulario
    const form = document.getElementById('registrationForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return false;
    }

    // Validación de correo electrónico
    const email = document.getElementById('correo').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('correoError').style.display = 'block';
        return false;
    }

    // Si todo es válido
    alert('Formulario enviado exitosamente!');
    form.reset();
    return false;
}

// Ocultar mensajes de error cuando cambien los valores
document.getElementById('correo').addEventListener('input', function() {
    document.getElementById('correoError').style.display = 'none';
});
