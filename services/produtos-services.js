/* Conexão com o servidor */
const listaCard = () => {
  return fetch(`https://my-json-server.typicode.com/jesiel-silva/backJson-server/pruduto`)
  /* return fetch(`http://localhost:3000/pruduto`) */
    .then(resposta => {
      return resposta.json();
    })
}

/* Adiciona produto */
const adicionaProduto = (nome, imageUrl, price, section, id) => {
  return fetch(`https://my-json-server.typicode.com/jesiel-silva/backJson-server/pruduto`, {
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
  return fetch(`https://my-json-server.typicode.com/jesiel-silva/backJson-server/pruduto/${id}`, {
    method: 'DELETE'
  })
}

/* mostra produto */
const mostraProduto = (id) => {
  return fetch(`https://my-json-server.typicode.com/jesiel-silva/backJson-server/pruduto/${id}`)
    .then(resposta => {
      return resposta.json();
    })
}

/* Atualiza produto */
const atualizaProduto = (id, nome, imageUrl, price, section) => {
  return fetch(`https://my-json-server.typicode.com/jesiel-silva/backJson-server/pruduto/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        imageUrl: imageUrl,
        price: price,
        section: section

      })
    })
    .then(resposta => {
      return resposta.json();
    })
}

/* exportando os serviços */
export const produtoService = {
  listaCard,
  adicionaProduto,
  removeProduto,
  mostraProduto,
  atualizaProduto
}