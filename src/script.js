const translations = {}; // Will be populated dynamically

document.addEventListener('DOMContentLoaded', async () => {
    // --- UI Logic ---
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    
    // Mobile Touch Support for Dropdown (Toggle class)
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

    // --- Code Block Enhancements ---
    function setupCodeBlocks() {
        const preBlocks = document.querySelectorAll('pre');
        
        preBlocks.forEach(pre => {
            // Avoid double wrapping if script runs twice
            if (pre.parentElement.classList.contains('code-block-wrapper')) return;
            if (pre.classList.contains('mermaid')) return; // Don't wrap mermaid charts

            const code = pre.querySelector('code');
            if (!code) return;

            // Create wrapper
            const wrapper = document.createElement('div');
            wrapper.className = 'code-block-wrapper';

            // Identify language
            let lang = 'code';
            const langClass = Array.from(code.classList).find(c => c.startsWith('language-'));
            if (langClass) {
                lang = langClass.replace('language-', '');
            } else if (code.className) {
                lang = code.className;
            }

            // Create header
            const header = document.createElement('div');
            header.className = 'code-header';
            header.innerHTML = `
                <div class="code-lang">
                    <i class="fas fa-code"></i>
                    <span>${lang}</span>
                </div>
                <button class="copy-btn" title="Copy to clipboard">
                    <i class="far fa-copy"></i>
                    <span>Copy</span>
                </button>
            `;

            // Setup Copy Logic
            const copyBtn = header.querySelector('.copy-btn');
            copyBtn.addEventListener('click', async () => {
                const text = code.innerText;
                try {
                    await navigator.clipboard.writeText(text);
                    
                    // Success feedback
                    copyBtn.classList.add('copied');
                    copyBtn.innerHTML = '<i class="fas fa-check"></i> <span>Copied!</span>';
                    
                    setTimeout(() => {
                        copyBtn.classList.remove('copied');
                        copyBtn.innerHTML = '<i class="far fa-copy"></i> <span>Copy</span>';
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy: ', err);
                    copyBtn.innerHTML = '<i class="fas fa-times"></i> <span>Error</span>';
                }
            });

            // Re-organize DOM
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(header);
            wrapper.appendChild(pre);
        });
    }

    // Run setup
    setupCodeBlocks();

    // ── Experience Section: Scroll-Reveal + Metric Counters ──────────
    function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

    function animateExpCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1400;
        const start = performance.now();

        function step(now) {
            const elapsed = Math.min(now - start, duration);
            const progress = easeOutQuart(elapsed / duration);
            el.textContent = Math.round(target * progress) + suffix;
            if (elapsed < duration) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    const expItems = document.querySelectorAll('.exp-reveal');
    if (expItems.length) {
        const expObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const item = entry.target;
                item.classList.add('is-visible');

                // Animate numeric counter
                item.querySelectorAll('.exp-metric-number').forEach(el => {
                    animateExpCounter(el);
                });

                // Animate progress bar fill
                item.querySelectorAll('.exp-metric-bar-fill').forEach(bar => {
                    const w = bar.dataset.width || '0';
                    // Small delay so the card animation plays first
                    setTimeout(() => { bar.style.width = w + '%'; }, 200);
                });

                expObserver.unobserve(item);
            });
        }, { threshold: 0.25 });

        expItems.forEach(item => expObserver.observe(item));
    }
});
