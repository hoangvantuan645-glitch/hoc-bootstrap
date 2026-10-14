document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const footerLinks = document.querySelectorAll('.footer-link');
  const socialLinks = document.querySelectorAll('.social-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      navLinks.forEach((item) => item.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const goToTop = (element) => {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      footerLinks.forEach((item) => item.classList.remove('active'));
      socialLinks.forEach((item) => item.classList.remove('active'));
      this.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  footerLinks.forEach(goToTop);
  socialLinks.forEach(goToTop);

  const buttons = document.querySelectorAll('.btn-primary');
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-1px)';
    });
    button.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });
});
