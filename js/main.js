// British Education Consultants - Interactions

document.addEventListener('DOMContentLoaded', function() {
    
    // =====================================================
    // HEADER SCROLL EFFECT
    // =====================================================
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
    
    // =====================================================
    // MOBILE MENU
    // =====================================================
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('mobile-open');
            mobileToggle.classList.toggle('active');
        });
        
        // Close on link click
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('mobile-open');
                mobileToggle.classList.remove('active');
            });
        });
    }
    
    // =====================================================
    // SCROLL REVEAL ANIMATIONS
    // =====================================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Stagger children if present
                const children = entry.target.querySelectorAll('.service-item, .partner-item, .image-grid-item');
                children.forEach((child, i) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, i * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('.section-intro, .services-list, .partners-grid, .about-grid, .image-grid').forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
    
    // =====================================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // =====================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // =====================================================
    // SERVICE ITEMS HOVER EFFECT
    // =====================================================
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
    });
    
    // =====================================================
    // PARTNER ITEMS SETUP
    // =====================================================
    const partnerItems = document.querySelectorAll('.partner-item');
    
    partnerItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
    });
    
    // =====================================================
    // IMAGE GRID HOVER
    // =====================================================
    const imageItems = document.querySelectorAll('.image-grid-item');
    
    imageItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.95)';
        item.style.transition = 'all 0.5s ease';
    });
    
    // =====================================================
    // FORM VALIDATION
    // =====================================================
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        // Add focus effects
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
                if (input.value.trim()) {
                    input.parentElement.classList.add('filled');
                } else {
                    input.parentElement.classList.remove('filled');
                }
            });
        });
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let valid = true;
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    input.style.borderColor = '#c41230';
                    valid = false;
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (valid) {
                // Show success message
                const btn = form.querySelector('button[type="submit"]');
                const originalText = btn.textContent;
                btn.textContent = 'Message sent!';
                btn.style.background = '#10b981';
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    form.reset();
                }, 3000);
            }
        });
    }
    
    // =====================================================
    // BUTTON HOVER EFFECTS
    // =====================================================
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            
            if (this.querySelector('::before')) {
                this.style.setProperty('--x', x + 'px');
            }
        });
    });
    
    // =====================================================
    // PARALLAX ON HERO (subtle)
    // =====================================================
    const heroImage = document.querySelector('.hero-image-main');
    
    if (heroImage && window.innerWidth > 900) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < 600) {
                heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
            }
        }, { passive: true });
    }
    
});
