const btn = document.querySelectorAll('.btn')
btn.forEach(botoes=>botoes.addEventListener('click', () =>{ filtrarLivros(botoes.value)}))
const btnLivrosDisponiveis = document.getElementById('btnLivrosDisponiveis')


function filtrarLivros (categoria){
  let livrosFiltrados = categoria == 'disponivel' ? filtroDisponivel() : filtroCategoria(categoria)
  exibirLivros(livrosFiltrados)
  if (categoria == 'disponivel'){
    const valorTotal = calculoValorTotal(livrosFiltrados)
    console.log(valorTotal)
    exibirValorTotal(valorTotal)
  }
}

function filtroCategoria(categoria) {
  return livros.filter(livro => livro.categoria == `${categoria}`)
}

function filtroDisponivel() {
  return livros.filter(livro => livro.quantidade > 0)

}

function exibirValorTotal(valorTotal){
  elementoValorTotal.innerHTML = `<div class="livros__disponiveis">
  <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
</div>`
}







