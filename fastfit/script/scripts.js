
// Função Top
$(document).ready(function () {
    $("#topBtn").hide()
    window.addEventListener("scroll", function () {
        if ($(window).scrollTop() > 400) {
            $("#topBtn").fadeIn("fast");
        } else {
            $("#topBtn").fadeOut("fast");
        }
    });
})

// função com Javascript e jQuery que insere letrinhas vermelhas sob as caixas desmarcadas:
function letrinhas() {
    $("body").click(function () {
        if ($("#inputNome").is(':invalid')) {
            $("#nameHelp").text("Preencha o campo Nome.");
        } else {
            $("#nameHelp").text("");
        }
        if ($("#inputEmail").is(':invalid')) {
            $("#emailHelp").text("Preencha o campo E-mail corretamente.");
        } else {
            $("#emailHelp").text("");
        }
        if ($("#inputEstado").is(':invalid')) {
            $("#estadoHelp").text("Escolha um Estado.");
        } else {
            $("#estadoHelp").text("");
        }
        if ($("#inputCidade").is(':invalid')) {
            $("#cidadeHelp").text("Digite a sua cidade.");
        } else {
            $("#cidadeHelp").text("");
        }
        if ($("#comoSoube").is(':invalid')) {
            $("#comoSoubeHelp").text("Diga como nos conheceu.");
        } else {
            $("#comoSoubeHelp").text("");
        }
    })
}

// Função Validar (usando Javascript Puro):
function validar() {
    //pegando os valores pelos names (e alguns por id)
    var nome = formulario.nome;
    var nameHelp = document.getElementById("nameHelp");
    var email = formulario.email;
    var emailHelp = document.getElementById("emailHelp");
    var estado = formulario.estado;
    var cidade = formulario.cidade;
    var comoSoube = formulario.comoSoube;
    var emailValido = email.checkValidity();
    letrinhas()

    //verifica se o valor está vazio
    if (nome.value == "") {
        alert("Nome não informado!");
        //deixa o input com focus
        nome.classList.add("avermelhado");
        nome.focus();
        return;
    }
    if (email.value == "") {
        alert("E-mail não informado!");
        //deixa o input com focus
        email.classList.add("avermelhado");
        email.focus();
        return;
    }
    if (!(emailValido)) {
        alert("E-mail inserido incorretamente!");
        //deixa o input com focus
        email.classList.add("avermelhado");
        email.focus();
        return;
    }
    if (estado.value == "") {
        alert("Estado não informado!");
        //deixa o input com focus
        estado.classList.add("avermelhado");
        estado.focus();
        return;
    }
    if (cidade.value == "") {
        alert("Cidade não informada!");
        //deixa o input com focus
        cidade.classList.add("avermelhado");
        cidade.focus();
        return;
    }
    if (comoSoube.value == "") {
        alert("Informe como ficou sabendo de nós!");
        //deixa o input com focus
        comoSoube.classList.add("avermelhado");
        comoSoube.focus();
        return;
    }
    alert("Seus dados foram enviados com sucesso!");
    window.location.reload();
}

//calculadora de IMC feita em Javascript.
document.querySelector("#enviarIMC").addEventListener("click", function () {
    var peso = document.querySelector("#formPeso").value;
    var altura = document.querySelector("#formAltura").value;
    var imc = peso / (altura * altura);
    imc = imc.toFixed(2);
    var parImc = document.createElement("p");
    var divResultado = document.querySelector("#formResultado");
    if ((peso > 500) || (peso <= 0) || (altura <= 0) || (altura > 3)) {
        divResultado.classList.add("alert");
        divResultado.classList.add("alert-danger");
        divResultado.classList.add("text-center");
        parImc.textContent = "Dados Inválidos. Insira a altura em metros (ex: 1.60) e o peso em Kg (ex: 60). Use somente números.";
        divResultado.innerHTML = "";
        divResultado.appendChild(parImc);
        document.getElementById("formPeso").value = "";
        document.getElementById("formAltura").value = "";
    } else if (imc < 18) {
        divResultado.innerHTML = "";
        divResultado.removeAttribute("class");
        divResultado.classList.add("alert");
        divResultado.classList.add("alert-secondary");
        divResultado.classList.add("text-center");
        parImc.textContent = "Seu IMC é de " + imc + ". Você está abaixo do peso.";
        divResultado.appendChild(parImc);
    } else if (imc < 25) {
        divResultado.innerHTML = "";
        divResultado.removeAttribute("class");
        divResultado.classList.add("alert");
        divResultado.classList.add("alert-success");
        divResultado.classList.add("text-center");
        parImc.textContent = "Seu IMC é de " + imc + ". Você está com peso normal.";
        divResultado.appendChild(parImc);
    } else if (imc < 30) {
        divResultado.innerHTML = "";
        divResultado.removeAttribute("class");
        divResultado.classList.add("alert");
        divResultado.classList.add("alert-warning");
        divResultado.classList.add("text-center");
        parImc.textContent = "Seu IMC é de " + imc + ". Você está com sobrepeso.";
        divResultado.appendChild(parImc);
    } else {
        divResultado.innerHTML = "";
        divResultado.removeAttribute("class");
        divResultado.classList.add("alert");
        divResultado.classList.add("alert-warning");
        divResultado.classList.add("text-center");
        parImc.textContent = "Seu IMC é de " + imc + ". Você está obeso.";
        divResultado.appendChild(parImc);
    }
})





