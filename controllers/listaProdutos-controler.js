import { produtoService } from "../services/produtos-services.js";

/* Cria um novo template */
const criaCard = (nome, imageUrl, price, section, id) => {

  const novaDiv = document.createElement('div');

  novaDiv.classList.add('card');

  const conteudoCard =
    `<img src="${imageUrl}" alt="Imagem do produto">
    <div class="edit-del">
      <a href="../telas/editar-produto.html?id=${id}" class="edit">Edite</a>
      <a href="" class="del">Delete</a>
    </div>
    <h1 class="card__nome">${nome}</h1>
    <p class="preco">${price}</p>
    <a class="ver__produto" href="">Ver Produto</a>`

  novaDiv.innerHTML = conteudoCard;
  novaDiv.dataset.id = id;

  return novaDiv;
}

const todosProdutos = document.querySelector('[data-todos_produtos]');


todosProdutos.addEventListener('click', (evento) => {

  let botaoDeletar = evento.target.className === 'del';

  if (botaoDeletar) {
    const linhaProduto = evento.target.closest('[data-id]');
    let id = linhaProduto.dataset.id
    produtoService.removeProduto(id)
      .then(() => {
        linhaProduto.remove();
      })
  }

})

produtoService.listaCard()
  .then(data => {
    data.forEach(elemento => {
      todosProdutos.appendChild(criaCard(elemento.nome, elemento.imageUrl,
        elemento.price, elemento.section, elemento.id));
    })
  })