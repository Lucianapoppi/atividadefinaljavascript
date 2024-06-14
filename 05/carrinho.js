
let selecionandoSectionProdutos = document.querySelector(".produtos");
let selecionandoSectionCarrinho = document.querySelector(".carrinho");
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function mostrarCarrinho() {
    selecionandoSectionCarrinho.innerHTML = "";
    if (carrinho) {
        for (let i = 0; i < carrinho.length; i++) {
            let divProdutoCarrinho = document.createElement("div");
            divProdutoCarrinho.classList.add('produtoCarrinho');

            let imagem = document.createElement("img");
            imagem.classList.add('imagemCarrinho');
            imagem.src = `./image/${carrinho[i].imagem}.jpg`;

            let dadosProduto = document.createElement('div');
            dadosProduto.classList.add('dadosProduto');

            let nomeProduto = document.createElement('p');
            nomeProduto.classList.add('nomeProduto');
            nomeProduto.innerText = carrinho[i].nome;

            let precoProduto = document.createElement('p');
            precoProduto.classList.add('precoProduto');
            precoProduto.innerText = carrinho[i].preco;

            let removerProdutoBtn = document.createElement('button');
            removerProdutoBtn.innerText = 'Remover';
            removerProdutoBtn.addEventListener('click', function () {
                removerProduto(i);
            });

            dadosProduto.appendChild(nomeProduto);
            dadosProduto.appendChild(precoProduto);
            dadosProduto.appendChild(removerProdutoBtn);

            divProdutoCarrinho.appendChild(imagem);
            divProdutoCarrinho.appendChild(dadosProduto);

            selecionandoSectionCarrinho.appendChild(divProdutoCarrinho);
        }
    } else {
        console.log("Carrinho vazio");
    }
}

function removerProduto(index) {
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    calcularTotal()
    mostrarCarrinho();
}

function calcularTotal() {
    let contador = 0;
    for (let i = 0; i < carrinho.length; i++) {
        let precoNumerico = parseFloat(carrinho[i].preco.replace("R$", "").replace(",", "."));
        contador += precoNumerico;
    }
    
    let totalElement = document.querySelector('.total');
    totalElement.innerText = `Total: R$ ${contador.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}




document.addEventListener('DOMContentLoaded', mostrarCarrinho());
document.addEventListener('DOMContentLoaded', calcularTotal());
