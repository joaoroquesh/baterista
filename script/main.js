

window.addEventListener('scroll', function() {
    var navbarShadow = document.querySelector('.bg-shadow');
    var scrollTop = window.scrollY;
  
    if (scrollTop <= 100) {
      var opacity = scrollTop / 500;
      navbarShadow.style.opacity = opacity;
    } else {
      navbarShadow.style.opacity = 1;
    }
  });

