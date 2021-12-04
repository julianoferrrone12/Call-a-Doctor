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

function customValidation(event) {
    const field = event.target
    
    function verifyErrors() {
        let foundError = false;
    
        for(let error in field.validity) {
            // se não for customError
            // então verifica se tem erro
            if (field.validity[error] && !field.validity.valid ) {
                foundError = error
            }
        }
        return foundError;
    }
    const error = verifyErrors() 

    if (error) {
        field.setCustomValidity("Esse campo é obrigatoiro")
    }else {
        field.setCustomValidity("")
    }
    
}

for(field of fields) {
    field.addEventListener("invalid", customValidation)
}