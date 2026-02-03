// Мобильное меню
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    if (navMenu.classList.contains('active')) {
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Закрытие меню при клике на ссылку
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Обработка формы
// const consultationForm = document.getElementById('consultationForm');

// consultationForm.addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     // В реальном проекте здесь был бы код отправки формы на сервер
//     alert('Спасибо за вашу заявку! Я свяжусь с вами в ближайшее время.');
//     consultationForm.reset();
// });

// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});