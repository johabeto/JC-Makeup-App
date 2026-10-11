// ========================================
// JC MAKEUP - APLICACIÓN
// ========================================


// ========================================
// MENÚ DE NAVEGACIÓN
// ========================================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
});


// ========================================
// CERRAR EL MENÚ
// ========================================

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("active");

    });

});


// ========================================
// FORMULARIO DE CITAS
// ========================================

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

    // Evita que la página se recargue
    event.preventDefault();


    // Obtener los datos del formulario

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const service =
        document.getElementById("service").value;

    const date =
        document.getElementById("date").value;


    // ========================================
    // COMPROBAR LOS CAMPOS
    // ========================================

    if (
        name === "" ||
        phone === "" ||
        service === "" ||
        date === ""
    ) {

        alert(
            "Por favor, completa todos los campos."
        );

        return;
    }


    // ========================================
    // CREAR MENSAJE DE WHATSAPP
    // ========================================

    const message =
        `Hola, soy ${name} 💜

Quisiera agendar una cita en JC Makeup.

💄 Servicio: ${service}
📅 Fecha: ${date}
📱 Teléfono: ${phone}

Gracias.`;


    // ========================================
    // WHATSAPP DE JC MAKEUP
    // ========================================

    const whatsappNumber =
        "593994244317";


    // ========================================
    // CREAR ENLACE DE WHATSAPP
    // ========================================

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);


    // ========================================
    // ABRIR WHATSAPP
    // ========================================

    window.open(
        whatsappURL,
        "_blank"
    );


    // ========================================
    // LIMPIAR FORMULARIO
    // ========================================

    bookingForm.reset();

});


// ========================================
// FECHA MÍNIMA PARA LAS CITAS
// ========================================

const dateInput =
    document.getElementById("date");


const today = new Date();


const year =
    today.getFullYear();


const month =
    String(
        today.getMonth() + 1
    ).padStart(2, "0");


const day =
    String(
        today.getDate()
    ).padStart(2, "0");


const currentDate =
    `${year}-${month}-${day}`;


dateInput.setAttribute(
    "min",
    currentDate
);


// ========================================
// MENSAJE EN CONSOLA
// ========================================

console.log(
    "JC Makeup - Aplicación iniciada correctamente 💜"
);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(() => {
                console.log("JC Makeup: aplicación lista para instalar.");
            })
            .catch((error) => {
                console.error("Error al registrar el Service Worker:", error);
            });
    });
}