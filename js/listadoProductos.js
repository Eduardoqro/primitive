const arrayProductos = [
  /* {
    name: "Camiseta Cobra Kai",
    img: "./assets/img/categorias/kck1.jpg",
    description:
      "Una camiseta Cobra Kai cómoda con mangas cortas y cuello redondo. ¡Perfecto para usar mientras viaja o descansando adentro!",
    price: "$125.00 MXN",
    categoria:'Ropa',
    imagenes : ['./assets/img/categorias/kck1.jpg','./assets/img/categorias/kck2.jpg','./assets/img/categorias/kck3.jpg']
  },{
    name: "Camiseta unisex Maestro Roshi de Dragon Ball",
    img: "https://i.ibb.co/HzRV5tD/maestro-Roshi.jpg",
    description: "Producto con licencia oficial de Dragon Ball.",
    price: "$125.00 MXN",
    categoria: "Ropa",
  }, */
  /* {
    name: "Iron Spiderman Model Toy",
    img: "https://i.ibb.co/rFDB1Qh/figura-spiderman-sentinel-marvel.jpg",
    description:
      "BSHM Modelo De Juguete, Modelo Avengers Iron Spider-Man, Modelo Spider-Man Superhero Model para Niños.",
    price: "$300.00 MXN",
    categoria: "Figuras",
  }, */
  /* {
    name: "Sudadera con gorro StarWars unisex",
    img: "https://i.ibb.co/VxNzhYC/categoria-ropa-opcion-2.png",
    description:
      "Una sudadera con gorro que ofrece comodidad y calidad premium",
    price: "$125.00 MXN",
    categoria: "Ropa",
  } */,
  {
    name: "Spiderman vs Venom",
    img: "https://i.ibb.co/MhnLRhm/spiderman-VSvenom.jpg",
    description: "Funko Pop Comic Moment: Marvel.",
    price: "$1,800.00 MXN",
    categoria: "Figuras",
  },
  {
    name: "Cartera Mulan",
    img: "https://i.ibb.co/LQCxbrS/Cartera-Mulan.jpg",
    description:
      "Disney Mulan Castle - Cartera con cierre alrededor.",
    price: "$600.00 MXN",
    categoria: "Accesorios",
  },
  {
    name: "Figura oficial C-3PO escala 1:6",
    img: "https://i.ibb.co/D5HqcR2/Figura-C3-PO.jpg",
    description:
      "La figura de C-3PO a escala de 6 pulgadas se detalla para parecerse al personaje de la pelicula Star Wars, con detalles de primera calidad y múltiples puntos de articulación.",
    price: "$7,589.00 MXN",
    categoria: "Figuras",
  },
  /* {
    name: 'Figura Oficial Furyu Hatsune Miku Cat Auriculares Versión 1/7 25cm (9.8")',
    img: "https://i.ibb.co/nf4LTM6/heo-hm-cehf11-1024x1024.webp",
    description: "Producto con licencia oficial de Hatsune Miku. ",
    price: "$125.00 MXN",
    categoria: "Figuras",
  }, */
  {
    name: "Wall-E y Eva",
    img: "https://i.ibb.co/wLGNhq1/Eva-Wall-e.jpg",
    description:
      "Pixar Disney Wall-E Película, Cifras de acción Wall-E y Eva, Personajes auténticos de la película, Posable y Coleccionable.",
    price: "$300.00 MXN",
    categoria: "Figuras",
  },
  {
    name: "Auriculares inalámbricos Iroman",
    img: "https://i.ibb.co/f8SP3sJ/Auriculares-IRONMAN.jpg",
    description:
      "BASEMAN Marvel Iron Man Auriculares Bluetooth V5.0, Auriculares estéreo HD, Auriculares inalámbricos con micrófono para PC, teléfono, computadora portátil, Mp3/4, Tablet, TV, PSP, iPad",
    price: "$550.00 MXN",
    categoria: "Gadgets",
  },
  {
    name: "Portalápices Darth Vader",
    img: "https://i.ibb.co/v1QRGsp/Portalapices-Darth-Vader.jpg",
    description:
      "Darth Vader - Portalápices con impresión 3D, accesorios de oficina, regalo ideal para los fans de Star Wars",
    price: "$500.00 MXN",
    categoria: "Gadgets",
  },
  {
    name: "Waflera Star Wars",
    img: "https://i.ibb.co/T4jZ0yz/Waflera-Star-Wars.jpg",
    description:
      "Máquina para hacer waffles Deluxe Millennium Falcon estándar.",
    price: "$2,200.00 MXN",
    categoria: "Gadgets",
  },
  {
    name: "Tostadora Darth Vader",
    img: "https://i.ibb.co/LdCr5dH/Waflera-Darth-Vader.jpg",
    description:
      "Lleva a Vader a tu cocina: el icónico casco de Darth Vader es una tostador de trabajo detallada. Especificaciones del producto: chips de sonido Vader y luces en una secuencia de sonido de 10 segundos al tostar.",
    price: "$1,800.00 MXN",
    categoria: "Gadgets",
  },
  /* {
    name: "Marvel Casco Iron Man",
    img: "https://i.ibb.co/jDJB13x/Casco-Ironman-Marvel.jpg",
    description:
      "Ojos de led, efectos de sonido electrónicos, placa frontal desmontable magnetizada y medida para adultos.",
    price: "$3,500.00 MXN",
    categoria: "Gadgets",
  }, */
  {
    name: "Mario Amiibo Super Smash Bros.",
    img: "https://i.ibb.co/KG1CN1T/Mario-Amiibo.jpg",
    description: "Obtén increíbles bonificaciones para los juegos con las figuras amiibo. Solo coloca un amiibo en el punto NFC de las consolas. Compatible con Nintendo Switch, New Nintendo 2DS XL, New Nintendo 3DS XL  y Wii U.",
    price: "$799.00 MXN",
    categoria: "Figuras",
  },
  /* {
    name: "Aniiii The Legend of Zelda Skyward Sword Link",
    img: "https://i.ibb.co/4Vh51Xq/figura-legend-of-zelda-link-nintendo.jpg",
    description:
      "Figura De Acción De Juguete con Accesorios Figuras De Anime Móviles Estatua Personajes Coleccionables Personajes De Juegos De Dibujos Animados Muñecas.",
    price: "$400.00 MXN",
    categoria: "Figuras",
  }, */
  {
    name: "Cartera Super Nintendo caballero",
    img: "https://i.ibb.co/j4v7FXd/Cartera-Nintendo.jpg",
    description: "Cartera para Hombre Edición Especial Super Nintendo.",
    price: "$270.00 MXN",
    categoria: "Accesorios",
  },
  {
    name: "Gorra Kirby",
    img: "https://i.ibb.co/zf4sYLX/kirby1.png",
    description:
      "Diseño personalizado: una imagen bordada de Kirby durmiendo decora este sombrero mientras que un par de burbujas flota sobre él.",
    price: "$399.00 MXN",
    categoria: "Accesorios",
  },
  {
    name: "Calcetines Disney",
    img: "https://i.ibb.co/zHCfJnv/Calcetines-Disney.jpg",
    description: "Personajes clásicos de Disney, Paquetes surtidos.",
    price: "$370.00 MXN",
    categoria: "Accesorios",
  },
  /* {
    name: "Soporte Base De Mickey Mouse Para Google Home Mini",
    img: "https://i.ibb.co/ftjctpf/Soporte-Base-Mickey-Mouse-Googe-Home.jpg",
    description:
      "Con sistema de audio multi-room, cámara, pantalla táctil y bluetooth.",
    price: "$370.00 MXN",
    categoria: "Accesorios",
  }, */
  {
    name: "Dragon Ball Super",
    img: "https://i.ibb.co/K0XcVBt/Dragon-Ball-Super.jpg",
    description: "La aventura de Goku del manga clásico volumen 15.",
    price: "$600.00 MXN",
    categoria: "Comic",
  },
  {
    name: "Venom: Protector Letal - Marvel",
    img: "https://i.ibb.co/JdWJwxd/Venom-Protector-Letal.jpg",
    description: "Idioma: Español, Pasta blanda: 144 páginas.",
    price: "$300.00 MXN",
    categoria: "Comic",
  },
  {
    name: "Cómic The Superior Spider-Man",
    img: "https://i.ibb.co/stxGZtW/1.png",
    description: "Después de años de ser derrotado a manos del trepamuros, OTTO OCTAVIUS ha conseguido lo impensable… ¡PONER SU MENTE EN EL CUERPO DE PETER PARKER!",
    price: "$349.00 MXN",
    categoria: "Comic",
  },
  {
    name: "Fortnite x Marvel: Conflicto Cero N.2",
    img: "https://i.ibb.co/k0rcrtF/Fortinite-Cero.jpg",
    description: "Pasta blanda 32 páginas, edad de lectura a partir de 7 años.",
    price: "$70.00 MXN",
    categoria: "Comic",
    
  },
  /* {
    name: "Secret Wars Marvel Delux",
    img: "https://i.ibb.co/QmCzKTW/secret-wars-comic-marvel.jpg",
    description: "Idioma español y número de páginas 304.",
    price: "$370.00 MXN",
    categoria: "Comic",
  }, */
  /* {
    name: "Camiseta de anime Komi Cant",
    img: "https://i.ibb.co/TPKMbsf/playera-komi-san-acidpop.jpg",
    description:
      "Camiseta de anime, camiseta de moda para cosplay, camiseta casual única.",
    price: "$370.00 MXN",
    categoria: "Ropa",
  },
  {
    name: "Playera Anime Manga Corta",
    img: "https://i.ibb.co/bRVrRFg/playera-fullmetalalchemist-acidpop.jpg",
    description: "Playeras Frikis Alchemist Manga Corta.",
    price: "$400.00 MXN",
    categoria: "Ropa",
  }, */
  {
    name: "Sudadera dragomzitos",
    img: "https://i.ibb.co/GsMCvQK/Sudadera-Dragomzitos.jpg",
    description: "Sudaderas dragoncitos dog perro.",
    price: "$400.00 MXN",
    categoria: "Productos",
  },
  {
    name: "Pulsera leyenda zelda",
    img: "https://i.ibb.co/31Tdtqp/Pulsera-Zelda.jpg",
    description: "LeyendaDeZelda,Link,Nintendo,Videojuego.",
    price: "$239.00 MXN",
    categoria: "Productos",
  },
  {
    name: "Mochila star wars baby Yoda",
    img: "https://i.ibb.co/6W5z8qX/Mochila-Baby-Yoda.jpg",
    description: "Mochila Back Star Wars Mandalorean Con Lonchera Baby Yoda.",
    price: "$600.00 MXN",
    categoria: "Productos",
  },
  {
    name: "Mochila Star Wars Loungefly",
    img: "https://i.ibb.co/k47Fgb4/Mochila-Loungefly.jpg",
    description: "Mochila Star Wars con material Nailon.",
    price: "$890.00 MXN",
    categoria: "Productos",
  },
  /* {
    name: "Suéter Star Wars ",
    img: "https://i.ibb.co/25fxDPq/sueter-starwars-stormtrooper-darthvader-1.jpg",
    description: "Suéter navideño unisex ugly.",
    price: "$700.00 MXN",
    categoria: "Productos",
  }, */
];

function cargarProductos(filtro) {
  let main = document.getElementById("main");
  main.innerHTML =
    /*'<br>'+
  '<h1 class="" id="title">Productos</h1>' +
  '<br>' +*/
    '<section class="container mx-auto mt-4" id="section">' +
    '<div class="row card-group" id="list-items"></div>' +
  '</section>' +
  '<br />';
  arrayProductos.filter(i=> i.categoria===filtro).forEach((i)=>{
    addItem(i);
  });

  let elementos = document.getElementsByClassName("imagenProducto");
  for(let e of elementos){
    e.addEventListener("click", function (){verDetalle(arrayProductos.filter(a=> a.img===e.attributes["src"].value))});
  }
}

function addItem(item) {
  const itemHTML =
    '<div class="col-md-4 col-sm-6 col-xs-12" id="card" style=" padding-bottom:20px;">'+
      '<div class="card h-100">' +
        '<div class="card-header">'+
            '<img class="card-img imagenProducto" src="' + item.img + '" alt="' + item.name +'" style="height: 322px;">'+
        '</div>' +
        '<div class="card-body">'+
          '<h4 class="card-title">'+ item.name +'</h4>'+
          '<p class="card-text">'+ item.description + '</p>'+
        '</div>'+
        '<div class="card-footer buy d-flex justify-content-between align-items-center">'+
          '<div class="price text-"><h5 class="mt-4">${item.price}</h5></div>'+
          '<a href="#" class="btn btncart btn-danger"><i class="fas fa-shopping-cart"></i></a>'+
        '</div>'+
      '</div>'+
    '</div>';

  document.getElementById("list-items").innerHTML += itemHTML;
}
