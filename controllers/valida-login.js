const inputEmail = document.querySelector('[data-email]');
const inputSenha = document.querySelector('[data-senha]');
const btnEntrar = document.querySelector('[data-btnEntrar]');
const spanErroEmail = document.querySelector('[data-spanErroEmail]')
const spanErroSenha = document.querySelector('[data-spanErroSenha]')

btnEntrar.addEventListener('click', (evento) => {

    evento.preventDefault()

    const usuario = 'admin@email.com';
    const senha = '1234';

    let msg = 'Campo não pode ser vazio';

    if (inputEmail.value === '') {
        spanErroEmail.textContent = msg;
        spanErroSenha.textContent = msg;
    } 
    
    if (inputSenha.value === '') {
        spanErroSenha.textContent = msg;
    }

    if (inputEmail.value === usuario && inputSenha.value === senha) {
        window.location.href = '../telas/todos-produtos.html';        
    }

})