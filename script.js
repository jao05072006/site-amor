 function abrirCarta(numero){

    const titulo = document.getElementById("tituloCarta");
    const texto = document.getElementById("textoCarta");

    if(numero == 1){

        titulo.innerHTML = "Nossa primeira foto 💜";

        texto.innerHTML = `Aqui foi aonde tudo começou né, eu estava tão ansioso e tão nervosokkkkkk. Quando eu te vi chegando, com aquele sorriso lindo, eu me encantei na mesma hora, vc estava linda e tão cheirosa, mas teve algo diferente, na mesma hora eu sentir o Espirito Santo em ti, Jesus brilha em você.`;

    }

    if(numero == 2){

        titulo.innerHTML = "Foto 2💜";

        texto.innerHTML = `Aqui vai a carta da foto 2.`;

    }

    if(numero == 3){

        titulo.innerHTML = "Foto 3 💜";

        texto.innerHTML = `Aqui vai a carta da foto 3.`;

    }

    if(numero == 4){

        titulo.innerHTML = "Foto 4 💜";

        texto.innerHTML = `Aqui vai a carta da foto 4.`;

    }

    if(numero == 5){

        titulo.innerHTML = "Foto 5 💜";

        texto.innerHTML = `Aqui vai a carta da foto 5.`;

    }

    if(numero == 6){

        titulo.innerHTML = "Foto 6 💜";

        texto.innerHTML = `Aqui vai a carta da foto 6.`;

    }

    if(numero == 7){

        titulo.innerHTML = "Foto 7 💜";

        texto.innerHTML = `Aqui vai a carta da foto 7.`;

    }

    if(numero == 8){

        titulo.innerHTML = "Foto 8 💜";

        texto.innerHTML = `Aqui vai a carta da foto 8.`;

    }

    if(numero == 9){

        titulo.innerHTML = "Foto 9 💜";

        texto.innerHTML = `Aqui vai a carta da foto 9.`;

    }

    document.getElementById("carta").style.display = "flex";

}

function fecharCarta(){

    document.getElementById("carta").style.display = "none";

}
