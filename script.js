const translations = {
    "en": {
        "nav_home": "Home",
        "nav_expertise": "Expertise",
        "nav_experience": "Experience",
        "nav_projects": "Projects",
        "nav_contact": "Contact",
        "hero_subtitle": "Senior Software Engineer",
        "hero_title": "Engineering <span class='highlight'>Scalable</span> Software Solutions",
        "hero_desc": "Seasoned engineer crafting top-tier software solutions. Focused on delivering high-value products through technical excellence and collaborative teamwork.",
        "btn_projects": "View Solutions",
        "btn_contact": "Let's Talk",
        "sect_expertise": "Core Expertise",
        "exp_system_design": "System Design",
        "exp_system_design_desc": "Microservices, Event-Driven Architecture, CQRS.",
        "exp_golang": "Golang Expert",
        "exp_golang_desc": "Concurrency patterns, performance tuning, memory management.",
        "exp_infra": "Infrastructure",
        "exp_infra_desc": "AWS (EC2, ECS, Lambda), GCP, Docker, CI/CD Pipelines.",
        "exp_data": "Data Consistency",
        "exp_data_desc": "Distributed Transactions (Saga), PostgreSQL, Redis, RabbitMQ.",
        "sect_experience": "Professional Experience",
        "role_mercadolibre": "Senior Software Engineer",
        "desc_mercadolibre": "Critical optimization in high-volume payment systems ($400M MXN daily). Reduced execution time by <strong>75%</strong> and improved observability of distributed transactions.",
        "role_deuna": "Technical Lead",
        "desc_deuna": "Led implementation of asynchronous and sequential payments ensuring consistency. Resolved critical integrations with Apple Pay and Kushki, and automated dev environments with Docker.",
        "role_99_lead": "Technical Lead",
        "desc_99_lead": "Strategic management and technical team growth. Architecture design on GCP focused on logistics scalability.",
        "role_99_senior": "Senior Software Engineer",
        "desc_99_senior": "Core service development for last-mile logistics. Robust microservices implementation in Go.",
        "sect_projects": "Architecture & Projects",
        "sect_projects_sub": "Reference implementations and complex problem resolutions.",
        "proj_saga_title": "Orchestration-Based Saga Pattern",
        "proj_saga_desc": "Design and implementation of an orchestrator to handle distributed transactions in a financial microservices environment. <strong>Challenge:</strong> Ensure eventual consistency without resource locking in distributed databases.",
        "proj_payment_title": "High-Throughput Payment Gateway",
        "proj_payment_desc": "Payment gateway capable of handling <strong>10k+ RPS</strong> with sub-100ms latency. Implemented with Go routines and garbage collection optimization.",
        "proj_serverless_title": "Serverless Data Pipeline",
        "proj_serverless_desc": "Event processing architecture using AWS Lambda and RabbitMQ to handle non-blocking asynchronous tasks.",
        "proj_chat_title": "Real-time Notification Engine",
        "proj_chat_desc": "Scalable WebSocket server utilizing Redis Pub/Sub for instant messaging across distributed instances.",
        "proj_inventory_title": "Inventory Management API",
        "proj_inventory_desc": "ACID-compliant inventory system with optimistic locking to handle high concurrency without overselling.",
        "sect_contact": "Let's Talk Architecture?",
        "contact_desc": "Available for technical leadership roles and distributed systems consulting.",
        "date_mercadolibre": "May 2025 - Present",
        "date_deuna": "Apr 2024 - May 2025",
        "date_99_lead": "Jan 2023 - Apr 2024",
        "date_99_senior": "Aug 2021 - Mar 2023",
        "sect_philosophy": "Engineering Philosophy",
        "philo_simple_title": "Simplicity Over Complexity",
        "philo_simple_desc": "Writing code that is easy to read, test, and maintain is harder than writing complex code. I strive for elegant simplicity.",
        "philo_scale_title": "Built for Scale",
        "philo_scale_desc": "Systems should be designed to handle growth gracefully. I focus on stateless architectures and idempotency.",
        "philo_mentor_title": "Mentorship & Culture",
        "philo_mentor_desc": "Technology is built by people. I believe in fostering a culture of knowledge sharing and psychological safety.",
        "footer_desc": "Senior Software Engineer focused on distributed systems and high-concurrency architectures.",
        "footer_links": "Quick Links",
        "footer_social": "Connect",
        "footer_copy": "&copy; 2026 Juan Carlos Garcia. All rights reserved."
    },
    "es": {
        "nav_home": "Inicio",
        "nav_expertise": "Expertise",
        "nav_experience": "Trayectoria",
        "nav_projects": "Proyectos",
        "nav_contact": "Contacto",
         "hero_subtitle": "Ingeniero de Software Senior",
        "hero_title": "Ingeniería de Software <span class='highlight'>Escalable</span> y de Alto Valor",
        "hero_desc": "Ingeniero experimentado creando soluciones de primer nivel. Enfocado en entregar valor mediante excelencia técnica y trabajo colaborativo.",
        "btn_projects": "Ver Soluciones",
        "btn_contact": "Hablemos",
        "sect_expertise": "Core Expertise",
        "exp_system_design": "Diseño de Sistemas",
        "exp_system_design_desc": "Microservicios, Arquitectura Orientada a Eventos, CQRS.",
        "exp_golang": "Experto en Golang",
        "exp_golang_desc": "Patrones de concurrencia, optimización de rendimiento, gestión de memoria.",
        "exp_infra": "Infraestrutura",
        "exp_infra_desc": "AWS (EC2, ECS, Lambda), GCP, Docker, Flujos CI/CD.",
        "exp_data": "Consistencia de Datos",
        "exp_data_desc": "Transacciones Distribuidas (Saga), PostgreSQL, Redis, RabbitMQ.",
        "sect_experience": "Trayectoria Profesional",
        "role_mercadolibre": "Senior Software Engineer",
        "desc_mercadolibre": "Optimización crítica en sistemas de pagos de alto volumen ($400M MXN diarios). Reduje el tiempo de ejecución en un <strong>75%</strong> y mejoré la observabilidad de transacciones distribuidas.",
        "role_deuna": "Líder Técnico",
        "desc_deuna": "Lideré la implementación de pagos asíncronos y secuenciales para asegurar consistencia. Resolví integraciones críticas con Apple Pay y Kushki, y automaticé entornos de desarrollo con Docker.",
        "role_99_lead": "Líder Técnico",
        "desc_99_lead": "Gestión estratégica y crecimiento del equipo técnico. Diseño de arquitectura en GCP enfocada en escalabilidad logística.",
        "role_99_senior": "Senior Software Engineer",
        "desc_99_senior": "Desarrollo de servicios core para logística de última milla. Implementación de microservicios robustos en Go.",
        "sect_projects": "Arquitectura y Proyectos",
        "sect_projects_sub": "Implementaciones de referencia y resoluciones de problemas complejos.",
        "proj_saga_title": "Patrón Saga Orquestado",
        "proj_saga_desc": "Diseño e implementación de un orquestador para manejar transacciones distribuidas en un entorno de microservicios financieros. <strong>Reto:</strong> Asegurar consistencia eventual sin bloqueo de recursos en bases de datos distribuidas.",
        "proj_payment_title": "Gateway de Pagos de Alto Rendimiento",
        "proj_payment_desc": "Gateway de pagos capaz de manejar <strong>10k+ RPS</strong> con latencia sub-100ms. Implementado con Go routines y optimización de garbage collection.",
        "proj_serverless_title": "Pipeline de Datos Serverless",
        "proj_serverless_desc": "Arquitectura de procesamiento de eventos usando AWS Lambda y RabbitMQ para manejar tareas asíncronas no bloqueantes.",
        "proj_chat_title": "Motor de Notificaciones Real-time",
        "proj_chat_desc": "Servidor WebSocket escalable utilizando Redis Pub/Sub para mensajería instantánea entre instancias distribuidas.",
        "proj_inventory_title": "API de Gestión de Inventarios",
        "proj_inventory_desc": "Sistema de inventario compatible con ACID y bloqueo optimista para manejar alta concurrencia sin sobreventas.",
        "sect_contact": "¿Hablamos de Arquitectura?",
        "contact_desc": "Disponible para roles de liderazgo técnico y consultoría en sistemas distribuidos.",
        "date_mercadolibre": "May 2025 - Presente",
        "date_deuna": "Abr 2024 - May 2025",
        "date_99_lead": "Ene 2023 - Abr 2024",
        "date_99_senior": "Ago 2021 - Mar 2023",
        "sect_philosophy": "Filosofía de Ingeniería",
        "philo_simple_title": "Simplicidad sobre Complejidad",
        "philo_simple_desc": "Escribir código fácil de leer, probar y mantener es más difícil que escribir código complejo. Busco la simplicidad elegante.",
        "philo_scale_title": "Construido para Escalar",
        "philo_scale_desc": "Los sistemas deben diseñarse para manejar el crecimiento con gracia. Me enfoco en arquitecturas stateless e idempotencia.",
        "philo_mentor_title": "Mentoría y Cultura",
        "philo_mentor_desc": "La tecnología es construida por personas. Creo en fomentar una cultura de intercambio de conocimientos y seguridad psicológica.",
        "footer_desc": "Ingeniero de Software Senior enfocado en sistemas distribuidos y arquitecturas de alta concurrencia.",
        "footer_links": "Enlaces Rápidos",
        "footer_social": "Conectar",
        "footer_copy": "&copy; 2026 Juan Carlos Garcia. Reservados todos los derechos."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- i18n Logic ---
    let currentLang = localStorage.getItem('lang') || 'en';
    const langBtn = document.getElementById('lang-btn');
    const currentFlag = document.getElementById('current-flag');
    const langOptions = document.querySelectorAll('.lang-menu li'); // Select list items
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');

    const updateLanguage = (lang) => {
        // Update texts
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                const translation = translations[lang][key];
                element.innerHTML = translation;
            }
        });

        // Update Button Flag
        currentFlag.innerHTML = lang === 'en' ? '🇺🇸' : '🇲🇽';
        
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
        currentLang = lang;
    };

    // Initialize Language
    updateLanguage(currentLang);

    // Dropdown Handler (Click on Options)
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
             const selectedLang = option.getAttribute('data-lang');
             updateLanguage(selectedLang);
             // Optional: Close dropdown visually if needed, but hover handles it mostly
        });
    });
    
    // Mobile Touch Support for Dropdown (Toggle class)
    const langDropdown = document.querySelector('.lang-dropdown');
    langBtn.addEventListener('click', (e) => {
        // Only necessary for touch devices where hover doesn't exist
        if (window.matchMedia('(hover: none)').matches) {
             e.preventDefault();
             langDropdown.classList.toggle('active');
        }
    });

    // Mobile Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll'); // Prevent body scroll when menu is open
    });

    // Close menu when a link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Close dropdown on click outside
    document.addEventListener('click', (e) => {
        if (!langDropdown.contains(e.target)) {
            langDropdown.classList.remove('active');
        }
        
        // Also close mobile menu if clicking outside (on the overlay part)
        if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
             hamburger.classList.remove('active');
             navLinks.classList.remove('active');
             document.body.classList.remove('no-scroll');
        }
    });

    // --- Original Scroll & Nav Logic ---

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal animations on scroll
    const sections = document.querySelectorAll('.section, .hero');
    
    const observerOptions = {
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('fade-in'); 
            observer.unobserve(entry.target);
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Navbar scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 15, 15, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        } else {
            header.style.background = 'rgba(15, 15, 15, 0.85)';
            header.style.boxShadow = 'none';
        }
    });
});
