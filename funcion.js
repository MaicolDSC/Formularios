document.addEventListener("DOMContentLoaded", function() {
    const btnRegistroSiembra = document.getElementById("btnRegistroSiembra");
    const btnRegistroCosecha = document.getElementById("btnRegistroCosecha");
    const formRegistroSiembra = document.getElementById("formRegistroSiembra");
    const formRegistroCosecha = document.getElementById("formRegistroCosecha");
    const sectionRegistroSiembra = document.getElementById("registro-siembra");
    const sectionRegistroCosecha = document.getElementById("registro-cosecha");

    // Mostrar formulario de registro de siembra
    btnRegistroSiembra.addEventListener("click", function() {
        sectionRegistroSiembra.style.display = "block";
        sectionRegistroCosecha.style.display = "none";
    });

    // Mostrar formulario de registro de cosecha
    btnRegistroCosecha.addEventListener("click", function() {
        sectionRegistroCosecha.style.display = "block";
        sectionRegistroSiembra.style.display = "none";
    });

    // Manejar envío del formulario de siembra
    formRegistroSiembra.addEventListener("submit", function(event) {
        event.preventDefault(); 

        alert("Formulario de siembra enviado");
        formRegistroSiembra.reset(); 
    });

    // Manejar envío del formulario de cosecha
    formRegistroCosecha.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        alert("Formulario de cosecha enviado");
        formRegistroCosecha.reset(); 
    });
});



