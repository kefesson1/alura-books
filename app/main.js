let livros = []
const endpointdaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()


async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointdaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivros(livrosComDesconto)
}


