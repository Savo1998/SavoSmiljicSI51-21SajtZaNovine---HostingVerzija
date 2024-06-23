const hamburgerMeni = document.querySelector('.hamburgerMeni');

const nevidljiviMeni = document.querySelector('.nevidljiviMeni');

hamburgerMeni.addEventListener('click', () => {
  hamburgerMeni.classList.toggle('active');
  nevidljiviMeni.classList.toggle('active');
})