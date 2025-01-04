function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

function closeMenu() {
    const nav = document.querySelector('nav');
    nav.classList.remove('active'); // Cierra el menú
}
