// Objeto con las variables para las tarjetasde la galería.
var dibujo = [{
    src:'/dibujos Sam/1.jpg',
    title:'Chibi princess',
    alt:'dibujo 1',
    num:'0'
},{
    src:'/dibujos Sam/2.jpg',
    title:'Thanos',
    alt:'dibujo 2',
    num:'1'
},{
    src:'/dibujos Sam/3.jpg',
    title:'Logo de Spiderman',
    alt:'dibujo 3',
    num:'2'
},{
    src:'/dibujos Sam/4.jpg',
    title:'Link, no Zelda',
    alt:'dibujo 4',
    num:'3'
},{
    src:'/dibujos Sam/5.jpg',
    title:'Panda',
    alt:'dibujo 5',
    num:'4'
},{
    src:'/dibujos Sam/6.jpg',
    title:'Coolgirl',
    alt:'dibujo 6',
    num:'5'
},{
    src:'/dibujos Sam/7.jpg',
    title:'Ironman',
    alt:'dibujo 7',
    num:'6'
},{
    src:'/dibujos Sam/8.jpg',
    title:'Chimuelo',
    alt:'dibujo 8',
    num:'7'
}];

// Imprime las tarjetas según las variables en el arreglo anterior
dibujo.forEach(dibujo => {

    var tarjeta=
    `<div class="card">
        <img class="card-img-top" src="${dibujo.src}"
            alt="${dibujo.alt}" style="width:100%">
        <div class="card-body">
            <h4 class="card-title">${dibujo.title}</h4>
        </div>
    </div>
`;

    document.write(tarjeta);
});

// Añade el modal en el documento
document.write(`
<!-- The Modal -->
<div id="modal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <span id="close" class="close">&times;</span>
        <img id="ima" src="/" alt="/">
    </div>
</div>
`);

// Obtener los elementos del documento
var ima = document.getElementById("ima");
var modal = document.getElementById("modal");
var span = document.getElementById("close");
var link_a = document.getElementsByClassName("card-img-top");
var link_b = document.getElementsByClassName("card-title");
var link_c = document.getElementsByClassName("card-body");

// Acciones que se activan al hacer click
window.onclick = function(event) {

    // Cerrar el modal clicando en la X y fuera del mismo
    if (event.target == modal) {
        modal.style.display = "none";
    }

    if (event.target == span) {
        modal.style.display = "none";
    }

    // Abrir el modal clicando en cualquier parte de la tarjeta, el foreach es para aplicarlo a todas.
    dibujo.forEach(dibujo => {
        if (event.target == link_a[dibujo.num]){
            ima.setAttribute("src", dibujo.src);
            ima.setAttribute("alt", dibujo.alt);
            modal.style.display = "block";
        }

        if (event.target == link_b[dibujo.num]){
            ima.setAttribute("src", dibujo.src);
            ima.setAttribute("alt", dibujo.alt);
            modal.style.display = "block";
        }

        if (event.target == link_c[dibujo.num]){
            ima.setAttribute("src", dibujo.src);
            ima.setAttribute("alt", dibujo.alt);
            modal.style.display = "block";
        }
    });
};