const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const fields = document.querySelectorAll("[required]");


console.log(fields)
document.querySelector('form').addEventListener("submit", bobao => {
    console.log("Enviar o formulario")

    bobao.preventDefault()
})

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
})

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
})
