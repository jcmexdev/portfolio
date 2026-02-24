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
        "sect_expertise_sub": "Engineering excellence across the full backend stack — from system design to production observability.",
        "exp_system_design": "System Design",
        "exp_system_design_desc": "Microservices, Event-Driven Architecture, CQRS.",
        "exp_golang": "Golang Expert",
        "exp_golang_desc": "Concurrency patterns, performance tuning, memory management.",
        "exp_infra": "Infrastructure",
        "exp_infra_desc": "AWS (EC2, ECS, Lambda), GCP, Docker, CI/CD Pipelines.",
        "exp_data": "Data Consistency",
        "exp_data_desc": "Distributed Transactions (Saga), PostgreSQL, Redis, RabbitMQ.",
        "sect_experience": "Professional Experience",
        "eyebrow_experience": "Professional Journey",
        "sect_experience_sub": "A track record of high-impact engineering at scale — from fintech to logistics.",
        "role_mercadolibre": "Senior Software Engineer",
        "desc_mercadolibre": "Critical optimization in high-volume payment systems ($400M MXN daily). Reduced execution time by <strong>75%</strong> and improved observability of distributed transactions.",
        "role_deuna": "Technical Lead",
        "desc_deuna": "Led implementation of asynchronous and sequential payments ensuring consistency. Resolved critical integrations with Apple Pay and Kushki, and automated dev environments with Docker.",
        "role_99_lead": "Technical Lead",
        "desc_99_lead": "Strategic management and technical team growth. Architecture design on GCP focused on logistics scalability.",
        "role_99_senior": "Senior Software Engineer",
        "desc_99_senior": "Core service development for last-mile logistics. Robust microservices implementation in Go.",
        "sect_projects": "Architecture & Projects",
        "eyebrow_projects": "Selected Work",
        "sect_projects_sub": "Reference implementations and complex problem resolutions at production scale.",
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
        "eyebrow_philosophy": "Design Principles",
        "sect_philosophy_sub": "The values and principles that guide every technical decision I make.",
        "philo_simple_title": "Simplicity Over Complexity",
        "philo_simple_desc": "Writing code that is easy to read, test, and maintain is harder than writing complex code. I strive for elegant simplicity.",
        "philo_scale_title": "Built for Scale",
        "philo_scale_desc": "Systems should be designed to handle growth gracefully. I focus on stateless architectures and idempotency.",
        "philo_mentor_title": "Mentorship & Culture",
        "philo_mentor_desc": "Technology is built by people. I believe in fostering a culture of knowledge sharing and psychological safety.",
        "badge_current": "Current",
        "ach_mercadolibre": "Reduced payment execution latency by <strong>75%</strong> across $400M MXN/day transaction volume",
        "ach_deuna": "Integrated <strong>Apple Pay & Kushki</strong> payment flows with zero-downtime deployment strategy",
        "ach_99_lead": "Scaled engineering team and GCP architecture to support <strong>last-mile logistics</strong> at national scale",
        "ach_99_senior": "Built core <strong>gRPC microservices</strong> handling real-time logistics routing for thousands of daily deliveries",
        "footer_desc": "Senior Software Engineer focused on distributed systems and high-concurrency architectures.",
        "footer_links": "Quick Links",
        "footer_social": "Connect",
        "footer_copy": "&copy; 2026 Juan Carlos Garcia. All rights reserved.",
        "blog_saga_title": "Mastering Distributed Consistency: Building a Saga Orchestrator in Go",
        "blog_saga_date": "February 2026",
        "blog_saga_read": "8 min read",
        "blog_saga_prob_title": "The Problem: When ACID Isn't Enough",
        "blog_saga_prob_p1": "In the world of monolithic applications, maintaining data consistency is straightforward: we rely on ACID transactions. However, when moving to <strong>Microservices</strong>, the 'T' in ACID (Transactions) becomes a distributed nightmare.",
        "blog_saga_prob_p2": "Imagine an e-commerce flow:",
        "blog_saga_prob_li1": "<strong>Order Service</strong> creates an order.",
        "blog_saga_prob_li2": "<strong>Inventory Service</strong> reserves stock.",
        "blog_saga_prob_li3": "<strong>Payment Service</strong> charges the customer.",
        "blog_saga_prob_p3": "If payment fails, but stock has already been reserved, we face a 'Zombie Reservation'. Traditional <strong>Two-Phase Commit (2PC)</strong> is too slow and creates tight coupling, making it unsuitable for large-scale cloud environments.",
        "blog_saga_sol_title": "The Solution: The Saga Pattern",
        "blog_saga_sol_p1": "To solve this, I implemented the <strong>Saga Pattern</strong>. A Saga is a sequence of local transactions. Each step has a corresponding <strong>Compensating Transaction</strong> to undo changes if a subsequent step fails.",
        "blog_saga_sol_h3": "Why Orchestration over Choreography?",
        "blog_saga_sol_p2": "While Choreography (event-based) is highly decoupled, it can lead to 'Spaghetti Flows' where tracking transaction state becomes almost impossible. I chose <strong>Orchestration</strong>:",
        "blog_saga_sol_li1": "<strong>Centralized Logic</strong>: Easier to maintain and reason about complex business flows.",
        "blog_saga_sol_li2": "<strong>State Visibility</strong>: The Orchestrator knows exactly where the transaction is at any moment.",
        "blog_saga_sol_li3": "<strong>Simplified Debugging</strong>: Error handling is consolidated in one place.",
        "blog_saga_tech_title": "Tech Stack Decisions",
        "blog_saga_tech_grpc_h3": "gRPC: Contract-First Performance",
        "blog_saga_tech_grpc_p1": "Internal communication is based on <strong>gRPC</strong> and <strong>Protocol Buffers</strong>. Compared to REST/JSON, gRPC offers binary serialization and strong typing.",
        "blog_saga_tech_redis_h3": "Redis: The Idempotency Shield",
        "blog_saga_tech_redis_p1": "To achieve 'exactly-once' semantics, each step is protected by an <strong>Idempotency Layer</strong>. Redis acts as a distributed lock, preventing a retry from processing the same payment twice.",
        "blog_saga_challenge_title": "Challenges & Lessons: The Art of Rollback",
        "blog_saga_challenge_p1": "The biggest challenge was handling <strong>Compensating Transactions</strong>. If a step fails, the Orchestrator must trigger rollbacks in <strong>LIFO (Last-In, First-Out)</strong> order.",
        "blog_saga_flow_title": "Transaction Flow",
        "blog_saga_final_title": "Final Thoughts",
        "blog_saga_final_p1": "Building this Saga Orchestrator reinforced a key backend engineering principle: <strong>Consistency is not a given; it's a design decision.</strong>",
        "blog_back": "Back to Portfolio"
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
        "sect_expertise_sub": "Excelencia en ingeniería a lo largo del stack backend — desde diseño de sistemas hasta observabilidad en producción.",
        "exp_system_design": "Diseño de Sistemas",
        "exp_system_design_desc": "Microservicios, Arquitectura Orientada a Eventos, CQRS.",
        "exp_golang": "Experto en Golang",
        "exp_golang_desc": "Patrones de concurrencia, optimización de rendimiento, gestión de memoria.",
        "exp_infra": "Infraestrutura",
        "exp_infra_desc": "AWS (EC2, ECS, Lambda), GCP, Docker, Flujos CI/CD.",
        "exp_data": "Consistencia de Datos",
        "exp_data_desc": "Transacciones Distribuidas (Saga), PostgreSQL, Redis, RabbitMQ.",
        "sect_experience": "Trayectoria Profesional",
        "eyebrow_experience": "Trayectoria Profesional",
        "sect_experience_sub": "Un historial de ingeniería de alto impacto a escala — desde fintech hasta logística.",
        "role_mercadolibre": "Senior Software Engineer",
        "desc_mercadolibre": "Optimización crítica en sistemas de pagos de alto volumen ($400M MXN diarios). Reduje el tiempo de ejecución en un <strong>75%</strong> y mejoré la observabilidad de transacciones distribuidas.",
        "role_deuna": "Líder Técnico",
        "desc_deuna": "Lideré la implementación de pagos asíncronos y secuenciales para asegurar consistencia. Resolví integraciones críticas con Apple Pay y Kushki, y automaticé entornos de desarrollo con Docker.",
        "role_99_lead": "Líder Técnico",
        "desc_99_lead": "Gestión estratégica y crecimiento del equipo técnico. Diseño de arquitectura en GCP enfocada en escalabilidad logística.",
        "role_99_senior": "Senior Software Engineer",
        "desc_99_senior": "Desarrollo de servicios core para logística de última milla. Implementación de microservicios robustos en Go.",
        "sect_projects": "Arquitectura y Proyectos",
        "eyebrow_projects": "Trabajo Selecto",
        "sect_projects_sub": "Implementaciones de referencia y resoluciones de problemas complejos a escala de producción.",
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
        "eyebrow_philosophy": "Principios de Diseño",
        "sect_philosophy_sub": "Los valores y principios que guían cada decisión técnica que tomo.",
        "philo_simple_title": "Simplicidad sobre Complejidad",
        "philo_simple_desc": "Escribir código fácil de leer, probar y mantener es más difícil que escribir código complejo. Busco la simplicidad elegante.",
        "philo_scale_title": "Construido para Escalar",
        "philo_scale_desc": "Los sistemas deben diseñarse para manejar el crecimiento con gracia. Me enfoco en arquitecturas stateless e idempotencia.",
        "philo_mentor_title": "Mentoría y Cultura",
        "philo_mentor_desc": "La tecnología es construida por personas. Creo en fomentar una cultura de intercambio de conocimientos y seguridad psicológica.",
        "badge_current": "Actual",
        "ach_mercadolibre": "Reducción de latencia de pagos en un <strong>75%</strong> sobre un volumen de $400M MXN/día",
        "ach_deuna": "Integración de <strong>Apple Pay & Kushki</strong> con estrategia de despliegue sin tiempo de inactividad",
        "ach_99_lead": "Escalé el equipo de ingeniería y arquitectura GCP para soportar <strong>logística de última milla</strong> a escala nacional",
        "ach_99_senior": "Construí <strong>microservicios gRPC</strong> para enrutamiento logístico en tiempo real con miles de entregas diarias",
        "footer_desc": "Ingeniero de Software Senior enfocado en sistemas distribuidos y arquitecturas de alta concurrencia.",
        "footer_links": "Enlaces Rápidos",
        "footer_social": "Conectar",
        "footer_copy": "&copy; 2026 Juan Carlos Garcia. Reservados todos los derechos.",
        "blog_saga_title": "Dominando la Consistencia Distribuida: Construyendo un Orquestador de Sagas en Go",
        "blog_saga_date": "Febrero 2026",
        "blog_saga_read": "8 min de lectura",
        "blog_saga_prob_title": "El Problema: Cuando ACID No es Suficiente",
        "blog_saga_prob_p1": "En el mundo de las aplicaciones monolíticas, mantener la consistencia de los datos es sencillo: confiamos en las transacciones ACID. Sin embargo, al movernos a <strong>Microservicios</strong>, la 'T' de ACID (Transacciones) se convierte en una pesadilla distribuida.",
        "blog_saga_prob_p2": "Imagina un flujo de e-commerce:",
        "blog_saga_prob_li1": "<strong>Order Service</strong> crea una orden.",
        "blog_saga_prob_li2": "<strong>Inventory Service</strong> reserva el stock.",
        "blog_saga_prob_li3": "<strong>Payment Service</strong> realiza el cobro al cliente.",
        "blog_saga_prob_p3": "Si el pago falla, pero el stock ya ha sido reservado, nos enfrentamos a una 'Reserva Zombie'. El tradicional <strong>Two-Phase Commit (2PC)</strong> es demasiado lento y crea un acoplamiento fuerte, lo que lo hace inadecuado para entornos de nube de gran escala.",
        "blog_saga_sol_title": "La Solución: El Patrón Saga",
        "blog_saga_sol_p1": "Para solucionar esto, implementé el <strong>Saga Pattern</strong>. Una Saga es una secuencia de transacciones locales. Cada paso tiene una <strong>Transacción de Compensación</strong> correspondiente para deshacer los cambios si un paso posterior falla.",
        "blog_saga_sol_h3": "¿Por qué Orquestación sobre Coreografía?",
        "blog_saga_sol_p2": "Si bien la Coreografía (basada en eventos) es altamente desacoplada, puede llevar a 'Flujos Spaghetti' donde rastrear el estado de una transacción se vuelve casi imposible. Elegí <strong>Orquestación</strong>:",
        "blog_saga_sol_li1": "<strong>Lógica centralizada</strong>: Más fácil de mantener y razonar sobre flujos de negocio complejos.",
        "blog_saga_sol_li2": "<strong>Visibilidad del estado</strong>: El Orquestador sabe exactamente dónde está la transacción en cualquier momento.",
        "blog_saga_sol_li3": "<strong>Debugging simplificado</strong>: El manejo de errores está consolidado en un solo lugar.",
        "blog_saga_tech_title": "Decisiones del Tech Stack",
        "blog_saga_tech_grpc_h3": "gRPC: Rendimiento Contract-First",
        "blog_saga_tech_grpc_p1": "La comunicación interna se basa en <strong>gRPC</strong> y <strong>Protocol Buffers</strong>. Comparado con REST/JSON, gRPC ofrece serialización binaria y un tipado fuerte.",
        "blog_saga_tech_redis_h3": "Redis: El Escudo de Idempotencia",
        "blog_saga_tech_redis_p1": "Para lograr semántica de 'exactamente una vez', cada paso está protegido por una <strong>Capa de Idempotencia</strong>. Redis actúa como un bloqueo distribuido, evitando que un reintento procese el mismo pago dos veces.",
        "blog_saga_challenge_title": "Retos y Lecciones: El Arte del Rollback",
        "blog_saga_challenge_p1": "El mayor desafío fue manejar las <strong>Transacciones de Compensación</strong>. Si un paso falla, el Orquestador debe activar los rollbacks en orden <strong>LIFO (Last-In, First-Out)</strong>.",
        "blog_saga_flow_title": "Flujo de Transacción",
        "blog_saga_final_title": "Reflexiones Finales",
        "blog_saga_final_p1": "Construir este Orquestador de Sagas reforzó un principio clave de la ingeniería de backend: <strong>La consistencia no es algo dado; es una decisión de diseño.</strong>",
        "blog_back": "Volver al Portafolio"
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
