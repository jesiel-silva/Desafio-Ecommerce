const listaCard = () => {
    return fetch(`http://localhost:3000/pruduto`)
        .then(resposta => {
            return resposta.json();
        })
}

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

const removeProduto = (id) => {
    return fetch(`http://localhost:3000/pruduto/${id}`, {
        method: 'DELETE'
    })
}

export const produtoService = {
    listaCard,
    adicionaProduto,
    removeProduto
}