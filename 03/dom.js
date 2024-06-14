const imagens = [
    "babyYoda.jpg",
    "DarthVader.jpg",
    "nave.jpg",
    "stromtrooper.jpg"
];


let indiceAtual = 0;


function abrirImagem(imagem) {
    const section = document.querySelector(".sectionImage");

    let imagemGrande = `
    <div id="modal" class="modal">
        <img class="close" src="./image/sabreDeLuzFecha_.png" alt="Fechar"onclick="fecharModal()">
        <img id="modalImage" class="modal-content" src="./image/${imagem}">
        <button id="prevBtn" class="prev" onclick="imagemAnterior()"><img src="./image/sabre esquerda.png" alt="Saber de Luz Anterior"></button>
        <button id="nextBtn" class="next" onclick="proximaImagem()"><img src="./image/sabre direita.png" alt="Saber de Luz Próximo"></button>
    </div>`

    section.innerHTML = imagemGrande;
}

function proximaImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    atualizarImagem();
}


function imagemAnterior() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    atualizarImagem();
}


function atualizarImagem() {
    const modalImage = document.getElementById("modalImage");
    modalImage.src = "./image/" + imagens[indiceAtual];
}


function fecharModal() {
    const section = document.querySelector(".sectionImage");
    section.innerHTML = "";
}