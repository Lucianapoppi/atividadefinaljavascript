function adicionarTarefa() {
  const inputTarefa = document.querySelector("#inputTarefa").value.trim();
  console.log(inputTarefa);
  const listaTarefas = document.querySelector("#listaTarefas");

  if (inputTarefa !== "") {

    const novoElementoLi = document.createElement("li");
    novoElementoLi.classList.add("elementoLi");

    novoElementoLi.innerHTML = `
      <p>${inputTarefa}</p>
      <button onclick="editarTarefa(this)">Editar</button>
      <button onclick="deletarTarefa(this)"><img src="./image/delete.svg"></button>
      <div>
        <input type="checkbox" class="checkbox">
        <label for="checkbox">Concluído</label>
      </div>
    `;

    listaTarefas.appendChild(novoElementoLi);

    document.querySelector("#inputTarefa").value = "";
  }
}

function editarTarefa(botaoEditar) {
  const paragrafoTarefa = botaoEditar.parentNode.querySelector("p");
  const textoAntigo = paragrafoTarefa.textContent;

  
  const inputEdicao = document.createElement("input");
  inputEdicao.type = "text";
  inputEdicao.value = textoAntigo;

  
  paragrafoTarefa.replaceWith(inputEdicao);

  
  inputEdicao.addEventListener("blur", function () {
    const novoTexto = inputEdicao.value.trim();
    
    if (novoTexto !== "") {
      const novoParagrafo = document.createElement("p");
      novoParagrafo.textContent = novoTexto;
      inputEdicao.replaceWith(novoParagrafo);
    } else {
      
      const antigoParagrafo = document.createElement("p");
      antigoParagrafo.textContent = textoAntigo;
      inputEdicao.replaceWith(antigoParagrafo);
    }
  });

  
  inputEdicao.focus();
}

function deletarTarefa(botaoDeletar) {
  const tarefa = botaoDeletar.parentNode;
  tarefa.remove();
}


const checkboxes = document.querySelectorAll('.checkbox');


document.addEventListener('change', function(event) {
  if (event.target.classList.contains('checkbox')) {
    const listItem = event.target.closest('.elementoLi');
    if (event.target.checked) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  }
});



