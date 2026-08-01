const languageButton = document.getElementById("languageButton");

languageButton.addEventListener("click", () => {

    alert("Cambio de idioma (lo implementaremos después)");

});

const projects = [

    {

        title: "Dashboard Ejecutivo BI",

        description: "Desarrollo de dashboards ejecutivos orientados al análisis de indicadores estratégicos, tendencias y visualización de información para apoyar la toma de decisiones mediante indicadores clave de desempeño (KPIs).",

        technologies: ["Power BI", "SQL Server", "DAX", "Azure"],

        type: "Proyecto de Inteligencia de Negocios",

        status: "Finalizado",

        role: "Arquitecto y Desarrollador"

    },

    {

        title: "Sistema Gestor de Taller",

        description: "Aplicación desarrollada bajo arquitectura MVC para administrar clientes, vehículos, órdenes de trabajo, servicios y procesos de facturación de un taller mecánico, optimizando la gestión operativa.",

        technologies: ["Java", "MVC", "SQL Server", "Git"],

        type: "Aplicación Web Empresarial",

        status: "Finalizado",

        role: "Desarrollador Full Stack"

    },

    {

        title: "API MVC con Autenticación",

        description: "Desarrollo de una API REST utilizando Spring Boot con autenticación de usuarios, administración de roles y operaciones CRUD siguiendo buenas prácticas de arquitectura de software.",

        technologies: ["Java", "Spring Boot", "REST API", "SQL Server"],

        type: "API REST",

        status: "Finalizado",

        role: "Backend Developer"

    },

    {

        title: "Árbol Rojo-Negro",

        description: "Implementación de una estructura de datos balanceada en C++ aplicando rotaciones y reglas de color para mantener el equilibrio del árbol y optimizar las operaciones de búsqueda e inserción.",

        technologies: ["C++", "POO", "Algoritmos", "Estructuras de Datos"],

        type: "Proyecto Académico",

        status: "Finalizado",

        role: "Desarrollador"

    }

];

function openProject(index) {

    document.getElementById("modalTitle").innerText =
        projects[index].title;

    document.getElementById("modalDescription").innerText =
        projects[index].description;

    document.getElementById("modalType").innerText =
        projects[index].type;

    document.getElementById("modalStatus").innerText =
        projects[index].status;

    document.getElementById("modalRole").innerText =
        projects[index].role;

    document.getElementById("projectModal").style.display = "flex";

}

function closeProject() {

    document.getElementById("projectModal").style.display = "none";

}

window.onclick = function (event) {

    if (event.target === document.getElementById("projectModal")) {

        closeProject();

    }

}

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    if(!name || !email || !subject || !message){

        alert("Por favor completa todos los campos.");

        return;

    }

    alert("¡Gracias! Tu mensaje está listo para enviarse.");

    contactForm.reset();

});

const scrollTopButton = document.getElementById("scrollTopButton");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){

        scrollTopButton.style.display="flex";

    }else{

        scrollTopButton.style.display="none";

    }


});


scrollTopButton.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

const navLinks = document.querySelectorAll(".nav-menu a");


menuToggle.addEventListener("click",()=>{


    navMenu.classList.toggle("active");


});


navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        navMenu.classList.remove("active");


    });


});