const estudantes = [
    { nome: "Estudante 1", matematica: [80, 70, 75, 95], portugues: [75, 80, 85, 95], pensamentoComputacional: [80, 80, 95, 90] },
    { nome: "Estudante 2", matematica: [10, 20, 25, 35], portugues: [95, 93, 92, 91], pensamentoComputacional: [80, 81, 82, 83] },
    { nome: "Estudante 3", matematica: [84, 85, 86, 87], portugues: [88, 89, 99, 91], pensamentoComputacional: [71, 72, 75, 73] }
];

document.addEventListener("DOMContentLoaded", function () {
    criarLinhasPlanilha(estudantes);
});


function criarLinhasPlanilha(array) {
    let tBodyElement = document.querySelector("tBody");
    for (i = 0; i < array.length; i++) {
        let nomeEstudadante = array[i].nome;
        let notaMatematica1 = array[i].matematica[0];
        let notaMatematica2 = array[i].matematica[1];
        let notaMatematica3 = array[i].matematica[2];
        let notaMatematica4 = array[i].matematica[3];
        let notaPortugues1 = array[i].portugues[0];
        let notaPortugues2 = array[i].portugues[1];
        let notaPortugues3 = array[i].portugues[2];
        let notaPortugues4 = array[i].portugues[3];
        let notapensamentoComputacional1 = array[i].pensamentoComputacional[0];
        let notapensamentoComputacional2 = array[i].pensamentoComputacional[1];
        let notapensamentoComputacional3 = array[i].pensamentoComputacional[2];
        let notapensamentoComputacional4 = array[i].pensamentoComputacional[3];
        let mediaMatematica = (notaMatematica1 + notaMatematica2 + notaMatematica3 + notaMatematica4) / 4;
        let mediaPortugues = (notaPortugues1 + notaPortugues2 + notaPortugues3 + notaPortugues4) / 4;
        let mediaPensComput = (notapensamentoComputacional1 + notapensamentoComputacional2 + notapensamentoComputacional3 + notapensamentoComputacional4) / 4;
        let resultado = "";
        if (mediaMatematica > 70 && mediaPortugues > 70 && mediaPensComput > 70) {
            resultado = "Aprovado";
        } else {
            resultado = "Reprovado";
        }
        let trElement = document.createElement("tr");
        var linhaPlanilha = `

    <td>${nomeEstudadante}</td>
    <td>${notaMatematica1}</td>
    <td>${notaMatematica2}</td>
    <td>${notaMatematica3}</td>
    <td>${notaMatematica4}</td>
    <td>${mediaMatematica}</td>
    <td>${notaPortugues1}</td>
    <td>${notaPortugues2}</td>
    <td>${notaPortugues3}</td>
    <td>${notaPortugues4}</td>
    <td>${mediaPortugues}</td>
    <td>${notapensamentoComputacional1}</td>
    <td>${notapensamentoComputacional2}</td>
    <td>${notapensamentoComputacional3}</td>
    <td>${notapensamentoComputacional4}</td>
    <td>${mediaPensComput}</td>
    <td>${resultado}</td>
`
        trElement.innerHTML = linhaPlanilha;
        tBodyElement.appendChild(trElement);
    }
}

function organizandoCresc(materia) {
    document.querySelector("tbody").innerHTML = "";

    const estudantesOrdenados = estudantes.slice().sort((a, b) => {
        const mediaA = calcularMedia(a[materia]);
        const mediaB = calcularMedia(b[materia]);
        return mediaA - mediaB;
    });


    criarLinhasPlanilha(estudantesOrdenados);
}

function organizandoDecres(materia) {
    document.querySelector("tbody").innerHTML = "";

    const estudantesOrdenados = estudantes.slice().sort((a, b) => {
        const mediaA = calcularMedia(a[materia]);
        const mediaB = calcularMedia(b[materia]);
        return mediaB - mediaA;
    });


    criarLinhasPlanilha(estudantesOrdenados);
}



function calcularMedia(notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
}

function organizandoResultado(status) {
    document.querySelector("tbody").innerHTML = "";
    let arrayResultado = [];

    for (i = 0; i < estudantes.length; i++) {
        let mediaMatematica = (estudantes[i].matematica[0] + estudantes[i].matematica[1] + estudantes[i].matematica[2] + estudantes[i].matematica[3]) / 4;

        let mediaPortugues = (estudantes[i].portugues[0] + estudantes[i].portugues[1] + estudantes[i].portugues[2] + estudantes[i].portugues[3]) / 4;

        let mediaPensComput = (estudantes[i].pensamentoComputacional[0] + estudantes[i].pensamentoComputacional[1] + estudantes[i].pensamentoComputacional[2] + estudantes[i].pensamentoComputacional[3]) / 4;


        if (status == "aprovado") {
            if (mediaMatematica >= 70 && mediaPortugues >= 70 && mediaPensComput >= 70) {
                arrayResultado.push(estudantes[i])
            }
        } else {
            if (mediaMatematica < 70 || mediaPortugues < 70 || mediaPensComput < 70) {
                arrayResultado.push(estudantes[i])
            }

        }

    } criarLinhasPlanilha(arrayResultado);

}

function resetarFiltros() {
    document.querySelector("tbody").innerHTML = "";
    criarLinhasPlanilha(estudantes);

}


