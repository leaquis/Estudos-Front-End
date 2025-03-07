const botaoVerificar = document.querySelector("#botao-verificar");
const palavraInput = document.querySelector("#palavra");
const resultado = document.querySelector("#resultado");

function InversorDePalavras() {
    const palavra = palavraInput.value;
    const palavraInvertida = palavra.split("").reverse().join("");

    resultado.textContent = `A palavra "${palavra}" ao inverso fica "${palavraInvertida}".`;
}

botaoVerificar.addEventListener("click", InversorDePalavras);

palavraInput.addEventListener("keyup", (e) => {
    
    if (e.key === "Enter") {
        e.preventDefault();
        InversorDePalavras();
    }
})
