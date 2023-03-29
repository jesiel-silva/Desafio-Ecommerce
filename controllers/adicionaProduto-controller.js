import { produtoService } from "../services/produtos-services.js";

const form_addProduto = document.querySelector('[data-form_addProduto]');
const btnVoltar = document.querySelector('[data-btnVoltar]');

form_addProduto.addEventListener('submit', (evento) => {
    
    evento.preventDefault();

    const nome = evento.target.querySelector('[data-nome]').value;
    const imageUrl = evento.target.querySelector('[data-imagemURL]').value;
    const price = evento.target.querySelector('[data-preco]').value;
    const section = evento.target.querySelector('[data-section]').value;

    produtoService.adicionaProduto(nome, imageUrl, price, section);    
})