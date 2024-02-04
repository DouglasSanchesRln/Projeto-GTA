const botao = document.querySelector(".btn-plataforma");
const elementoplataformas = document.querySelector(".btn-plataformas .plataformas");

botao.addEventListener("click", () => {
elementoplataformas.classList.add("ativo");
if(botaoEstaAberto) {
    elementoplataformas.classList.remove("ativo")
}else{
    elementoplataformas.classList.add("ativo");
}
});