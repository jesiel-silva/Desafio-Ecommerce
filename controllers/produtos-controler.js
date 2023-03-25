import { produtoService } from "../services/produtos-services.js";

/* Cria um novo template */
const criaCard = (nome, imageUrl, price, id, alt) => {
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('card');
    const conteudoCard = 
    `<img src="${imageUrl}" alt="Imagem do produto">
    <div class="edit-del">
      <a href="" class="edit"><i class='bx bx-edit'></i></a>
      <a href="" class="del"><i class='bx bxs-trash'></i></a>
    </div>
    <h1 class="card__nome">${nome}</h1>
    <p class="preco">${price}</p>
    /* <p class="id__produto hide">${id}</p> */
    <a class="ver__produto" href="../produto.html?id=${id}">Ver Produto</a>`
    
    novaDiv.innerHTML = conteudoCard; 
    
    return novaDiv;
}

const todosProdutos = document.querySelector('[data-todos_produtos]');

produtoService.listaCard()
.then(data => {
    data.forEach(elemento => {
        todosProdutos.appendChild(criaCard(elemento.nome, elemento.imageUrl, elemento.price, elemento.section, elemento.id));
    })
})