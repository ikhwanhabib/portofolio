// Smooth scrolling untuk link navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil nilai dari form
    const inputs = this.querySelectorAll('input, textarea');
    const formData = {};
    
    inputs.forEach(input => {
        if (input.value.trim() !== '') {
            formData[input.name] = input.value;
        }
    });

    // Tampilkan alert sukses
    alert('Terima kasih! Pesan Anda telah terkirim.');
    
    // Reset form
    this.reset();
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe semua service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add click event untuk buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        console.log('Button clicked!');
    });
});

// Mobile menu toggle (untuk navigasi mobile)
const menuToggle = document.createElement('button');
menuToggle.innerHTML = '☰';
menuToggle.className = 'menu-toggle';
menuToggle.style.display = 'none';

// Responsive navbar
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
    } else {
        menuToggle.style.display = 'none';
    }
});

// Log when page is loaded
window.addEventListener('load', () => {
    console.log('Website loaded successfully!');
});
