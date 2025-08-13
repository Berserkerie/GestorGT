// Selecciona todos los enlaces del menú
let enlacesMenu = document.querySelectorAll("#menu a");

// Recorre cada enlace
enlacesMenu.forEach(function(enlace) {

    // Cuando el mouse pasa encima
    enlace.addEventListener("mouseover", function() {
        enlace.style.color = "#ff4d6d"; // rosa fuerte
    });

    // Cuando el mouse se quita
    enlace.addEventListener("mouseout", function() {
        enlace.style.color = "#333"; // gris oscuro
    });
});
