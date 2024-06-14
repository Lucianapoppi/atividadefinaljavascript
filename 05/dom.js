var produtos = [{

    "idProduto": 1,
    "nome": "NEO - 1/6 SCALE COLLECTIBLE FIGURE – THE MATRIX: RESSURRECTIONS - HOT TOYS",
    "figuraDeAcao": "personagem Neo do filme Matrix",
    "figura": "Matrix Hot toys 1/6th Scale Collectible Figure Neo",
    "fabricante": "Hot Toys",
    "escala": "1/6",
    "material": "PVC",
    "alturaAproximada": "30 cm",
    "preco": "R$2569.00",
    "imagem": "prod1"
},

{
    "idProduto": 2,
    "nome": "HE-MAN AND BATTLE CAT CLASSIC DELUXE - MAQUETTE - MASTERS OF THE UNIVERSE - TWEETERHEAD",
    "figuraDeAcao": "Estátua do personagem He-Man com o Gato Guerreiro do desenho Mestres do Universo",
    "figura": "Tweeterhead DC Comics Maquette He-Man and Battle Cat Classic Deluxe",
    "fabricante": "Tweeterhead",
    "escala": "1/6",
    "material": "Polystone",
    "alturaAproximada": "59 cm",
    "preco": "R$11999,00",
    "imagem": "prod2"
},

{
    "idProduto": 3,
    "nome": "SAMURAI TAISHO DARTH VADER (VENGEFUL SPIRIT) - MEI SHO MOVIE REALIZATION - OBI-WAN KENOBI - BANDAI",
    "figuraDeAcao": "personagem Samurai Taisho Darth Vader (Vengeful Spirit) com roupa de Samurai no estilo guerreiro Japonês",
    "figura": "Obi-Wan KenobiMei Sho Movie Realization Samurai Taisho Darth Vader (Vengeful Spirit)",
    "fabricante": "Bandai",
    "escala": "1/10",
    "material": "",
    "alturaAproximada": "18 cm",
    "preco": "R$899,00",
    "imagem": "prod3"
},

{
    "idProduto": 4,
    "nome": "PACK COMPLETO ETERNALS - 1/10 BDS ART SCALE - IRON STUDIOS",
    "figuraDeAcao": "Estátuas dos personagens Ajak, Druig, Gilgamesh, Kingo, Makkari, Phastos, Sprite, Sersi, Thena e Ikaris do filme Eternos.",
    "figura": "Pack Eternals 1/10 BDS Art Scale Iron Studios",
    "fabricante": "Iron Sudios",
    "escala": "1/10",
    "material": "Polystone",
    "alturaAproximada": "20cm",
    "preco": "R$4990,00",
    "imagem": "prod4"
},

{
    "idProduto": 5,
    "nome": "HELLBOY - 1/4 LEGACY REPLICA - HELLBOY II: THE GOLDEN ARMY - IRON STUDIOS",
    "figuraDeAcao": "Estátua do personagem Hellboy do filme Hellboy 2: O Exército Dourado",
    "figura": "Hellboy II: The Golden Army Iron Studios Batman Hellboy 1/4 Legacy Replica",
    "fabricante": "Iron Studios",
    "escala": "1/4",
    "material": "Polystone",
    "alturaAproximada": "20cm",
    "preco": "R$14990,00",
    "imagem": "prod5"
},

{
    "idProduto": 6,
    "nome": "IRON MAN MARK XLIII - 1/10 ART SCALE - AVENGERS: AGE OF ULTRON",
    "figuraDeAcao": "Estátua do personagem Homem de Ferro do filme Vingadores: Era de Ultron",
    "figura": "Iron Studios Avengers: Age of Ultron 1/10 Art Scale Iron Man Mark XLIII",
    "fabricante": "Iron Studios",
    "escala": "1/10",
    "material": "Polystone",
    "alturaAproximada": "20cm",
    "preco": "R$4990,00",
    "imagem": "prod6"
},

{
    "idProduto": 7,
    "nome": "BLACK RANGER - 1/10 BDS ART SCALE - POWER RANGERS - IRON STUDIOS",
    "figuraDeAcao": "Estátua do personagem Ranger Preto do seriado dos Power Rangers",
    "figura": "Iron Studios Power Rangers 1/10 BDS Art Scale Black Ranger",
    "fabricante": "Iron Studios",
    "escala": "1/10",
    "material": "Polystone",
    "alturaAproximada": "15cm",
    "preco": "R$590,00",
    "imagem": "prod7"
},

{
    "idProduto": 8,
    "nome": "BOBA FETT - 1/12 SCALE MODEL KIT - THE MANDALORIAN",
    "figuraDeAcao": "Figura de ação do personagem Boba Fett do seriado O Mandaloriano",
    "figura": "Boba Fett - 1/12 Model Kit Grogu 1/12 Scale",
    "fabricante": "Bandai",
    "escala": "1/10",
    "material": "Polystone",
    "alturaAproximada": "16cm",
    "preco": "R$290,00",
    "imagem": "prod8"
},

{
    "idProduto": 9,
    "nome": "ULTRAMAN SUIT EVIL TIGA ACTION - FIGURE RISE STANDARD - MODEL KIT - ULTRAMAN - BANDAI",
    "figuraDeAcao": "personagem Ultraman Suit Evil Tiga Action do anime Ultraman",
    "figura": "Ultraman Figure Rise Standard Model Kit Ultraman Suit Evil Tiga Action",
    "fabricante": "Bandai",
    "escala": "1/10",
    "material": "Polystone",
    "alturaAproximada": "18cm",
    "preco": "R$990,00",
    "imagem": "prod9"
}]


var carrinho = []
let carrinhoSalvo = localStorage.getItem('carrinho');
console.log('Carrinho salvo no localStorage:', carrinhoSalvo);

let selecionandoSectionProdutos = document.querySelector(".produtos");
let selecionandoSectionCarrinho = document.querySelector(".carrinho");


function criarProdutos(array) {
    for (i = 0; i < array.length; i++) {
        let card = document.createElement("container");
        let img = document.createElement("img");
        let nome = document.createElement("p");
        let preco = document.createElement("p");
        let tamanho = document.createElement("p")
        let btnAdicionarNoCarrinho = document.createElement("button")


        img.src = `./image/${array[i].imagem}.jpg`;
        img.classList.add("imgCard");
        card.classList.add("cardProduto");
        nome.innerText = `${array[i].nome}`;
        preco.innerText = `${array[i].preco}`;
        tamanho.innerText = `Tamanho aproximado: ${array[i].alturaAproximada}`
        btnAdicionarNoCarrinho.innerText = "Adicionar No carrinho"
        btnAdicionarNoCarrinho.id = `${i}`
        btnAdicionarNoCarrinho.onclick = function (e) {
            let index = e.target.id
                adicionarNoCarrinho(array[index]);
        };
        card.appendChild(img);
        card.appendChild(nome);
        card.appendChild(tamanho)
        card.appendChild(preco);
        card.appendChild(btnAdicionarNoCarrinho)
        selecionandoSectionProdutos.appendChild(card);
    }
}

function adicionarNoCarrinho(produto) {
    carrinho.push(produto);
    console.log('Produto adicionado ao carrinho:', produto);
    console.log('Carrinho atual:', carrinho);
    var carrinhoString = JSON.stringify(carrinho);
    localStorage.setItem('carrinho', carrinhoString);
}


document.addEventListener('DOMContentLoaded', criarProdutos(produtos))

document.getElementById('filtro').addEventListener('change', function () {
    let valorFiltro = document.querySelector("#filtro").value;
    let novoOrdenamento = [];
    selecionandoSectionProdutos.innerText = "";

    if (valorFiltro == 1) {
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].fabricante == "Iron Sudios") {
                novoOrdenamento.push(produtos[i]);
            }
        }
        criarProdutos(novoOrdenamento);
    } else if (valorFiltro == 2) {
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].fabricante == "Bandai") {
                novoOrdenamento.push(produtos[i]);
            }
        }
        criarProdutos(novoOrdenamento);
    } else if (valorFiltro == 3) {
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].fabricante == "Hot Toys") {
                novoOrdenamento.push(produtos[i]);
            }
        }
        criarProdutos(novoOrdenamento);
    } else if (valorFiltro == 4) {
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].fabricante == "Tweeterhead") {
                novoOrdenamento.push(produtos[i]);
            }
        }
        criarProdutos(novoOrdenamento);
    } else {
        criarProdutos(produtos);
    }
});


document.getElementById('ordem').addEventListener('change', function () {
    let valorOrdem = document.querySelector("#ordem").value
    console.log(valorOrdem)
    let novoOrdenamento = []
    selecionandoSectionProdutos.innerText = ""

    if (valorOrdem === "asc") {
        novoOrdenamento = produtos.slice().sort((a, b) => parseFloat(a.preco.replace("R$", "").replace(",", ".")) - parseFloat(b.preco.replace("R$", "").replace(",", ".")));
        console.log(novoOrdenamento)
    } else if (valorOrdem === "desc") {
        novoOrdenamento = produtos.slice().sort((a, b) => parseFloat(b.preco.replace("R$", "").replace(",", ".")) - parseFloat(a.preco.replace("R$", "").replace(",", ".")));
        console.log(novoOrdenamento)

    }

    criarProdutos(novoOrdenamento);
});

document.getElementById('ordemTamanho').addEventListener('change', function () {
    let valorOrdem = document.querySelector("#ordemTamanho").value;
    let novoOrdenamento = [];
    selecionandoSectionProdutos.innerText = "";

    if (valorOrdem === "asc") {
        novoOrdenamento = produtos.slice().sort((a, b) => parseFloat(a.alturaAproximada) - parseFloat(b.alturaAproximada));
    } else if (valorOrdem === "desc") {
        novoOrdenamento = produtos.slice().sort((a, b) => parseFloat(b.alturaAproximada) - parseFloat(a.alturaAproximada));
    }

    criarProdutos(novoOrdenamento);
});

document.getElementById('ordemNome').addEventListener('change', function () {
    let valorOrdem = document.querySelector("#ordemNome").value;
    let novoOrdenamento = [];
    selecionandoSectionProdutos.innerText = "";

    if (valorOrdem === "asc") {
        novoOrdenamento = produtos.slice().sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (valorOrdem === "desc") {
        novoOrdenamento = produtos.slice().sort((a, b) => b.nome.localeCompare(a.nome));
    }

    criarProdutos(novoOrdenamento);
});

function mostrarProdutosLista() {
    console.log(carrinho)
}