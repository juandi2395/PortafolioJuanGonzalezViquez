// ======================================================
// CONFIGURACIÓN DEL IDIOMA
// ======================================================

let currentLanguage = "es";

const languageButton = document.getElementById("languageButton");


// ======================================================
// TRADUCCIONES GENERALES
// ======================================================

const translations = {

    es: {

        // Header
        navHome: "Inicio",
        navAbout: "Sobre mí",
        navTechnologies: "Tecnologías",
        navProjects: "Proyectos",
        navContact: "Contacto",

        // Hero
        heroBadge: "Inteligencia de Negocios • Análisis de Datos • Desarrollo de Software",

        heroTitle: "Juan Diego González",

        heroSubtitle: "Gerente de Reportes Globales y Cumplimiento",

        heroDescription:
            "Gerente de Reportes Globales y Cumplimiento con 9 años de experiencia liderando operaciones basadas en datos en entornos empresariales. Experto en gestión de equipos de alto rendimiento y en la entrega de soluciones estratégicas de reportes que impulsan el cumplimiento, la toma de decisiones ejecutivas y la excelencia operativa. Reconocido por liderazgo analítico, comunicación clara y capacidad de transformar datos complejos en información accionable.",

        downloadCV: "Descargar CV",

        contactMe: "Contáctame",

        // About
        aboutTitle: "Sobre mí",

        aboutSubtitle:
            "Transformando datos a información.",

        aboutDescription:
            "Gerente de Reportes Globales y Cumplimiento con 9 años de experiencia liderando operaciones basadas en datos en entornos empresariales. Especializado en inteligencia de negocios, analítica de datos y gestión de equipos de alto desempeño para impulsar decisiones ejecutivas, cumplimiento regulatorio y excelencia operativa.",

        experience: "Años de experiencia",

        leader: "Líder",

        highPerformanceTeams: "Equipos de Alto Rendimiento",

        businessIntelligence: "Inteligencia de Negocios",

        transformingData:
            "Transformando datos a información.",

        softwareArchitecture:
            "Arquitectura de Software",

        conceptualDesign:
            "Diseño Conceptual e Infraestructura",

        // Technologies
        technologiesTitle: "Tecnologías",

        technologiesSubtitle:
            "Herramientas y plataformas utilizadas para crear soluciones empresariales.",

        businessIntelligenceTech:
            "Inteligencia de Negocios",

        databases:
            "Bases de Datos",

        development:
            "Desarrollo",

        cloudDevOps:
            "Cloud & DevOps",

        // Projects
        projectsTitle: "Proyectos",

        projectsSubtitle:
            "Soluciones desarrolladas en Inteligencia de Negocios y Desarrollo de Software.",

        viewDetails: "Ver detalles",

        type: "Tipo",

        status: "Estado",

        role: "Rol",

        // Contact
        contactTitle: "Contacto",

        contactSubtitle:
            "¿Tienes una oportunidad laboral o un proyecto? Conversemos.",

        email: "Correo",

        whatsapp: "WhatsApp",

        namePlaceholder: "Nombre",

        emailPlaceholder: "Correo electrónico",

        subjectPlaceholder: "Asunto",

        messagePlaceholder: "Escribe tu mensaje...",

        sendMessage: "Enviar mensaje",

        sending: "Enviando...",

        messageSent:
            "¡Mensaje enviado correctamente!",

        messageError:
            "No se pudo enviar el mensaje. Por favor, intenta nuevamente.",

        completeFields:
            "Por favor completa todos los campos.",

        // Footer
        footerDescription:
            "Inteligencia de Negocios | Arquitectura de Software",

        footerEmail: "Correo",

        footerGitHub: "GitHub",

        footerLinkedIn: "LinkedIn",

        footerWhatsApp: "WhatsApp",

        footerCopyright:
            "© 2026 Juan Diego González. Todos los derechos reservados."
    },


    en: {

        // Header
        navHome: "Home",
        navAbout: "About Me",
        navTechnologies: "Technologies",
        navProjects: "Projects",
        navContact: "Contact",

        // Hero
        heroBadge: "Business Intelligence • Data Analytics • Software Development",

        heroTitle: "Juan Diego González",

        heroSubtitle: "Global Reporting and Compliance Manager",

        heroDescription:
            "Global Reporting and Compliance Manager with 9 years of experience leading data-driven operations in enterprise environments. Experienced in managing high-performance teams and delivering strategic reporting solutions that drive compliance, executive decision-making, and operational excellence. Recognized for analytical leadership, clear communication, and the ability to transform complex data into actionable insights.",

        downloadCV: "Download CV",

        contactMe: "Contact Me",

        // About
        aboutTitle: "About Me",

        aboutSubtitle:
            "Transforming data into Decisions.",

        aboutDescription:
            "Global Reporting and Compliance Manager with 9 years of experience leading data-driven operations in enterprise environments. Specialized in business intelligence, data analytics, and high-performance team management to support executive decision-making, regulatory compliance, and operational excellence.",

        experience: "Years of experience",

        leader: "Leader",

        highPerformanceTeams: "High-Performance Teams",

        businessIntelligence: "Business Intelligence",

        transformingData:
            "Transforming data into Decisions.",

        softwareArchitecture:
            "Software Architecture",

        conceptualDesign:
            "Conceptual Design & Infrastructure",

        // Technologies
        technologiesTitle: "Technologies",

        technologiesSubtitle:
            "Tools and platforms used to build enterprise solutions.",

        businessIntelligenceTech:
            "Business Intelligence",

        databases:
            "Databases",

        development:
            "Development",

        cloudDevOps:
            "Cloud & DevOps",

        // Projects
        projectsTitle: "Projects",

        projectsSubtitle:
            "Solutions developed in Business Intelligence and Software Development.",

        viewDetails: "View Details",

        type: "Type",

        status: "Status",

        role: "Role",

        // Contact
        contactTitle: "Contact",

        contactSubtitle:
            "Do you have a career opportunity or a project? Let's talk.",

        email: "Email",

        whatsapp: "WhatsApp",

        namePlaceholder: "Name",

        emailPlaceholder: "Email address",

        subjectPlaceholder: "Subject",

        messagePlaceholder: "Write your message...",

        sendMessage: "Send Message",

        sending: "Sending...",

        messageSent:
            "Message sent successfully!",

        messageError:
            "The message could not be sent. Please try again.",

        completeFields:
            "Please complete all fields.",

        // Footer
        footerDescription:
            "Business Intelligence | Software Architecture",

        footerEmail: "Email",

        footerGitHub: "GitHub",

        footerLinkedIn: "LinkedIn",

        footerWhatsApp: "WhatsApp",

        footerCopyright:
            "© 2026 Juan Diego González. All rights reserved."
    }

};


// ======================================================
// PROYECTOS
// ======================================================

const projects = [

    {
        es: {
            title: "Dashboard Ejecutivo BI",

            description:
                "Desarrollo de dashboards ejecutivos orientados al análisis de indicadores estratégicos, tendencias y visualización de información para apoyar la toma de decisiones mediante indicadores clave de desempeño (KPIs).",

            type: "Proyecto de Inteligencia de Negocios",

            status: "Finalizado",

            role: "Arquitecto y Desarrollador"
        },

        en: {
            title: "Executive BI Dashboard",

            description:
                "Development of executive dashboards focused on strategic indicators, trends, and information visualization to support decision-making through key performance indicators (KPIs).",

            type: "Business Intelligence Project",

            status: "Completed",

            role: "Architect and Developer"
        },

        technologies: [
            "Power BI",
            "SQL Server",
            "DAX",
            "Azure"
        ]
    },


    {
        es: {
            title: "Sistema Gestor de Taller",

            description:
                "Aplicación desarrollada bajo arquitectura MVC para administrar clientes, vehículos, órdenes de trabajo, servicios y procesos de facturación de un taller mecánico, optimizando la gestión operativa.",

            type: "Aplicación Web Empresarial",

            status: "Finalizado",

            role: "Desarrollador Full Stack"
        },

        en: {
            title: "Workshop Management System",

            description:
                "Application developed using MVC architecture to manage customers, vehicles, work orders, services, and billing processes for an automotive workshop, improving operational management.",

            type: "Enterprise Web Application",

            status: "Completed",

            role: "Full Stack Developer"
        },

        technologies: [
            "Java",
            "MVC",
            "SQL Server",
            "Git"
        ]
    },


    {
        es: {
            title: "API MVC con Autenticación",

            description:
                "Desarrollo de una API REST utilizando Spring Boot con autenticación de usuarios, administración de roles y operaciones CRUD siguiendo buenas prácticas de arquitectura de software.",

            type: "API REST",

            status: "Finalizado",

            role: "Backend Developer"
        },

        en: {
            title: "MVC API with Authentication",

            description:
                "Development of a REST API using Spring Boot with user authentication, role management, and CRUD operations following software architecture best practices.",

            type: "REST API",

            status: "Completed",

            role: "Backend Developer"
        },

        technologies: [
            "Java",
            "Spring Boot",
            "REST API",
            "SQL Server"
        ]
    },


    {
        es: {
            title: "Árbol Rojo-Negro",

            description:
                "Implementación de una estructura de datos balanceada en C++ aplicando rotaciones y reglas de color para mantener el equilibrio del árbol y optimizar las operaciones de búsqueda e inserción.",

            type: "Proyecto Académico",

            status: "Finalizado",

            role: "Desarrollador"
        },

        en: {
            title: "Red-Black Tree",

            description:
                "Implementation of a balanced data structure in C++ using rotations and color rules to maintain tree balance and optimize search and insertion operations.",

            type: "Academic Project",

            status: "Completed",

            role: "Developer"
        },

        technologies: [
            "C++",
            "OOP",
            "Algorithms",
            "Data Structures"
        ]
    }

];


// ======================================================
// CAMBIAR TEXTOS DEL SITIO
// ======================================================

function updateLanguage() {

    const text = translations[currentLanguage];

    document.documentElement.lang = currentLanguage;

    // Header
    document.querySelector('a[href="#inicio"]').innerText =
        text.navHome;

    document.querySelector('a[href="#sobre-mi"]').innerText =
        text.navAbout;

    document.querySelector('a[href="#tecnologias"]').innerText =
        text.navTechnologies;

    document.querySelector('a[href="#proyectos"]').innerText =
        text.navProjects;

    document.querySelector('a[href="#contacto"]').innerText =
        text.navContact;


    // Botón idioma
    languageButton.innerText =
        currentLanguage === "es" ? "ES" : "EN";


    // Hero
    document.querySelector(".hero-badge").innerText =
        text.heroBadge;

    document.getElementById("heroTitle").innerText =
        text.heroTitle;

    document.getElementById("heroSubtitle").innerText =
        text.heroSubtitle;

    document.getElementById("heroDescription").innerText =
        text.heroDescription;


    // Botones Hero
    const cvButton =
        document.querySelector(".btn-primary");

    cvButton.innerText =
        text.downloadCV;

    if (currentLanguage === "es") {

        cvButton.href =
            "files/Curriculum CV Juan Diego Español.pdf";

        cvButton.download =
            "Curriculum CV Juan Diego Español.pdf";

    } else {

        cvButton.href =
            "files/Curriculum CV Juan Diego English.pdf";

        cvButton.download =
            "Curriculum CV Juan Diego English.pdf";
    }


    document.querySelector(".btn-secondary").innerText =
        text.contactMe;


    // About
    document.getElementById("aboutTitle").innerText =
        text.aboutTitle;

    document.getElementById("aboutSubtitle").innerText =
        text.aboutSubtitle;

    document.querySelector(".about-description p").innerText =
        text.aboutDescription;


    const stats =
        document.querySelectorAll(".stat-card");


    stats[0].querySelector("span").innerText =
        text.experience;

    stats[1].querySelector("h3").innerText =
        text.leader;

    stats[1].querySelector("span").innerText =
        text.highPerformanceTeams;

    stats[2].querySelector("h3").innerText =
        text.businessIntelligence;

    stats[2].querySelector("span").innerText =
        text.transformingData;

    stats[3].querySelector("h3").innerText =
        text.softwareArchitecture;

    stats[3].querySelector("span").innerText =
        text.conceptualDesign;


    // Technologies
    document.querySelector("#tecnologias .section-title h2").innerText =
        text.technologiesTitle;

    document.querySelector("#tecnologias .section-title p").innerText =
        text.technologiesSubtitle;


    const technologyCards =
        document.querySelectorAll(".technology-card");


    technologyCards[0].querySelector("h3").innerText =
        text.businessIntelligenceTech;

    technologyCards[1].querySelector("h3").innerText =
        text.databases;

    technologyCards[2].querySelector("h3").innerText =
        text.development;

    technologyCards[3].querySelector("h3").innerText =
        text.cloudDevOps;


    // Projects
    document.querySelector("#proyectos .section-title h2").innerText =
        text.projectsTitle;

    document.querySelector("#proyectos .section-title p").innerText =
        text.projectsSubtitle;


    document.querySelectorAll(".project-card button")
        .forEach(button => {

            button.innerText =
                text.viewDetails;

        });


    // Modal
    document.querySelector("#projectModal h4:nth-of-type(1)").innerText =
        text.type;

    document.querySelector("#projectModal h4:nth-of-type(2)").innerText =
        text.status;

    document.querySelector("#projectModal h4:nth-of-type(3)").innerText =
        text.role;


    // Contact
    document.querySelector("#contacto .section-title h2").innerText =
        text.contactTitle;

    document.querySelector("#contacto .section-title p").innerText =
        text.contactSubtitle;


    document.querySelectorAll(".contact-card h3")[0].innerText =
        "📧 " + text.email;

    document.querySelectorAll(".contact-card h3")[3].innerText =
        "💬 " + text.whatsapp;


    // Formulario
    document.getElementById("name").placeholder =
        text.namePlaceholder;

    document.getElementById("email").placeholder =
        text.emailPlaceholder;

    document.getElementById("subject").placeholder =
        text.subjectPlaceholder;

    document.getElementById("message").placeholder =
        text.messagePlaceholder;


    const submitButton =
        document.querySelector("#contactForm button");

    submitButton.innerText =
        text.sendMessage;


    // Footer
    document.querySelector(".footer-brand p").innerText =
        text.footerDescription;


    const footerLinks =
        document.querySelectorAll(".footer-links a");


    footerLinks[0].innerHTML =
        "📧 " + text.footerEmail;

    footerLinks[1].innerHTML =
        "💻 " + text.footerGitHub;

    footerLinks[2].innerHTML =
        "💼 " + text.footerLinkedIn;

    footerLinks[3].innerHTML =
        "💬 " + text.footerWhatsApp;


    document.querySelector(".footer-bottom p").innerText =
        text.footerCopyright;
}


// ======================================================
// BOTÓN CAMBIO DE IDIOMA
// ======================================================

languageButton.addEventListener("click", () => {

    currentLanguage =
        currentLanguage === "es"
            ? "en"
            : "es";

    updateLanguage();

});


// ======================================================
// MODAL DE PROYECTOS
// ======================================================

function openProject(index) {

    const project =
        projects[index][currentLanguage];


    document.getElementById("modalTitle").innerText =
        project.title;


    document.getElementById("modalDescription").innerText =
        project.description;


    document.getElementById("modalType").innerText =
        project.type;


    document.getElementById("modalStatus").innerText =
        project.status;


    document.getElementById("modalRole").innerText =
        project.role;


    document.getElementById("projectModal").style.display =
        "flex";
}


function closeProject() {

    document.getElementById("projectModal").style.display =
        "none";
}


window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("projectModal");


    if (event.target === modal) {

        closeProject();

    }

});


// ======================================================
// EMAILJS - FORMULARIO DE CONTACTO
// ======================================================

emailjs.init({

    publicKey: "mKKQonoOe1TTiBQSt"

});


const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const button =
        contactForm.querySelector("button");


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    const text =
        translations[currentLanguage];


    if (!name || !email || !subject || !message) {

        alert(text.completeFields);

        return;
    }


    button.disabled = true;

    button.innerText =
        text.sending;


    const templateParams = {

        name: name,

        email: email,

        subject: subject,

        message: message

    };


    emailjs.send(

        "service_dm3rups",

        "template_jvkyzkd",

        templateParams

    )

    .then(function() {

        alert(text.messageSent);

        contactForm.reset();

        button.disabled = false;

        button.innerText =
            text.sendMessage;

    })

    .catch(function(error) {

        console.error(
            "Error al enviar el mensaje:",
            error
        );


        alert(text.messageError);


        button.disabled = false;

        button.innerText =
            text.sendMessage;

    });

});


// ======================================================
// SCROLL TOP
// ======================================================

const scrollTopButton =
    document.getElementById("scrollTopButton");


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollTopButton.style.display =
            "flex";

    } else {

        scrollTopButton.style.display =
            "none";
    }

});


scrollTopButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ======================================================
// MENÚ HAMBURGUESA
// ======================================================

const menuToggle =
    document.getElementById("menuToggle");


const navMenu =
    document.getElementById("navMenu");


const navLinks =
    document.querySelectorAll(".nav-menu a");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ======================================================
// INICIALIZAR SITIO
// ======================================================

updateLanguage();