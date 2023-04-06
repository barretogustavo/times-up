const palavras = [
  "Neymar",
  "Anitta",
  "Whindersson Nunes",
  "Gisele Bündchen",
  "Fernanda Montenegro",
  "Will Smith",
  "Angelina Jolie",
  "Brad Pitt",
  "Leonardo DiCaprio",
  "Jennifer Lawrence",
  "Banana",
  "Abacaxi",
  "Mesa",
  "Cadeira",
  "Computador",
  "Telefone",
  "Carro",
  "Avião",
  "Bicicleta",
  "Skate",
  "Pizza",
  "Hamburguer",
  "Arroz",
  "Feijão",
  "Pão",
  "Queijo",
  "Chocolate",
  "Refrigerante",
  "Cerveja",
  "Vinho",
  "Água",
  "Cachorro",
  "Gato",
  "Passarinho",
  "Leão",
  "Tigre",
  "Girafa",
  "Zebra",
  "Elefante",
  "Galinha",
  "Vaca",
  "Cavalo",
  "Porco",
  "Pato",
  "Árvore",
  "Flor",
  "Grama",
  "Sol",
  "Lua",
  "Estrela",
  "Mar",
  "Rio",
  "Montanha",
  "Deserto",
  "Neve",
  "Chuva",
  "Vento",
  "Trovão",
  "Bebida",
  "Comida",
  "Cinema",
  "Música",
  "Esporte",
  "Livro",
  "Televisão",
  "Internet",
  "Jogo",
  "Trabalho",
  "Estudo",
  "Dinheiro",
  "Família",
  "Amigos",
  "Amor",
  "Viagem",
  "Férias",
  "Praia",
  "Campo",
  "Cidade",
  "Mundo",
  "Universo",
  "Coração",
  "Sonho",
  "Realidade",
  "Fantasia",
  "Imaginação",
  "Memória",
  "Pensamento",
  "Emoção",
  "Sentimento",
  "Alegria",
  "Tristeza",
  "Raiva",
  "Medo",
  "Surpresa",
  "Esperança",
  "Felicidade",
  "Amizade",
  "Amor",
  "Carinho",
  "Respeito",
  "Gratidão",
  "Perdão",
  "Paz",
  "Harmonia",
  "Equilíbrio",
  "Beleza",
  "Verdade",
  "Justiça",
  "Libertação",
  "Transformação",
  "Renovação",
  "Crescimento",
  "Desenvolvimento",
  "Progresso",
  "Sucesso",
  "Realização",
  "Conquista",
  "Vitória",
  "Fracasso",
  "Derrota",
  "Desafio",
  "Oportunidade",
  "Sorte",
  "Destino",
  "Acaso",
  "Espera",
  "Surpresa",
  "Imprevisto",
  "gostar",
];


// variáveis para as duplas e pontos
let dupla1 = [];
let dupla2 = [];
let pontosDupla1 = 0;
let pontosDupla2 = 0;

let inputNomeDupla = document.getElementById("nomeJogador");
let tempoRestante = 60;
let countdown;

inputNomeDupla.placeholder = "Digite o nome da dupla 1";

console.log(countdown)

function iniciarContagem() {
  clearInterval(countdown); // limpa o intervalo anterior, se houver
  tempoRestante = 60; // reinicia o tempo
  countdown = 0;
  document.getElementById("tempoRestante").innerHTML = tempoRestante;
  countdown = setInterval(() => {
    tempoRestante--;
    document.getElementById("tempoRestante").innerHTML = tempoRestante;
    if (tempoRestante === 0) {
      alert("Tempo esgotado, vez da próxima dupla!")
      clearInterval(countdown);
      trocarVez();
    }
  }, 1000);
}

// função para adicionar jogadores às duplas
function adicionarJogador() {
  let nome = document.getElementById("nomeJogador").value;
  let dupla1Label = document.getElementById("dupla1");
  let dupla2Label = document.getElementById("dupla2");
 
  if (nome != "") {
    if (dupla1.length < 1) {
      dupla1.push(nome);
      dupla1Label.innerText = `${nome}`;
      inputNomeDupla.placeholder = "Digite o nome da dupla 2";
    } else if (dupla2.length < 1) {
      dupla2.push(nome);
      dupla2Label.innerText = `${nome}`;
    } else {
      alert("Todas as duplas estão completas!");
    }
  } else {
    alert("Por favor, digite um nome válido!");
  }
  document.getElementById("nomeJogador").value = "";
}

// função para selecionar uma palavra aleatória
function selecionarPalavra() {
  let palavra = palavras[Math.floor(Math.random() * palavras.length)];
  document.getElementById("palavraAtual").innerHTML = palavra;
}


// função para atualizar os pontos e passar para a próxima palavra
function acertou(event) {
  event.preventDefault();
  if (document.getElementById("dupla1vez").checked) {
    pontosDupla1 += 10;
    document.getElementById("pontosDupla1").innerHTML = pontosDupla1;
  } else {
    pontosDupla2 += 10;
    document.getElementById("pontosDupla2").innerHTML = pontosDupla2;
  }
  selecionarPalavra();
}

document.getElementById("correct-button").addEventListener("click", acertou);


// função para trocar a vez das duplas
function trocarVez() {
  iniciarContagem();
  if (dupla1.length === 2) {
    alert(`Vez da dupla ${dupla2[0]} e ${dupla2[1]}`);
    document.getElementById("inputPalavra").disabled = false;
    document.getElementById("botaoEnviar").disabled = false;
  } else {
    alert(`Vez da dupla ${dupla1[0]} e ${dupla1[1]}`);
    document.getElementById("inputPalavra").disabled = false;
    document.getElementById("botaoEnviar").disabled = false;
  }
}


// Mostrar dupla atual
function mostrarDuplaAtual() {
  if (document.getElementById("dupla1vez").checked) {
    document.getElementById("duplaAtual").textContent = dupla1.join(" e ");
  } else {
    document.getElementById("duplaAtual").textContent = dupla2.join(" e ");
  }
}

// função para iniciar o jogo
function iniciarJogo() {
  if (dupla1.length == 1 && dupla2.length == 1) {
    document.getElementById("adicionarJogador").style.display = "none";
    document.getElementById("jogo").style.display = "block";
    mostrarDuplaAtual();
    selecionarPalavra();
    iniciarContagem()
  } else {
    alert("Adicione todos os jogadores antes de iniciar o jogo!");
  }
}
