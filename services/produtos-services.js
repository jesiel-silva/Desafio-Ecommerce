/* Conexão com o servidor */
const listaCard = () => {
    return fetch(`http://localhost:3000/pruduto`)
        .then(resposta => {
            return resposta.json();
        })
}

/* Adiciona produto */
const adicionaProduto = (nome, imageUrl, price, section, id) => {
    return fetch(`http://localhost:3000/pruduto`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                imageUrl: imageUrl,
                price: price,
                section: section,
                id: id
            })
        })

        .then(resposta => {
            return resposta.body
        })
}

/* Remove produto */
const removeProduto = (id) => {
    return fetch(`http://localhost:3000/pruduto/${id}`, {
        method: 'DELETE'
    })
}

/* mostra produto */
const mostraProduto = (id) => {
    return fetch(`http://localhost:3000/pruduto/${id}`)
    .then(resposta => {
        return resposta.json();
    })
}

const atualizaProduto = (id, nome, imageUrl, price, section) => {
    return fetch(`http://localhost:3000/pruduto/${id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            imageUrl: imageUrl,
            price: price,
            section: section

        })
    })
    .then( resposta => {
        return resposta.json();
    })
}


export const produtoService = {
    listaCard,
    adicionaProduto,
    removeProduto,
    mostraProduto,
    atualizaProduto
}