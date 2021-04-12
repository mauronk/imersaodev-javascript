var paulo ={
  nome:"Paulo",
  vitorias:2,
  empates:5,
  derrotas:1,
  pontos:0
}

var rafa ={
  nome:"Rafa",
  vitorias:3,
  empates:5,
  derrotas:2,
  pontos:0
}

function calculaPontos(jogador){
  var pontos = (jogador.vitorias*3)+jogador.empates-jogador.derrotas
  return pontos
}
rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)

var gamers = [rafa,paulo]
completaTabelaHtml(gamers)
function completaTabelaHtml(gamers){
  var html = ""
  for (var i=0;i<gamers.length;i++){
    html = html + "<tr><td>"+gamers[i].nome+"</td>"
    html = html + "<td>"+gamers[i].vitorias+"</td>"
    html = html + "<td>"+gamers[i].empates+"</td>"
    html = html + "<td>"+gamers[i].derrotas+"</td>"
    html = html + "<td>"+gamers[i].pontos+"</td>"
    html+="<td><button onClick='adicionarVitoria("+i+")'>Vitória</button></td>"
    html+="<td><button onClick='adicionarEmpate("+i+")'>Empate</button></td>"
    html+="<td><button onClick='adicionarDerrota("+i+")'>Derrota</button></td></tr>"
    
  }
  var tabelaHtml = document.getElementById("tabelaJogadores")
  tabelaHtml.innerHTML = html
}

function adicionarVitoria(i){
  var pessoa = gamers[i]
  pessoa.vitorias++
  pessoa.pontos=calculaPontos(pessoa)
  completaTabelaHtml(gamers)
}
function adicionarEmpate(i){
  var pessoa = gamers[i]
  pessoa.empates++
  pessoa.pontos=calculaPontos(pessoa)
  completaTabelaHtml(gamers)
}
function adicionarDerrota(i){
  var pessoa = gamers[i]
  pessoa.derrotas++
  pessoa.pontos=calculaPontos(pessoa)
  completaTabelaHtml(gamers)
}