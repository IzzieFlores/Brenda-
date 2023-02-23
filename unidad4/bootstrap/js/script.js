// const exampleEl = document.getElementById('example')
// const popover = new bootstrap.Popover(exampleEl, options)

// const popover = new bootstrap.Popover('.example-popover', {
//     container: 'body'
//   })

// alert("hola")
// const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
// const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// let imagenes= [];
// imagenes[0] = 'img/causa_limena_31268_orig.jpg';
// imagenes[1] = 'img/descarga.jpg';
// imagenes[2] = 'img/Lomo-saltado-perudelights.jpg';
// imagenes[3] = 'img/Aji-de-Gallina-Peruano.jpeg';

// let indice = 0;

// function cambiarImg(){
//     document.slider.src= imagenes[indice];
//     if(indice<3) {
//         indice ++;
//     } else{
//         indice=0;
//     }
// }

// cambiarImg();
// setInterval(cambiarImg,3000);
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})