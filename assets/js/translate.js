/*
var languages = {};
$("[data-text-key]").each(function (index, item) {
	var $item = $(item)
    languages[$item.data("text-key")] = {
      "en": $item.html().trim(),
      "es": "",
    }
});
JSON.stringify(languages);
*/

(function () {
    var languages = {
        "MenuHome": {
            "en": "Home",
            "es": "Inicio"
        },
        "MenuServices": {
            "en": "Services",
            "es": "Servicios"
        },
        "MenuProjects": {
            "en": "Projects",
            "es": "Proyectos"
        },
        "MenuContact": {
            "en": "Contact",
            "es": "Contacto"
        },
        "HomeSlogan": {
            "en": "Marine and Civil Architectural Solutions",
            "es": "Soluciones arquitectónicas marinas y civiles"
        },
        "AboutUs": {
            "en": "About Us",
            "es": "¿Quiénes<br/>somos?"
        },
        "FullService": {
            "en": "FULL SERVICE CONTRACTOR IN MARINE AND CIVIL ARCHITECTURAL SOLUTIONS",
            "es": "Empresa constructora que brinda soluciones arquitectónicas para la industria marítima y civil"
        },
        "TextAbout": {
            "en": "V&CH Global is a firm based in Lima, Peru that provides innovative solutions, qualitymaterials and services to build new spaces and refurbish cruises and on-land projects.",
            "es": "V&CH Global es una empresa con sede en Lima - Perú, que ofrece soluciones innovadoras, suministro de materiales y servicios de calidad para construir nuevos proyectos y renovar espacios en barcos de cruceros y edificaciones civiles."
        },
        "TextG": {
            "en": "Globalization",
            "es": "Globalización"
        },
        "TextD": {
            "en": "Design",
            "es": "Diseño"
        },
        "TextT": {
            "en": "Team",
            "es": "Equipo"
        },
        "TextP": {
            "en": "Puntuality",
            "es": "Puntualidad"
        },
        "OurServices": {
            "en": "Our<br/>services",
            "es": "Nuestros<br/>Servicios"
        },
        "ServicesDe": {
            "en": "Design and building",
            "es": "Diseño y construcción"
        },
        "ServicesCu": {
            "en": "Customize manufacturing",
            "es": "Manufactura personalizada"
        },
        "ServicesPro": {
            "en": "Procurement",
            "es": "Compras y adquisiciones"
        },
        "ServicesTu": {
            "en": "Turn-Key Services",
            "es": "Servicios integrales"
        },
        "ServicesIm": {
            "en": "Import/Export",
            "es": "Importación / exportación de materiales"
        },
        "ServicesCo": {
            "en": "Consulting",
            "es": "Consultoría"
        },
        "OurProjects": {
            "en": "Our<br/>projects",
            "es": "Nuestros<br/>Proyectos"
        },
        "LeerMas": {
            "en": "See more",
            "es": "Ver más"
        },
        "OurAllies": {
            "en": "Our<br>Allies",
            "es": "Nuestros<br/>Aliados"
        },
        "InsMail": {
            "en": "Institutional Mail",
            "es": "Correo institucional"
        },
        "phone": {
            "en": "<i class=\"fas fa-fw fa-phone-alt\"></i>Phone",
            "es": "Celular"
        },
        "VisitPopup": {
            "en": "Visit us at CasaCor 2019 until November 03<sup class=\"lower-case\">rd</sup>",
            "es": "Visìtanos en CasaCor 2019 hasta el 3 de noviembre!"
        },
        "Send": {
            "en": "Send",
            "es": "Enviar"
        },
        "TextServicesDe": {
            "en": "Our work begins from the first interaction with the clients to assist in thedevelopingof their ideas providing the best cost-efficient and quality solutions. Our servicesinclude the presentation of the Project General Concept, followed by the elaborationofconstruction documents: Architectural, Engineering, Planning, Procurement,Monitoring,and Delivery of the final product.",
            "es": "Nuestro trabajo comienza desde la primera interacción con los clientes para ayudarlos en el desarrollo de sus ideas proporcionando soluciones costo-eficientes y de mejor calidad. Nuestros servicios incluyen la presentación del Concepto General del Proyecto, seguido de la elaboración de los documentos de construcción: Arquitectura, Ingeniería, Planificación, Procuramiento, Monitoreo hasta la entrega final del producto."
        },
        "TextServicesCu": {
            "en": "Our target is INNOVATION, we focus our work and global experience providingcustomized solutions for the broad spectrum of the Marine and Civil BuildingProjects. Our architectural playground exposes us to assist our clients in achievingtheir challenging requirements with creative ideas.",
            "es": "Nuestro objetivo es la INNOVACIÓN. Enfocamos nuestro trabajo y nuestra experiencia global en soluciones diseñadas a medida para nuestros clientes con referencias de una gran gama de Proyectos Navales y de Edificación Civil. Nuestro escenario arquitectónico nos prepara para asistir a nuestros clientes en sus desafiantes requerimientos con ideas creativas."
        },
        "TextServicesPro": {
            "en": "We provide access to a global network of vendors to find material and services thatare not common in the Latin American market.",
            "es": "Proporcionamos acceso a una red global de proveedores para encontrar materiales y servicios que no son comunes en el mercado latinoamericano."
        },
        "TextServicesTu": {
            "en": "We facilitate installation worldwide, from specialized labor, to turnkey solutionsfrom start to finish using qualified installers in different fields: Ceiling,Flooring, Carpentry, Welding, Painting, Fittings, Coverings, Mechanical Engineering,and more.",
            "es": "Facilitamos instalaciones en cualquier parte del mundo, desde mano de obra especializada, hasta soluciones integrales de principio a fin, utilizando instaladores calificados y certificados en diferentes campos: Techos, Pisos, Carpintería, Soldadura, Pintura, Accesorios, Revestimientos, Ingeniería Mecánica, y más."
        },
        "TextServicesIm": {
            "en": "We provide Logistic Services to import and export merchandize from/to around the World.We have an experienced team working everyday with Vendors and Freight Forwarders who wehave international alliances to meet deadlines and ensure the right handling of goods.",
            "es": "Proporcionamos servicios de logística para la importación y exportación de mercancías desde/hacia cualquier parte del mundo. Contamos con un equipo experimentado que trabaja día a día con Proveedores y Agentes de Carga con los que tenemos alianzas internacionales para cumplir con los plazos de entrega y asegurar el correcto manejo de las mercancías."
        },
        "TextServicesCo": {
            "en": "We count with a team of professionals in the Architecture, Engineering, andManagement field to provide adequate support and advise with different perspectivesto solve problems and improve their business.",
            "es": "Contamos con un equipo de profesionales en el campo de la Arquitectura, Ingeniería y Gestión para brindar el apoyo y asesoramiento adecuado a los clientes que necesitan diferentes perspectivas para resolver problemas y mejorar su negocio.        "
        },
        "ContactUs": {
            "en": "Contact Us",
            "es": "Contáctanos"
        },
        "Company": {
            "en": "Company<input type=\"text\" name=\"company\" class=\"padding-horizontal-2\" required=\"\">",
            "es": "Empresa"
        },
        "Cell": {
            "en": "Cellphone<input type=\"text\" name=\"phone\" class=\"padding-horizontal-2\" required=\"\">",
            "es": "Celular"
        },
        "Message": {
            "en": "Message<textarea name=\"message\" rows=\"5\" class=\"padding-horizontal-2\"></textarea>",
            "es": "Mensaje"
        },
        "Social": {
            "en": "Social networks",
            "es": "Redes Sociales"
        }
    }

    function updateLang() {
        var currentLang = localStorage.getItem("active-lang") || "en";

        $(".language-selector-item").removeClass("active");
        $("[data-lang-key='" + currentLang + "']").addClass("active");

        $("[data-text-key]").each(function (index, item) {
            var $item = $(item)
            $item.html(languages[$item.data("text-key")][currentLang])
        });
    };

    $(".language-selector-item").on("click", function () {
        var $item = $(this);
        var lang = $item.data("lang-key");
        var currentLang = localStorage.getItem("active-lang") || "en";
        if (currentLang !== lang) {
            $(".language-selector-item").removeClass("active");
            $item.addClass("active");
            localStorage.setItem("active-lang", lang);
            updateLang();
        }
    });

    updateLang();
})();
