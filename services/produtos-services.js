const listaCard = () => {
    return fetch(`http://localhost:3000/pruduto`)
        .then(resposta => {
            return resposta.json();
        })
}

const adicionaProduto = (nome, imageUrl, price, id, section) => {
    return fetch(`http://localhost:3000/pruduto`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            imageUrl: imageUrl,
            price: price,
            id: id,
            section: section
        })
    })

    .then(resposta => {
        return resposta.body
    })
}

export const produtoService = {
    listaCard,
    adicionaProduto
}