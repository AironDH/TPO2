// Imprime el Header, se le debe llamar con un onload para poder incluir en la función el string del subtítulo
function f_header(slogan) {
    var header =`<header>
                    <img class="logo" src="/logo/logo.png" alt="Logo">

                    <div class="blog-name">
                        <h1>
                            Cavilaciones
                        </h1>

                        <p class="slogan">
                            ${slogan}
                        </p>
                    </div>
                </header>`;

    return document.write(header);
  }