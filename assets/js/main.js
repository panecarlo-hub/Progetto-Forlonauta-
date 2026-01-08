// ================================================================
// FORLONAUTA - GIAN LUCA FORLONI
// Main JavaScript File
// ================================================================

document.addEventListener('DOMContentLoaded', function() {

    // ================================================================
    // MOBILE NAVIGATION
    // ================================================================

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnToggle = navToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });

    // ================================================================
    // SMOOTH SCROLL & ACTIVE LINK
    // ================================================================

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active section in navigation
    const sections = document.querySelectorAll('section[id]');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // ================================================================
    // FAQ ACCORDION
    // ================================================================

    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const answer = this.nextElementSibling;

            // Close all other FAQs
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.style.maxHeight = '0';
                }
            });

            // Toggle current FAQ
            this.setAttribute('aria-expanded', !isExpanded);

            if (!isExpanded) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });

    // ================================================================
    // FORM VALIDATION & SUBMISSION
    // ================================================================

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const oggetto = document.getElementById('oggetto');
        const messaggio = document.getElementById('messaggio');

        // Real-time validation
        nome.addEventListener('blur', () => validateField(nome, 'nomeError', 'Inserisci il tuo nome'));
        email.addEventListener('blur', () => validateEmail());
        oggetto.addEventListener('blur', () => validateField(oggetto, 'oggettoError', 'Seleziona un oggetto'));
        messaggio.addEventListener('blur', () => validateField(messaggio, 'messaggioError', 'Inserisci un messaggio'));

        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate all fields
            const isNomeValid = validateField(nome, 'nomeError', 'Inserisci il tuo nome');
            const isEmailValid = validateEmail();
            const isOggettoValid = validateField(oggetto, 'oggettoError', 'Seleziona un oggetto');
            const isMessaggioValid = validateField(messaggio, 'messaggioError', 'Inserisci un messaggio');

            if (isNomeValid && isEmailValid && isOggettoValid && isMessaggioValid) {
                // Get form values
                const nomeValue = nome.value.trim();
                const emailValue = email.value.trim();
                const oggettoValue = oggetto.options[oggetto.selectedIndex].text;
                const messaggioValue = messaggio.value.trim();

                // Create mailto link
                const subject = `${oggettoValue} - ${nomeValue}`;
                const body = `Nome: ${nomeValue}%0D%0AEmail: ${emailValue}%0D%0AOggetto: ${oggettoValue}%0D%0A%0D%0AMessaggio:%0D%0A${encodeURIComponent(messaggioValue)}`;
                const mailtoLink = `mailto:info@gianlucaforloni.com?subject=${encodeURIComponent(subject)}&body=${body}`;

                // Open email client
                window.location.href = mailtoLink;

                // Show success message
                showFormMessage('Apertura del client email in corso...', 'success');

                // Reset form after a delay
                setTimeout(() => {
                    contactForm.reset();
                    clearAllErrors();
                }, 2000);
            } else {
                showFormMessage('Compila tutti i campi richiesti correttamente.', 'error');
            }
        });
    }

    // Validation helper functions
    function validateField(field, errorId, errorMessage) {
        const errorElement = document.getElementById(errorId);
        const value = field.value.trim();

        if (value === '' || (field.tagName === 'SELECT' && value === '')) {
            showError(errorElement, errorMessage);
            field.style.borderColor = '#DC2626';
            return false;
        } else {
            clearError(errorElement);
            field.style.borderColor = '#4A90E2';
            return true;
        }
    }

    function validateEmail() {
        const emailField = document.getElementById('email');
        const errorElement = document.getElementById('emailError');
        const emailValue = emailField.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === '') {
            showError(errorElement, 'Inserisci la tua email');
            emailField.style.borderColor = '#DC2626';
            return false;
        } else if (!emailRegex.test(emailValue)) {
            showError(errorElement, 'Inserisci un\'email valida');
            emailField.style.borderColor = '#DC2626';
            return false;
        } else {
            clearError(errorElement);
            emailField.style.borderColor = '#4A90E2';
            return true;
        }
    }

    function showError(element, message) {
        element.textContent = message;
        element.style.display = 'block';
    }

    function clearError(element) {
        element.textContent = '';
        element.style.display = 'none';
    }

    function clearAllErrors() {
        const allFields = contactForm.querySelectorAll('input, select, textarea');
        allFields.forEach(field => {
            field.style.borderColor = '#E5E7EB';
        });

        const errorElements = contactForm.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            clearError(element);
        });
    }

    function showFormMessage(message, type) {
        // Create message element if it doesn't exist
        let messageElement = document.querySelector('.form-message');

        if (!messageElement) {
            messageElement = document.createElement('div');
            messageElement.className = 'form-message';
            contactForm.insertBefore(messageElement, contactForm.firstChild);
        }

        messageElement.textContent = message;
        messageElement.style.padding = '16px';
        messageElement.style.borderRadius = '6px';
        messageElement.style.marginBottom = '20px';
        messageElement.style.fontWeight = '500';

        if (type === 'success') {
            messageElement.style.backgroundColor = '#D1FAE5';
            messageElement.style.color = '#065F46';
            messageElement.style.border = '2px solid #10B981';
        } else {
            messageElement.style.backgroundColor = '#FEE2E2';
            messageElement.style.color = '#991B1B';
            messageElement.style.border = '2px solid #DC2626';
        }

        // Remove message after 5 seconds
        setTimeout(() => {
            if (messageElement && messageElement.parentNode) {
                messageElement.remove();
            }
        }, 5000);
    }

    // ================================================================
    // SCROLL ANIMATIONS
    // ================================================================

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.card, .step, .pillar-card, .timeline-item, .case-card, .siti-card');

    animatedElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });

    // ================================================================
    // NAVBAR SHADOW ON SCROLL
    // ================================================================

    const navbar = document.getElementById('navbar');

    function handleNavbarScroll() {
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
        }
    }

    window.addEventListener('scroll', handleNavbarScroll);

    // ================================================================
    // PREVENT WIDOW WORDS IN TITLES (Typography enhancement)
    // ================================================================

    function preventWidows() {
        const titles = document.querySelectorAll('h1, h2, h3, .hero-subtitle');

        titles.forEach(title => {
            const text = title.innerHTML;
            const words = text.split(' ');

            if (words.length > 2) {
                words[words.length - 2] = words[words.length - 2] + '&nbsp;';
                title.innerHTML = words.join(' ');
            }
        });
    }

    preventWidows();

    // ================================================================
    // PERFORMANCE: Lazy load images when implemented
    // ================================================================

    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    // ================================================================
    // ANIMATED COUNTERS (Hero Stats)
    // ================================================================

    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = Math.floor(target);
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Trigger counters when hero stats are visible
    const heroStats = document.querySelectorAll('.hero-stat-number');
    if (heroStats.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    animateCounter(entry.target, target);
                    statsObserver.unobserve(entry.target); // Animate only once
                }
            });
        }, { threshold: 0.5 });

        heroStats.forEach(stat => statsObserver.observe(stat));
    }

    // ================================================================
    // NEWSLETTER FORM HANDLING
    // ================================================================

    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();

            // Simple validation
            if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                // In a real scenario, you would send this to a backend
                // For now, show success message
                const button = this.querySelector('button');
                const originalText = button.textContent;

                button.textContent = '✓ Iscritto!';
                button.style.backgroundColor = '#10B981';
                button.disabled = true;

                // Reset after 3 seconds
                setTimeout(() => {
                    emailInput.value = '';
                    button.textContent = originalText;
                    button.style.backgroundColor = '';
                    button.disabled = false;
                }, 3000);

                // Console log for development
                console.log('Newsletter signup:', email);
            } else {
                // Show error
                emailInput.style.borderColor = '#DC2626';
                setTimeout(() => {
                    emailInput.style.borderColor = '';
                }, 2000);
            }
        });
    }

    // ================================================================
    // WHATSAPP BUTTON TOOLTIP
    // ================================================================

    const whatsappButton = document.querySelector('.whatsapp-float');
    if (whatsappButton) {
        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'whatsapp-tooltip';
        tooltip.textContent = 'Scrivimi su WhatsApp';
        tooltip.style.cssText = `
            position: absolute;
            right: 70px;
            top: 50%;
            transform: translateY(-50%);
            background-color: #1F2937;
            color: #FFFFFF;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 0.875rem;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: opacity 300ms ease;
        `;

        whatsappButton.style.position = 'relative';
        whatsappButton.appendChild(tooltip);

        whatsappButton.addEventListener('mouseenter', () => {
            tooltip.style.opacity = '1';
        });

        whatsappButton.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
    }

    // ================================================================
    // TESTIMONIALS CARD CLICK TRACKING
    // ================================================================

    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // ================================================================
    // SMOOTH REVEAL FOR NEW SECTIONS
    // ================================================================

    const revealElements = document.querySelectorAll('.testimonial-card, .floating-badge, .whatsapp-float');
    revealElements.forEach(element => {
        if (!element.classList.contains('fade-in')) {
            element.classList.add('fade-in');
            observer.observe(element);
        }
    });

    // ================================================================
    // CONSOLE MESSAGE
    // ================================================================

    console.log('%c👋 Ciao! Questo sito è stato realizzato da Gian Luca Forloni', 'font-size: 16px; font-weight: bold; color: #4A90E2;');
    console.log('%cSe stai cercando un consulente per i tuoi progetti digitali, parliamone!', 'font-size: 14px; color: #6B7280;');

});

// ================================================================
// UTILITY: Detect if user prefers reduced motion
// ================================================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable smooth scrolling
    document.documentElement.style.scrollBehavior = 'auto';
}
