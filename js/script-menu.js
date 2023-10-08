
$(document).ready(function(){
    if (!localStorage.getItem('loggedIn')) {
        window.location.href = '../index.html';
    }
    $("li:contains('Consultar DNI')").click(function(){
        $(".contenido").load("credencial.html");
    });
    $("li:contains('Datos SENATI')").click(function(){
        $(".contenido").load("info_senati.html");
    });
    
    $("li:contains('Consultar clima')").click(function(){
        $(".contenido").load("clima.html");
    });
    
    $(".contenido").load("credencial.html");
    
    $("li:contains('Salir')").click(function(){
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('apellidoPaterno');
        localStorage.removeItem('apellidoMaterno');
        localStorage.removeItem('nombres');
        window.location.href = "../index.html";
    });
});
