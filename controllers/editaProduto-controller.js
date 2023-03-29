import { produtoService } from "../services/produtos-services.js";

const pegaUrl = new URL(window.location);

const id = pegaUrl.searchParams.get('id');

const inputNome = document.querySelector('[data-editar-Nome]');
const inputImageURL = document.querySelector('[data-eidtar-ImagemURL]');
const inputPreco = document.querySelector('[data-editar-Preco]');
const selectSesao = document.querySelector('[data-editar-Section]');
const btnVoltar = document.querySelector('[data-btnVoltar]');

produtoService.mostraProduto(id)
  .then(dados => {
    inputNome.value = dados.nome;
    inputImageURL.value = dados.imageUrl;
    inputPreco.value = dados.price;
    selectSesao.value = dados.section;
  })

const form_addProduto = document.querySelector('[data-form_addProduto]');

form_addProduto.addEventListener('submit', (evento) => {

  evento.preventDefault();

  produtoService.atualizaProduto(id, inputNome.value, inputImageURL.value, inputPreco.value, selectSesao.value)
    .then(() => {
      window.location.href = '../telas/todos-produtos.html'
      alert('Produto editado com sucesso.');
    })
})