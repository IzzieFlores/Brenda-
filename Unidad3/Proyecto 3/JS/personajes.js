function linkgenerado(){
    //Generar un numero aleatorio
    let id =Math.round(Math.random() * 100);
    return`https://pokeapi.co/api/v2/pokemon/${id}`;
}

//Manipulacion al DOM = HTML
function abc(data){
    let div = $("<div></div>");

    div.addClass("card");

    let img = $("<img></img>");

    img.addClass("card-img");
    
    img.attr("src",data.sprites.other.home.front_default);

    div.append(img);


    let autor = $("<h3></h3>");

    let ap = $("<p></p>");

    // autor.attr(data.author);
    autor.addClass("card-title");
    ap.addClass("parrafo");
    
    autor.append(data.author);
    ap.append(data.species.name);
 
    div.append(autor);
    div.append(ap);
    $('#imagenes-contenedor').append(div);
}

function getPic(){
    //Consumir API
    $.ajax({ 
        type: 'GET',
        url: linkgenerado(),
        dataType: "json",
        async: true,
        success: function(data){abc(data)},
    });
}

$(document).ready(function(){
    //Bucle que imprima en la consola un texto 9 veces con el bucle for
    for (let i = 0; i < 50; i++) {
        getPic();
    }
});