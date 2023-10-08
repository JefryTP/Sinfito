localStorage.removeItem('loggedIn');
localStorage.removeItem('apellidoPaterno');
localStorage.removeItem('apellidoMaterno');
localStorage.removeItem('nombres');
localStorage.removeItem('dni');
localStorage.removeItem('ruc');
localStorage.removeItem('razonSocial');
localStorage.removeItem('direccion');
localStorage.removeItem('ubigeo');
let dniInput = document.getElementById('txtid');
let loginButton = document.querySelector('button');

loginButton.addEventListener('click', function () {
    let dni_value = dniInput.value;
    const ruc_value = 20131376503;
    if (dni_value != null) {
        fetch(
            "https://dniruc.apisperu.com/api/v1/ruc/" +
            ruc_value +
            "?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFsbGFuaGFyb2xkMTIzNDVAZ21haWwuY29tIn0.6xxLds4nmqLhGPfQQRhcYgG9Yxk2kIaXpIfj8njTPc8"
        )
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('ruc', data.ruc);
                localStorage.setItem('razonSocial', data.razonSocial);
                localStorage.setItem('direccion',data.direccion);
                localStorage.setItem('ubigeo',data.ubigeo);
            });
        fetch(
            "https://dniruc.apisperu.com/api/v1/dni/" +
            dni_value +
            "?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFsbGFuaGFyb2xkMTIzNDVAZ21haWwuY29tIn0.6xxLds4nmqLhGPfQQRhcYgG9Yxk2kIaXpIfj8njTPc8"
        )
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('nombres', data.nombres);
                localStorage.setItem('apellidoPaterno', data.apellidoPaterno);
                localStorage.setItem('apellidoMaterno', data.apellidoMaterno);
                localStorage.setItem('dni',data.dni);
                localStorage.setItem('loggedIn', true);
                window.location.href = 'vistas/menu_principal.html';
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    } else {
        alert('Credenciales incorrectas. Por favor, intente de nuevo.');
    }
});
