var dibujo = [{
    src:'1.jpg',
    title:'Chibi princess',
    alt:'dibujo 1',
    num:'0'
},{
    src:'2.jpg',
    title:'Thanos',
    alt:'dibujo 2',
    num:'1'
},{
    src:'3.jpg',
    title:'Logo de Spiderman',
    alt:'dibujo 3',
    num:'2'
},{
    src:'4.jpg',
    title:'Link, no Zelda',
    alt:'dibujo 4',
    num:'3'
},{
    src:'5.jpg',
    title:'Panda',
    alt:'dibujo 5',
    num:'4'
},{
    src:'6.jpg',
    title:'Coolgirl',
    alt:'dibujo 6',
    num:'5'
},{
    src:'7.jpg',
    title:'Ironman',
    alt:'dibujo 7',
    num:'6'
},{
    src:'8.jpg',
    title:'Chimuelo',
    alt:'dibujo 8',
    num:'7'
}];

dibujo.forEach(dibujo => {

    var tarjeta=
    `<a id="link_${dibujo.num}" class="art" style="color:black">
        <div class="card">
            <img class="card-img-top" src="/dibujos Sam/${dibujo.src}"
                alt="${dibujo.alt}" style="width:100%">
            <div class="card-body">
                <h4 class="card-title">${dibujo.title}</h4>
            </div>
        </div>
    </a>
    
    <!-- The Modal -->
    <div id="modal_${dibujo.num}" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="/dibujos Sam/${dibujo.src}" alt="${dibujo.alt}">
        </div>
    </div>
    
    <!--Script del modal ${dibujo.num} -->
    <script>

        var modal_${dibujo.num} = document.getElementById("modal_${dibujo.num}");

        var btn_${dibujo.num} = document.getElementById("link_${dibujo.num}");

        var span_${dibujo.num} = document.getElementsByClassName("close")[${dibujo.num}];

        btn_${dibujo.num}.onclick = function() {
            modal_${dibujo.num}.style.display = "block";
        }

        span_${dibujo.num}.onclick = function() {
            modal_${dibujo.num}.style.display = "none";
        }

    </script>`
;
    document.write(tarjeta);
});

var off_modals=``;

dibujo.forEach(dibujo =>{
    off_modals+=`
    if (event.target == modal_${dibujo.num}) {
        modal_${dibujo.num}.style.display = "none";
    }
    `;
});

document.write(`
<script>
window.onclick = function(event) {
    ${off_modals}
}
</script>
`);