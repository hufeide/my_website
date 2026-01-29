document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const contactForm = document.querySelector('.contact-form');
    const formInputs = contactForm.querySelectorAll('input, textarea');
    const sections = document.querySelectorAll('section');

    // Mobile menu toggle
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) &&
                !navLinks.contains(event.target) &&
                navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Contact form validation
    if (contactForm) {
        const validators = {
            name: function(value) {
                return value.trim().length >= 2;
            },
            email: function(value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: function(value) {
                return value.trim().length >= 10;
            }
        };

        const errorMessages = {
            name: 'Name must be at least 2 characters',
            email: 'Please enter a valid email address',
            message: 'Message must be at least 10 characters'
        };

        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateInput(this, validators[this.name], errorMessages[this.name]);
            });

            input.addEventListener('input', function() {
                if (this.classList.contains('invalid')) {
                    validateInput(this, validators[this.name], errorMessages[this.name]);
                }
            });
        });

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let isValid = true;

            formInputs.forEach(input => {
                if (!validateInput(input, validators[input.name], errorMessages[input.name])) {
                    isValid = false;
                }
            });

            if (isValid) {
                const formData = new FormData(contactForm);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');

                console.log('Form submitted:', { name, email, message });

                alert('Thank you for your message! I\'ll get back to you soon.');
                contactForm.reset();
                formInputs.forEach(input => input.classList.remove('invalid'));
            }
        });

        function validateInput(input, validator, errorMessage) {
            const value = input.value;
            const isValid = validator(value);
            const errorElement = document.getElementById(`${input.name}-error`);

            if (!isValid && value.trim().length > 0) {
                input.classList.add('invalid');
                if (errorElement) {
                    errorElement.textContent = errorMessage;
                }
                return false;
            } else {
                input.classList.remove('invalid');
                if (errorElement) {
                    errorElement.textContent = '';
                }
                return true;
            }
        }
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        const animatedElements = section.querySelectorAll('.project-card, .skill-category, .skill-item');
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    });

    // Add smooth reveal animation to project cards and skill categories on load
    setTimeout(() => {
        document.querySelectorAll('.project-card, .skill-category').forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 300);

    // Add hover effect to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add skill bar animation on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
});