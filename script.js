const translations = {}; // Will be populated dynamically

document.addEventListener('DOMContentLoaded', async () => {
    // --- i18n Logic ---
    const page = document.body.dataset.page || 'index';
    let currentLang = localStorage.getItem('lang') || 'en';
    const langBtn = document.getElementById('lang-btn');
    const currentFlag = document.getElementById('current-flag');
    const langOptions = document.querySelectorAll('.lang-menu li');
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');

    const updateLanguage = (lang) => {
        const commonData = window.i18n_common || {};
        const pageData = window[`i18n_${page}`] || {};
        
        translations[lang] = {
            ...(commonData[lang] || {}),
            ...(pageData[lang] || {})
        };

        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                const translation = translations[lang][key];
                element.innerHTML = translation;
            }
        });

        // Update Button Flag
        if (currentFlag) {
            currentFlag.innerHTML = lang === 'en' ? '🇺🇸' : '🇲🇽';
        }
        
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
        currentLang = lang;
    };

    // Initialize Language
    updateLanguage(currentLang);

    // Dropdown Handler (Click on Options)
    langOptions.forEach(option => {
        option.addEventListener('click', async () => {
             const selectedLang = option.getAttribute('data-lang');
             await updateLanguage(selectedLang);
        });
    });
    
    // Mobile Touch Support for Dropdown (Toggle class)
    const langDropdown = document.querySelector('.lang-dropdown');
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            if (window.matchMedia('(hover: none)').matches) {
                 e.preventDefault();
                 langDropdown.classList.toggle('active');
            }
        });
    }

    // Mobile Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Close menu when a link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger && hamburger.classList.remove('active');
            navLinks && navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Close dropdown on click outside
    document.addEventListener('click', (e) => {
        if (langDropdown && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('active');
        }
        
        if (navLinks && navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
             hamburger.classList.remove('active');
             navLinks.classList.remove('active');
             document.body.classList.remove('no-scroll');
        }
    });

    // --- Original Scroll & Nav Logic ---

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

    const sections = document.querySelectorAll('.section, .hero');
    const observerOptions = { threshold: 0.1 };

    const sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('fade-in'); 
            observer.unobserve(entry.target);
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

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
