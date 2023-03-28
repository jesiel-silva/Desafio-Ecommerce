import { produtoService } from "../services/produtos-services.js";

(() => {
    const criaTemplatIndex = (nome, imageUrl, price, section) => {
        const creatDiv = document.createElement('div')
        creatDiv.classList.add('card');

        const conteudoCard = `
        <img src="${imageUrl}" alt="Imagem do produto">        
        <h1 class="card__nome">${nome}</h1>
        <p class="preco">${price}</p>
        <a class="ver__produto" href="">Ver Produto</a>`
        
        creatDiv.innerHTML = conteudoCard;

        return creatDiv;
    }

    const dataStarWars = document.querySelector('[data-starWars]');



    produtoService.listaCard()
        .then(data => {
            
                data.forEach(elemento => {
                    dataStarWars.appendChild(criaTemplatIndex(elemento.nome, elemento.imageUrl,
                        elemento.price))
                });
            
        })


})()