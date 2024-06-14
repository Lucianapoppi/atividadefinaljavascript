function adicionarCampo() {
    const inputValue = document.querySelector('.input').value;
    const form = document.querySelector('.atividades');
    const textInput = document.querySelector('#textInput').value;

    const novaDiv = document.createElement("div");
    novaDiv.classList.add("div");

    const novoLabel = document.createElement("label");
    novoLabel.classList.add("label");
    novoLabel.textContent = textInput;

    const novoElemento = inputValue == 1 ? document.createElement("input") : document.createElement("input");
    novoElemento.classList.add(inputValue == 1 ? "input" : "checkbox");
    if (inputValue == 2) {
        novoElemento.type = "checkbox";
    }

    const editar = document.createElement("button");
    editar.classList.add("botaoEditar");
    editar.onclick = function () {
        editarLabel(this);
    };
    const imagemEditar = document.createElement("img");
    imagemEditar.classList.add("imagemEditar");
    imagemEditar.src = "./image/editar.svg";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("botaoDelete");
    deleteButton.onclick = function () {
        deletarTarefa(this);
    };
    const imagemDelete = document.createElement("img");
    imagemDelete.classList.add("imagemDeletar");
    imagemDelete.src = "./image/delete.svg";

    novaDiv.appendChild(novoLabel);
    novaDiv.appendChild(novoElemento);
    novaDiv.appendChild(editar);
    novaDiv.appendChild(deleteButton);
    editar.appendChild(imagemEditar);
    deleteButton.appendChild(imagemDelete);
    form.appendChild(novaDiv);

    document.querySelector('#textInput').value = "";

}

function editarLabel(botaoEditar) {
    const label = botaoEditar.parentNode.querySelector("label");
    const textoAntigo = label.textContent;


    const inputEdicao = document.createElement("input");
    inputEdicao.type = "text";
    inputEdicao.value = textoAntigo;


    label.replaceWith(inputEdicao);


    inputEdicao.addEventListener("blur", function () {
        const novoTexto = inputEdicao.value.trim();

        if (novoTexto !== "") {
            const novoLabel = document.createElement("label");
            novoLabel.classList.add("label");
            novoLabel.textContent = novoTexto;
            inputEdicao.replaceWith(novoLabel);
        } else {

            const antigoLabel = document.createElement("label");
            antigoLabel.classList.add("label");
            antigoLabel.textContent = textoAntigo;
            inputEdicao.replaceWith(antigoLabel);
        }
    });


    inputEdicao.focus();
}


function deletarTarefa(botaoDeletar) {
    const tarefa = botaoDeletar.parentNode;
    tarefa.remove();
}

function finalizarFormulario() {
    const buttonFinalizar = document.querySelector(".buttonFinalizar");
    const buttonEditar = document.querySelectorAll(".botaoEditar");
    const buttonDelete = document.querySelectorAll(".botaoDelete");
    const all = document.querySelector(".all")
   
    buttonFinalizar.remove();

    
    buttonEditar.forEach(function(botao) {
        botao.remove();
    });

    
    buttonDelete.forEach(function(botao) {
        botao.remove();
    });


    all.remove();
}