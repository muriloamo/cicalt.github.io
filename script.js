document.addEventListener("DOMContentLoaded", function() {
    const adicionarNoticiaBtn = document.getElementById("adicionarNoticiaBtn");
    const mostrarImagemInput = document.getElementById("mostrarImagem");
    const mostrarLinkInput = document.getElementById("mostrarLink");
    const mostrarMusicaInput = document.getElementById("mostrarMusica");
    const mostrarVideoInput = document.getElementById("mostrarVideo");
    const imagemInput = document.getElementById("imagem");
    const linkInput = document.getElementById("link");
    const musicaInput = document.getElementById("musica");
    const videoInput = document.getElementById("video");

    mostrarImagemInput.addEventListener("change", function() {
        imagemInput.disabled = !this.checked;
    });

    mostrarLinkInput.addEventListener("change", function() {
        linkInput.disabled = !this.checked;
    });

    mostrarMusicaInput.addEventListener("change", function() {
        musicaInput.disabled = !this.checked;
    });

    mostrarVideoInput.addEventListener("change", function() {
        videoInput.disabled = !this.checked;
    });

    adicionarNoticiaBtn.addEventListener("click", adicionarNoticia);
});

function adicionarNoticia() {
    let titulo = document.getElementById("titulo").value;
    let mostrarImagem = document.getElementById("mostrarImagem").checked;
    let imagem = document.getElementById("imagem").value;
    let texto = document.getElementById("texto").value;
    let mostrarLink = document.getElementById("mostrarLink").checked;
    let link = document.getElementById("link").value;
    let mostrarMusica = document.getElementById("mostrarMusica").checked;
    let musica = document.getElementById("musica").value;
    let mostrarVideo = document.getElementById("mostrarVideo").checked;
    let video = document.getElementById("video").value;

    if (titulo === "" || texto === "") {
        alert("Título e texto são obrigatórios!");
        return;
    }

    let noticiaHTML = `<article class="noticia">
                            <h2>${titulo}</h2>`;
    
    if (mostrarImagem && imagem !== "") {
        noticiaHTML += `<img src="${imagem}" alt="Imagem da notícia">`;
    }
                        
    noticiaHTML += `<p>${texto}</p>`;

    if (mostrarLink && link !== "") {
        noticiaHTML += `<a href="${link}">Leia mais</a>`;
    }

    if (mostrarMusica && musica !== "") {
        noticiaHTML += `<audio src="${musica}" controls></audio>`;
    }

    if (mostrarVideo && video !== "") {
        noticiaHTML += `<video src="${video}" controls width="320" height="240"></video>`;
    }

    noticiaHTML += `</article>`;

    document.getElementById("noticias").innerHTML += noticiaHTML;

    document.getElementById("titulo").value = "";
    document.getElementById("imagem").value = "";
    document.getElementById("mostrarImagem").checked = false;
    document.getElementById("texto").value = "";
    document.getElementById("link").value = "";
    document.getElementById("mostrarLink").checked = false;
    document.getElementById("musica").value = "";
    document.getElementById("mostrarMusica").checked = false;
    document.getElementById("video").value = "";
    document.getElementById("mostrarVideo").checked = false;

    document.getElementById("imagem").disabled = true;
    document.getElementById("link").disabled = true;
    document.getElementById("musica").disabled = true;
    document.getElementById("video").disabled = true;
}