//HAMBURGER MENU
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
  
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('show'); // Alterna la clase 'show' para mostrar/ocultar el menú
    });
  });
  


//CARRUSEL DEL INDEX
document.addEventListener('DOMContentLoaded', () => {
  const myCarouselElement = document.querySelector('#carouselIndex');
  if (myCarouselElement) {
      const carousel = new bootstrap.Carousel(myCarouselElement, {
          interval: 2000,
          touch: false
      });
  }
});

/*JAVASCRIPT DE LA PAGINA GALERIA*/
const imgList = document.querySelectorAll('.img')
const lightbox = document.querySelector('.lightbox')
const grande = document.querySelector('.big-img')
const title = document.querySelector('#title')
const caption = document.querySelector('#caption')
const closeBtn = document.querySelector('.close')

imgList.forEach(( eachImg , index ) => {
    imgList[index].addEventListener('click',() => {
        lightbox.classList.add('isActive');
        grande.src = imgList[index].src;
        title.innerHTML = eachImg.getAttribute ('data-title');
        caption.innerHTML = eachImg.getAttribute('data-caption');
        });
});

closeBtn.addEventListener('click',() => {
    lightbox.classList.remove('isActive')  
});

