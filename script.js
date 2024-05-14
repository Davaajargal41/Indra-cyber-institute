document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
  
    menuButton.addEventListener('click', function() {
      menu.classList.toggle('open');
    });
  
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        menu.classList.remove('open');
      });
    });
  });