let imagenes = [];
imagenes[0] = 'img/Sintítulo.png';
// imagenes[1] = 'img/slider2.png';
// imagenes[2] = 'img/slider3.png';
// imagenes[3] = 'img/slider4.png';
// imagenes[4] = 'img/slider5.jpg'

let indice = 0;

function cambiarImg(){
    document.slider.src= imagenes[0];
    if(indice<3) {
        indice ++;
    } else{
        indice=0;
    }
}
cambiarImg();
// setInterval(cambiarImg,3000);
// alert("hola")
