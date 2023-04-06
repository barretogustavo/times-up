let palavras = [
  "amigo",
  "banana",
  "cachorro",
  "dado",
  "elefante",
  "futebol",
  "guitarra",
  "hipopótamo",
  "igreja",
  "janela",
  "kanguru",
  "lampião",
  "mochila",
  "nariz",
  "ouro",
  "piano",
  "queijo",
  "rato",
  "sapato",
  "tartaruga",
  "uva",
  "vassoura",
  "xadrez",
  "yak",
  "zangão",
  "abóbora",
  "baú",
  "cacto",
  "dente",
  "espada",
  "foca",
  "girafa",
  "harpia",
  "ilha",
  "jacaré",
  "kombi",
  "lagarto",
  "macaco",
  "navio",
  "ovelha",
  "palmeira",
  "queimada",
  "raposa",
  "sapo",
  "tigre",
  "urso",
  "valsa",
  "xícara",
  "yoga",
  "zebra",
  "amarelo",
  "biscoito",
  "caminhão",
  "destino",
  "escova",
  "fósforo",
  "geladeira",
  "hidrante",
  "imposto",
  "jabuti",
  "ketchup",
  "limão",
  "maracujá",
  "navalha",
  "oliveira",
  "pão",
  "queimadura",
  "raquete",
  "sabonete",
  "tábua",
  "urubu",
  "valente",
  "xarope",
  "zangado",
  "amizade",
  "beleza",
  "calor",
  "dor",
  "economia",
  "felicidade",
  "gosto",
  "humor",
  "inverno",
  "jardim",
  "karma",
  "liberdade",
  "música",
  "natureza",
  "ouro",
  "paz",
  "qualidade",
  "risada",
  "saúde",
  "tempo",
  "união",
  "verdade",
  "xenofobia",
  "yoga",
  "zelo",
  "ampliar",
  "balançar",
  "caçar",
  "dançar",
  "embelezar",
  "ferver",
  "gritar",
  "hipnotizar",
  "incendiar",
  "jogar",
  "kafkiano",
  "lamentar",
  "maquiar",
  "namorar",
  "odiar",
  "passear",
  "querer",
  "rir",
  "saltar",
  "torturar",
  "usar",
  "verificar",
  "xeretar",
  "youtuber",
  "zelar",
  "alimentar",
  "brilhar",
  "conversar",
  "dormir",
  "emocionar",
  "fazer",
  "gostar",
];


// variáveis para as duplas e pontos
let dupla1 = [];
let dupla2 = [];
let pontosDupla1 = 0;
let pontosDupla2 = 0;

let inputNomeDupla = document.getElementById("nomeJogador");

inputNomeDupla.placeholder = "Digite o nome da dupla 1";

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
  let tempoRestante = 60;
  let palavra = palavras[Math.floor(Math.random() * palavras.length)];
  document.getElementById("palavraAtual").innerHTML = palavra;

  let countdown = setInterval(() => {
    tempoRestante--;
    document.getElementById("tempoRestante").innerHTML = tempoRestante;
    if (tempoRestante === 0) {
      alert("Tempo esgotado, vez da próxima dupla!")
      clearInterval(countdown);
      trocarVez();
    }
  }, 1000);
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
  let vezDupla1 = document.getElementById("dupla1vez");
  let vezDupla2 = document.getElementById("dupla2vez");
  vezDupla1.checked = !vezDupla1.checked;
  vezDupla2.checked = !vezDupla2.checked;
  selecionarPalavra();
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
  } else {
    alert("Adicione todos os jogadores antes de iniciar o jogo!");
  }
}
