// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Year for Footer
const footerYear = document.querySelector('#footer-year');
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

// Image Hover Effect for Services
const serviceImages = document.querySelectorAll('.service-item img');
serviceImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// Form Submission Message (Simulated)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual submission for now
        alert('Terima kasih! Formulir Anda telah dikirim.');
        form.reset(); // Clear the form fields
    });
}

// Toggle Dropdown for Touch Devices
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function () {
        const menu = this.querySelector('.dropdown-menu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
});

document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('mouseenter', function () {
        this.querySelector('.dropdown-menu').style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', function () {
        this.querySelector('.dropdown-menu').style.display = 'none';
    });
});
