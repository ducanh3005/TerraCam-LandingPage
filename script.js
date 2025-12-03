// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

function initRevealAnimation(selector, initialTransform) {
    document.querySelectorAll(selector).forEach(el => {
        el.style.opacity = '0';
        el.style.transform = initialTransform;
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Observe cards/sections for reveal
initRevealAnimation('.feature-card', 'translateY(30px)');
initRevealAnimation('.why-item', 'translateY(30px)');
initRevealAnimation('.review-card', 'translateY(30px)');
initRevealAnimation('.screenshot-card', 'translateY(30px)');
initRevealAnimation('.global-camera-card', 'translateY(20px)');

// Showcase items animation
const showcaseItems = document.querySelectorAll('.showcase-item');
let currentIndex = 0;

function rotateShowcase() {
    showcaseItems.forEach((item, index) => {
        item.classList.remove('active');
    });
    
    showcaseItems[currentIndex].classList.add('active');
    currentIndex = (currentIndex + 1) % showcaseItems.length;
}

// Start rotation after page load
setTimeout(() => {
    setInterval(rotateShowcase, 3000);
}, 1000);

// Phone mockup parallax effect
const phoneMockup = document.querySelector('.phone-mockup');
if (phoneMockup) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.15;
        phoneMockup.style.transform = `translate3d(0, ${rate}px, 0)`;
    });
}

// Global cameras auto-scroll
const globalStrip = document.querySelector('.global-cameras');
if (globalStrip) {
    let isHoveringStrip = false;
    let scrollPosition = 0;

    const maxScroll = () => globalStrip.scrollWidth - globalStrip.clientWidth;

    function autoScrollGlobalStrip() {
        if (!isHoveringStrip && maxScroll() > 0) {
            scrollPosition += 0.4;
            if (scrollPosition >= maxScroll()) {
                scrollPosition = 0;
            }
            globalStrip.scrollLeft = scrollPosition;
        }
        requestAnimationFrame(autoScrollGlobalStrip);
    }

    globalStrip.addEventListener('mouseenter', () => {
        isHoveringStrip = true;
    });

    globalStrip.addEventListener('mouseleave', () => {
        isHoveringStrip = false;
    });

    requestAnimationFrame(autoScrollGlobalStrip);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

