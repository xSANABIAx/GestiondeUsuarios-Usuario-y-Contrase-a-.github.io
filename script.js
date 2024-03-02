function login() {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    var usuario = 'sanabia';
    var contrasena = 'sanabia';

    
    if (username === usuario && password === contrasena) {
        
        alert('Inicio de sesión exitoso');
        window.location.href = 'bienvenida.html'; 
    } else {
        
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
}
